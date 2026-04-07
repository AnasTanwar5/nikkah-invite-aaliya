import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import QuotesCarousel from "@/components/QuotesCarousel";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import FallingPetals from "@/components/FallingPetals";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <main className="min-h-screen relative">
      <FallingPetals />
      {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      <HeroSection />
      <InfoCards />
      <QuotesCarousel />
      <Footer />
    </main>
  );
};

export default Index;
