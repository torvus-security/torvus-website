import Image from "next/image";
import clsx from "clsx";

type PhoneMockProps = {
  /** Optional image path; defaults to your hero mock */
  src?: string;
  /** Accessible alt text for the mock */
  alt?: string;
  /** Extra utility classes for outer wrapper */
  className?: string;
};

export default function PhoneMock({
  src = "/phone-hero.png",
  alt = "Torvus mobile UI",
  className = "",
}: PhoneMockProps) {
  return (
    <div className={clsx("relative mx-auto w-[300px] sm:w-[320px] lg:w-[360px]", className)}>
      {/* Outer frame */}
      <div className="rounded-[38px] border border-black/10 bg-white shadow-xl">
        {/* Bezel notch */}
        <div className="mx-auto my-3 h-1.5 w-24 rounded-full bg-black/10" />
        {/* Tall phone screen (closer to real proportions) */}
        <div className="relative mx-3 mb-3 aspect-[9/19.5] overflow-hidden rounded-[30px] ring-1 ring-black/5">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 300px"
          />
        </div>
      </div>
    </div>
  );
}