import Image from "next/image";
import { avatars } from "./CreateCourses";

const card =
  "absolute z-30 flex flex-col rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-[20px]";

export default function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Elementet e ngjitura te skajet e ekranit */}
      <Image
        src="/images/spring.png"
        alt=""
        width={387}
        height={387}
        className="absolute -left-[122px] top-[221px] size-[387px]"
      />
      <Image
        src="/images/cylinder.png"
        alt=""
        width={213}
        height={371}
        className="absolute right-0 top-[219px] h-[371px] w-auto"
      />

      {/* Kanvasi 1440px i Figma-s */}
      <div className="relative mx-auto h-full w-[1440px]">
        {/* Ellipse 7 */}
        <div className="absolute left-[145px] top-[582px] box-border size-[1149px] rounded-full border-[320px] border-[#CBFC01]" />

        {/* Ring i bardhë (aproksimim me CSS) */}
        <div className="absolute left-[76px] top-[770px] size-[240px] -rotate-12 rounded-full border-[64px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />

        <Image
          src="/images/squiggle.png"
          alt=""
          width={176}
          height={176}
          className="absolute left-[192px] top-[471px] size-[176px] rotate-180"
        />
        <Image
          src="/images/cone.png"
          alt=""
          width={188}
          height={188}
          className="absolute left-[1106px] top-[464px] size-[188px]"
        />
        <Image
          src="/images/spring-white.png"
          alt=""
          width={330}
          height={330}
          className="absolute left-[1127px] top-[672px] size-[330px]"
        />

        {/* Djali */}
        <Image
          src="/images/student.png"
          alt="Student"
          width={576}
          height={518}
          className="absolute left-[436px] top-[506px] z-20 h-[518px] w-auto"
        />

        {/* UI/UX Design */}
        <div className={`${card} left-[404px] top-[639px] h-[70px] w-[208px]`}>
          <p className="font-[Satoshi] text-base font-medium leading-[120%] text-[#242528]">
            UI/UX Design
          </p>
          <div className="flex items-center gap-2 font-[Satoshi] text-xs leading-[160%] text-[#82868E]">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Learning Progress */}
        <div className={`${card} left-[842px] top-[651px] h-[131px] w-[232px] gap-2`}>
          <p className="font-[Satoshi] text-sm font-medium leading-[120%] text-[#242528]">
            Learning Progress
          </p>
          <p className="font-[Poppins] text-5xl font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
            55%
          </p>
          <div className="h-2 w-[200px] rounded-3xl bg-[#D4FB20]/25">
            <div className="h-2 w-[112px] rounded-3xl bg-[#D4FB20]" />
          </div>
        </div>

        {/* Happy Students */}
        <div className={`${card} left-[328px] top-[837px] h-[121px] w-[258px] gap-2`}>
          <div>
            <p className="font-[Satoshi] text-base font-medium leading-[120%] text-[#242528]">
              Happy Students
            </p>
            <p className="font-[Satoshi] text-xs leading-[120%] text-[#242528]">
              4.5 <span className="opacity-50">(240)</span>{" "}
              <span className="text-[#D4FB20]">★</span>
            </p>
          </div>
          <div className="flex h-[43px] w-[232px] items-center">
            {avatars.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={43}
                height={43}
                className={`size-[43px] rounded-full border-2 border-white object-cover ${
                  i > 0 ? "-ml-[11.5px]" : ""
                }`}
              />
            ))}
            <div className="-ml-[11.5px] flex size-[43px] items-center justify-center rounded-full bg-[#D4FB20] font-[Satoshi] text-xs font-bold text-[#242528]">
              2K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}