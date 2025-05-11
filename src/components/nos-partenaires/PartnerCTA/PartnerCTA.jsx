import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake } from 'react-icons/fa';
import './PartnerCTA.scss';

const PartnerCTA = () => {
  return (
    <section className="become-partner-section">
      <div className="become-partner-content">
        <div className="become-partner-icon">
          <FaHandshake />
        </div>
        <h2>Intéressé par un partenariat ?</h2>
        <p>
          Rejoignez notre réseau de partenaires et contribuez à notre mission 
          d'aide humanitaire. Ensemble, nous pouvons avoir un impact plus fort 
          et plus durable sur les communautés vulnérables.
        </p>
        <Link to="/devenir-partenaire" className="btn btn-primary">
          Devenir partenaire
        </Link>
      </div>
    </section>
  );
};

export default PartnerCTA; 