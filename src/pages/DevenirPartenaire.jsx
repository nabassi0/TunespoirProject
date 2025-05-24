import { useState, useEffect } from 'react';
import { FaHandshake, FaBuilding, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';
import {
  PageHeader,
  BenefitsSection,
  PartnershipTypes,
  TestimonialsSection,
  CTASection,
  FAQSection
} from '../components/devenir-partenaire';
import '../styles/pages/devenir-partenaire.scss';
import { Hero } from '../components/nous-decouvrir';
import { useLocation } from 'react-router-dom';

const DevenirPartenaire = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount for animations
    setIsVisible(true);
  }, []);

  // Partner benefits data
  const partnerBenefits = [
    {
      id: 1,
      icon: <FaHandshake />,
      title: 'Impact social',
      description: 'Contribuez à des projets à fort impact et participez concrètement à l\'amélioration des conditions de vie des populations vulnérables.'
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: 'Image de marque',
      description: 'Renforcez votre image de marque en vous associant à une cause noble et en démontrant votre engagement sociétal.'
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Engagement des collaborateurs',
      description: 'Fédérez vos équipes autour d\'un projet commun et mobilisant, renforçant ainsi la cohésion et la motivation interne.'
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Visibilité',
      description: 'Bénéficiez d\'une visibilité auprès de notre communauté et lors de nos événements, avec une mention sur nos supports de communication.'
    },
    {
      id: 5,
      icon: <FaGlobe />,
      title: 'Expertise terrain',
      description: 'Accédez à notre expertise et notre connaissance approfondie des enjeux humanitaires et des territoires où nous intervenons.'
    }
  ];

  // Partnership types
  const partnershipTypes = [
    {
      id: 1,
      title: 'Mécénat financier',
      description: 'Soutenez nos actions par des dons ponctuels ou réguliers, déductibles fiscalement à hauteur de 60% de votre impôt sur les sociétés.',
      image: 'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Mécénat de compétences',
      description: 'Mettez à disposition les compétences de vos collaborateurs pour nous appuyer dans nos projets ou notre fonctionnement.',
      image: 'https://images.unsplash.com/photo-1574351406668-89365ee52abd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Produit-partage',
      description: 'Proposez un produit ou service dont une partie des bénéfices sera reversée à notre association pour financer nos projets.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Partenariat opérationnel',
      description: 'Collaborez avec nous sur le terrain pour mettre en œuvre des projets communs, en apportant vos ressources et votre expertise.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  // Partner testimonials
  const testimonials = [
    {
      id: 1,
      quote: 'Notre partenariat avec Tunespoir a été transformateur, tant pour les communautés que nous avons pu aider ensemble que pour notre propre entreprise. La transparence et le professionnalisme de l\'équipe ont fait de cette collaboration un véritable succès.',
      name: 'Marie Dupont',
      role: 'Directrice RSE, Entreprise ABC',
      // logo: 'https://via.placeholder.com/150x80'
    },
    {
      id: 2,
      quote: 'Depuis 3 ans, nous soutenons les projets d\'accès à l\'eau potable menés par Tunespoir. Au-delà de l\'impact concret sur le terrain, ce partenariat a fédéré nos équipes et renforcé notre culture d\'entreprise autour de valeurs fortes.',
      name: 'Thomas Martin',
      role: 'PDG, Entreprise XYZ',
      // logo: 'https://via.placeholder.com/150x80' 
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'Quel est le montant minimal pour un partenariat ?',
      answer: 'Il n\'y a pas de montant minimal fixe. Nous construisons des partenariats sur mesure en fonction de vos capacités et de vos objectifs. Contactez-nous pour discuter de vos possibilités.'
    },
    {
      id: 2,
      question: 'Quels avantages fiscaux pour mon entreprise ?',
      answer: 'En France, les dons effectués dans le cadre d\'un mécénat d\'entreprise sont déductibles à hauteur de 60% de l\'impôt sur les sociétés, dans la limite de 0,5% du chiffre d\'affaires HT.'
    },
    {
      id: 3,
      question: 'Comment puis-je impliquer mes collaborateurs ?',
      answer: 'Nous proposons plusieurs formats d\'engagement : journées solidaires sur le terrain, collectes internes, défis sportifs solidaires, mécénat de compétences... Nous adaptons les modalités à votre structure et à vos objectifs.'
    }
  ];

  return (
    <div className={`devenir-partenaire-page ${isVisible ? 'visible' : ''}`}>
      <Hero
        title="Devenir Partenaire"
        subtitle="Rejoignez-nous dans notre mission d'aide aux plus vulnérables. 
        Ensemble, nous pouvons avoir un impact significatif et durable sur 
        les communautés que nous soutenons à travers le monde"
        imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <div className="container">
        
        <BenefitsSection benefits={partnerBenefits} />
        
        <PartnershipTypes types={partnershipTypes} />
        
        <TestimonialsSection testimonials={testimonials} />
        
        <CTASection />
        
        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
};

export default DevenirPartenaire;