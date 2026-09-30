import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="mx-auto w-[1200px] max-w-full pt-20 text-center text-white">
      <h1 className="font-[Poppins] text-[72px] font-semibold leading-[120%] tracking-[-0.01em]">
        Get Access to Hundreds <br /> Courses Available
      </h1>
      <p className="mx-auto mt-8 max-w-[900px] font-[Satoshi] text-lg font-normal leading-[160%] text-[#F5F5F6]">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>
      <div className="mx-auto mt-14 flex w-[574px] items-center gap-3">
        <div className="flex h-[52px] flex-1 items-center gap-2 rounded-full bg-white px-6">
          <Search size={16} className="text-[#82868E]" />
          <input
            placeholder="Course, topic, creator"
            className="flex-1 bg-transparent font-[Satoshi] text-base text-[#242528] outline-none placeholder:text-[#82868E]"
          />
        </div>
        <button className="h-[46px] w-[104px] rounded-3xl bg-[#D4FB20] font-[Satoshi] text-lg font-medium text-[#242528]">
          Search
        </button>
      </div>
    </div>
  );
}