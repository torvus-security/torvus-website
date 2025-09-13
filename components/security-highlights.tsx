// components/security-highlights.tsx
import { Shield, Fingerprint, FileSearch } from "lucide-react";
import FramedPanel from "./framed-panel";

export default function SecurityHighlights() {
  return (
    <section aria-labelledby="security-heading" className="mt-10 md:mt-12 lg:mt-14">
      <h2
        id="security-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        Built for security from day one
      </h2>

      <FramedPanel>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Item
            icon={<Shield className="h-5 w-5 text-rose-600" />}
            title="Defense-in-depth"
            body="Isolation by design, scoped secrets, signed releases, and default-deny access."
          />
          <Item
            icon={<Fingerprint className="h-5 w-5 text-rose-600" />}
            title="Modern auth"
            body="Passkeys (WebAuthn) and TOTP options for strong, phishing-resistant user login."
          />
          <Item
            icon={<FileSearch className="h-5 w-5 text-rose-600" />}
            title="Provenance & audit"
            body="Cryptographic logs so you can demonstrate integrity and verify timelines."
          />
        </div>
      </FramedPanel>
    </section>
  );
}

function Item({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 ring-1 ring-rose-500/30">
        {icon}
      </span>
      <div>
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {body}
        </p>
      </div>
    </div>
  );
}
