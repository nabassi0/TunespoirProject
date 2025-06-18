import { useState, useEffect } from "react";
import {
  NewsGrid,
  PageHeader,
  Categories,
  Pagination,
} from "../components/actualites";
import "../styles/pages/actualites.scss";
import actuRecente from "../assets/images/actuRecentes/actuRecente.png";
import actuRecente2 from "../assets/images/actuRecentes/actuRecente2.png";
import actuRecente3 from "../assets/images/actuRecentes/actuRecente3.png";
import actuRecente4 from "../assets/images/actuRecentes/actuRecente4.png";
import actuRecente5 from "../assets/images/actuRecentes/actuRecente5.png";

const Actualites = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState([]);

  // Vraies actualités de Tunespoir
  const newsItems = [
    {
      id: 1,
      title: "Urgence sécuritaire au Lycée-Internat de Bargou",
      excerpt:
        "Après avoir rénové la cuisine, le réfectoire et les sanitaires, nous faisons face à une nouvelle urgence sanitaire et sécuritaire : remise aux normes du réseau électrique pour la sécurité des élèves, afin d'éviter un accident ou un incendie.",
      date: "15 janvier 2025",
      location: "Bargou, Siliana",
      category: "Éducation",
      image: actuRecente,
    },
    {
      id: 2,
      title: "Rénovation de l'école de Kerkouen",
      excerpt:
        "L'école de Kerkouen a besoin de travaux de rénovation pour offrir aux enfants un cadre d'apprentissage digne et sécurisé. Priorités : aménagement de la cour de récréation en dur et séparation des accès piétons/véhicules pour plus de sécurité.",
      date: "8 janvier 2025",
      location: "Kerkouen, Jendouba",
      category: "Éducation",
      image: actuRecente2,
    },
    {
      id: 3,
      title: "Aménagement de la salle d'ergothérapie INPE",
      excerpt:
        "Tunespoir souhaite participer à l'aménagement de la salle d'ergothérapie de l'INPE (Institut National de la Protection de l'Enfance) à La Manouba ainsi qu'à l'investissement en matériel relatif à l'ergothérapie.",
      date: "20 décembre 2024",
      location: "La Manouba, Tunis",
      category: "Santé",
      image: actuRecente3,
    },
    {
      id: 4,
      title: "Programme de soutien aux agriculteurs",
      excerpt:
        "Soutenir 50 petits agriculteurs par an, en situation de précarité par la plantation de 20 à 100 pieds d'oliviers/figuiers et/ou caroubiers par bénéficiaire, afin de renforcer leur autonomie alimentaire et générer un revenu durable.",
      date: "10 décembre 2024",
      location: "Nord-Ouest Tunisie",
      category: "Agriculture",
      image: actuRecente4,
    },
    {
      id: 5,
      title: "Collecte alimentaire pour 200 familles",
      excerpt:
        "Tunespoir a organisé, de mars à mai 2025, une collecte pour l'achat et la distribution de denrées alimentaires essentielles pour 200 familles dans le nord-ouest de la Tunisie, une région où 50% de la population vit au-dessous du seuil de pauvreté.",
      date: "1 mars 2025",
      location: "Nord-Ouest Tunisie",
      category: "Aide humanitaire",
      image: actuRecente5,
    },
    {
      id: 6,
      title: "Bilan 2024 : Un an de solidarité",
      excerpt:
        "Retour sur une année riche en projets : de la rénovation du Lycée de Bargou aux nouvelles initiatives pour 2025. Découvrez l'impact de vos dons et l'engagement continu de Tunespoir auprès des communautés rurales.",
      date: "31 décembre 2024",
      location: "Tunisie",
      category: "Bilan",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  // Extract unique categories
  const categories = [...new Set(newsItems.map((item) => item.category))];

  // Filter news items based on selected category
  useEffect(() => {
    const filtered =
      activeCategory === "Tous"
        ? newsItems
        : newsItems.filter((item) => item.category === activeCategory);

    setFilteredNews(filtered);
    setCurrentPage(1); // Reset to first page when changing category
  }, [activeCategory]);

  // Animation effect on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // For this example, we'll use 6 items per page
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Get current page items
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredNews.slice(startIndex, endIndex);
  };

  return (
    <div className={`actualites-page ${isVisible ? "visible" : ""}`}>
      <div className="container">
        <PageHeader
          title="Actualités"
          subtitle="Découvrez nos dernières actions et restez informés de nos projets en cours."
        />

        <Categories
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <NewsGrid newsItems={getCurrentItems()} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Actualites;
