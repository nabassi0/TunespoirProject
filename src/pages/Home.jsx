import React from 'react';
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
  return (
    <div className="home-page">
      <Hero />
      
      <ImpactStats />
      
      <MissionAreas />
      
      <NewsSection />
      
      <CtaSection />
    </div>
  );
};

export default Home; 