import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Categories.scss";

const Categories = ({ categories, activeCategory, onCategoryChange }) => {
  // Images temporaires - tu pourras les remplacer par les vraies images
  const carouselImages = [
    {
      src: "https://picsum.photos/1200/400?random=1",
      title: "Nos Actions Éducatives",
      description: "Construire l'avenir par l'éducation",
    },
    {
      src: "https://picsum.photos/1200/400?random=2",
      title: "Aide Humanitaire",
      description: "Soutenir les communautés vulnérables",
    },
    {
      src: "https://picsum.photos/1200/400?random=3",
      title: "Développement Durable",
      description: "Créer un impact positif et durable",
    },
    {
      src: "https://picsum.photos/1200/400?random=4",
      title: "Santé et Bien-être",
      description: "Améliorer l'accès aux soins de santé",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((currentImageIndex + 1) % carouselImages.length);

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % carouselImages.length
        );
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex, carouselImages.length]);

  const currentImage = carouselImages[currentImageIndex];

  const handleIndicatorClick = (index) => {
    if (index !== currentImageIndex) {
      setNextImageIndex(index);
      setTimeout(() => {
        setCurrentImageIndex(index);
      }, 100);
    }
  };

  return (
    <div className="categories-container">
      {/* Header Carousel */}
      <div className="carousel-header">
        <div className="carousel-wrapper">
          {/* Background Images */}
          {carouselImages.map((image, index) => (
            <div
              key={`bg-${index}`}
              className={`carousel-slide bg-slide ${
                index === currentImageIndex ? "active" : ""
              } ${index === nextImageIndex ? "next" : ""}`}
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            />
          ))}

          {/* Overlay Images with animation */}
          {carouselImages.map((image, index) => (
            <div
              key={`overlay-${index}`}
              className={`carousel-slide overlay-slide ${
                index === currentImageIndex ? "active" : ""
              } ${index === nextImageIndex ? "next" : ""}`}
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            />
          ))}

          <div className="carousel-overlay"></div>

          <div className="carousel-content">
            <div className="carousel-text">
              <h2 className="carousel-title">
                <TypeAnimation
                  sequence={[currentImage.title, 3000]}
                  wrapper="span"
                  speed={50}
                  key={currentImageIndex}
                  cursor={false}
                />
              </h2>
              <p className="carousel-description">
                <TypeAnimation
                  sequence={["", 500, currentImage.description, 2500]}
                  wrapper="span"
                  speed={30}
                  key={`desc-${currentImageIndex}`}
                  cursor={false}
                />
              </p>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <button
          className={`category-btn ${
            activeCategory === "Tous" ? "active" : ""
          }`}
          onClick={() => onCategoryChange("Tous")}
        >
          Tous
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
