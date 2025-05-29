import React from "react";
import PropTypes from "prop-types";
import "./ImpactStats.scss";

/**
 * Single impact stat component
 * @param {Object} props - Component props
 * @param {string} props.number - The stat number to display
 * @param {string} props.label - The description of the stat
 * @returns {JSX.Element}
 */
const StatItem = ({ number, label }) => (
  <div className="impact-stat">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

StatItem.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * Impact statistics section to show organization achievements
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {Array} props.stats - Array of stats objects with number and label properties
 * @returns {JSX.Element}
 */
const ImpactStats = ({
  title = "Notre impact",
  stats = [
    { number: "10+", label: "Communautés aidées" },
    { number: "9", label: "Projets réalisés" },
    { number: "18", label: "Gouvernorats couverts" },
    { number: "20", label: "Bénévoles actifs" },
  ],
}) => {
  return (
    <section className="impact-stats-section impact-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="impact-stats">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

ImpactStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default ImpactStats;
