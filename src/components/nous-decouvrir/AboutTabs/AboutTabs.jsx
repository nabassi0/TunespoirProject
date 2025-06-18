import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaSeedling,
  FaHandHoldingHeart,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
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
      icon: <FaGraduationCap className="mission-icon" />,
      title: "Éducation et Scolarisation",
      description:
        "Favoriser l'accès à l'éducation et lutter contre la déscolarisation. Nous réhabilitons les infrastructures scolaires pour offrir un cadre d'apprentissage sécurisé et accueillant aux enfants des zones rurales.",
    },
    {
      icon: <FaHeartbeat className="mission-icon" />,
      title: "Santé et Soins Médicaux",
      description:
        "Permettre l'accès aux soins médicaux urgents et essentiels. Nous soutenons les hôpitaux par l'achat de matériel médical et participons à la construction de nouveaux pavillons de soins.",
    },
    {
      icon: <FaHome className="mission-icon" />,
      title: "Aide Sociale et Logement",
      description:
        "Améliorer les conditions de vie en favorisant l'accès à la nourriture, à l'eau potable et à un logement décent. Nous organisons des collectes et luttons contre l'insalubrité des habitats.",
    },
  ],
  values = [
    {
      icon: <FaHandHoldingHeart className="value-icon" />,
      title: "Solidarité",
      description:
        "Nous croyons en la force de la solidarité pour unir les communautés et surmonter ensemble les défis de la pauvreté rurale.",
    },
    {
      icon: <FaUsers className="value-icon" />,
      title: "Engagement",
      description:
        "Nous nous engageons avec détermination auprès des familles et des enfants pour transformer durablement leurs conditions de vie.",
    },
    {
      icon: <FaLightbulb className="value-icon" />,
      title: "Innovation",
      description:
        "Nous développons des solutions créatives et adaptées aux réalités locales pour maximiser l'impact de nos interventions.",
    },
    {
      icon: <FaShieldAlt className="value-icon" />,
      title: "Dignité",
      description:
        "Nous respectons la dignité de chaque personne et refusons l'assistanat au profit d'un accompagnement vers l'autonomie.",
    },
    {
      icon: <FaHandshake className="value-icon" />,
      title: "Partenariat",
      description:
        "Nous privilégions une approche collaborative avec les acteurs locaux pour construire des solutions pérennes et ancrées dans le territoire.",
    },
  ],
  approachIntro = "Notre approche repose sur l'écoute des besoins réels et l'accompagnement vers l'autonomie. Nous refusons l'assistanat et privilégions une démarche participative en 5 étapes :",
  approachSteps = [
    {
      title: "Identifier",
      description:
        "Nous identifions les besoins prioritaires des communautés rurales lors de visites terrain et d'échanges avec les populations locales.",
    },
    {
      title: "Concevoir",
      description:
        "Nous concevons des projets adaptés aux réalités locales en collaboration avec les acteurs du territoire et les bénéficiaires.",
    },
    {
      title: "Mobiliser",
      description:
        "Nous mobilisons nos ressources et nos partenaires pour mettre en œuvre des actions concrètes et mesurables sur le terrain.",
    },
    {
      title: "Accompagner",
      description:
        "Nous accompagnons les communautés dans la réalisation des projets en renforçant leurs capacités et leur autonomie.",
    },
    {
      title: "Pérenniser",
      description:
        "Nous nous assurons que nos interventions créent un impact durable en transférant progressivement la responsabilité aux acteurs locaux.",
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
      {/* Section "Qui sommes-nous ?" déplacée au début */}
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
            initiative née en décembre 2013 de la volonté de transformer le
            destin des communautés rurales défavorisées.
          </p>
          <p>
            Cette association a été créée à la suite d'un constat alarmant
            effectué par ses fondateurs, principalement des amis et médecins,
            lors d'une visite dans les zones rurales de Tunisie. Ils y ont
            découvert une pauvreté extrême caractérisée par un accès quasi
            inexistant aux soins, des droits fondamentaux ignorés, l'absence
            d'électricité et d'eau courante, ainsi que des écoles délabrées et
            abandonnées depuis plus de 25 ans.
          </p>
          <p>
            Face à cette réalité insoutenable, un groupe d'amis a décidé d'agir
            en se concentrant sur un levier essentiel : l'éducation. Leur
            mobilisation était motivée par une inquiétude profonde face au fossé
            grandissant entre les populations rurales, qui se sentent
            abandonnées, et celles des villes, mieux loties.
          </p>
          <p>
            En réponse, Tunespoir s'est donné pour mission de redonner espoir à
            la jeunesse en investissant dans son avenir éducatif.
          </p>
        </div>
      </section>

      {/* Section des onglets qui suit */}
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
