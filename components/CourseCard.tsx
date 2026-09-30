import Image from "next/image";
const defaultAvatars = [1, 2, 3, 4].map((n) => `/images/c${n}.png`);
type Props = {
  title: string;
  author: string;
  price: number;
  rating?: number;
  level?: string;
  badgeText?: string;
  lessons?: string;
  duration?: string;
  comments?: string;
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
  lessons = "17 Lessons",
  duration = "2 hours 16 mins",
  comments = "59 Comments",
  imageSrc,
  avatars = defaultAvatars,
}: Props) {
  return (
    <div className="relative h-[384px] w-[373px] rounded-3xl border border-[#CED0D3] bg-white">
      {/* Thumbnail */}
      <div className="absolute left-4 top-4 h-[195.14px] w-[341px] overflow-hidden rounded-xl bg-[#443131]">
        {imageSrc && (
          <Image src={imageSrc} alt={title} fill sizes="341px" className="object-cover" />
        )}
        <div className="absolute left-[13px] top-[150px] flex gap-3">
          {[lessons, duration, comments].map((t) => (
            <span
              key={t}
              className="flex h-[26px] items-center whitespace-nowrap rounded-3xl bg-[#F6F6F6]/60 px-3 font-[Satoshi] text-xs font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[8px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Detajet */}
      <div className="absolute left-4 top-[232px] flex w-[237px] flex-col gap-4">
        <div className="flex w-[234px] flex-col">
          <h3 className="truncate font-[Poppins] text-xl font-semibold leading-[120%] tracking-[-0.01em] text-black">
            {title}
          </h3>
          <p className="font-[Satoshi] text-xs leading-[160%] text-[#003BE2]">
            by {author}
          </p>
        </div>

        <div className="flex h-8 w-[237px] items-center gap-3">
          <div className="flex h-8 items-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4B4C53" aria-hidden>
              <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
            </svg>
            <span className="font-[Satoshi] text-xs font-medium leading-[120%] text-[#4B4C53]">
              {level}
            </span>
          </div>
          <div className="flex h-8 w-[128px] items-center">
            {avatars.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={32}
                height={32}
                className={`size-8 rounded-full object-cover ${i > 0 ? "-ml-2" : ""}`}
              />
            ))}
            <div className="-ml-2 flex size-8 items-center justify-center rounded-full bg-[#D4FB20] font-[Satoshi] text-xs font-bold text-[#242528]">
              {badgeText}
            </div>
          </div>
        </div>

        <div className="flex items-baseline">
          <span className="font-[Poppins] text-xl font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]">
            ${price}
          </span>
          <span className="font-[Satoshi] text-xs leading-[160%] text-[#4F4F4F]">
            /lifetime
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="absolute left-[306px] top-[232px] flex h-[29px] items-center">
        <span className="font-[Satoshi] text-lg leading-[160%] text-[#4F4F4F]">
          {rating}
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#CED0D3" aria-hidden>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </div>
    </div>
  );
}