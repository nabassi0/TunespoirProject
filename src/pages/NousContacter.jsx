import { useState, useEffect } from "react";
import { ContactInfo } from "../components/nous-contacter";
import Hero from "../components/Hero/Hero";
import "../styles/pages/nous-contacter.scss";
import ImageHeader from "../assets/images/contactImage.jpg";

const NousContacter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <Hero
        title="Nous contacter"
        subtitle="Vous avez des questions, des suggestions ou souhaitez nous rejoindre ? N'hésitez pas à nous contacter, nous serons ravis d'échanger avec vous."
        imageUrl={ImageHeader}
      />

      <div className={`contact-content ${isVisible ? "visible" : ""}`}>
        <div className="container">
          <div className="contact-container">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NousContacter;
