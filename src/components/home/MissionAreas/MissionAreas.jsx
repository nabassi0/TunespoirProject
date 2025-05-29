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
        "Nous participons à la rénovation et à la reconstruction d’écoles, souvent dans un état de délabrement avancé, avec des infrastructures vétustes et mal entretenues.",
      link: "/nous-decouvrir",
    },
    {
      icon: <FaUsers className="mission-icon" />,
      title: "Aide sociale et humanitaire",
      description:
        "Nous soutenons les familles les plus vulnérables et démunies, en fournissant une aide alimentaire et une aide directe aux enfants afin d'améliorer leurs conditions de vie.",
      link: "/nous-decouvrir",
    },
    {
      icon: <FaGlobeAfrica className="mission-icon" />,
      title: "Développement des infrastructures",
      description:
        "Nous contribuons au développement durable et autonome des communautés rurales tunisiennes.",
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
