import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import tunespoirLogo from "../assets/images/tunespoir_logo.png";
import "../styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isNosMissionsPage = location.pathname === "/nos-missions";

  // Navigation links - reordered as requested
  const navLinks = [
    { name: "Nous découvrir", path: "/nous-decouvrir" },
    { name: "Mission", path: "/nos-missions" },
    { name: "Actualités", path: "/actualites" },
    // { name: "Devenir partenaire", path: "/devenir-partenaire" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/nous-contacter" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle nav link click to remove focus
  const handleNavLinkClick = (e) => {
    // Remove focus from the clicked element to eliminate the blue outline
    setTimeout(() => {
      e.target.blur();
    }, 100);
  };

  // Conditional class for header background
  const headerClasses = [
    "site-header",
    isScrolled || isNosMissionsPage ? "scrolled" : "", // Apply .scrolled if scrolled OR on /nos-missions
    isNosMissionsPage ? "force-solid-background" : "", // Specific class for /nos-missions styling if needed beyond .scrolled
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={handleNavLinkClick}>
            <img
              src={tunespoirLogo}
              alt="Tunespoir Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <div className="right-content">
          <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
            <div className="mobile-nav-header">
              <Link
                to="/"
                className="mobile-logo-link"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleNavLinkClick(e);
                }}
              >
                <img
                  src={tunespoirLogo}
                  alt="Tunespoir Logo"
                  className="mobile-logo-image"
                />
              </Link>
              <button
                className="mobile-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    to={link.path}
                    className={`nav-link ${
                      location.pathname === link.path ? "active" : ""
                    }`}
                    onClick={handleNavLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-nav-footer">
              <Link
                to="/faire-un-don"
                className="btn btn-donate mobile-donate"
                onClick={handleNavLinkClick}
              >
                Faire un don
              </Link>
            </div>
          </nav>

          <div className="header-actions">
            <Link
              to="/faire-un-don"
              className="btn btn-donate desktop-donate"
              onClick={handleNavLinkClick}
            >
              Faire un don
            </Link>

            <button
              className={`mobile-menu-toggle ${isMenuOpen ? "hidden" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
