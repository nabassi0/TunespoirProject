import React from 'react';
import './BenefitsSection.scss';

const BenefitsSection = ({ benefits }) => {
  return (
    <section className="benefits-section">
      <h2 className="section-title">Pourquoi devenir partenaire ?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection; 