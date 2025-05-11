import React from 'react';
import FAQItem from '../FAQItem/FAQItem';
import './FAQSection.scss';

const FAQSection = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  filteredFaqs, 
  expandedItems, 
  toggleItem,
  searchTerm 
}) => {
  return (
    <>
      {!searchTerm && (
        <div className="faq-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}

      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map(faq => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isExpanded={expandedItems[faq.id]}
              onToggle={() => toggleItem(faq.id)} 
            />
          ))
        ) : (
          <div className="no-results">
            <p>Aucun résultat trouvé pour votre recherche. Essayez avec d'autres termes.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQSection; 