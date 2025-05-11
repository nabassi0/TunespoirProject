import React from 'react';
import './DonationInfo.scss';

const DonationInfo = () => {
  return (
    <div className="donation-info">
      <h2>Pourquoi faire un don ?</h2>
      <p>
        Votre don nous permet d'intervenir rapidement et efficacement auprès des 
        populations vulnérables. Chaque contribution, quelle que soit sa taille, 
        a un impact réel sur le terrain.
      </p>
      
      <h3>Défiscalisation</h3>
      <p>
        Votre don est déductible à 66% de votre impôt sur le revenu, dans la limite 
        de 20% de votre revenu imposable. Un don de 100€ ne vous coûte en réalité que 34€.
      </p>
    </div>
  );
};

export default DonationInfo; 