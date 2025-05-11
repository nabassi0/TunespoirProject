import React from 'react';
import './PageHeader.scss';

const PageHeader = () => {
  return (
    <div className="page-header">
      <h1 className="page-title">Questions fréquentes</h1>
      <p className="page-subtitle">
        Retrouvez ci-dessous les réponses aux questions les plus fréquemment posées.
        Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.
      </p>
    </div>
  );
};

export default PageHeader; 