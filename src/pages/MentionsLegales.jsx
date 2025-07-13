import React, { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import "../styles/MentionsLegales.css";

const MentionsLegales = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`mentions-legales-page ${isVisible ? "visible" : ""}`}>
      <Container>
        <div className="mentions-legales">
          <header className="mentions-legales__header">
            <h1 className="mentions-legales__title">Mentions Légales</h1>
            <p className="mentions-legales__subtitle">
              Informations légales relatives au site internet de l'association
              Tunespoir
            </p>
          </header>

          <div className="mentions-legales__content">
            {/* Identification de l'Association */}
            <section className="mentions-legales__section">
              <h2>1. Identification de l'Association</h2>
              <div className="mentions-legales__info">
                <p>
                  <strong>Dénomination :</strong> Association Tunespoir
                </p>
                <p>
                  <strong>Forme juridique :</strong> Association déclarée
                  conformément à la loi du 1er juillet 1901
                </p>
                <p>
                  <strong>Numéro RNA :</strong> [À compléter - Numéro
                  d'inscription au Répertoire National des Associations]
                </p>

                <p>
                  <strong>Siège social :</strong> [Adresse du siège social]
                </p>

                <p>
                  <strong>Email :</strong> contact@tunespoir.org
                </p>
              </div>
            </section>

            {/* Objet de l'Association */}
            <section className="mentions-legales__section">
              <h2>2. Objet de l'Association</h2>
              <p>
                L'association Tunespoir a pour objet de promouvoir l'éducation
                et le développement des enfants en situation de précarité,
                notamment en Tunisie. Elle œuvre pour l'amélioration des
                conditions d'apprentissage et l'accès à l'éducation pour tous.
              </p>
            </section>

            {/* Direction de Publication */}
            <section className="mentions-legales__section">
              <h2>3. Direction de Publication</h2>
              <div className="mentions-legales__info">
                <p>
                  <strong>Directeur de publication :</strong> Riadh Ben Meftah
                </p>
                <p>
                  <strong>Qualité :</strong> Président de l'association
                  Tunespoir
                </p>
                <p>
                  <strong>Contact :</strong> contact@tunespoir.org
                </p>
              </div>
            </section>

            {/* Hébergement du Site */}
            <section className="mentions-legales__section">
              <h2>4. Hébergement du Site</h2>
              <div className="mentions-legales__info">
                <p>
                  <strong>Hébergeur :</strong> [Nom de l'hébergeur]
                </p>
                <p>
                  <strong>Adresse :</strong> [Adresse de l'hébergeur]
                </p>
                <p>
                  <strong>Téléphone :</strong> [Numéro de téléphone de
                  l'hébergeur]
                </p>
                <p>
                  <strong>Site web :</strong> [Site web de l'hébergeur]
                </p>
              </div>
            </section>

            {/* Propriété Intellectuelle */}
            <section className="mentions-legales__section">
              <h2>5. Propriété Intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support
                électronique quel qu'il soit est formellement interdite sauf
                autorisation expresse du directeur de publication.
              </p>
              <p>
                Les marques et logos figurant sur le site sont déposés par
                l'association Tunespoir ou éventuellement par ses partenaires.
                Toute reproduction totale ou partielle de ces marques ou logos
                effectuée à partir des éléments du site sans l'autorisation
                expresse de l'association est donc prohibée.
              </p>
            </section>

            {/* Limitation de Responsabilité */}
            <section className="mentions-legales__section">
              <h2>6. Limitation de Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que
                possible et le site remis à jour à différentes périodes de
                l'année, mais peut toutefois contenir des inexactitudes ou des
                omissions.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un
                dysfonctionnement, merci de bien vouloir le signaler par email,
                à l'adresse contact@tunespoir.org, en décrivant le problème de
                la façon la plus précise possible.
              </p>
              <p>
                L'association Tunespoir ne pourra être tenue responsable des
                dommages directs et indirects causés au matériel de
                l'utilisateur, lors de l'accès au site internet, et résultant
                soit de l'utilisation d'un matériel ne répondant pas aux
                spécifications indiquées au point 4, soit de l'apparition d'un
                bug ou d'une incompatibilité.
              </p>
            </section>

            {/* Litiges */}
            <section className="mentions-legales__section">
              <h2>7. Litiges</h2>
              <p>
                Les présentes conditions du site internet relèvent de la
                législation française et de la compétence des tribunaux du
                ressort du siège social de l'association, sous réserve d'une
                attribution de compétence exclusive à un autre tribunal.
              </p>
            </section>

            {/* Données Personnelles */}
            <section className="mentions-legales__section">
              <h2>8. Données Personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi "Informatique et Libertés" du 6 janvier 1978
                modifiée, vous disposez d'un droit d'accès, de rectification, de
                suppression et d'opposition au traitement de vos données
                personnelles.
              </p>
              <p>
                Pour plus d'informations sur le traitement de vos données
                personnelles, consultez notre
                <a
                  href="/politique-confidentialite"
                  className="mentions-legales__link"
                >
                  {" "}
                  Politique de Confidentialité
                </a>
                .
              </p>
              <p>
                Pour exercer ces droits ou pour toute question sur le traitement
                de vos données dans ce dispositif, vous pouvez contacter notre
                délégué à la protection des données à l'adresse :
                contact@tunespoir.org
              </p>
            </section>

            {/* Cookies */}
            <section className="mentions-legales__section">
              <h2>9. Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience
                utilisateur et analyser le trafic. En continuant à naviguer sur
                ce site, vous acceptez l'utilisation de cookies.
              </p>
              <p>
                Pour plus d'informations sur l'utilisation des cookies et vos
                droits, consultez notre
                <a
                  href="/politique-confidentialite"
                  className="mentions-legales__link"
                >
                  {" "}
                  Politique de Confidentialité
                </a>
                .
              </p>
            </section>

            {/* Contact */}
            <section className="mentions-legales__section">
              <h2>10. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales ou
                au fonctionnement du site, vous pouvez nous contacter :
              </p>
              <div className="mentions-legales__contact">
                <p>
                  <strong>Par email :</strong> contact@tunespoir.org
                </p>
                <p>
                  <strong>Par courrier :</strong> Association Tunespoir,
                  [Adresse du siège social]
                </p>
                <p>
                  <strong>Via notre formulaire de contact :</strong>{" "}
                  <a href="/nous-contacter" className="mentions-legales__link">
                    Page Contact
                  </a>
                </p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="mentions-legales__section">
              <p className="mentions-legales__update">
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

export default MentionsLegales;
