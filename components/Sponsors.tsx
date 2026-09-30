import Image from "next/image";

const logos = [
  { src: "/images/v1.png", w: 40, h: 40 },
  { src: "/images/v2.png", w: 39.86, h: 25.1 },
  { src: "/images/v3.png", w: 40, h: 40 },
  { src: "/images/v4.png", w: 40, h: 40 },
  { src: "/images/v5.png", w: 40, h: 40 },
];

export default function Sponsors() {
  return (
    <section className="bg-[#F5F5F6] py-20">
      <div className="mx-auto grid w-[1200px] max-w-full grid-cols-5 items-center justify-items-center">
        {logos.map(({ src, w, h }) => (
          <div key={src} className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center">
              <Image
                src={src}
                alt=""
                width={w}
                height={h}
                style={{ width: w, height: h }}
              />
            </div>
            <span className="font-[Satoshi] text-xl font-bold leading-none tracking-[-0.01em] text-[#82868E]">
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}