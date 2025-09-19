import { PhoneMock } from "@/components/phone-mock";

export function DeviceMock() {
  return (
    <div className="relative flex justify-center">
      <div
        className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-pastel-cranberry/40 via-white/60 to-pastel-lapis/40 blur-[100px]"
        aria-hidden="true"
      />
      <PhoneMock
        scheme="light"
        accent="lapis"
        narrow={false}
        ariaLabel="Torvus Digital Legacy mobile preview"
      />
    </div>
  );
}
