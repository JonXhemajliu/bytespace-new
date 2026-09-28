import Image from "next/image";

type Props = {
  title: string;
  author: string;
  price: number;
  rating?: number;
  level?: string;
  badgeText?: string;
  imageSrc?: string;
  avatars?: string[];
};

export default function CourseCard({
  title,
  author,
  price,
  rating = 4.5,
  level = "Beginner",
  badgeText = "26+",
  imageSrc,
  avatars = [
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=33",
    "https://i.pravatar.cc/100?img=47",
  ],
}: Props) {
  return (
    <div className="w-[373px] h-[384px] rounded-[24px] border border-gray-200 bg-white p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      {/* Thumbnail (341px x 195px, 12px radius) */}
      <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden bg-gray-200 shrink-0">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 font-medium">
            341 x 195
          </div>
        )}
      </div>

      {/* Details Container */}
      <div className="flex flex-col justify-between flex-1 mt-3">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="w-[234px] text-[16px] font-semibold leading-[130%] text-gray-900 truncate">
            {title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[18px] leading-[160%] text-gray-700 font-normal">
              {rating}
            </span>
            <svg className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>

        {/* Author */}
        <p className="text-[12px] leading-[160%] text-blue-800 font-normal">
          by {author}
        </p>

        {/* Badges & Avatars (237px width with 12px gap) */}
        <div className="flex items-center w-[237px] h-[32px] gap-[12px] self-start">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-[12px] text-gray-600 font-medium whitespace-nowrap">
            {level}
          </span>
          <span className="rounded-md bg-electric-lime px-2.5 py-1 text-[12px] font-semibold text-black whitespace-nowrap">
            {badgeText}
          </span>
          <div className="flex -space-x-2">
            {avatars.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Student"
                className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        </div>

        {/* Price Tag */}
        <div className="flex items-baseline gap-1">
          <span className="text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-gray-900">
            ${price}
          </span>
          <span className="text-[12px] leading-[160%] font-normal text-gray-500">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}