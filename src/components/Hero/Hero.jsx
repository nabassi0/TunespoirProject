import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Hero.scss";

const Hero = ({ title, subtitle, imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);

    // Handle scroll event to create parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector(".hero-background");
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`hero-section ${isVisible ? "visible" : ""}`}>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-buttons">
          <Link to="/faire-un-don" className="btn btn-primary">
            Faire un don
          </Link>
          <Link to="/nos-missions" className="btn btn-outline">
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
  imageUrl: PropTypes.string,
};

export default Hero;
