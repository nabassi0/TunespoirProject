import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './PartnershipTypes.scss';

const PartnershipTypes = ({ types }) => {
  return (
    <section className="types-section">
      <h2 className="section-title">Nos types de partenariats</h2>
      <div className="partnership-types">
        {types.map((type) => (
          <div key={type.id} className="partnership-card">
            <div className="partnership-image-container">
              <img 
                src={type.image} 
                alt={type.title} 
                className="partnership-image"
              />
            </div>
            <div className="partnership-content">
              <h3 className="partnership-title">{type.title}</h3>
              <p className="partnership-description">{type.description}</p>
              <Link to="/nous-contacter" className="partnership-link">
                En savoir plus <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnershipTypes; 