import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Prêt à nous rejoindre ?</h2>
        <p className="cta-text">
          Prenons rendez-vous pour discuter de votre projet et voir comment 
          nous pouvons construire ensemble un partenariat qui répond à vos 
          objectifs et aux besoins des communautés que nous soutenons.
        </p>
        <div className="cta-buttons">
          <Link to="/nous-contacter" className="btn btn-primary">
            Contactez-nous
          </Link>
          <a href="tel:+33123456789" className="btn btn-outline">
            +33 1 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 