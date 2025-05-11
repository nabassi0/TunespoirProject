import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CtaSection.scss';

/**
 * Call to action section component
 * @param {Object} props - Component props
 * @param {string} props.title - CTA title
 * @param {string} props.text - CTA description text
 * @param {Array} props.buttons - Array of button objects with label and url
 * @param {string} props.backgroundImage - Optional background image URL
 * @returns {JSX.Element}
 */
const CtaSection = ({ 
  title = "Rejoignez notre cause", 
  text = "Ensemble, nous pouvons faire la différence. Faites un don aujourd'hui ou devenez bénévole pour soutenir nos actions.",
  buttons = [
    { label: "Faire un don", url: "/faire-un-don", variant: "primary" },
    { label: "Devenir bénévole", url: "/nous-contacter", variant: "outline" }
  ],
  backgroundImage
}) => {
  const sectionStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {};

  return (
    <section className="cta-section" style={sectionStyle}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-text">{text}</p>
          <div className="cta-buttons">
            {buttons.map((button, index) => (
              <Link 
                key={index} 
                to={button.url} 
                className={`btn ${button.variant === 'primary' ? 'btn-primary' : 'btn-outline'}`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['primary', 'outline', 'secondary'])
    })
  ),
  backgroundImage: PropTypes.string
};

export default CtaSection; 