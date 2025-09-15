import Image from "next/image";

export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px] lg:w-[360px]">
      {/* Frame */}
      <div className="rounded-[38px] border border-black/10 bg-white shadow-xl">
        {/* Bezel */}
        <div className="mx-auto my-3 h-1.5 w-24 rounded-full bg-black/10" />
        {/* Screen area (16:9 → closer to tall phone) */}
        <div className="relative mx-3 mb-3 aspect-[9/19.5] overflow-hidden rounded-[30px] ring-1 ring-black/5">
          <Image
            src="/phone-ui.png"
            alt="Torvus mobile UI"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}