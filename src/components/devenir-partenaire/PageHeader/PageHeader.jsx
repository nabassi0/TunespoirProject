import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.scss';

const PageHeader = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="page-title">Devenir notre partenaire</h1>
        <p className="hero-text">
          Rejoignez-nous dans notre mission d'aide aux plus vulnérables. 
          Ensemble, nous pouvons avoir un impact significatif et durable sur 
          les communautés que nous soutenons à travers le monde.
        </p>
        <Link to="/nous-contacter" className="btn btn-primary">
          Discuter d'un partenariat
        </Link>
      </div>
      <div className="hero-image-container">
        <img 
          src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Partenariat" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default PageHeader; 