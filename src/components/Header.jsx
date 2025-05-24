import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import tunespoirLogo from '../assets/images/tunespoir_logo.png';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isBlack = (location.pathname === '/actualites', location.pathname === '/nos-partenaires' || location.pathname === '/faq' || location.pathname === '/nous-contacter' || location.pathname === '/faire-un-don');

  // Navigation links - all displayed in header
  const navLinks = [
    { name: 'Actualités', path: '/actualites' },
    { name: 'Découvrir', path: '/nous-decouvrir' },
    { name: 'Devenir partenaire', path: '/devenir-partenaire' },
    { name: 'Partenaires', path: '/nos-partenaires' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/nous-contacter' },
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClass = `${isBlack ? 'header-black-letters' : 'header-white-letters'}`;


  useEffect(() => {
    console.log(navLinkClass);
  }, [navLinkClass]);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={tunespoirLogo} alt="Tunespoir Logo" className="logo-image" />
          </Link>
        </div>

        <div className="right-content">
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className="mobile-close" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <FaTimes />
            </button>
            
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}` + navLinkClass}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/faire-un-don" className="btn btn-donate">
              Faire un don
            </Link>
            
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div 
          className="menu-overlay" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header; 