// components/phone-mock.tsx
import Image from "next/image";

type Props = { src?: string; alt?: string };

export default function PhoneMock({ src, alt = "App preview" }: Props) {
  return (
    <div className="relative mx-auto aspect-[9/19] w-[320px] sm:w-[360px] lg:w-[380px] rounded-[44px] border-[6px] border-white shadow-xl ring-1 ring-slate-200 bg-white">
      <div className="absolute inset-[10px] rounded-[32px] ring-1 ring-slate-200 overflow-hidden">
        {src ? (
          <Image src={src} alt={alt} fill priority className="object-cover" />
        ) : (
          <div
            aria-hidden
            className="h-full w-full bg-gradient-to-b from-cyan-50 via-white to-emerald-50"
          />
        )}
      </div>
    </div>
  );
}