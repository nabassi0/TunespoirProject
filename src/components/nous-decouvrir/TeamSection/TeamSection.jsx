import React from 'react';
import PropTypes from 'prop-types';
import './TeamSection.scss';

/**
 * Team member card component
 * @param {Object} props - Component props
 * @param {string} props.name - Team member name
 * @param {string} props.role - Team member role
 * @param {string} props.bio - Team member biography
 * @param {string} props.image - Team member image URL
 * @returns {JSX.Element}
 */
const TeamMemberCard = ({ name, role, bio, image }) => (
  <div className="team-member-card">
    <div className="member-image-container">
      <img 
        src={image} 
        alt={name} 
        className="member-image" 
      />
    </div>
    <div className="member-info">
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
      <p className="member-bio">{bio}</p>
    </div>
  </div>
);

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

/**
 * Team section component
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.teamMembers - Array of team member objects
 * @returns {JSX.Element}
 */
const TeamSection = ({ 
  title = "Notre équipe",
  description = "Passionnés et engagés, les membres de notre équipe travaillent sans relâche pour accomplir notre mission. Découvrez les personnes qui font la différence au quotidien.",
  teamMembers = [
    {
      id: 1,
      name: 'Sophie Martin',
      role: 'Présidente',
      bio: 'Passionnée par l\'aide humanitaire depuis plus de 15 ans, Sophie a travaillé dans de nombreux pays avant de fonder notre association.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      role: 'Directeur des opérations',
      bio: 'Expert en logistique humanitaire, Thomas coordonne nos actions sur le terrain et assure l\'efficacité de nos interventions.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Amina Camara',
      role: 'Responsable des projets',
      bio: 'Spécialiste du développement durable, Amina conçoit et supervise nos projets pour garantir leur impact positif à long terme.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Jean Leroy',
      role: 'Responsable financier',
      bio: 'Avec son expertise en gestion financière des ONG, Jean assure la transparence et l\'optimisation de nos ressources.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ]
}) => {
  return (
    <section className="team-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
      </div>
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMemberCard 
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};

export default TeamSection; 