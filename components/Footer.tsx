import Image from "next/image";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legal = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="h-[525px] bg-white pt-[71px]">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-[130px]">
        {/* Footer_Nav */}
        <div className="flex gap-[92px]">
          {/* Majtas */}
          <div className="flex w-[528px] shrink-0 flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <div className="flex h-[37px] w-[171px] items-center gap-2">
                <Image
                  src="/images/vector.png"
                  alt=""
                  width={29}
                  height={32}
                  className="h-[31.5px] w-[28.875px]"
                />
                <span className="font-[Clash_Display] text-2xl font-bold leading-none text-[#242528]">
                  ByteSpace
                </span>
              </div>
              <p className="font-[Satoshi] text-sm font-normal leading-[160%] text-[#242528]">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <div className="flex w-[504px] flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="flex h-[52px] w-[376px] items-center rounded-full border border-[#CED0D3] bg-white px-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent font-[Satoshi] text-base text-[#242528] outline-none placeholder:text-[#242528]"
                  />
                </div>
                <button className="flex h-[46px] w-[104px] items-center justify-center rounded-3xl bg-[#D4FB20] px-6 py-3 font-[Satoshi] text-lg font-medium leading-[120%] text-[#242528]">
                  Search
                </button>
              </div>
              <p className="font-[Satoshi] text-xs font-normal leading-[160%] text-[#242528]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Linqet */}
          <div className="flex gap-[42px]">
            {columns.map((col, i) => (
              <ul key={i} className="flex w-[167px] flex-col gap-4 pt-12">
                {col.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-[Satoshi] text-sm font-normal leading-[160%] text-[#242528]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Poshtë */}
        <div className="flex flex-col gap-[22px]">
          <div className="h-px w-full bg-[#CED0D3]" />
          <div className="flex h-[19px] items-center justify-between font-[Satoshi] text-xs font-normal leading-[160%] text-[#242528]">
            <span>© 2023 ByteSpace. All rights reserved.</span>
            <div className="flex gap-6">
              {legal.map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}