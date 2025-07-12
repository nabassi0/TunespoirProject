import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaTag,
  FaChevronLeft,
  FaChevronRight,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { newsItems } from "../data/newsData";
import "../styles/pages/actualite-detail.scss";

const ActualiteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Scroll vers le haut lors du montage du composant
    window.scrollTo(0, 0);

    const foundArticle = newsItems.find((item) => item.id === parseInt(id));
    if (foundArticle) {
      setArticle(foundArticle);

      // Trouver des articles similaires (même catégorie)
      const related = newsItems
        .filter(
          (item) =>
            item.id !== parseInt(id) && item.category === foundArticle.category
        )
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [id]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? article.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === article.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const shareArticle = (platform) => {
    const url = window.location.href;
    const title = article.title;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  if (!article) {
    return (
      <div className="actualite-detail-page">
        <div className="container">
          <div className="article-not-found">
            <h2>Article non trouvé</h2>
            <p>L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link to="/actualites" className="back-btn">
              <FaArrowLeft /> Retour aux actualités
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="actualite-detail-page">
      <div className="container">
        {/* Navigation */}
        <div className="article-nav">
          <button onClick={() => navigate(-1)} className="back-btn">
            <FaArrowLeft /> Retour
          </button>
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/actualites">Actualités</Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>
        </div>

        {/* En-tête de l'article */}
        <header className="article-header">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <div className="article-tags">
              {article.tags?.map((tag, index) => (
                <span key={index} className="tag">
                  <FaTag /> {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>

          <div className="article-info">
            <div className="info-left">
              <span className="info-item">
                <FaCalendarAlt /> {article.date}
              </span>
              <span className="info-item">
                <FaMapMarkerAlt /> {article.location}
              </span>
              <span className="info-item">
                <FaUser /> {article.author}
              </span>
              <span className="info-item">
                <FaClock /> {article.readTime}
              </span>
            </div>

            <div className="share-buttons">
              <span className="share-label">
                <FaShare /> Partager :
              </span>
              <button
                onClick={() => shareArticle("facebook")}
                className="share-btn facebook"
              >
                <FaFacebook />
              </button>
              <button
                onClick={() => shareArticle("twitter")}
                className="share-btn twitter"
              >
                <FaTwitter />
              </button>
              <button
                onClick={() => shareArticle("linkedin")}
                className="share-btn linkedin"
              >
                <FaLinkedin />
              </button>
            </div>
          </div>
        </header>

        {/* Image principale */}
        <div className="article-hero-image">
          <img
            src={article.image}
            alt={article.title}
            onClick={() => openGallery(0)}
          />
        </div>

        {/* Contenu de l'article */}
        <div className="article-content">
          <div className="content-wrapper">
            <div
              className="article-text"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        {/* Galerie d'images */}
        {article.gallery && article.gallery.length > 1 && (
          <div className="article-gallery">
            <h3>Galerie photos</h3>
            <div className="gallery-grid">
              {article.gallery.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={image}
                    alt={`${article.title} - Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Articles similaires */}
        {relatedArticles.length > 0 && (
          <div className="related-articles">
            <h3>Articles similaires</h3>
            <div className="related-grid">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/actualites/${relatedArticle.id}`}
                  className="related-card"
                >
                  <img src={relatedArticle.image} alt={relatedArticle.title} />
                  <div className="related-content">
                    <span className="related-category">
                      {relatedArticle.category}
                    </span>
                    <h4>{relatedArticle.title}</h4>
                    <p>{relatedArticle.excerpt}</p>
                    <span className="related-date">{relatedArticle.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="article-cta"></div>
      </div>

      {/* Modal Galerie */}
      {isGalleryOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeGallery}>
              ×
            </button>
            <button className="modal-prev" onClick={handlePrevImage}>
              <FaChevronLeft />
            </button>
            <img
              src={article.gallery[currentImageIndex]}
              alt={`${article.title} - Image ${currentImageIndex + 1}`}
            />
            <button className="modal-next" onClick={handleNextImage}>
              <FaChevronRight />
            </button>
            <div className="modal-counter">
              {currentImageIndex + 1} / {article.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualiteDetail;
