import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
      <div className="contact-header">
        <h2>Contactez-nous</h2>
        <p>Nous sommes là pour vous accompagner dans votre engagement</p>
      </div>

      <div className="contact-methods">
        <div className="contact-method">
          <div className="icon-container">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-details">
            <h3>Adresse</h3>
            <p>
              48 rue de Laborde
              <br />
              75008 Paris, France
            </p>
          </div>
        </div>

        <div className="contact-method">
          <div className="icon-container">
            <FaEnvelope />
          </div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>
              <a href="mailto:contact@tunespoir.org">contact@tunespoir.org</a>
            </p>
          </div>
        </div>

        <div className="contact-method">
          <div className="icon-container">
            <FaPhone />
          </div>
          <div className="contact-details">
            <h3>Téléphone</h3>
            <p>
              <a href="tel:+33123456789">+33 1 23 45 67 89</a>
            </p>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <div className="cta-content">
          <FaHeart className="cta-icon" />
          <h3>Ensemble, construisons un avenir meilleur</h3>
          <p>
            Votre engagement fait la différence. N'hésitez pas à nous contacter
            pour toute question ou pour découvrir comment vous pouvez contribuer
            à notre mission.
          </p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2976259876766!2d2.3142057153239234!3d48.87267237928974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc5d1b3c7d7%3A0x4b3a4d4c3f5e1c8a!2s48%20Rue%20de%20Laborde%2C%2075008%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1623323998087!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Carte - 48 rue de Laborde, 75008 Paris"
          className="google-map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
