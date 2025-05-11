import React from 'react';
import './TestimonialSection.scss';

const TestimonialSection = ({ testimonial }) => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-quote">
          <p>{testimonial.quote}</p>
          <div className="quote-author">
            <div className="author-image">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
              />
            </div>
            <div className="author-info">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 