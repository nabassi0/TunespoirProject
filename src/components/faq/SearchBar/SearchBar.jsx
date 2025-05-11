import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.scss';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-section">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Rechercher une question..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar; 