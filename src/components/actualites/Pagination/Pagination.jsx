import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page buttons
  const renderPageButtons = () => {
    const pageButtons = [];
    
    // First page always shown
    pageButtons.push(
      <button 
        key={1}
        className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
    );
    
    // Determine start and end for visible page numbers
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Add dots if needed at the beginning
    if (startPage > 2) {
      pageButtons.push(<span key="dots-1" className="pagination-dots">...</span>);
    }
    
    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button 
          key={i}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    
    // Add dots if needed at the end
    if (endPage < totalPages - 1) {
      pageButtons.push(<span key="dots-2" className="pagination-dots">...</span>);
    }
    
    // Last page always shown if more than 1 page
    if (totalPages > 1) {
      pageButtons.push(
        <button 
          key={totalPages}
          className={`pagination-btn ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    
    return pageButtons;
  };
  
  // Show pagination only if there's more than 1 page
  if (totalPages <= 1) return null;
  
  return (
    <div className="pagination">
      {renderPageButtons()}
      
      {currentPage < totalPages && (
        <button 
          className="pagination-btn pagination-next"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Suivant <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default Pagination; 