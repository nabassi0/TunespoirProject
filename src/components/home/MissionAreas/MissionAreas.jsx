import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaUsers,
  FaGlobeAfrica,
} from "react-icons/fa";
import "./MissionAreas.scss";

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
  linkText: PropTypes.string,
};

MissionCard.defaultProps = {
  linkText: "En savoir plus",
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
      title: "Éducation",
      description:
        "Favoriser l’accès à l’éducation et lutter contre la déscolarisation des enfants. Améliorer les conditions de scolarisation des enfants, en réhabilitant l’infrastructure et en rendant le cadre de l’école accueillant et plus sécurisé.",
      link: "/nous-decouvrir",
    },
    {
      icon: <FaUsers className="mission-icon" />,
      title: "Améliorer le quotidien des enfants abandonnés",
      description:
        "Tunespoir est mobilisée pour contribuer à améliorer le quotidiens des enfants abandonnés. Des actions ponctuelles sont réalisés par Tunespoir tel qu’en 2025, le réaménagement de la salle d’ergothérapie de l’orphelinat de Manouba, Tunisie.",
      link: "/nous-decouvrir",
    },
    {
      icon: <FaGlobeAfrica className="mission-icon" />,
      title: "Aide sociale",
      description:
        "Favoriser l’accès à la nourriture, à l’eau potable et aux équipements nécessaires à la préparation et la conservation des aliments. Contribuer à l’accès à un logement décent par l’amélioration des conditions d’hygiène et par la lutte contre l’insalubrité dans les habitats.",
      link: "/nous-decouvrir",
    },
  ],
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
      linkText: PropTypes.string,
    })
  ),
};

export default MissionAreas;
