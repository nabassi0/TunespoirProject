import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import tunespoirLogo from "../assets/images/tunespoir_logo.png";
import "../styles/Footer.css";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-column footer-about">
            <div className="footer-logo">
              <img
                src={tunespoirLogo}
                alt="Tunespoir Logo"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Association dédiée à l'aide aux personnes dans le besoin et au
              développement de projets solidaires partout dans le monde.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/tunespoir/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.helloasso.com/associations/tunespoir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HelloAsso"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/tunespoir/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@tunespoirtunisie8468"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-column footer-links">
            <h3 className="footer-title">Liens utiles</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/actualites">Actualités</Link>
              </li>
              <li>
                <Link to="/nous-decouvrir">Nous découvrir</Link>
              </li>
              <li>
                <Link to="/nos-partenaires">Nos partenaires</Link>
              </li>
              <li>
                <Link to="/faire-un-don">Faire un don</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3 className="footer-title">Contact</h3>
            <ul className="contact-info">
              <li>38 Quai Georges Gorse</li>
              <li>92100 Boulogne Billancourt, France</li>
              <li>Email: Association.tunespoir@gmail.com</li>
              <li>Téléphone: +33 1 23 45 67 89</li>
            </ul>
          </div>

          <div className="footer-column footer-newsletter">
            <h3 className="footer-title">Newsletter</h3>
            <p>Inscrivez-vous pour recevoir nos dernières actualités</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Votre adresse email" required />
              <button type="submit" className="btn-secondary">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Tunespoir. Tous droits réservés.
          </div>
          <div className="footer-bottom-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">
              Politique de confidentialité
            </Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
