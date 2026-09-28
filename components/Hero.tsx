import { Search } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="mx-auto max-w-[1200px] pt-10 text-center text-white">
      <h1 className="text-heading-l font-semibold leading-[1.2]">
        Get Access to Hundreds <br /> Courses Available
      </h1>
      <p className="mx-auto mt-6 max-w-[700px] text-body-s opacity-80">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>
      <div className="mx-auto mt-8 flex max-w-[580px] items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-3">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Course, topic, creator"
            className="flex-1 text-body-s text-black outline-none"
          />
        </div>
        <Button>Search</Button>
      </div>
    </div>
  );
}