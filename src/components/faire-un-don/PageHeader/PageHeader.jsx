import React from 'react';
import './PageHeader.scss';

const PageHeader = () => {
  return (
    <div className="page-header">
      <h1 className="page-title">Faites un don</h1>
      <p className="page-subtitle">
        Votre générosité est essentielle pour soutenir nos actions. Grâce à votre don,
        nous pouvons continuer à mener des projets d'aide humanitaire et de développement.
      </p>
    </div>
  );
};

export default PageHeader; 