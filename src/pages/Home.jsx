import React, { useEffect } from "react";
import {
  ImpactStats,
  MissionAreas,
  NewsSection,
  CtaSection,
} from "../components/home";
import Hero from "../components/Hero/Hero";
import "../styles/pages/home.scss";
import ImageHeader from "../assets/images/headerImage.jpg";

/**
 * Home page component composed of reusable sections
 */
const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add event listener for the scroll indicator
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        const impactSection = document.querySelector(".impact-stats-section");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    return () => {
      // Clean up event listener
      if (scrollIndicator) {
        scrollIndicator.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Hero
        title="Ensemble, faisons reculer la précarité"
        subtitle="Tunespoir est une association qui a pour mission d’apporter une aide directe aux enfants, d’améliorer leurs conditions de vie, d’accompagner leurs familles"
        imageUrl={ImageHeader}
      />

      <div className="home-content">
        <ImpactStats />
        <MissionAreas />
        <NewsSection />
        <CtaSection />
      </div>
    </div>
  );
};

export default Home;
