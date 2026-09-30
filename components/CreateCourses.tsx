import Image from "next/image";

export const avatars = [1, 2, 3, 4, 5, 6].map((n) => `/images/avatars/a${n}.png`);
const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#003BE2" />
      <path
        d="M5.5 10.3l3 3 6-6.3"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CreateCourses() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Ellipse 12 - lime */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[300px] -left-[287px] size-[672px] rounded-full backdrop-blur-[40px]"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0.138) 53%, rgba(203,252,1,0.036) 75%, rgba(203,252,1,0) 100%)" }}
      />
      {/* Blu */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[250px] -right-[200px] size-[600px] rounded-full"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.18) 0%, rgba(0,59,226,0) 100%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[150px] -top-[200px] size-[500px] rounded-full"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.14) 0%, rgba(0,59,226,0) 100%)" }}
      />

      {/* Frame 13 */}
      <div className="relative mx-auto flex min-h-[552px] w-[1258px] max-w-full items-center justify-center">
        {/* Frame 14 */}
        <div className="flex h-[596px] w-[1200px] items-center gap-[79px]">
          {/* Frame 12 */}
          <div className="relative h-[596px] w-[541px] shrink-0">
        <Image
  src="/images/girl.png"
  alt="Instructor"
  width={435}
  height={596}
  className="absolute left-[28px] top-0 z-20 h-[596px] w-[435px] object-cover object-bottom"
  style={{
    filter: [
      "drop-shadow(0.52px 0.74px 3.04px #0000000A)",
      "drop-shadow(2.23px 3.19px 5.72px #0000000F)",
      "drop-shadow(5.38px 7.69px 9.57px #00000012)",
      "drop-shadow(10.21px 14.58px 16.09px #00000014)",
      "drop-shadow(16.95px 24.21px 24px #00000017)",
      "drop-shadow(25.84px 36.91px 36px #0000001A)",
      "drop-shadow(37.12px 53.03px 56px #0000001B)",
      "drop-shadow(51.04px 72.91px 72px #00000021)",
    ].join(" "),
  }}
/>

            <div className="absolute left-0 top-[48px] z-10 w-[234px] rounded-2xl bg-[#003BE2] p-4 text-white">
              <p className="font-[Satoshi] text-xs">Total Revenue</p>
              <p className="font-[Satoshi] text-[8px] opacity-70">July 1-28</p>
              <p className="mt-1 font-[Poppins] text-xl font-semibold">$120.29</p>
              <div className="mt-2 h-1 w-full rounded-full bg-white/30">
                <div className="h-1 w-1/2 rounded-full bg-[#D4FB20]" />
              </div>
            </div>

            <div className="absolute left-0 top-[197px] z-10 w-[134px] rounded-2xl bg-[#003BE2] p-4 text-white">
              <p className="font-[Satoshi] text-xs">Year to Date</p>
              <p className="font-[Satoshi] text-[8px] opacity-70">2023</p>
              <p className="mt-1 font-[Poppins] text-xl font-semibold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-[#D4FB20] px-2 py-0.5 font-[Satoshi] text-[8px] font-bold text-[#242528]">
                +128
              </span>
            </div>

           <Image
  src="/images/squiggle-lime.png"
  alt=""
  width={216}
  height={216}
  className="absolute left-[304px] top-[113px] z-30 size-[216px]"
/>

            <div className="absolute left-[283px] top-[413px] z-20 flex h-[123px] w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg backdrop-blur-[20px]">
              <div>
                <p className="font-[Satoshi] text-base font-medium leading-6 text-[#242528]">
                  Happy Students
                </p>
                <p className="font-[Satoshi] text-xs leading-3 text-[#242528]">
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
                <div className="-ml-[11.5px] flex size-[43px] items-center justify-center rounded-full bg-[#D4FB20] font-[Satoshi] text-xs font-bold leading-[150%] text-[#242528]">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Teksti */}
          <div className="flex flex-1 flex-col gap-6">
            <h2 className="w-[391px] font-[Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[550px] font-[Satoshi] text-lg font-normal leading-7 text-[#242528]">
              <span className="font-bold">ByteSpace</span> supports individuals
              or entities in the creation, publication, and administration of
              educational courses.
            </p>
            <ul className="flex w-[231px] flex-col gap-4">
              {perks.map((p) => (
                <li key={p} className="flex h-6 items-center gap-2">
                  <CheckIcon />
                  <span className="font-[Satoshi] text-lg font-medium leading-[120%] text-[#242528]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}