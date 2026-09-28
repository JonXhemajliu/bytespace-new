import React from "react";

const categories = [
  {
    name: "Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    name: "Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M8 10l-2 2 2 2" />
        <path d="M16 10l2 2-2 2" />
      </svg>
    ),
  },
  {
    name: "IT & Software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M2 21h20" />
      </svg>
    ),
  },
  {
    name: "Business",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
        <path d="M12 10h.01" /><path d="M12 14h.01" />
        <path d="M16 10h.01" /><path d="M16 14h.01" />
        <path d="M8 10h.01" /><path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    name: "Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.5 13.52l-2.6 4.48a2 2 0 0 1-2.76.76L4.5 17.5" />
      </svg>
    ),
  },
  {
    name: "Photography",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-black">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

export default function LearningPaths() {
  return (
    <section className="py-20 bg-white flex flex-col items-center">
     {/* Header Frame */}
      <div className="w-[917px] flex flex-col items-center gap-[16px]">
        {/* Title */}
        <h2 className="w-[792px] text-[#040819] font-['Poppins'] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-center">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        {/* Subtitle */}
        <p className="w-[917px] text-[#82868E] font-['Satoshi'] text-[18px] font-normal leading-[160%] tracking-[0%] text-center">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      {/* Cards Frame */}
      <div className="mt-[68px] flex items-center justify-center gap-[40px] flex-wrap max-w-[1250px]">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="w-[167px] h-[167px] flex flex-col items-center justify-center gap-[8px] rounded-[24px] border border-gray-200 bg-white hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex flex-col items-center gap-[12px] w-full">
              
              {/* Lime Circle Icon Container */}
              <div className="w-[60px] h-[60px] rounded-[40px] p-[14px] flex items-center justify-center bg-[#D4FB20]">
                {/* Specific Icon */}
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                  {cat.icon}
                </div>
              </div>

              {/* Text */}
              <span className="text-[16px] font-medium leading-[120%] text-center text-gray-900 whitespace-nowrap">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}