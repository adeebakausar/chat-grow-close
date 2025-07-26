import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <InteractiveDemo />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;