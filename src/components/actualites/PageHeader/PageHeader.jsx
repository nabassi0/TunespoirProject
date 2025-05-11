import React from 'react';
import './PageHeader.scss';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header">
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{subtitle}</p>
    </div>
  );
};

export default PageHeader; 