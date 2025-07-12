import { useEffect } from "react";

// Hook pour gérer le scroll en tenant compte de la navbar fixe
export const useScrollToTop = () => {
  useEffect(() => {
    // Scroll vers le haut en tenant compte de la navbar fixe (80px)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
};

// Fonction utilitaire pour scroller vers un élément en tenant compte de la navbar
export const scrollToElement = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

// Fonction pour scroller vers le haut
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
