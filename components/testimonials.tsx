import Image from "next/image";

const testimonials = [
  {
    img: "/images/sarah.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    img: "/images/james.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    img: "/images/alex.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

export default function Testimonials() {
  return (
    <section className="relative h-[784px] overflow-hidden bg-[#FAFAFA]">
      {/* Kanvasi 1440px për ellipse-t */}
    <div className="pointer-events-none absolute inset-0">
  <div className="relative mx-auto h-full w-[1440px]">
    {/* Ellipse 11 */}
    <div
      className="absolute left-[842px] top-[-241px] size-[1137px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.4) 0%, rgba(203,252,1,0.092) 53%, rgba(203,252,1,0.024) 75%, rgba(203,252,1,0) 100%)" }}
    />
    {/* Ellipse 12 */}
    <div
      className="absolute left-[395px] top-[-138px] size-[672px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0.138) 53%, rgba(203,252,1,0.036) 75%, rgba(203,252,1,0) 100%)" }}
    />
    {/* Ellipse 8 */}
    <div
      className="absolute left-[-442px] top-[149px] size-[1137px] rounded-full"
      style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,59,226,0.24) 0%, rgba(0,59,226,0.0552) 53%, rgba(0,59,226,0.0144) 75%, rgba(0,59,226,0) 100%)" }}
    />
  </div>
</div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-[1204px] max-w-full flex-col gap-[72px] pt-[74px]">
        {/* Text */}
        <div className="flex w-[1200px] max-w-full items-start gap-[43px]">
          <h2 className="w-[577px] shrink-0 font-[Poppins] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="w-[580px] font-[Satoshi] text-lg font-normal leading-[160%] text-[#4F4F4F]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-[1204px] items-start gap-[41px]">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex w-[374px] flex-col gap-6 rounded-3xl bg-white p-6"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="font-[Poppins] text-xl font-semibold leading-[120%] tracking-[-0.01em] text-black">
                  {t.name}
                </h3>
                <p className="font-[Satoshi] text-lg leading-[160%] text-[#003BE2]">
                  {t.role}
                </p>
              </div>
              <p className="w-[326px] font-[Satoshi] text-lg font-normal leading-[160%] text-[#4F4F4F]">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}