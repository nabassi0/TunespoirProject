import React from 'react';
import PartnerCard from '../PartnerCard/PartnerCard';
import './PartnerGrid.scss';

const PartnerGrid = ({ partners }) => {
  return (
    <div className="partners-grid">
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </div>
  );
};

export default PartnerGrid; 