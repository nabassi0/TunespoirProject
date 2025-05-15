import React, { useEffect } from 'react';
import { 
  Hero, 
  ImpactStats, 
  MissionAreas, 
  NewsSection, 
  CtaSection 
} from '../components/home';
import '../styles/pages/home.scss';

/**
 * Home page component composed of reusable sections
 */
const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add event listener for the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const impactSection = document.querySelector('.impact-stats-section');
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    
    return () => {
      // Clean up event listener
      if (scrollIndicator) {
        scrollIndicator.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Hero />
      
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