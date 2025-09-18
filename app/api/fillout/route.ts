/* eslint-disable import/no-unused-modules */
import { NextResponse } from "next/server";

type FilloutAnswer = {
  question?: string;
  label?: string;
  key?: string;
  value?: string;
  text?: string;
  answer?: string;
};

type FilloutWebhookBody = {
  answers?: FilloutAnswer[];
  formResponse?: { answers?: FilloutAnswer[] };
  formId?: unknown;
  form_id?: unknown;
  form?: { id?: unknown };
  responseId?: unknown;
  submissionId?: unknown;
  [key: string]: unknown;
};

const mp = async (payload: unknown) => {
  const endpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA4_MEASUREMENT_ID}&api_secret=${process.env.GA4_API_SECRET}`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text();
    console.error("GA4 MP error", res.status, text);
  }
};

export async function POST(req: Request) {
  const url = new URL(req.url);
  if (
    process.env.FILLOUT_WEBHOOK_SECRET &&
    url.searchParams.get("secret") !== process.env.FILLOUT_WEBHOOK_SECRET
  ) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const rawBody: unknown = await req.json().catch(() => ({}));
  const body: FilloutWebhookBody =
    typeof rawBody === "object" && rawBody !== null
      ? (rawBody as FilloutWebhookBody)
      : {};

  const asNonEmptyString = (value: unknown) =>
    typeof value === "string" && value.trim().length > 0 ? value : undefined;

  let answers: FilloutAnswer[] = [];
  if (Array.isArray(body.answers)) {
    answers = body.answers;
  } else if (Array.isArray(body.formResponse?.answers)) {
    answers = body.formResponse?.answers ?? [];
  }
  const get = (labelRegex: RegExp | string) => {
    const re =
      typeof labelRegex === "string" ? new RegExp(`^${labelRegex}$`, "i") : labelRegex;
    const match = answers.find((answer) => {
      const question = answer.question ?? answer.label ?? "";
      if (typeof question === "string" && re.test(question)) {
        return true;
      }
      return typeof answer.key === "string" && re.test(answer.key);
    });

    if (!match) {
      return null;
    }

    return match.value ?? match.text ?? match.answer ?? null;
  };

  const formId =
    asNonEmptyString(body.formId) ??
    asNonEmptyString(body.form_id) ??
    asNonEmptyString(body.form?.id) ??
    "unknown_form";
  const icp =
    asNonEmptyString(get(/which describes you best/i)) ??
    asNonEmptyString(get(/^icp$/i)) ??
    "unknown";
  const cidValue = get(/^cid$/i);
  const cid = asNonEmptyString(cidValue) ?? null;

  const client_id = cid ?? crypto.randomUUID();
  const gaPayload = {
    client_id,
    non_personalized_ads: true,
    events: [
      {
        name: "generate_lead",
        params: {
          form_id: String(formId),
          icp,
          engagement_time_msec: 1,
        },
      },
    ],
  };
  await mp(gaPayload);

  const posthogHost =
    asNonEmptyString(process.env.POSTHOG_INGESTION_HOST) ?? "https://us.i.posthog.com";

  await fetch(`${posthogHost}/i/v0/e/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.POSTHOG_PROJECT_API_KEY,
      event: "lead_submitted",
      distinct_id:
        asNonEmptyString(body.responseId) ??
        asNonEmptyString(body.submissionId) ??
        client_id,
      properties: { source: "fillout", form_id: formId, icp },
    }),
  });

  return NextResponse.json({ ok: true });
}
