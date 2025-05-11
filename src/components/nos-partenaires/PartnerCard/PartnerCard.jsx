import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './PartnerCard.scss';

const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card">
      <div className="partner-logo">
        <img src={partner.logo} alt={`Logo ${partner.name}`} />
      </div>
      <div className="partner-info">
        <h3 className="partner-name">{partner.name}</h3>
        <p className="partner-description">{partner.description}</p>
        <a href={partner.website} className="partner-link" target="_blank" rel="noopener noreferrer">
          Visiter le site <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default PartnerCard; 