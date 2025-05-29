import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./NewsSection.scss";
import EcoleIzdihar from "../../../assets/images/Ecole_Elizdihar.jpg";
import EcoleJendouba from "../../../assets/images/ecole_jendouba.png";
import EcoleHabibBourguiba from "../../../assets/images/ecole_habibBourgiba.png";

/**
 * News card component
 * @param {Object} props - Component props
 * @param {string} props.image - URL for the news image
 * @param {string} props.imageAlt - Alt text for the news image
 * @param {string} props.date - Publication date
 * @param {string} props.title - News title
 * @param {string} props.excerpt - Short description/excerpt
 * @param {string} props.link - Link to the full article
 * @param {string} props.linkText - Text for the link
 * @returns {JSX.Element}
 */
const NewsCard = ({
  image,
  imageAlt,
  date,
  title,
  excerpt,
  link,
  linkText,
}) => (
  <div className="news-card">
    <img src={image} alt={imageAlt} className="news-image" />
    <div className="news-content">
      <span className="news-date">{date}</span>
      <h3 className="news-title">{title}</h3>
      <p className="news-excerpt">{excerpt}</p>
      <Link to={link} className="read-more">
        {linkText} <FaArrowRight className="icon-arrow" />
      </Link>
    </div>
  </div>
);

NewsCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string,
};

NewsCard.defaultProps = {
  linkText: "Lire l'article",
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
    },
    {
      image: EcoleJendouba,
      imageAlt: "Reconstruction d'une école",
      date: "28 mai 2023",
      title: "Reconstruction de l'école Chafaï à Jendouba",
      excerpt:
        "Grâce à vos dons, nous avons pu construire et équiper une école qui accueillera plus de 200 enfants.",
      link: "/actualites",
    },
    {
      image: EcoleHabibBourguiba,
      imageAlt: "Rénonvation",
      date: "15 mai 2023",
      title: "Rénovation de l'école Habib Bourguiba à Jendouba",
      excerpt:
        "Rénovation de l'éblissement en forte dégradation avec 14 salles de classes accueillant 750 élèves.",
      link: "/actualites",
    },
  ],
}) => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>
        <Link to={viewAllLink} className="view-all">
          {viewAllText} <FaArrowRight />
        </Link>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              image={item.image}
              imageAlt={item.imageAlt}
              date={item.date}
              title={item.title}
              excerpt={item.excerpt}
              link={item.link}
              linkText={item.linkText}
            />
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
      linkText: PropTypes.string,
    })
  ),
};

export default NewsSection;
