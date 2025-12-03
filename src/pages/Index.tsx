import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import KeyOperations from "@/components/KeyOperations";
import ProjectPhases from "@/components/ProjectPhases";
import Vision from "@/components/Vision";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Partners />
      <KeyOperations />
      <ProjectPhases />
      <Vision />
      <Timeline />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
