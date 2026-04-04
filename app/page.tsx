import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Courses from "@/components/sections/Courses";
import NoteArticles from "@/components/sections/NoteArticles";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTAForm from "@/components/sections/CTAForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Courses />
      <NoteArticles />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTAForm />
      <Footer />
    </main>
  );
}
