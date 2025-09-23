const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
const CONTACT_ALERT_WEBHOOK_URL = process.env.CONTACT_ALERT_WEBHOOK_URL?.trim();

function assertEnvConfigured() {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase environment variables are required in production");
  }
}

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
  userAgent?: string | null;
  referer?: string | null;
};

export async function persistContactSubmission(
  submission: ContactSubmission,
): Promise<void> {
  assertEnvConfigured();

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn(
      "Skipping contact persistence because Supabase credentials are not configured.",
    );
    return;
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify([
      {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        message: submission.message,
        metadata: {
          submittedAt: submission.submittedAt,
          userAgent: submission.userAgent ?? null,
          referer: submission.referer ?? null,
        },
      },
    ]),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to persist contact submission: ${response.status} ${errorText}`,
    );
  }
}

export async function notifyContactSubmission(
  submission: ContactSubmission,
): Promise<void> {
  if (!CONTACT_ALERT_WEBHOOK_URL) {
    return;
  }

  const previewMessage =
    submission.message.length > 500
      ? `${submission.message.slice(0, 497)}...`
      : submission.message;

  const payload = {
    text: `New contact request from ${submission.name} <${submission.email}>`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*New contact request received*
• *Name:* ${submission.name}
• *Email:* ${submission.email}
• *Submitted at:* ${submission.submittedAt}
• *Referer:* ${submission.referer ?? "N/A"}
• *User-Agent:* ${submission.userAgent ?? "N/A"}

${previewMessage}`,
        },
      },
    ],
  } satisfies Record<string, unknown>;

  const response = await fetch(CONTACT_ALERT_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to notify contact submission: ${response.status}`);
  }
}
