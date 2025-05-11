import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQItem.scss';

const FAQItem = ({ faq, isExpanded, onToggle }) => {
  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="faq-question" onClick={onToggle}>
        <h3>{faq.question}</h3>
        <button className="toggle-btn">
          {isExpanded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem; 