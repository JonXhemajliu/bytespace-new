import SectionHeading from "./SectionHeading";
import CategoryChip from "./CategoryChip";
import CourseCard from "./CourseCard";
import Image from "next/image";

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking"];

const courses = [
  { title: "Learn Figma from Basic", author: "purepixel studio", price: 25, imageSrc: "/images/b1.jpg" },
  { title: "Build Digital Asset", author: "purepixel studio", price: 25, imageSrc: "/images/b2.jpg" },
  { title: "the Power of Big Data", author: "purepixel studio", price: 25, imageSrc: "/images/b3.jpg" },
  { title: "Balancing Productivity and Life", author: "purepixel studio", price: 25, imageSrc: "/images/b4.jpg" },
  { title: "Mastering Money Management", author: "purepixel studio", price: 25, imageSrc: "/images/b5.jpg" },
  { title: "From Idea to Startup Success", author: "purepixel studio", price: 25, imageSrc: "/images/b6.jpg" },
];

export default function Courses() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((c, i) => (
            <CategoryChip key={c} label={c} active={i === 0} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}