import React, { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import "../styles/PolitiqueConfidentialite.css";

const PolitiqueConfidentialite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`politique-confidentialite-page ${isVisible ? "visible" : ""}`}
    >
      <Container>
        <div className="politique-confidentialite">
          <header className="politique-confidentialite__header">
            <h1 className="politique-confidentialite__title">
              Politique de Confidentialité
            </h1>
            <p className="politique-confidentialite__subtitle">
              Informations sur l'utilisation de vos données personnelles et
              cookies
            </p>
          </header>

          <div className="politique-confidentialite__content">
            <section className="politique-confidentialite__section">
              <h2>Utilisation des cookies</h2>
              <p>
                Notre site web utilise des cookies pour améliorer votre
                expérience de navigation. Les cookies sont de petits fichiers
                texte stockés sur votre appareil qui nous aident à vous offrir
                la meilleure expérience possible.
              </p>
              <div className="politique-confidentialite__info">
                <p>
                  <strong>Important :</strong> Nous respectons votre vie privée.
                  Vous pouvez accepter ou refuser l'utilisation des cookies non
                  essentiels via notre banner de consentement.
                </p>
              </div>
            </section>

            <section className="politique-confidentialite__section">
              <h2>Types de cookies que nous utilisons</h2>

              <div className="politique-confidentialite__info">
                <p>
                  <strong>Cookies essentiels</strong>
                </p>
                <p>
                  Ces cookies sont nécessaires au fonctionnement de base du site
                  web. Ils incluent votre préférence de consentement aux cookies
                  et ne peuvent pas être désactivés.
                </p>
              </div>

              <div className="politique-confidentialite__info">
                <p>
                  <strong>Cookies de préférences</strong>
                </p>
                <p>
                  Ces cookies nous permettent de mémoriser vos choix (comme
                  votre consentement aux cookies) pour améliorer votre
                  expérience lors de vos prochaines visites.
                </p>
              </div>
            </section>

            <section className="politique-confidentialite__section">
              <h2>Cookies que nous utilisons actuellement</h2>
              <ul>
                <li>
                  <strong>tunespoir-cookie-consent</strong> : Stocke votre
                  préférence concernant l'acceptation ou le refus des cookies
                </li>
                <li>
                  <strong>Cookies de session</strong> : Permettent le bon
                  fonctionnement de la navigation sur notre site
                </li>
              </ul>
            </section>

            <section className="politique-confidentialite__section">
              <h2>Gestion de vos préférences</h2>
              <p>
                Vous avez le contrôle total sur l'utilisation des cookies sur
                notre site :
              </p>
              <ul>
                <li>
                  <strong>Via notre banner</strong> : Lors de votre première
                  visite, vous pouvez accepter ou refuser les cookies
                </li>
                <li>
                  <strong>Paramètres du navigateur</strong> : Vous pouvez
                  configurer votre navigateur pour bloquer ou supprimer les
                  cookies
                </li>
              </ul>

              <div className="politique-confidentialite__info">
                <p>
                  <strong>Données que nous ne collectons pas :</strong>{" "}
                  Actuellement, notre site ne collecte pas de données
                  analytiques ou de tracking. Nous n'utilisons pas Google
                  Analytics, Facebook Pixel ou d'autres outils de suivi.
                </p>
              </div>
            </section>

            <section className="politique-confidentialite__section">
              <h2>Protection de vos données</h2>
              <p>
                Nous nous engageons à protéger votre vie privée et à respecter
                la réglementation RGPD. Les seules données stockées localement
                sont vos préférences de cookies.
              </p>
            </section>

            <section className="politique-confidentialite__section">
              <h2>Modifications de cette politique</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité de
                temps en temps. La date de dernière mise à jour est indiquée en
                haut de cette page.
              </p>
            </section>

            <section className="politique-confidentialite__section">
              <h2>Contact</h2>
              <p>
                Pour toute question concernant cette politique de
                confidentialité ou l'utilisation de vos données, vous pouvez
                nous contacter :
              </p>
              <div className="politique-confidentialite__contact">
                <p>
                  <strong>Par email :</strong>{" "}
                  <a
                    href="mailto:contact@tunespoir.org"
                    className="politique-confidentialite__link"
                  >
                    contact@tunespoir.org
                  </a>
                </p>
                <p>
                  <strong>Via notre formulaire de contact :</strong>{" "}
                  <a
                    href="/nous-contacter"
                    className="politique-confidentialite__link"
                  >
                    Page Contact
                  </a>
                </p>
              </div>
            </section>

            <section className="politique-confidentialite__section">
              <p className="politique-confidentialite__update">
                <em>
                  Dernière mise à jour :{" "}
                  {new Date().toLocaleDateString("fr-FR")}
                </em>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PolitiqueConfidentialite;
