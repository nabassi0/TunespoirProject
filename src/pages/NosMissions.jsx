import { useState, useEffect } from "react";
import "../styles/pages/nos-missions.scss";

// Placeholder for a generic PageHeader, adjust as needed
const PageHeader = () => (
  <header className="page-header">
    <h1>Nos Missions</h1>
  </header>
);

const NosMissions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className={`nos-missions-page ${isVisible ? "visible" : ""}`}>
      <div className="container">
        <PageHeader />
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
      </div>
    </div>
  );
};

export default NosMissions;
