import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './NewsSection.scss';

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
  linkText 
}) => (
  <div className="news-card">
    <img 
      src={image} 
      alt={imageAlt} 
      className="news-image"
    />
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
  linkText: PropTypes.string
};

NewsCard.defaultProps = {
  linkText: 'Lire l\'article'
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
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "Distribution de nourriture",
      date: "12 juin 2023",
      title: "Distribution de nourriture au Mali",
      excerpt: "Notre équipe a récemment organisé une distribution de nourriture pour plus de 500 familles dans la région de Mopti.",
      link: "/actualites"
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "Construction d'une école",
      date: "28 mai 2023",
      title: "Inauguration d'une école au Népal",
      excerpt: "Grâce à vos dons, nous avons pu construire et équiper une nouvelle école qui accueillera plus de 200 enfants.",
      link: "/actualites"
    },
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageAlt: "Volontaires",
      date: "15 mai 2023",
      title: "Appel à bénévoles pour notre mission d'été",
      excerpt: "Nous recherchons des volontaires motivés pour participer à notre prochaine mission humanitaire au Sénégal.",
      link: "/actualites"
    }
  ]
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
      linkText: PropTypes.string
    })
  )
};

export default NewsSection; 