const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;
const HTML_TAG = /<[^>]*>/g;

export function sanitizeInput(value: string, { allowNewlines = false } = {}): string {
  const normalised = value.replace(CONTROL_CHARS, "");
  const withoutTags = normalised.replace(HTML_TAG, "");
  const collapsed = allowNewlines
    ? withoutTags.replace(/[\r\t]/g, "").replace(/\n{3,}/g, "\n\n")
    : withoutTags.replace(/\s+/g, " ");
  return collapsed.trim();
}
