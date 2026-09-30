import Image from "next/image";

export default function CreatorCTA() {
  return (
    <section className="relative h-[488px] overflow-hidden bg-[#003BE2] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]">
      {/* Majtas */}
      <Image
        src="/images/spring.png"
        alt=""
        width={387}
        height={387}
        className="pointer-events-none absolute -left-[122px] -top-[162px] size-[387px]"
      />
      <Image
        src="/images/spring-white.png"
        alt=""
        width={176}
        height={176}
        className="pointer-events-none absolute left-[182px] top-[8px] size-[176px]"
      />
      <Image
        src="/images/cone.png"
        alt=""
        width={189}
        height={189}
        className="pointer-events-none absolute -left-[50px] top-[225px] size-[189px]"
      />
      {/* Torusi lime (aproksimim me CSS) */}
      <div className="pointer-events-none absolute left-[68px] top-[364px] size-[230px] -rotate-[25deg] rounded-full border-[60px] border-[#CBFC01]" />

      {/* Djathtas */}
      <Image
        src="/images/smallBall.png"
        alt=""
        width={213}
        height={371}
        className="pointer-events-none absolute -top-[110px] right-0 h-[371px] w-auto"
      />
      <Image
        src="/images/yellow-cylinder.png"
        alt=""
        width={188}
        height={188}
        className="pointer-events-none absolute right-[172px] top-0 size-[188px]"
      />
      <Image
        src="/images/spring.png"
        alt=""
        width={332}
        height={332}
        className="pointer-events-none absolute right-[1px] top-[289px] size-[332px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-[964px] max-w-full flex-col items-center gap-10 pt-[85px] text-center text-[#F5F5F6]">
        <h2 className="w-[710px] max-w-full font-[Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="font-[Satoshi] text-lg font-normal leading-[160%]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="flex w-[172px] items-center justify-center gap-2 rounded-3xl bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-lg font-medium leading-[120%] text-[#242528]">
          Join as Creator
        </button>
      </div>
    </section>
  );
}