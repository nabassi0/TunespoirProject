import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./NewsCard.scss";

const NewsCard = ({ item }) => {
  return (
    <Link to={`/actualites/${item.id}`} className="news-card">
      <div className="news-image-container">
        <img src={item.image} alt={item.title} className="news-image" />
        <span className="news-category">{item.category}</span>
      </div>
      <div className="news-content">
        <div className="news-meta">
          <span className="news-date">
            <FaCalendarAlt /> {item.date}
          </span>
          <span className="news-location">
            <FaMapMarkerAlt /> {item.location}
          </span>
        </div>
        <h3 className="news-title">{item.title}</h3>
        <p className="news-excerpt">{item.excerpt}</p>
        <div className="read-more">
          Lire l'article <FaArrowRight />
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
