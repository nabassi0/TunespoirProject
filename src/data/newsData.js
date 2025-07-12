import actuRecente from "../assets/images/actuRecentes/actuRecente.png";
import actuRecente2 from "../assets/images/actuRecentes/actuRecente2.png";
import actuRecente3 from "../assets/images/actuRecentes/actuRecente3.png";
import actuRecente5 from "../assets/images/actuRecentes/actuRecente5.png";
import actuRecente6 from "../assets/images/actuRecentes/actuRecente6.jpeg";

export const newsItems = [
  {
    id: 1,
    title: "Urgence sécuritaire au Lycée-Internat de Bargou",
    excerpt:
      "Après avoir rénové la cuisine, le réfectoire et les sanitaires, nous faisons face à une nouvelle urgence sanitaire et sécuritaire : remise aux normes du réseau électrique pour la sécurité des élèves, afin d'éviter un accident ou un incendie.",
    date: "15 janvier 2025",
    location: "Bargou, Siliana",
    category: "Éducation",
    image: actuRecente,
    link: "/actualites",
    content: `
      <p>Le Lycée-Internat de Bargou fait face à une situation critique qui nécessite une intervention urgente. Après avoir mené à bien la rénovation de la cuisine, du réfectoire et des sanitaires, nous avons identifié un problème majeur concernant le réseau électrique de l'établissement.</p>
      
      <h3>La situation actuelle</h3>
      <p>L'installation électrique du lycée présente des défaillances importantes qui mettent en danger la sécurité des 150 élèves internes. Les installations vétustes et non conformes aux normes actuelles représentent un risque réel d'accident électrique ou d'incendie.</p>
      
      <h3>Les travaux nécessaires</h3>
      <p>Une remise aux normes complète du réseau électrique est indispensable. Cette intervention comprend :</p>
      <ul>
        <li>Remplacement du tableau électrique principal</li>
        <li>Mise à jour de tout le câblage électrique</li>
        <li>Installation de dispositifs de sécurité modernes</li>
        <li>Vérification et certification par un organisme agréé</li>
      </ul>
      
      <h3>L'impact sur les élèves</h3>
      <p>Ces travaux permettront aux élèves de poursuivre leurs études dans des conditions sécurisées, sans risque pour leur santé et leur sécurité. Le lycée pourra ainsi continuer à accueillir les jeunes de la région dans un environnement propice à l'apprentissage.</p>
      
      <h3>Comment nous aider</h3>
      <p>Votre soutien est essentiel pour mener à bien cette mission. Chaque don contribue directement à la sécurité des élèves et à la pérennité de cet établissement vital pour la région de Siliana.</p>
    `,
    gallery: [
      actuRecente,
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
    author: "Équipe Tunespoir",
    readTime: "5 min",
    tags: ["Éducation", "Sécurité", "Urgence", "Bargou"],
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
    link: "/actualites",
    content: `
      <p>L'école primaire de Kerkouen, située dans la région de Jendouba, nécessite des travaux de rénovation urgents pour offrir aux 180 élèves un environnement d'apprentissage sûr et adapté.</p>
      
      <h3>État actuel de l'école</h3>
      <p>L'établissement fait face à plusieurs défis majeurs qui impactent directement la qualité de l'enseignement et la sécurité des élèves. Les infrastructures vieillissantes nécessitent une attention immédiate.</p>
      
      <h3>Travaux prioritaires</h3>
      <p>Les interventions prévues comprennent :</p>
      <ul>
        <li>Aménagement de la cour de récréation en dur pour éviter la poussière et la boue</li>
        <li>Séparation claire des accès piétons et véhicules pour renforcer la sécurité</li>
        <li>Rénovation des salles de classe</li>
        <li>Amélioration des sanitaires</li>
        <li>Réfection de la clôture d'enceinte</li>
      </ul>
      
      <h3>Impact sur la communauté</h3>
      <p>Ces travaux bénéficieront directement aux enfants de Kerkouen et des villages environnants, leur offrant un cadre d'études plus propice à la réussite scolaire et à l'épanouissement personnel.</p>
      
      <h3>Partenariat local</h3>
      <p>Ce projet est mené en étroite collaboration avec la communauté locale, les enseignants et les parents d'élèves pour garantir que les aménagements répondent aux besoins réels de l'école.</p>
    `,
    gallery: [
      actuRecente2,
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
    author: "Équipe Tunespoir",
    readTime: "4 min",
    tags: ["Éducation", "Rénovation", "Kerkouen", "Sécurité"],
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
    link: "/actualites",
    content: `
      <p>Tunespoir s'engage dans un projet d'aménagement d'une salle d'ergothérapie à l'Institut National de la Protection de l'Enfance (INPE) de La Manouba, un établissement qui accueille des enfants en situation de vulnérabilité.</p>
      
      <h3>L'importance de l'ergothérapie</h3>
      <p>L'ergothérapie joue un rôle crucial dans le développement et la réhabilitation des enfants. Elle permet d'améliorer leur autonomie quotidienne, leurs capacités motrices et leur intégration sociale.</p>
      
      <h3>Le projet d'aménagement</h3>
      <p>Notre intervention comprend :</p>
      <ul>
        <li>Aménagement d'un espace spécialement conçu pour l'ergothérapie</li>
        <li>Acquisition de matériel thérapeutique adapté</li>
        <li>Installation d'équipements spécialisés</li>
        <li>Formation du personnel encadrant</li>
      </ul>
      
      <h3>Bénéficiaires</h3>
      <p>Ce projet bénéficiera directement aux enfants de l'INPE, leur offrant un accès à des soins thérapeutiques de qualité dans un environnement adapté à leurs besoins spécifiques.</p>
      
      <h3>Partenariat institutionnel</h3>
      <p>Cette initiative s'inscrit dans le cadre d'un partenariat avec l'INPE, démontrant notre engagement envers la protection et le bien-être des enfants en situation difficile.</p>
    `,
    gallery: [
      actuRecente3,
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
    author: "Équipe Tunespoir",
    readTime: "3 min",
    tags: ["Santé", "Ergothérapie", "INPE", "Enfance"],
  },
  {
    id: 4,
    title: "Programme de soutien aux agriculteurs",
    excerpt:
      "Soutenir 50 petits agriculteurs par an, en situation de précarité par la plantation de 20 à 100 pieds d'oliviers/figuiers et/ou caroubiers par bénéficiaire, afin de renforcer leur autonomie alimentaire et générer un revenu durable.",
    date: "10 décembre 2024",
    location: "Nord-Ouest Tunisie",
    category: "Agriculture",
    image: actuRecente6,
    link: "/actualites",
    content: `
      <p>Tunespoir lance un programme ambitieux de soutien aux petits agriculteurs du Nord-Ouest tunisien, une région particulièrement touchée par la précarité économique et les défis agricoles.</p>
      
      <h3>Objectifs du programme</h3>
      <p>Ce programme vise à soutenir 50 petits agriculteurs par an en leur offrant les moyens de développer une activité agricole durable et génératrice de revenus.</p>
      
      <h3>Modalités d'intervention</h3>
      <p>Chaque bénéficiaire recevra :</p>
      <ul>
        <li>Entre 20 et 100 pieds d'oliviers, figuiers ou caroubiers selon les besoins</li>
        <li>Formation aux techniques agricoles modernes</li>
        <li>Accompagnement technique pendant les premières années</li>
        <li>Soutien dans la commercialisation des produits</li>
      </ul>
      
      <h3>Impact économique et social</h3>
      <p>Ce programme permettra aux familles rurales de :</p>
      <ul>
        <li>Renforcer leur autonomie alimentaire</li>
        <li>Générer un revenu durable et régulier</li>
        <li>Améliorer leur résilience face aux aléas climatiques</li>
        <li>Préserver les traditions agricoles locales</li>
      </ul>
      
      <h3>Approche durable</h3>
      <p>Le choix d'arbres fruitiers méditerranéens s'inscrit dans une démarche de développement durable, adaptée au climat local et respectueuse de l'environnement.</p>
    `,
    gallery: [
      actuRecente6,
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
    author: "Équipe Tunespoir",
    readTime: "4 min",
    tags: ["Agriculture", "Développement rural", "Autonomie", "Durabilité"],
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
    link: "/actualites",
    content: `
      <p>Face à la précarité alimentaire qui touche de nombreuses familles du Nord-Ouest tunisien, Tunespoir a organisé une vaste opération de collecte et de distribution de denrées alimentaires essentielles.</p>
      
      <h3>Contexte régional</h3>
      <p>Le Nord-Ouest de la Tunisie est une région particulièrement touchée par la pauvreté, où près de 50% de la population vit au-dessous du seuil de pauvreté. L'insécurité alimentaire y est un enjeu majeur.</p>
      
      <h3>Opération de collecte</h3>
      <p>Du mois de mars à mai 2025, notre équipe a mobilisé ses ressources pour :</p>
      <ul>
        <li>Organiser une collecte de fonds dédiée</li>
        <li>Identifier les familles les plus vulnérables</li>
        <li>Constituer des colis alimentaires équilibrés</li>
        <li>Coordonner la distribution sur le terrain</li>
      </ul>
      
      <h3>Contenu des colis</h3>
      <p>Chaque famille a reçu un colis contenant :</p>
      <ul>
        <li>Produits de base (riz, pâtes, légumineuses)</li>
        <li>Huile et conserves</li>
        <li>Produits d'hygiène essentiels</li>
        <li>Aliments pour enfants selon les besoins</li>
      </ul>
      
      <h3>Impact sur les familles</h3>
      <p>Cette opération a permis de soulager temporairement 200 familles, soit environ 1000 personnes, leur offrant une sécurité alimentaire pendant plusieurs semaines.</p>
      
      <h3>Mobilisation communautaire</h3>
      <p>Le succès de cette opération repose sur la mobilisation de nos donateurs et partenaires locaux, démontrant la force de la solidarité face aux défis sociaux.</p>
    `,
    gallery: [
      actuRecente5,
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
    author: "Équipe Tunespoir",
    readTime: "5 min",
    tags: [
      "Aide humanitaire",
      "Sécurité alimentaire",
      "Solidarité",
      "Pauvreté",
    ],
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
    link: "/actualites",
    content: `
      <p>L'année 2024 a été marquée par de nombreuses réalisations qui témoignent de l'engagement continu de Tunespoir auprès des communautés rurales tunisiennes.</p>
      
      <h3>Nos principales réalisations</h3>
      <p>Au cours de cette année, nous avons pu mener à bien plusieurs projets majeurs :</p>
      <ul>
        <li>Rénovation complète du Lycée-Internat de Bargou</li>
        <li>Lancement du programme agricole pour 50 familles</li>
        <li>Soutien à 3 écoles primaires dans des zones rurales</li>
        <li>Distribution de 500 colis alimentaires</li>
      </ul>
      
      <h3>Impact chiffré</h3>
      <p>Grâce à votre soutien, nous avons pu :</p>
      <ul>
        <li>Bénéficier à plus de 2000 personnes directement</li>
        <li>Mobiliser 150 000 euros de dons</li>
        <li>Réaliser 8 projets d'envergure</li>
        <li>Créer 25 emplois temporaires locaux</li>
      </ul>
      
      <h3>Témoignages</h3>
      <p>Les retours des bénéficiaires et partenaires locaux confirment l'impact positif de nos actions sur le terrain. Leurs témoignages sont notre plus belle récompense.</p>
      
      <h3>Perspectives 2025</h3>
      <p>Fort de ces succès, nous nous préparons à relever de nouveaux défis en 2025 avec des projets encore plus ambitieux dans les domaines de l'éducation, de la santé et du développement rural.</p>
      
      <h3>Remerciements</h3>
      <p>Nous tenons à remercier chaleureusement tous nos donateurs, partenaires et bénévoles qui rendent possible notre mission de solidarité.</p>
    `,
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    ],
    author: "Direction Tunespoir",
    readTime: "6 min",
    tags: ["Bilan", "Réalisations", "Impact", "Solidarité"],
  },
];
