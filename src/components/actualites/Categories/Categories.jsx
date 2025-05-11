import React from 'react';
import './Categories.scss';

const Categories = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="categories">
      <button 
        className={`category-btn ${activeCategory === 'Tous' ? 'active' : ''}`}
        onClick={() => onCategoryChange('Tous')}
      >
        Tous
      </button>
      
      {categories.map((category) => (
        <button 
          key={category}
          className={`category-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories; 