import Image from "next/image";

type Props = { src?: string; alt?: string };

export default function PhoneMock({ src, alt = "" }: Props) {
  return (
    <div className="relative mx-auto w-[310px] md:w-[360px]">
      {/* frame: closer to a real phone ratio 9:19.5 */}
      <div className="relative aspect-[9/19.5] rounded-[28px] border border-white/70 bg-white/60 shadow-[inset_0_0_0_1px_rgba(15,23,42,.06)]">
        <div className="absolute inset-[8px] rounded-[22px] bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,.06)]">
          <div className="absolute inset-[6px] overflow-hidden rounded-[18px]">
            {src ? (
              <Image src={src} alt={alt} fill className="object-cover" priority />
            ) : (
              <div className="h-full w-full bg-gradient-to-b from-cyan-50 to-emerald-50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}