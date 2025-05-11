import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaHandHoldingHeart, FaUsers, FaGlobeAfrica } from 'react-icons/fa';
import './MissionAreas.scss';

/**
 * Mission card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon component to display
 * @param {string} props.title - Mission title
 * @param {string} props.description - Mission description
 * @param {string} props.link - Link to more information
 * @param {string} props.linkText - Text for the link
 * @returns {JSX.Element}
 */
const MissionCard = ({ icon, title, description, link, linkText }) => (
  <div className="mission-card">
    {icon}
    <h3 className="mission-title">{title}</h3>
    <p className="mission-description">{description}</p>
    <Link to={link} className="read-more">
      {linkText} <FaArrowRight className="icon-arrow" />
    </Link>
  </div>
);

MissionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string
};

MissionCard.defaultProps = {
  linkText: 'En savoir plus'
};

/**
 * Mission Areas section to display organization focus areas
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {Array} props.missions - Array of mission objects
 * @returns {JSX.Element}
 */
const MissionAreas = ({ 
  title = "Nos domaines d'action",
  missions = [
    {
      icon: <FaHandHoldingHeart className="mission-icon" />,
      title: "Aide humanitaire",
      description: "Nous fournissons une aide d'urgence aux populations touchées par des crises humanitaires, des catastrophes naturelles et des conflits.",
      link: "/nous-decouvrir"
    },
    {
      icon: <FaUsers className="mission-icon" />,
      title: "Développement communautaire",
      description: "Nous travaillons en étroite collaboration avec les communautés locales pour créer des solutions durables et renforcer leur résilience.",
      link: "/nous-decouvrir"
    },
    {
      icon: <FaGlobeAfrica className="mission-icon" />,
      title: "Protection de l'environnement",
      description: "Nous mettons en œuvre des initiatives pour protéger l'environnement et promouvoir des pratiques durables dans les communautés.",
      link: "/nous-decouvrir"
    }
  ]
}) => {
  return (
    <section className="mission-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="mission-areas">
          {missions.map((mission, index) => (
            <MissionCard 
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              link={mission.link}
              linkText={mission.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

MissionAreas.propTypes = {
  title: PropTypes.string,
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      linkText: PropTypes.string
    })
  )
};

export default MissionAreas; 