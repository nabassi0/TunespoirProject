import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./ContactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-section">
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

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033236!2d2.3354330153239447!3d48.87456397928982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sRue%20de%20la%20Paix%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1623323998087!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Carte"
          className="google-map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
