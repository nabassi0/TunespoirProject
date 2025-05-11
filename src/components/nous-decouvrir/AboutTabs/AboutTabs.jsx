import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHandHoldingHeart, FaUsers, FaGlobeAfrica, FaCheckCircle } from 'react-icons/fa';
import './AboutTabs.scss';

// Mission content component
const MissionContent = ({ missionAreas }) => (
  <div className="mission-content">
    <div className="mission-areas">
      {missionAreas.map((area, index) => (
        <div className="mission-area" key={index}>
          {area.icon}
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </div>
      ))}
    </div>
  </div>
);

MissionContent.propTypes = {
  missionAreas: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

// Values content component
const ValuesContent = ({ values }) => (
  <div className="values-content">
    <ul className="values-list">
      {values.map((value, index) => (
        <li key={index}>
          {value.icon}
          <div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

ValuesContent.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

// Approach content component
const ApproachContent = ({ intro, steps }) => (
  <div className="approach-content">
    <p className="approach-intro">{intro}</p>
    <div className="approach-steps">
      {steps.map((step, index) => (
        <div className="approach-step" key={index}>
          <div className="step-number">{index + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </div>
);

ApproachContent.propTypes = {
  intro: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

/**
 * About tabs component with mission, values, and approach
 * @param {Object} props - Component props
 * @returns {JSX.Element}
 */
const AboutTabs = ({ 
  tabs = [
    { id: 'mission', label: 'Notre mission' },
    { id: 'values', label: 'Nos valeurs' },
    { id: 'approach', label: 'Notre approche' }
  ],
  defaultTab = 'mission',
  missionAreas = [
    {
      icon: <FaHandHoldingHeart className="mission-icon" />,
      title: 'Aide humanitaire',
      description: 'Nous intervenons rapidement pour apporter une aide d\'urgence aux populations touchées par des catastrophes naturelles, des conflits ou des crises humanitaires.'
    },
    {
      icon: <FaUsers className="mission-icon" />,
      title: 'Développement communautaire',
      description: 'Nous mettons en œuvre des projets de développement durable avec les communautés locales dans les domaines de l\'éducation, la santé, l\'accès à l\'eau et l\'agriculture.'
    },
    {
      icon: <FaGlobeAfrica className="mission-icon" />,
      title: 'Protection de l\'environnement',
      description: 'Nous travaillons à la préservation des écosystèmes et encourageons des pratiques respectueuses de l\'environnement au sein des communautés.'
    }
  ],
  values = [
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: 'Solidarité',
      description: 'Nous croyons en la puissance de la solidarité pour unir les peuples et surmonter ensemble les défis.'
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: 'Respect',
      description: 'Nous respectons la dignité, la culture et les aspirations des communautés avec lesquelles nous travaillons.'
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: 'Transparence',
      description: 'Nous nous engageons à être totalement transparents dans notre gestion et nos actions.'
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: 'Innovation',
      description: 'Nous encourageons l\'innovation et la créativité pour trouver des solutions durables aux défis complexes.'
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: 'Engagement',
      description: 'Nous sommes déterminés à mener nos actions avec professionnalisme et un engagement sans faille.'
    }
  ],
  approachIntro = 'Notre approche est centrée sur les communautés et vise à renforcer leur autonomie. Nous travaillons avec une méthodologie en 5 étapes :',
  approachSteps = [
    {
      title: 'Écouter',
      description: 'Nous commençons par écouter les besoins réels des communautés et comprendre leur contexte spécifique.'
    },
    {
      title: 'Collaborer',
      description: 'Nous concevons les projets en collaboration avec les acteurs locaux pour garantir leur pertinence.'
    },
    {
      title: 'Agir',
      description: 'Nous mettons en œuvre les projets avec rigueur et flexibilité, en impliquant activement les communautés.'
    },
    {
      title: 'Évaluer',
      description: 'Nous évaluons constamment l\'impact de nos actions pour les améliorer et les adapter.'
    },
    {
      title: 'Pérenniser',
      description: 'Nous travaillons à rendre nos projets autonomes et durables sur le long terme.'
    }
  ]
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <section className="about-tabs">
      <div className="tabs-navigation">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'mission' && (
          <MissionContent missionAreas={missionAreas} />
        )}

        {activeTab === 'values' && (
          <ValuesContent values={values} />
        )}

        {activeTab === 'approach' && (
          <ApproachContent intro={approachIntro} steps={approachSteps} />
        )}
      </div>
    </section>
  );
};

AboutTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  defaultTab: PropTypes.string,
  missionAreas: PropTypes.array,
  values: PropTypes.array,
  approachIntro: PropTypes.string,
  approachSteps: PropTypes.array
};

export default AboutTabs; 