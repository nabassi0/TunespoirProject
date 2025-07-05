import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { newsItems } from "../../../data/newsData";
import "./NewsSection.scss";

/**
 * News card component
 * @param {Object} props - Component props
 * @param {Object} props.newsItem - News item object
 * @returns {JSX.Element}
 */
const NewsCard = ({ newsItem }) => (
  <Link to={newsItem.link} className="news-card">
    <div className="news-image-container">
      <img src={newsItem.image} alt={newsItem.title} className="news-image" />
      <div className="news-overlay"></div>
      <div className="news-category-badge">{newsItem.category}</div>
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
        <span className="read-more">Lire l'article</span>
      </div>
    </div>
  </Link>
);

NewsCard.propTypes = {
  newsItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.string,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * News section displaying recent articles
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.viewAllLink - Link to all news
 * @param {string} props.viewAllText - Text for view all link
 * @param {number} props.itemsToShow - Number of items to display (default: 3)
 * @returns {JSX.Element}
 */
const NewsSection = ({
  title = "Actualités récentes",
  viewAllLink = "/actualites",
  viewAllText = "Voir toutes les actualités",
  itemsToShow = 3,
}) => {
  // Get the most recent news items (sorted by date or just take first items)
  const recentNews = newsItems.slice(0, itemsToShow);

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
          {recentNews.map((item) => (
            <NewsCard key={item.id} newsItem={item} />
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
  itemsToShow: PropTypes.number,
};

export default NewsSection;
