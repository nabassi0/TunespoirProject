import React from 'react';
import './PartnershipTypes.scss';

const PartnershipTypes = ({ filter, setFilter }) => {
  return (
    <div className="partners-filter">
      <button 
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        Tous
      </button>
      <button 
        className={`filter-btn ${filter === 'entreprise' ? 'active' : ''}`}
        onClick={() => setFilter('entreprise')}
      >
        Entreprises
      </button>
      <button 
        className={`filter-btn ${filter === 'fondation' ? 'active' : ''}`}
        onClick={() => setFilter('fondation')}
      >
        Fondations
      </button>
      <button 
        className={`filter-btn ${filter === 'ong' ? 'active' : ''}`}
        onClick={() => setFilter('ong')}
      >
        ONG
      </button>
      <button 
        className={`filter-btn ${filter === 'institution' ? 'active' : ''}`}
        onClick={() => setFilter('institution')}
      >
        Institutions
      </button>
    </div>
  );
};

export default PartnershipTypes; 