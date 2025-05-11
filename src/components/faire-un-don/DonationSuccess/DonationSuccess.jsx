import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import './DonationSuccess.scss';

const DonationSuccess = ({ donationInfo, onReset }) => {
  return (
    <div className="donation-success">
      <FaRegCheckCircle className="success-icon" />
      <h2 className="success-title">Merci pour votre don !</h2>
      <p className="success-message">
        Votre générosité nous permet de continuer notre mission et d'aider ceux qui en ont besoin.
        Un reçu fiscal vous a été envoyé par email.
      </p>
      
      {donationInfo && (
        <div className="donation-details">
          <p>Nom: {donationInfo.name}</p>
          <p>Montant: {donationInfo.amount}€</p>
          <p>Type: {donationInfo.type === 'mensuel' ? 'Don mensuel' : 'Don ponctuel'}</p>
          <p>Date: {donationInfo.date}</p>
        </div>
      )}
      
      <button className="btn-donate-again" onClick={onReset}>
        Faire un autre don
      </button>
    </div>
  );
};

export default DonationSuccess; 