import React from "react";
import PropTypes from "prop-types";
import "./TeamSection.scss";
import Riadh from "../../../assets/images/equipe/riadh.png";
import Malek from "../../../assets/images/equipe/malekPhoto.png";
import Mohammed from "../../../assets/images/equipe/mohammed_.png";
import Momo from "../../../assets/images/equipe/momo.png";
import Mongi from "../../../assets/images/equipe/mongi.png";

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
      <img src={image} alt={name} className="member-image" />
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
  image: PropTypes.string.isRequired,
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
      name: "Riadh Ben Meftah",
      role: "Président de l’association",
      bio: "Passionné par l'humanitaire, Riadh dirige Tunespoir avec une vision claire : éradiquer la pauvreté en Tunisie et au-delà. Son engagement et son expertise guident notre action.",
      image: Riadh, // Using local image for Riadh
    },
    {
      id: 2,
      name: "Malek Guermazi",
      role: "Vice Président",
      bio: "Malek apporte son expertise en gestion de projets humanitaires pour soutenir notre mission. Il est le pilier de notre équipe, garantissant l'efficacité et la transparence de nos actions.",
      image: Malek, // Using local image for Malek
    },
    {
      id: 3,
      name: "Mohamed Ali Bouacha",
      role: "Trésorier",
      bio: "Mohamed Ali est le trésorier de Tunespoir, veillant à la bonne gestion financière de l'association. Son intégrité et son professionnalisme sont essentiels pour assurer la pérennité de nos projets.",
      image: Mohammed, // Using local image for Mohammed
    },
    {
      id: 4,
      name: "Mohamed Samet",
      role: "Coordonnateur des actions",
      bio: "Mohamed Samet est le coordonnateur des actions de Tunespoir. Il supervise nos projets sur le terrain, garantissant leur impact et leur alignement avec notre mission.",
      image: Momo, // Using local image for Mohamed Samet",
    },
    {
      id: 5,
      name: "Mongi Edhif",
      role: "Secretaire Général de l’association Tunespoir",
      bio: "Mongi Edhif est le Secrétaire Général de Tunespoir. Il joue un rôle clé dans la coordination des activités de l'association et assure la bonne communication entre les membres.",
      image: Mongi, // Using Malek's image for the fifth person
    },
  ],
}) => {
  return (
    <section className="team-section">
      <div className="team-content">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>

        <div className="team-carousel">
          <div className="team-carousel-container">
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
          </div>
        </div>
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
      image: PropTypes.string.isRequired,
    })
  ),
};

export default TeamSection;
