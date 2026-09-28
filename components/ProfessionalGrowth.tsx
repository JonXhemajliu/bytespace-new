'use client';

import React from "react";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function ProfessionalGrowth() {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-[120px] flex justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "1137px",
          height: "1137px",
          top: "-466px",
          left: "-152px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-[1258px] h-[552px] flex items-center gap-[63px]">
        {/* Left Column (Text & Stats) */}
        <div className="flex flex-col gap-[40px] max-w-[577px]">
          <h2 className="w-[577px] text-[#242528] font-['Poppins'] text-[44px] font-semibold leading-[120%] tracking-[-0.01em]">
            Your Path to Professional Growth Starts Here!
          </h2>

          <p className="w-[574px] text-[#4B4C53] font-['Satoshi'] text-[18px] font-normal leading-[160%]">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          <div className="flex items-center gap-[56px]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-[2px]">
                <span className="text-[#003BE2] font-['Poppins'] text-[36px] font-medium leading-[44px] tracking-[-0.01em]">
                  {stat.value}
                </span>
                <span className="text-[#4B4C53] font-['Satoshi'] text-[18px] font-normal leading-[160%]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Frame 13 */}
        <div className="relative w-[621px] h-[552px]">
          
          {/* Course_Card_1 */}
          <div className="absolute top-0 left-0 z-10 w-[373px] h-[384px] bg-white border border-[#CED0D3] rounded-[24px] p-4 flex flex-col justify-between shadow-sm">
            <div className="relative w-full h-[210px] bg-gray-900 rounded-[16px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
                alt="Learn Figma Course"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-[#242528]">
                  17 Lessons
                </span>
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-[#242528]">
                  2 hours 16 mins
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-[#242528] font-['Poppins'] text-[18px] font-semibold leading-tight">
                Learn Figma from zero
              </h3>
              <p className="text-[#71727A] font-['Satoshi'] text-[13px]">
                by <span className="text-[#003BE2]">purepearl studio</span>
              </p>
            </div>

            <div className="flex flex-col gap-2 px-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4B4C53] bg-[#F4F4F6] px-3 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="0.5" y="7" width="2.5" height="4.5" rx="1" fill="#4B4C53"/>
                    <rect x="4.5" y="4" width="2.5" height="7.5" rx="1" fill="#4B4C53"/>
                    <rect x="8.5" y="1" width="2.5" height="10.5" rx="1" fill="#4B4C53"/>
                  </svg>
                  Beginner
                </span>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Instructor"
                  className="w-[28px] h-[28px] rounded-full object-cover border border-white shadow-sm"
                />
              </div>
              <div className="text-[#003BE2] font-['Poppins'] text-[20px] font-bold leading-none mt-3">
                $25<span className="text-[12px] font-normal text-[#71727A]">/lifetime</span>
              </div>
            </div>
          </div>

          {/* Student Cutout Image */}
          <div className="absolute top-[12px] left-0 z-20 w-[577px] h-[540px] pointer-events-none">
            <img
              src="/images/student.png"
              alt="Student"
              className="w-full h-full object-contain object-bottom pointer-events-auto filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Mask Group Frame - 3D Spring Asset */}
        <img
  src="/images/spring.png"
  alt=""
  className="absolute z-40 pointer-events-none"
  style={{ width: "215px", height: "215px", top: "67px", left: "406px" }}
/>

          {/* Floating Learning Progress Card */}
          <div className="absolute top-[213px] left-[345px] z-30 w-[232px] h-[138px] p-[16px] flex flex-col gap-[8px] rounded-[16px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <span className="text-[#242528] font-['Satoshi'] text-[14px] font-medium leading-[24px]">
              Learning Progress
            </span>

            <div className="w-[200px] h-[58px] flex flex-col gap-[8px]">
              <span className="w-[96px] h-[58px] text-[#242528] font-['Poppins'] text-[48px] font-semibold leading-[120%] tracking-[-0.01em]">
                55%
              </span>

              <div className="relative w-[200px] h-[8px] bg-[#F6F6F6] rounded-[24px] overflow-hidden">
                <div className="w-[112px] h-[8px] bg-[#D4FB20] rounded-[24px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}