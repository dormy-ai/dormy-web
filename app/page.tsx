import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroWithGlobe from "@/components/HeroWithGlobe";
import FoundersDilemma from "@/components/sections/FoundersDilemma";
import SolutionLayers from "@/components/sections/SolutionLayers";
import HowItWorks from "@/components/sections/HowItWorks";
import ResultQuote from "@/components/sections/ResultQuote";
import TheTeam from "@/components/sections/TheTeam";
import GetInTouch from "@/components/sections/GetInTouch";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main>
        <HeroWithGlobe />
        <FoundersDilemma />
        <SolutionLayers />
        <HowItWorks />
        <ResultQuote />
        <TheTeam />
        <GetInTouch />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
