import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroDecor from "@/components/HeroDecor";
import Courses from "@/components/Courses";
import LearningPaths from "@/components/LearningPaths";
import ProfessionalGrowth from "@/components/ProfessionalGrowth";
import Sponsors from "@/components/Sponsors";
import CreateCourses from "@/components/CreateCourses";
import CreatorCTA from "@/components/creatorCTA";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[1024px] overflow-hidden bg-blue-800 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]">
        <HeroDecor />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </section>
      <Sponsors />
      <Courses />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreateCourses />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}