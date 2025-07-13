import React from "react";
import CookieConsent from "react-cookie-consent";
import { FaCookie, FaTimes } from "react-icons/fa";
import "./CookieBanner.scss";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter tous les cookies"
      declineButtonText="Refuser"
      enableDeclineButton
      flipButtons
      cookieName="tunespoir-cookie-consent"
      style={{
        background: "#ffffff",
        padding: 0,
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        zIndex: 9999,
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        border: "1px solid #e0e0e0",
      }}
      buttonStyle={{
        background: "#0C8BC9",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#666666",
        fontSize: "14px",
        fontWeight: "500",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "2px solid #dddddd",
        cursor: "pointer",
        marginRight: "12px",
        transition: "all 0.3s ease",
      }}
      buttonWrapperClasses="cookie-buttons"
      contentClasses="cookie-content"
      containerClasses="cookie-banner-container"
      onAccept={() => {
        console.log("Cookies acceptés");
        // Ici vous pouvez ajouter votre logique d'analytics, Google Analytics, etc.
      }}
      onDecline={() => {
        console.log("Cookies refusés");
        // Ici vous pouvez désactiver les cookies non essentiels
      }}
    >
      <div className="cookie-banner-wrapper">
        <div className="cookie-icon">
          <FaCookie />
        </div>
        <div className="cookie-text">
          <h4>Nous utilisons des cookies</h4>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience de
            navigation. En continuant à utiliser ce site, vous acceptez notre
            utilisation des cookies.
            <a href="/politique-confidentialite" className="cookie-link">
              En savoir plus
            </a>
          </p>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
