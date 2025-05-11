import React from 'react';
import './PageHeader.scss';

const PageHeader = () => {
  return (
    <div className="page-header">
      <h1 className="page-title">Nous contacter</h1>
      <p className="page-subtitle">
        Vous avez une question, une suggestion ou souhaitez nous rejoindre ? N'hésitez pas à nous contacter.
        Notre équipe vous répondra dans les plus brefs délais.
      </p>
    </div>
  );
};

export default PageHeader;
