import { useState, useEffect } from 'react';
import {
  PageHeader,
  PartnershipTypes,
  PartnerGrid,
  TestimonialSection,
  PartnerCTA
} from '../components/nos-partenaires';
import '../styles/pages/nos-partenaires.scss';

const NosPartenaires = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  // Partners data with categories
  const partners = [
    {
      id: 1,
      name: 'Entreprise ABC',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Leader dans le secteur de la technologie, Entreprise ABC soutient nos projets d\'accès à l\'eau potable depuis 2018.',
      category: 'entreprise',
      website: '#'
    },
    {
      id: 2,
      name: 'Fondation XYZ',
      logo: 'https://via.placeholder.com/200x100',
      description: 'La Fondation XYZ finance nos programmes éducatifs dans plusieurs pays d\'Afrique.',
      category: 'fondation',
      website: '#'
    },
    {
      id: 3,
      name: 'Organisation 123',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Organisation internationale avec laquelle nous collaborons sur le terrain pour des projets de santé maternelle.',
      category: 'ong',
      website: '#'
    },
    {
      id: 4,
      name: 'Groupe DEF',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Le Groupe DEF met à notre disposition ses compétences en ingénierie pour nos projets d\'infrastructures.',
      category: 'entreprise',
      website: '#'
    },
    {
      id: 5,
      name: 'Ministère de la Coopération',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Le Ministère finance certains de nos projets d\'aide d\'urgence dans les zones de conflit.',
      category: 'institution',
      website: '#'
    },
    {
      id: 6,
      name: 'Fondation pour l\'Éducation',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Cette fondation soutient spécifiquement nos programmes de formation professionnelle pour les jeunes.',
      category: 'fondation',
      website: '#'
    },
    {
      id: 7,
      name: 'Association Environnement',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Un partenaire clé pour nos projets de reforestation et de protection de la biodiversité.',
      category: 'ong',
      website: '#'
    },
    {
      id: 8,
      name: 'Entreprise GHI',
      logo: 'https://via.placeholder.com/200x100',
      description: 'Grâce à un programme de produit-partage, cette entreprise contribue au financement de nos actions.',
      category: 'entreprise',
      website: '#'
    }
  ];

  // Testimonial data
  const testimonial = {
    quote: '"Nos partenaires sont essentiels à notre action. Grâce à leur soutien, nous avons pu venir en aide à plus de 12 000 personnes au cours de l\'année dernière. Ces collaborations nous permettent d\'innover et d\'amplifier notre impact sur le terrain."',
    name: 'Sophie Martin',
    role: 'Présidente',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  };

  // Filter partners based on category
  const filteredPartners = filter === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === filter);

  return (
    <div className={`nos-partenaires-page ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <PageHeader />
        
        <PartnershipTypes filter={filter} setFilter={setFilter} />
        
        <PartnerGrid partners={filteredPartners} />
        
        <TestimonialSection testimonial={testimonial} />
        
        <PartnerCTA />
      </div>
    </div>
  );
};

export default NosPartenaires; 