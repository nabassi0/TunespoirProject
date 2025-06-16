import { useState, useEffect, useRef } from "react";
import "../styles/pages/nos-missions.scss";
import videoEnfantCourrir from "../assets/videos/videoEnfantCourrir.mp4";
import interviewVideo from "../assets/videos/Interview.mp4"; // Importation pour la vidéo d'interview
import { Link } from "react-router-dom"; // Importer Link pour le CTA

// Le composant PageHeader que vous aviez ajouté est supprimé car le titre sera dans le hero

const NosMissions = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);
  const [isInterviewVideoVisible, setIsInterviewVideoVisible] = useState(false); // État pour l'animation de la vidéo d'interview
  const [isAdditionalContentVisible, setIsAdditionalContentVisible] =
    useState(false); // État pour nouvelle section

  const interviewVideoRef = useRef(null); // Référence à la section de la vidéo d'interview
  const additionalContentRef = useRef(null); // Référence pour la nouvelle section

  useEffect(() => {
    setIsPageVisible(true); // Pour l'animation d'apparition initiale de la page

    // Gestion de l'effet parallax pour la vidéo du héro au défilement
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Cible la vidéo spécifique dans la section héro de cette page
      const heroVideo = document.querySelector(
        ".nos-missions-page .hero-section .hero-background-video"
      );
      if (heroVideo) {
        // Applique un déplacement vertical basé sur le défilement (effet parallax)
        // Le facteur (ex: 0.3 ou 0.4) contrôle la vitesse du parallax
        heroVideo.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer pour l'animation de la vidéo d'interview
    const observerOptions = { threshold: 0.1 };
    const observerCallback = (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === interviewVideoRef.current) {
            setIsInterviewVideoVisible(true);
          } else if (entry.target === additionalContentRef.current) {
            setIsAdditionalContentVisible(true);
          }
          observerInstance.unobserve(entry.target);
        }
      });
    };
    const intersectionObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (interviewVideoRef.current)
      intersectionObserver.observe(interviewVideoRef.current);
    if (additionalContentRef.current)
      intersectionObserver.observe(additionalContentRef.current);

    // Nettoyage de l'écouteur d'événement au démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (interviewVideoRef.current)
        intersectionObserver.unobserve(interviewVideoRef.current);
      if (additionalContentRef.current)
        intersectionObserver.unobserve(additionalContentRef.current);
    };
  }, []); // Se lance une fois après le montage du composant

  const missions = [
    {
      id: 1,
      title: "Agir pour l'éducation",
      description:
        "Notre vision est de promouvoir un développement durable et autonome des communautés rurales en Tunisie. Nous nous engageons à améliorer l'éducation, les conditions de vie et à favoriser la réinsertion sociale à travers des actions directes et adaptées.",
    },
    {
      id: 2,
      title: "Refuser l'assistanat",
      description:
        "Notre objectif est d'éradiquer la pauvreté localement, en respectant les réalités culturelles et sociales des populations, tout en évitant les effets néfastes de l'aide humanitaire. Nous privilégions une approche participative, centrée sur la dignité et l'autonomie.",
    },
    {
      id: 3,
      title: "Valoriser le local",
      description:
        "Forte de notre identité tunisienne, notre association assure une approche authentique et efficace pour répondre aux besoins locaux et établir des partenariats durables, fondés sur la confiance et l'engagement des communautés.",
    },
  ];

  return (
    <div className={`nos-missions-page ${isPageVisible ? "visible" : ""}`}>
      {/* Section Héro avec vidéo en arrière-plan */}
      <section className={`hero-section ${isPageVisible ? "visible" : ""}`}>
        <video
          src={videoEnfantCourrir}
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Nos Missions</h1>
        </div>
      </section>

      {/* Contenu principal : grille des missions */}
      <div className="container page-content-container">
        <section className="missions-grid">
          {missions.map((mission, index) => (
            <div
              key={mission.id}
              className="mission-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2>{mission.title}</h2>
              <p>{mission.description}</p>
            </div>
          ))}
        </section>

        {/* Nouvelle section de contenu additionnel */}
        <section
          ref={additionalContentRef}
          className={`additional-content-section ${
            isAdditionalContentVisible ? "is-visible" : ""
          }`}
        >
          <div className="additional-content-text">
            <h2>Notre Approche Holistique</h2>
            <p>
              Chez Tunespoir, chaque mission est abordée avec une vision à long
              terme, en plaçant les communautés au cœur de nos actions. Nous
              croyons fermement qu'un développement réussi passe par l'écoute,
              la collaboration et l'autonomisation. C'est pourquoi nous
              travaillons main dans la main avec les acteurs locaux pour
              construire des solutions durables et adaptées à leurs réalités
              uniques.
            </p>
            <p>
              Notre engagement va au-delà de l'aide ponctuelle ; il vise à semer
              les graines d'un avenir où chaque individu a les moyens de
              s'épanouir.
            </p>
          </div>
          <div className="additional-content-cta">
            <Link to="/nous-decouvrir" className="btn btn-primary-outline">
              En Savoir Plus Sur Nos Valeurs
            </Link>
          </div>
        </section>
      </div>

      {/* Section pour la vidéo Interview en bas */}
      <section
        ref={interviewVideoRef}
        className={`interview-video-section ${
          isInterviewVideoVisible ? "is-visible" : ""
        }`}
      >
        <div className="container">
          {/* Wrapper pour le lecteur vidéo pour mieux gérer le style des coins */}
          <div className="interview-video-player-wrapper">
            <video
              src={interviewVideo}
              className="interview-video-player"
              controls
              playsInline
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosMissions;
