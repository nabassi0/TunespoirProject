import { useState, useEffect } from 'react';
import { 
  NewsGrid, 
  PageHeader, 
  Categories, 
  Pagination 
} from '../components/actualites';
import '../styles/pages/actualites.scss';

const Actualites = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState([]);
  
  // Placeholder news items (in a real app, this would come from an API)
  const newsItems = [
    {
      id: 1,
      title: 'Distribution de nourriture au Mali',
      excerpt: 'Notre équipe a récemment organisé une distribution de nourriture pour plus de 500 familles dans la région de Mopti, au Mali, qui fait face à une crise alimentaire sévère depuis plusieurs mois.',
      date: '12 juin 2023',
      location: 'Mopti, Mali',
      category: 'Aide humanitaire',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Inauguration d\'une école au Népal',
      excerpt: 'Grâce à vos dons, nous avons pu construire et équiper une nouvelle école qui accueillera plus de 200 enfants dans la région montagneuse du Népal, durement touchée par les tremblements de terre de 2015.',
      date: '28 mai 2023',
      location: 'Katmandou, Népal',
      category: 'Éducation',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Appel à bénévoles pour notre mission d\'été',
      excerpt: 'Nous recherchons des volontaires motivés pour participer à notre prochaine mission humanitaire au Sénégal, qui se concentrera sur l\'accès à l\'eau potable et l\'amélioration des conditions sanitaires.',
      date: '15 mai 2023',
      location: 'Dakar, Sénégal',
      category: 'Volontariat',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Conférence sur le développement durable',
      excerpt: 'Notre organisation a participé à une conférence internationale sur le développement durable, où nous avons présenté nos projets d\'énergie renouvelable dans les communautés rurales.',
      date: '3 mai 2023',
      location: 'Paris, France',
      category: 'Événement',
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      title: 'Nouveau partenariat avec l\'UNICEF',
      excerpt: 'Nous sommes fiers d\'annoncer notre nouveau partenariat avec l\'UNICEF pour étendre nos programmes de santé maternelle et infantile dans plusieurs pays d\'Afrique de l\'Ouest.',
      date: '20 avril 2023',
      location: 'Genève, Suisse',
      category: 'Partenariat',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 6,
      title: 'Lancement d\'un programme de reforestation',
      excerpt: 'En collaboration avec les communautés locales, nous avons lancé un ambitieux programme de reforestation au Brésil, visant à planter plus de 50 000 arbres sur les trois prochaines années.',
      date: '5 avril 2023',
      location: 'Manaus, Brésil',
      category: 'Environnement',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ];
  
  // Extract unique categories
  const categories = [...new Set(newsItems.map(item => item.category))];
  
  // Filter news items based on selected category
  useEffect(() => {
    const filtered = activeCategory === 'Tous' 
      ? newsItems
      : newsItems.filter(item => item.category === activeCategory);
      
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className={`actualites-page ${isVisible ? 'visible' : ''}`}>
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