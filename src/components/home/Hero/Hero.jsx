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
 * @param {string} props.imageAlt - Alt text for the hero image
 * @returns {JSX.Element}
 */
const Hero = ({ 
  title = "Ensemble, créons un monde meilleur", 
  subtitle = "Rejoignez notre mission pour apporter de l'aide humanitaire et du soutien aux communautés dans le besoin.",
  imageUrl = "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  imageAlt = "Enfants souriants"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  return (
    <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-buttons">
          <Link to="/faire-un-don" className="btn btn-primary">
            Faire un don
          </Link>
          <Link to="/nous-decouvrir" className="btn btn-outline">
            Découvrir notre mission
          </Link>
        </div>
      </div>
      <div className="hero-image-container">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="hero-image"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string
};

export default Hero; 