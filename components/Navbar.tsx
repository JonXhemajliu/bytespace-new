import Image from "next/image";
const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  return (
    <nav className="mx-auto flex h-[120px] w-[1200px] max-w-full items-center justify-between text-white">
      <div className="flex items-center">
        <Image
          src="/images/Vector.png"
          alt=""
          width={29}
          height={32}
          className="mr-2 h-[31.5px] w-[28.875px]"
        />
        <span className="font-[Clash_Display] text-[24px] font-bold leading-[100%] text-[#F5F5F6]">
          ByteSpace
        </span>
      </div>

      <ul className="flex gap-8 font-[Satoshi] text-base font-normal">
        {links.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>

      <div className="flex items-center gap-6 font-[Satoshi] text-base font-normal">
        <button>Sign In</button>
        <button>Join Us</button>
        <Image
          src="/images/shoppingbag.png"
          alt=""
          width={18}
          height={18}
          className="size-[18px]"
        />
      </div>
    </nav>
  );
}