import React from "react";
import Container from "../components/layout/Container";

const PolitiqueConfidentialite = () => {
  return (
    <Container>
      <div className="politique-confidentialite">
        <div className="page-header">
          <h1>Politique de confidentialité</h1>
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
        </div>

        <div className="content-section">
          <h2>Utilisation des cookies</h2>
          <p>
            Notre site web utilise des cookies pour améliorer votre expérience
            de navigation. Les cookies sont de petits fichiers texte stockés sur
            votre appareil qui nous aident à :
          </p>
          <ul>
            <li>Mémoriser vos préférences</li>
            <li>Analyser l'utilisation de notre site</li>
            <li>Personnaliser votre expérience</li>
          </ul>

          <h3>Types de cookies utilisés</h3>
          <h4>Cookies essentiels</h4>
          <p>
            Ces cookies sont nécessaires au fonctionnement de base du site et ne
            peuvent pas être désactivés.
          </p>

          <h4>Cookies d'analyse</h4>
          <p>
            Ces cookies nous aident à comprendre comment les visiteurs utilisent
            notre site web.
          </p>

          <h3>Gestion des cookies</h3>
          <p>
            Vous pouvez contrôler et gérer les cookies de plusieurs façons :
          </p>
          <ul>
            <li>Via le banner de cookies sur notre site</li>
            <li>Dans les paramètres de votre navigateur</li>
            <li>En nous contactant directement</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité,
            vous pouvez nous contacter à :
            <a href="mailto:contact@tunespoir.org">contact@tunespoir.org</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .politique-confidentialite {
          padding: 2rem 0;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          color: #0c8bc9;
          margin-bottom: 1rem;
        }

        .page-header p {
          color: #666;
          font-style: italic;
        }

        .content-section h2 {
          color: #333;
          margin: 2rem 0 1rem 0;
          font-size: 1.8rem;
        }

        .content-section h3 {
          color: #0c8bc9;
          margin: 1.5rem 0 0.5rem 0;
          font-size: 1.4rem;
        }

        .content-section h4 {
          color: #333;
          margin: 1rem 0 0.5rem 0;
          font-size: 1.2rem;
        }

        .content-section p {
          line-height: 1.6;
          color: #555;
          margin-bottom: 1rem;
        }

        .content-section ul {
          margin: 1rem 0;
          padding-left: 2rem;
        }

        .content-section li {
          margin-bottom: 0.5rem;
          color: #555;
        }

        .content-section a {
          color: #0c8bc9;
          text-decoration: none;
        }

        .content-section a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .politique-confidentialite {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default PolitiqueConfidentialite;
