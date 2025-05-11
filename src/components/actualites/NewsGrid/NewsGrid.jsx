import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsGrid.scss';

const NewsGrid = ({ newsItems }) => {
  return (
    <div className="news-grid">
      {newsItems.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsGrid; 