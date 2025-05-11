import React from 'react';
import './TestimonialsSection.scss';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Ils nous font confiance</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-container">
              <p className="quote">"{testimonial.quote}"</p>
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
              <div className="testimonial-logo">
                <img src={testimonial.logo} alt="Logo partenaire" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 