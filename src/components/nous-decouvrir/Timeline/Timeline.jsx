import React from 'react';
import PropTypes from 'prop-types';
import './Timeline.scss';

/**
 * Timeline event component
 * @param {Object} props - Component props
 * @param {string} props.year - Event year
 * @param {string} props.title - Event title
 * @param {string} props.description - Event description
 * @returns {JSX.Element}
 */
const TimelineEvent = ({ year, title, description }) => (
  <div className="timeline-event">
    <div className="event-year">{year}</div>
    <div className="event-content">
      <div className="event-dot"></div>
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
    </div>
  </div>
);

TimelineEvent.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
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
  title = "Notre histoire",
  description = "Depuis notre création, nous avons parcouru un chemin extraordinaire. Découvrez les moments clés qui ont façonné notre organisation.",
  events = [
    {
      year: '2010',
      title: 'Création de l\'association',
      description: 'Fondation de l\'association par un groupe de bénévoles passionnés.'
    },
    {
      year: '2012',
      title: 'Premier projet international',
      description: 'Lancement de notre premier projet d\'accès à l\'eau potable au Mali.'
    },
    {
      year: '2015',
      title: 'Expansion de nos activités',
      description: 'Ouverture de bureaux dans trois nouveaux pays et diversification de nos domaines d\'action.'
    },
    {
      year: '2018',
      title: 'Reconnaissance internationale',
      description: 'Attribution du prix international de l\'innovation sociale pour notre programme d\'éducation.'
    },
    {
      year: '2021',
      title: 'Renforcement de notre impact',
      description: 'Développement de nouveaux partenariats stratégiques et augmentation significative du nombre de bénéficiaires.'
    }
  ]
}) => {
  return (
    <section className="timeline-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      
      <div className="timeline">
        {events.map((event, index) => (
          <TimelineEvent 
            key={index}
            year={event.year}
            title={event.title}
            description={event.description}
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
      description: PropTypes.string.isRequired
    })
  )
};

export default Timeline; 