import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Hero.scss';

/**
 * Hero section component for the home page
 * @param {Object} props - Component props
 * @param {string} props.title - Main title for the hero section
 * @param {string} props.subtitle - Subtitle for the hero section
 * @param {string} props.imageUrl - URL for the hero image
 * @returns {JSX.Element}
 */
const Hero = ({ 
  title = "Ensemble, créons un avenir meilleur", 
  subtitle = "Rejoignez notre mission pour apporter de l'aide humanitaire et du soutien aux communautés les plus vulnérables.",
  imageUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
    
    // Handle scroll event to create parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero-background');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-buttons">
          <Link to="/faire-un-don" className="btn btn-primary">
            Faire un don
          </Link>
          <Link to="/nous-decouvrir" className="btn btn-outline">
            Notre mission
          </Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Découvrir</span>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Hero; 