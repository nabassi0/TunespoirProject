import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./NewsSection.scss";
import EcoleIzdihar from "../../../assets/images/Ecole_ElIzdihar.jpg";
import EcoleJendouba from "../../../assets/images/ecole_jendouba.png";
import EcoleHabibBourguiba from "../../../assets/images/ecole_habibBourgiba.png";

/**
 * News card component
 * @param {Object} props - Component props
 * @param {Object} props.newsItem - News item object
 * @returns {JSX.Element}
 */
const NewsCard = ({ newsItem }) => (
  <Link to={newsItem.link} className="news-card">
    <div className="news-image-container">
      <img
        src={newsItem.image}
        alt={newsItem.imageAlt}
        className="news-image"
      />
      <div className="news-overlay"></div>
      <div className="news-category-badge">Éducation</div>
    </div>

    <div className="news-content">
      <div className="news-meta">
        <span className="news-date">{newsItem.date}</span>
        {newsItem.location && (
          <span className="news-location">{newsItem.location}</span>
        )}
      </div>

      <h3 className="news-title">{newsItem.title}</h3>
      <p className="news-excerpt">{newsItem.excerpt}</p>

      <div className="news-footer">
        <span className="read-more">
          {newsItem.linkText || "Lire l'article"}
        </span>
      </div>
    </div>
  </Link>
);

NewsCard.propTypes = {
  newsItem: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string,
    linkText: PropTypes.string,
  }).isRequired,
};

/**
 * News section displaying recent articles
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.viewAllLink - Link to all news
 * @param {string} props.viewAllText - Text for view all link
 * @param {Array} props.newsItems - Array of news article objects
 * @returns {JSX.Element}
 */
const NewsSection = ({
  title = "Actualités récentes",
  viewAllLink = "/actualites",
  viewAllText = "Voir toutes les actualités",
  newsItems = [
    {
      image: EcoleIzdihar,
      imageAlt: "Rénovation d'une école",
      date: "12 juin 2023",
      title: "Rénovation de l'école El Izdihar",
      excerpt:
        "Notre équipe a réalisé la rénovation de l'école El Izdihar avec une reconstruction de près de 70% de l'école.",
      link: "/actualites",
      location: "Fernana, Jendouba",
    },
    {
      image: EcoleJendouba,
      imageAlt: "Reconstruction d'une école",
      date: "28 mai 2023",
      title: "Reconstruction de l'école Chafaï à Jendouba",
      excerpt:
        "Grâce à vos dons, nous avons pu construire et équiper une école qui accueillera plus de 200 enfants.",
      link: "/actualites",
      location: "Jendouba",
    },
    {
      image: EcoleHabibBourguiba,
      imageAlt: "Rénovation",
      date: "15 mai 2023",
      title: "Rénovation de l'école Habib Bourguiba à Jendouba",
      excerpt:
        "Rénovation de l'établissement en forte dégradation avec 14 salles de classes accueillant 750 élèves.",
      link: "/actualites",
      location: "Jendouba",
    },
  ],
}) => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <Link to={viewAllLink} className="view-all">
            {viewAllText} <FaArrowRight />
          </Link>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <NewsCard key={index} newsItem={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

NewsSection.propTypes = {
  title: PropTypes.string,
  viewAllLink: PropTypes.string,
  viewAllText: PropTypes.string,
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      location: PropTypes.string,
      linkText: PropTypes.string,
    })
  ),
};

export default NewsSection;
