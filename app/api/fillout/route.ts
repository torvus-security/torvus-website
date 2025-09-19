/* eslint-disable import/no-unused-modules */
import { NextResponse } from "next/server";

const webhookSecret = process.env.FILLOUT_WEBHOOK_SECRET?.trim();
const GA4_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID?.trim();
const GA4_API_SECRET = process.env.GA4_API_SECRET?.trim();
const POSTHOG_PROJECT_API_KEY = process.env.POSTHOG_PROJECT_API_KEY?.trim();
const POSTHOG_HOST =
  process.env.POSTHOG_INGESTION_HOST?.trim() ?? "https://us.i.posthog.com";
const POSTHOG_ENDPOINT = (() => {
  try {
    return new URL("/i/v0/e/", POSTHOG_HOST).toString();
  } catch {
    return null;
  }
})();

if (!webhookSecret && process.env.NODE_ENV === "production") {
  console.error("[fillout] FILLOUT_WEBHOOK_SECRET must be configured");
}

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

export async function POST(req: Request) {
  if (!webhookSecret) {
    return NextResponse.json(
      { ok: false, error: "fillout_secret_missing" },
      { status: 500 },
    );
  }

  const url = new URL(req.url);
  if (url.searchParams.get("secret") !== webhookSecret) {
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

  const clientId = cid ?? crypto.randomUUID();

  const errors: string[] = [];

  if (GA4_MEASUREMENT_ID && GA4_API_SECRET) {
    const endpoint = `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;
    const gaPayload = {
      client_id: clientId,
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

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gaPayload),
        cache: "no-store",
      });
      if (!res.ok) {
        const text = await res.text();
        errors.push(`ga4:${res.status}:${text.slice(0, 120)}`);
      }
    } catch (error) {
      errors.push(`ga4:${(error as Error).message}`);
    }
  }

  if (POSTHOG_PROJECT_API_KEY) {
    if (!POSTHOG_ENDPOINT) {
      errors.push("posthog:invalid_host");
    } else {
      try {
        const res = await fetch(POSTHOG_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: POSTHOG_PROJECT_API_KEY,
            event: "lead_submitted",
            distinct_id:
              asNonEmptyString(body.responseId) ??
              asNonEmptyString(body.submissionId) ??
              clientId,
            properties: { source: "fillout", form_id: formId, icp },
          }),
        });
        if (!res.ok) {
          const text = await res.text();
          errors.push(`posthog:${res.status}:${text.slice(0, 120)}`);
        }
      } catch (error) {
        errors.push(`posthog:${(error as Error).message}`);
      }
    }
  }

  if (errors.length > 0) {
    console.warn("[fillout] instrumentation errors", errors.join(", "));
    return NextResponse.json({ ok: false, errors }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
