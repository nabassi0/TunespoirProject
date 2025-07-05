import { useState, useEffect } from "react";
import {
  NewsGrid,
  PageHeader,
  Categories,
  Pagination,
} from "../components/actualites";
import { newsItems } from "../data/newsData";
import "../styles/pages/actualites.scss";

const Actualites = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState([]);

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
