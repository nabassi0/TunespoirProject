import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Timeline.scss";

/**
 * Timeline event component
 * @param {Object} props - Component props
 * @param {string} props.year - Event year
 * @param {string} props.title - Event title
 * @param {string} props.description - Event description
 * @param {number} props.index - Event index for animation delay
 * @param {boolean} props.isVisible - Visibility state for animation
 * @returns {JSX.Element}
 */
const TimelineEvent = ({ year, title, description, index, isVisible }) => (
  <div
    className={`timeline-event ${isVisible ? "animate-in" : ""}`}
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="event-year">{year}</div>
    <div className="event-content">
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
    </div>
  </div>
);

TimelineEvent.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

/**
 * Timeline section component
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.events - Array of timeline event objects
 * @returns {JSX.Element}
 */
const Timeline = ({
  title = "Nos dates clés",
  events = [
    {
      year: "2013",
      title: "Création de l'association",
      description:
        "Fondation de l'association Tunespoir par des médecins anesthésistes réanimateurs engagés.",
    },
    {
      year: "2014",
      title: "Rénovation de l'école El Izdihar",
      description:
        "Rénovation complète de l'école El Izdihar à Fernana, gouvernorat de Jendouba.",
    },
    {
      year: "2015",
      title: "Reconstruction de l'école Chafai",
      description:
        "Reconstruction de l'école Chafai au gouvernorat de Jendouba.",
    },
    {
      year: "2016-2017",
      title: "Reconstruction de l'école Habib Bourguiba",
      description:
        "Reconstruction de l'école Habib Bourguiba au gouvernorat de Jendouba.",
    },
    {
      year: "2018",
      title: "Soutien au foyer de lycéens de Thala",
      description:
        "Soutien d'urgence au foyer de lycéens de Thala suite à l'incendie du 7 février 2018.",
    },
    {
      year: "2020",
      title: "Aide aux familles démunies et soutien médical",
      description:
        "Aide aux familles démunies à Ain Draham Fernana avec collecte et distribution de denrées alimentaires de première nécessité. Achat de matériel médical pour les Hôpitaux Habib Bourguiba (Sfax), Farhat Hached (Sousse) et Tahar Maamouri (Nabeul).",
    },
    {
      year: "2021",
      title: "Extension de l'aide hospitalière",
      description:
        "Aide à l'Hôpital de la Rabat (Tunis) et à l'Hôpital Ibnou Al Jazzar (Kairouan).",
    },
    {
      year: "2022",
      title: "Construction à l'Hôpital Hédi Chaker",
      description:
        "Aide à la construction d'un nouveau bâtiment à l'Hôpital Hédi Chaker (Sfax).",
    },
    {
      year: "2023",
      title: "Rénovation du Lycée de Bargou",
      description:
        "Rénovation des cuisines et cantines du Lycée/Internat de Bargou au gouvernorat de Siliana.",
    },
    {
      year: "2024",
      title: "Fin des travaux de Bargou",
      description:
        "Achèvement des travaux de rénovation du Lycée/Internat de Bargou.",
    },
  ],
}) => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === sectionRef.current) {
          setIsTimelineVisible(true);
          // Animation progressive de la ligne centrale
          setTimeout(() => {
            setLineProgress(100);
          }, 500);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`timeline-section ${
        isTimelineVisible ? "section-visible" : ""
      }`}
    >
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>

      <div ref={timelineRef} className="timeline">
        <div
          className="timeline-line"
          style={{ height: `${lineProgress}%` }}
        ></div>
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            year={event.year}
            title={event.title}
            description={event.description}
            index={index}
            isVisible={isTimelineVisible}
          />
        ))}
      </div>
    </section>
  );
};

Timeline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default Timeline;
