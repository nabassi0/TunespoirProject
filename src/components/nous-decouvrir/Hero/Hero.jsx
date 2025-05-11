import React from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';

/**
 * Hero section component for the NousDecouvrir page
 * @param {Object} props - Component props
 * @param {string} props.title - Main title for the hero section
 * @param {string} props.description - Text description for the hero section
 * @param {string} props.imageUrl - URL for the hero image
 * @param {string} props.imageAlt - Alt text for the hero image
 * @returns {JSX.Element}
 */
const Hero = ({ 
  title = "Notre mission", 
  description = "Depuis 2010, nous œuvrons avec détermination pour apporter de l'aide aux communautés vulnérables à travers le monde. Notre mission est de créer un impact durable et positif en travaillant main dans la main avec les populations locales.",
  imageUrl = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
  imageAlt = "Équipe sur le terrain"
}) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="page-title">{title}</h1>
        <p className="hero-text">
          {description}
        </p>
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
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string
};

export default Hero; 