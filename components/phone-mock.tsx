// components/phone-mock.tsx
import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
};

/**
 * A slimmer phone frame (≈ 9:19.5 ratio) so it reads like a real device.
 * Drop-in replacement; props are optional.
 */
export default function PhoneMock({ src, alt = "App preview" }: Props) {
  return (
    <div
      className="relative mx-auto w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] rounded-[2rem] border border-zinc-200/70 bg-zinc-900 shadow-2xl dark:border-white/10"
      style={{ aspectRatio: "9 / 19.5" }}
      aria-label="Mobile phone mockup"
    >
      {/* Outer highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-black/5 dark:ring-white/5" />

      {/* Notch */}
      <div className="absolute inset-x-1/2 top-2 h-4 w-28 -translate-x-1/2 rounded-full bg-black/70" />

      {/* Screen */}
      <div className="absolute inset-[10px] overflow-hidden rounded-[1.6rem] bg-white dark:bg-zinc-950">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 250px, 300px"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950" />
        )}
      </div>

      {/* Side buttons */}
      <div className="absolute left-0 top-20 h-16 w-[3px] rounded-r bg-zinc-700/80" />
      <div className="absolute right-0 top-28 h-10 w-[3px] rounded-l bg-zinc-700/80" />
    </div>
  );
}
