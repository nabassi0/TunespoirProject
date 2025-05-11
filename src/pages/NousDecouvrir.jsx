import { useState, useEffect } from 'react';
import { 
  Hero, 
  AboutTabs, 
  TeamSection, 
  Timeline 
} from '../components/nous-decouvrir';
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
      <div className="container">
        <Hero />
        
        <AboutTabs />
        
        <TeamSection />
        
        <Timeline />
      </div>
    </div>
  );
};

export default NousDecouvrir; 