import { useState, useEffect } from 'react';
import {
  AboutTabs, 
  TeamSection, 
  Timeline 
} from '../components/nous-decouvrir';
import Hero from '../components/Hero/Hero';
import '../styles/pages/nous-decouvrir.scss';

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
    <div className={`nous-decouvrir-page ${isVisible ? 'visible' : ''}`}>
      <Hero
        title="Nous Découvrir"
        subtitle="Notre Association"
        imageUrl="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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