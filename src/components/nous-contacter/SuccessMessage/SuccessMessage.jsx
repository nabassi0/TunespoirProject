import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './SuccessMessage.scss';

const SuccessMessage = () => {
  return (
    <div className="success-message">
      <div className="success-icon">
        <FaCheck />
      </div>
      <h3>Message envoyé !</h3>
      <p>
        Merci de nous avoir contactés. Notre équipe vous répondra dans 
        les plus brefs délais, généralement sous 24-48 heures ouvrables.
      </p>
    </div>
  );
};

export default SuccessMessage; 