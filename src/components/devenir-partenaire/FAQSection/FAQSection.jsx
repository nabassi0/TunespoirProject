import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './FAQSection.scss';

const FAQSection = ({ faqs }) => {
  return (
    <section className="faq-section">
      <h2 className="section-title">Questions fréquentes</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="faq-more">
        <Link to="/faq" className="faq-link">
          Voir toutes les questions <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default FAQSection; 