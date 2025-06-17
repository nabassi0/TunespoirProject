import { useState, useEffect } from "react";
import { AboutTabs, TeamSection, Timeline } from "../components/nous-decouvrir";
import Hero from "../components/Hero/Hero";
import "../styles/pages/nous-decouvrir.scss";
import Background from "../assets/images/BackgroundKids.jpg";

/**
 * NousDecouvrir page component composed of reusable sections
 */
const NousDecouvrir = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  return (
    <div className={`nous-decouvrir-page ${isVisible ? "visible" : ""}`}>
      <Hero
        title="Nous Découvrir"
        subtitle="Notre Association"
        imageUrl={Background}
      />
      <div className="container">
        <AboutTabs />

        <TeamSection />

        <Timeline />
      </div>
    </div>
  );
};

export default NousDecouvrir;
