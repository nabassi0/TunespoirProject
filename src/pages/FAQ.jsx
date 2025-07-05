import React, { useState, useEffect, useMemo } from "react";
import { PageHeader, SearchBar, FAQSection } from "../components/faq";
import "../styles/pages/faq.scss";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState({});

  // Categories de FAQ
  const categories = [
    { id: "all", label: "Toutes" },
    { id: "about", label: "À propos de Tunespoir" },
    { id: "projects", label: "Nos projets" },
    { id: "donations", label: "Dons et soutien" },
    { id: "volunteering", label: "Bénévolat" },
    { id: "contact", label: "Contact" },
  ];

  // Questions et réponses
  const faqs = [
    // À propos de Tunespoir
    {
      id: 1,
      category: "about",
      question: "Qu'est-ce que Tunespoir ?",
      answer:
        "Tunespoir est une association humanitaire créée en décembre 2013 qui agit pour améliorer les conditions d'éducation et de vie des populations rurales en Tunisie. Nous nous concentrons sur la rénovation d'écoles, le soutien aux agriculteurs et l'aide humanitaire dans les régions les plus défavorisées.",
    },
    {
      id: 2,
      category: "about",
      question: "Quelle est la mission de Tunespoir ?",
      answer:
        "Notre mission est de contribuer au développement durable des régions rurales de Tunisie en nous concentrant sur l'éducation, l'agriculture et l'aide humanitaire. Nous croyons que l'éducation est la clé du développement et nous œuvrons pour offrir aux enfants des conditions d'apprentissage dignes et sécurisées.",
    },
    {
      id: 3,
      category: "about",
      question: "Depuis quand Tunespoir existe-t-elle ?",
      answer:
        "Tunespoir existe depuis 2013. Depuis notre création, nous avons mené de nombreux projets de rénovation d'écoles et d'aide aux communautés rurales tunisiennes, avec un impact direct sur des centaines d'enfants et de familles.",
    },

    // Nos projets
    {
      id: 4,
      category: "projects",
      question: "Quels types de projets menez-vous ?",
      answer:
        "Nous menons principalement trois types de projets : la rénovation et construction d'écoles (comme le Lycée-Internat de Bargou et l'école de Kerkouen), le soutien aux petits agriculteurs par la plantation d'oliviers et figuiers, et l'aide humanitaire d'urgence comme la distribution de denrées alimentaires aux familles démunies.",
    },
    {
      id: 5,
      category: "projects",
      question: "Où intervenez-vous en Tunisie ?",
      answer:
        "Nous intervenons principalement dans le nord-ouest de la Tunisie, une région où 50% de la population vit au-dessous du seuil de pauvreté. Nos projets se concentrent sur les gouvernorats de Jendouba, Siliana (Bargou), La Manouba, et d'autres zones rurales défavorisées. Nous avons aussi effectué des missions à Tunis, Sfax, Kerouan, Nabeul et Sousse.",
    },
    {
      id: 6,
      category: "projects",
      question: "Comment choisissez-vous vos projets ?",
      answer:
        "Nous identifions les besoins les plus urgents en collaboration avec les communautés locales, les autorités éducatives et nos partenaires sur le terrain. Nous priorisons les projets ayant un impact direct et durable sur l'éducation des enfants et l'amélioration des conditions de vie des familles. L'aide sanitaire est imposée par elle même pendant le contexte du Covid en 2020-2021 ou six structures sanitaires ont bénéficié d'un soutien matériel adapté.",
    },
    {
      id: 7,
      category: "projects",
      question: "Quel est l'état d'avancement du projet du Lycée de Bargou ?",
      answer:
        "Après avoir rénové la cuisine, le réfectoire et les sanitaires du Lycée-Internat de Bargou, nous faisons maintenant face à une urgence sécuritaire : la remise aux normes du réseau électrique pour assurer la sécurité des élèves et éviter tout risque d'accident ou d'incendie.",
    },

    // Dons et soutien
    {
      id: 8,
      category: "donations",
      question: "Comment puis-je faire un don à Tunespoir ?",
      answer:
        "Vous pouvez faire un don en ligne via notre site web dans la section \"Faire un don\". Nous acceptons les dons ponctuels et les dons mensuels. Tous les dons sont sécurisés et vous recevrez un reçu fiscal vous permettant de bénéficier d'une réduction d'impôt.",
    },
    {
      id: 9,
      category: "donations",
      question: "Mes dons sont-ils déductibles fiscalement ?",
      answer:
        "Oui, Tunespoir étant une association reconnue d'intérêt général, vos dons ouvrent droit à une réduction d'impôt de 66% du montant versé dans la limite de 20% de votre revenu imposable. Un reçu fiscal vous sera automatiquement envoyé.",
    },
    {
      id: 10,
      category: "donations",
      question: "À quoi servent concrètement mes dons ?",
      answer:
        "Vos dons financent directement nos projets : rénovation d'écoles (matériaux, main-d'œuvre), achat de matériel pédagogique, plantation d'arbres fruitiers pour les agriculteurs, achat de denrées alimentaires pour les familles en difficulté, et équipement médical pour les centres de soins.",
    },
    {
      id: 11,
      category: "donations",
      question: "Puis-je suivre l'utilisation de mon don ?",
      answer:
        "Absolument ! Nous publions régulièrement des rapports d'activité et des actualités détaillant l'avancement de nos projets. Vous pouvez suivre l'impact de votre contribution via notre site web et nos réseaux sociaux.",
    },

    // Bénévolat
    {
      id: 12,
      category: "volunteering",
      question: "Comment devenir bénévole chez Tunespoir ?",
      answer:
        "Nous accueillons les bénévoles motivés ! Vous pouvez nous aider de différentes manières : communication, organisation d'événements, collecte de fonds, ou participation aux missions sur le terrain. Contactez-nous via notre formulaire de contact pour discuter des opportunités disponibles.",
    },
    {
      id: 13,
      category: "volunteering",
      question:
        "Dois-je avoir des compétences particulières pour être bénévole ?",
      answer:
        "Non, nous avons besoin de profils variés ! Que vous ayez des compétences en communication, en informatique, en organisation, ou simplement de la motivation, il y a une place pour vous. Nous vous formerons selon vos intérêts et nos besoins.",
    },
    {
      id: 14,
      category: "volunteering",
      question: "Organisez-vous des missions bénévoles en Tunisie ?",
      answer:
        "Nous organisons périodiquement des missions sur le terrain en Tunisie pour les travaux de rénovation et le suivi de nos projets. Ces missions nécessitent une préparation particulière et sont ouvertes aux bénévoles expérimentés. Contactez-nous pour en savoir plus.",
    },

    // Contact
    {
      id: 15,
      category: "contact",
      question: "Comment contacter Tunespoir ?",
      answer:
        "Vous pouvez nous contacter via notre formulaire de contact sur le site web, par email, ou nous suivre sur nos réseaux sociaux. Nous nous efforçons de répondre à tous les messages dans les plus brefs délais.",
    },
    {
      id: 16,
      category: "contact",
      question: "Organisez-vous des événements publics ?",
      answer:
        "Oui, nous organisons régulièrement des événements de sensibilisation, des conférences et des collectes de fonds. Ces événements sont annoncés sur notre site web et nos réseaux sociaux. C'est aussi l'occasion de rencontrer notre équipe et d'en apprendre plus sur nos actions.",
    },
    {
      id: 17,
      category: "contact",
      question: "Puis-je visiter vos projets en Tunisie ?",
      answer:
        "Les visites de nos projets sont possibles dans le cadre de nos missions organisées ou sur demande particulière. Pour des raisons de sécurité et d'organisation, nous vous demandons de nous contacter au préalable pour planifier votre visite.",
    },
    {
      id: 18,
      category: "contact",
      question: "Comment rester informé de vos actualités ?",
      answer:
        'Suivez-nous sur nos réseaux sociaux, abonnez-vous à notre newsletter, ou consultez régulièrement la section "Actualités" de notre site web. Nous publions régulièrement des mises à jour sur nos projets et nos événements.',
    },
  ];

  // Animation effect on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filtered FAQs based on category and search
  const filteredFaqs = useMemo(() => {
    let filtered = faqs;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  // Toggle FAQ item
  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`faq-page ${isVisible ? "visible" : ""}`}>
      <div className="container">
        <PageHeader />

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <FAQSection
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filteredFaqs={filteredFaqs}
          expandedItems={expandedItems}
          toggleItem={toggleItem}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default FAQ;
