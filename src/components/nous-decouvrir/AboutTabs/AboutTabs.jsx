import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  FaHandHoldingHeart,
  FaUsers,
  FaGlobeAfrica,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AboutTabs.scss";

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
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
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
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
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
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/**
 * About tabs component with mission, values, and approach
 * @param {Object} props - Component props
 * @returns {JSX.Element}
 */
const AboutTabs = ({
  tabs = [
    { id: "mission", label: "Notre mission" },
    { id: "values", label: "Nos valeurs" },
    { id: "approach", label: "Notre approche" },
  ],
  defaultTab = "mission",
  missionAreas = [
    {
      icon: <FaHandHoldingHeart className="mission-icon" />,
      title: "Aide humanitaire",
      description:
        "Nous intervenons rapidement pour apporter une aide d'urgence aux populations touchées par des catastrophes naturelles, des conflits ou des crises humanitaires.",
    },
    {
      icon: <FaUsers className="mission-icon" />,
      title: "Développement communautaire",
      description:
        "Nous mettons en œuvre des projets de développement durable avec les communautés locales dans les domaines de l'éducation, la santé, l'accès à l'eau et l'agriculture.",
    },
    {
      icon: <FaGlobeAfrica className="mission-icon" />,
      title: "Protection de l'environnement",
      description:
        "Nous travaillons à la préservation des écosystèmes et encourageons des pratiques respectueuses de l'environnement au sein des communautés.",
    },
  ],
  values = [
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: "Solidarité",
      description:
        "Nous croyons en la puissance de la solidarité pour unir les peuples et surmonter ensemble les défis.",
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: "Respect",
      description:
        "Nous respectons la dignité, la culture et les aspirations des communautés avec lesquelles nous travaillons.",
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: "Transparence",
      description:
        "Nous nous engageons à être totalement transparents dans notre gestion et nos actions.",
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: "Innovation",
      description:
        "Nous encourageons l'innovation et la créativité pour trouver des solutions durables aux défis complexes.",
    },
    {
      icon: <FaCheckCircle className="value-icon" />,
      title: "Engagement",
      description:
        "Nous sommes déterminés à mener nos actions avec professionnalisme et un engagement sans faille.",
    },
  ],
  approachIntro = "Notre approche est centrée sur les communautés et vise à renforcer leur autonomie. Nous travaillons avec une méthodologie en 5 étapes :",
  approachSteps = [
    {
      title: "Écouter",
      description:
        "Nous commençons par écouter les besoins réels des communautés et comprendre leur contexte spécifique.",
    },
    {
      title: "Collaborer",
      description:
        "Nous concevons les projets en collaboration avec les acteurs locaux pour garantir leur pertinence.",
    },
    {
      title: "Agir",
      description:
        "Nous mettons en œuvre les projets avec rigueur et flexibilité, en impliquant activement les communautés.",
    },
    {
      title: "Évaluer",
      description:
        "Nous évaluons constamment l'impact de nos actions pour les améliorer et les adapter.",
    },
    {
      title: "Pérenniser",
      description:
        "Nous travaillons à rendre nos projets autonomes et durables sur le long terme.",
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isWhoWeAreVisible, setIsWhoWeAreVisible] = useState(false);

  const whoWeAreRef = useRef(null);

  useEffect(() => {
    // Intersection Observer pour l'animation de la section "Qui sommes-nous"
    const observerOptions = { threshold: 0.1 };
    const observerCallback = (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === whoWeAreRef.current) {
            setIsWhoWeAreVisible(true);
          }
          observerInstance.unobserve(entry.target);
        }
      });
    };
    const intersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (whoWeAreRef.current) intersectionObserver.observe(whoWeAreRef.current);

    return () => {
      if (whoWeAreRef.current)
        intersectionObserver.unobserve(whoWeAreRef.current);
    };
  }, []);

  return (
    <>
      <section className="about-tabs">
        <div className="tabs-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "mission" && (
            <MissionContent missionAreas={missionAreas} />
          )}

          {activeTab === "values" && <ValuesContent values={values} />}

          {activeTab === "approach" && (
            <ApproachContent intro={approachIntro} steps={approachSteps} />
          )}
        </div>
      </section>

      {/* Nouvelle section "Qui sommes-nous ?" */}
      <section
        ref={whoWeAreRef}
        className={`who-we-are-section ${
          isWhoWeAreVisible ? "is-visible" : ""
        }`}
      >
        <div className="who-we-are-text">
          <h2>Qui sommes-nous ?</h2>
          <p>
            Fondée sur l'engagement et la solidarité, Tunespoir est une
            initiative née d'une profonde volonté de changer le destin des
            communautés rurales défavorisées de Tunisie.
          </p>
          <p>
            Notre association a vu le jour en décembre 2013, à la suite d'un
            constat alarmant effectué par ses fondateurs, des amis médecins,
            lors d'une visite dans les zones rurales de Tunisie. Ils y ont
            découvert une pauvreté extrême : un accès quasi inexistant aux
            soins, des droits fondamentaux bafoués, l'absence d'eau courante, et
            des écoles délabrées, laissées à l'abandon depuis plus de 25 ans.
          </p>
          <p>
            Face à cette réalité insoutenable, les membres fondateurs, amis et
            tous médecins anesthésistes réanimateurs, ont décidé d'agir
            rapidement, en concentrant leurs efforts sur un levier essentiel :
            l'éducation.
          </p>
          <p>
            À l'origine de cette mobilisation, une inquiétude profonde : le
            fossé grandissant entre les populations rurales délaissées, nourries
            d'un sentiment d'abandon, et celles des villes, mieux loties.
          </p>
          <p>
            La réponse de Tunespoir a été claire : redonner espoir à la jeunesse
            en investissant dans leur avenir éducatif.
          </p>
        </div>
      </section>
    </>
  );
};

AboutTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  defaultTab: PropTypes.string,
  missionAreas: PropTypes.array,
  values: PropTypes.array,
  approachIntro: PropTypes.string,
  approachSteps: PropTypes.array,
};

export default AboutTabs;
