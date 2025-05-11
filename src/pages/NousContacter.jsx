import { useState, useEffect } from 'react';
import { 
  PageHeader, 
  ContactInfo, 
  ContactForm, 
  SuccessMessage 
} from '../components/nous-contacter';
import '../styles/pages/nous-contacter.scss';

const NousContacter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  const handleSubmitSuccess = () => {
    setSubmitSuccess(true);
  };

  return (
    <div className={`contact-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <PageHeader />

        <div className="contact-container">
          <ContactInfo />

          <div className="contact-form-section">
            {submitSuccess ? (
              <SuccessMessage />
            ) : (
              <ContactForm onSubmitSuccess={handleSubmitSuccess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NousContacter; 