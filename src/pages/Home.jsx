import React, { useEffect } from 'react';
import { 
  ImpactStats, 
  MissionAreas, 
  NewsSection, 
  CtaSection 
} from '../components/home';
import Hero from '../components/Hero/Hero';
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
      <Hero
        title = "Ensemble, créons un avenir meilleur"
        subtitle = "Rejoignez notre mission pour apporter de l'aide humanitaire et du soutien aux communautés les plus vulnérables."
        imageUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
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