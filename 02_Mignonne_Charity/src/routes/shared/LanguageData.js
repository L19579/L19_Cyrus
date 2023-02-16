import { writable } from 'svelte/store'; 

export const common = {
  identical: {
    phone_number_button: "+1(647) 854-3160",
    email_button: "contact@dieupeut.com",
  },
	staff_names: {
		williane: "Williane Moise",
		rubenson: "Rubenson Alexandre",
		wadlet: "Wadlet Merassaint",
		baudelaire: "Baudelaire Saintis",
		
	},
  donate: {
    en: "Donate",
    fr: "Donner",
    kr: "Done",
  },
  dieu_peut_long: {
    en: "Dieu Peut Charity",
    fr: "Dieu Peut Charité",
    kr: "Dieu Peut Charite", 
  },
  read_more_button: {
    en: "Read More >",
    fr: "",
    cr: "",
  },
  country: {
    canada: "Canada",
    france: "France",
  },
  program: {
    food_donation: {
      en: "Food Donation Program",
    },
    youth_recreation: {
      en: "Youth Recreation Group",
    },
    prayer_service: {
      en: "Prayer Service",
    },
  },
  links: {
    company: {
      tiktok: "https://www.tiktok.com/@williane108",
      facebook: "https://www.facebook.com/williane108",
      twitter: "https://twitter.com/DieuPeutCharity",
      intragram: "https://www.instagram.com/mignonew/",
      youtube: "https://www.youtube.com/@dernierreve2951/videos",
      nerlont: "https://www.nerlont.com/",
    },
  },
  to_be_assigned: {
    en: "TO BE ASSIGNED",
  },
}

const english = {
  language: "en-ca",
  wip: "This website is under active development.",
  links: common.links,
  common: {
    donate: common.donate.en,
    dieu_peut_long: common.dieu_peut_long.en,
    read_more_button: common.read_more_button.en,
    food_donation_program: common.program.food_donation.en,
    youth_recreation_program: common.program.youth_recreation.en,
    prayer_service: common.program.prayer_service.en,
    to_be_assigned: common.to_be_assigned.en,
  },
  navbar: {
    impact: "Impact",
    goals: "Goals",
    organization: "Organization",
    donate: common.donate.en,
  },
  footer: {
    contact_us: "Contact us", 
    phone_number_button: common.identical.phone_number_button,
    email_button: common.identical.email_button,
    title: common.dieu_peut_long.en,
    haitian_office: "Haitian office:",
    dr_office: "DR office:",
    copyright_part_1: "Copyright © 2023",
    copyright_part_2: "Dieu Peut Charity.",
    copyright_part_3: "All rights reserved.",
    written_by_part_1: "Written, and managed by",
    written_by_part_2_link: "Apache-2.0 / MIT license",
  },
  home: {
    panel_0: {
      title_p1: "Assistance for Haitians",
      title_p2: "at home and abroad.",
      description: "Our organisation is focused on reducing hardships for the vulnerable in our community. Your contributions help expand the reach of our meal assistance program and youth recreation group. For those looking for a prayer group, our doors are open!",
      contact_us_button: "Contact us",
      learn_more_button: "Learn more",
    },
    panel_1: {
      stat_1_title: "Families Fed",
      stat_2_title: "Youths Enrolled",
      stat_3_title: "Prayer Attendees",
      stat_mobile_title: "lives improved",
      stat_description: "...and counting.",
      description: "We’re dedicated to helping struggling families and orphaned children in Haiti, and Canada. Much of the hardships we hope to reduce have been experienced by our staff first hand – we’re familiar with the feeling of despair. Our mission is to offer a door to those who have nowhere to turn. Programs currently supported by our donors include meal assistance services, and youth social programs. We also host prayer services in person and online.",
    },
    panel_2: {
      title: "We Want To Do More!", 
      description: "We’re only in the early stages of our journey. The long term strategy of our effort is to have a meaningful impact on as many lives as possible. We hope to scale our operations to numerous high density jurisdictions in Haiti. Your support will allow us to make our meal assistance service available in remote areas; bringing food staples to those unable to travel. Plans are also in place for a more diversified, and career focused youth program portfolio.",
    },
    panel_3:{
      quote: "Dieu Peut Charity is an extension of various Haitian-Canadian church services under our leadership. Formalising the charity wing was a natural step forward. We have extensive experience in managing food drives, social programs. Making that experience useful where it’s needed most in Haiti is a goal that is now possible with your backing. Thank you!",
			name: common.staff_names.williane,
      founder_title: "Founder & President",
      meet_team_button: "Meet the Team!",
    },
  },
  impact: {
    panel_1:{
      title: "Meal Assistance",
      description: "This program currently aims to provide meals to families and orphaned children in Haiti’s capital. Unimpeded inflation, fuel shortages, and violence along major transport routes have made food staples difficult to source. Port-au-Prince’s poorest are being priced out of local market prices and risk personal safety when forced to look to areas under bad actor influence. Our doors are kept open if they run out of options.",
      description_sub: "Services under this initiative",
      description_sub_p1: "Food Bank",
      description_sub_p2: "Meal To Home",
      donate_link_text: "Contribute To Food Bank",
    }, 
    panel_2:{
      title: "Recreation Group",
      description: "We’re strong believers in bringing constructive, group oriented, and positive sum activities to Haiti’s children and young adults. Dieu Peut hosts a number of organised and semi-formal events for those between the ages of 6 - 21. We provide the space and tools for our young to build lasting bonds and critical life skills.",
      description_ext: "Activities included:",
      description_sub_1: "Perpetual",
      description_sub_1_p1: "Homework assistance",
      description_sub_1_p2: "Piano lessons",
      description_sub_1_p3: "Resume workshops",
      description_sub_2: "Occasional",
      description_sub_2_p1: "Local soccer tournaments",
      description_sub_2_p2: "Gardening workshops",
      description_sub_2_p3: "Budgeting workshops",
      donate_link_text: "Support Youth Program",
    }, 
    panel_3:{
      title: "Prayer Service",
      description: "Besides running charity programs our founder hosts weekly virtual and in-person prayer groups for Haitians at home and abroad. We’re building an inclusive community for those who seek to celebrate the word of God. We’d love to have you with us for virtual prayer sessions!",
      link_livestream_text: "Live online events are held at 7:00pm every Sunday.",
      donate_link_text: "Help Prayer Service",
    }, 
  },
  goals: {
    panel_1:{
      title: "Expanding Aid",
      description: "Over 120 Haitian families have received assistance from Dieu Peut Charity, resulting in material relief from economic setbacks since our founding in 2022. This linear growth is critical to our mission. With your assistance we plan to expand our food donation initiatives beyond the borders of Port-au-Prince. We want to open remote meal delivery to rural areas without the transport infrastructure and local resources for food availability. Our secondary growth objective is to make youth programs available in Gonaives. We see value in closing educational gaps in cities with insufficient internet penetration. ",
    },
    panel_2: {
      title: "Digital Growth",
      description: "Making our prayer service more accessible and interactive for a global audience is also top of mind. We’re putting an extra emphasis on capital efficiency here; most of our growth will be in online content delivery. The number of dedicated hosts will increase in the near term, with content going beyond Sunday prayer. We’re building the infrastructure to support live streams across major video platforms."
    },
  },
  organization: {
    title: "Meet the team!",
    staff: [
      {
				name: common.staff_names.williane,
        role: "Founder & President",
        bio: "15 years in church operation; event and charity management. More than 20 years leading Sunday service. Proud mom of three and expert in all things music. Thankful for the opportunity to help our international community. Let’s make a difference!",
      },
      {
				name: common.staff_names.rubenson,
        role: "General Manager",
        bio: "Previously worked in audio broadcasting, now full-time with Dieu Peut. My natural interests are in public relations and education. Joining this effort allows me to take full advantage of my background for a good cause. ",
      },
      {
				name: common.staff_names.wadlet,
        role: "Secretary",
        bio: "I’m a business relations student in the Dominican Republic. I see a number of areas inter  business cooperation in Haiti can improve for the benefit of our clients. My hope is to see our non-profit benefit more people.",
      },
      {
				name: common.staff_names.baudelaire,
        role: "Coordinator",
        bio: "Background in civil engineering. Over 10 years of experience teaching mathematics and physics. Screen printing has been a professional focus of mine since covid. My primary motive for joining Dieu Peut is to help educate the young.",
      },
    ],
  },
  donate: {
    amount: "Amount",
    thank_you: "Thank You!",
    or_use_card: "Or use a card",
    email: "Email",
    card_information: "Card Information",
    card_exp_placeholder: "MM / YY",
    name_on_card: "Name on card",
    card_country_region: "Country / Region",
    country: {
      canada: common.country.canada,
      dominican_republic: "Dominican Republic",
      france: common.country.france,
      haiti: "Haiti",
      united_states: "United States",
    },
    _prompt: {
      invalid: "Invalid",
      success: "Success!",
      donation_failed: "Couldn't process. Try again",
    },
    secured_by: "Secured by",
  },
};

const french = {
  language: "",
  wip: "Ce site est en cours de développement.",
  links: common.links,
  common: {
    donate: common.donate.fr,
    dieu_peut_long: common.dieu_peut_long.fr,
    read_more_button: common.read_more_button.fr,
    food_donation_program: common.program.food_donation.fr,
    youth_recreation_program: common.program.youth_recreation.fr,
    prayer_service: common.program.prayer_service.fr,
    to_be_assigned: common.to_be_assigned.fr,
  },
  navbar: {
    impact: "Impact",
    goals: "Objectifs",
    organization: "Organisation",
    donate: common.donate.fr,
  },
  footer: {
    contact_us: "Contactez-nous", 
    phone_number_button: common.identical.phone_number_button,
    email_button: common.identical.email_button,
    title: common.dieu_peut_long.fr,
    haitian_office: "Bureau Haïtien:",
    dr_office: "Bureau RD",
    copyright_part_1: "Copyright © 2023",
    copyright_part_2: "Dieu Peut Charité",
    copyright_part_3: "Tous droits réservés.",
    written_by_part_1: "Écrit et géré par",
    written_by_part_2_link: "Licence Apache-2.0 / MIT",
  },
  home: {
    panel_0: {
      title_p1: "Aide aux Haïtiens",
      title_p2: "à domicile et à l'étranger.",
      description: "Notre organisation est axée sur la réduction des difficultés pour les personnes vulnérables de notre communauté. Vos contributions aident à étendre la portée de notre programme d'aide alimentaire et de notre groupe de loisirs pour les jeunes. Pour ceux qui cherchent un groupe de prière, nos portes sont ouvertes!",
      contact_us_button: "Contactez-nous",
      learn_more_button: "Savoir plus",
    },
    panel_1: {
      stat_1_title: "Familles Nourries",
      stat_2_title: "Jeunes Inscrits",
      stat_3_title: "Membres d'Église",
      //stat_3_title: "Participants aux Prières",
      stat_mobile_title: "Vies Améliorées",
      stat_description: "...et comptant.",
      description: "Nous nous engageons à aider les familles en difficulté et les enfants orphelins en Haïti et au Canada. Une grande partie des difficultés que nous espérons réduire ont été vécues par notre personnel - nous sommes familiers avec le sentiment de désespoir. Notre mission est d'offrir une porte à ceux qui n'ont nulle part où aller. Les programmes actuellement soutenus par nos donateurs comprennent des services d'aide alimentaire et des programmes sociaux pour les jeunes. Nous organisons également des services de prière en personne et en ligne.",
    },
    panel_2: {
      title: "Nous voulons faire plus!", 
      description: "Nous ne sommes qu'au début de notre parcours. La stratégie à long terme de nos efforts est d'avoir un impact significatif sur le plus grand nombre de vies possible. Nous espérons étendre nos opérations à de nombreuses juridictions à forte densité en Haïti. Votre soutien nous permettra de rendre notre service d'aide alimentaire disponible dans les zones éloignées ; apportant des aliments de base à ceux qui ne peuvent pas voyager. Des plans sont également en place pour un portefeuille de programmes pour les jeunes plus diversifié et axé sur les carrières.",
    },
    panel_3:{
      quote: "Dieu Peut Charity est une extension de divers services d'église haïtiano-canadiens sous notre direction. La formalisation de l'aile de bienfaisance était une étape naturelle. Nous avons une vaste expérience de la gestion de collectes de denrées alimentaires et de programmes sociaux. Rendre cette expérience utile là où elle est le plus nécessaire en Haïti est un objectif qui est maintenant possible avec votre soutien. Merci!",
			name: common.staff_names.williane,
      founder_title: "Fondateur et Président",
      meet_team_button: "Rencontrez l'Équipe!",
    },
  },
  impact: {
    panel_1:{
      title: "Aide Alimentaire",
      description: "Ce programme vise actuellement à fournir des repas aux familles et aux enfants orphelins dans la capitale haïtienne. L'inflation incontrôlable, la pénurie de carburant et la violence le long des principales routes de transport rendent difficiles l'approvisionnement en produits alimentaires de base. Les plus pauvres de Port-au-Prince ne peuvent plus se permettre les prix du marché local et risquent leur sécurité personnelle lorsqu'ils sont contraints de se tourner vers des zones sous l'influence de criminels. Nos portes restent ouvertes s'ils n'ont plus d'options.",
      description_sub: "Services offerts dans le cadre de cette initiative",
      description_sub_p1: "Banque alimentaire",
      description_sub_p2: "Repas à domicile",
      donate_link_text: "Contribuer à la Banque Alimentaire",
    }, 
    panel_2:{
      title: "Activités pour Jeunes",
      description: "Nous sommes de fervents partisans de l'organisation d'activités constructives, orientées vers le groupe et à somme positive pour les enfants et les jeunes adultes d'Haïti. Dieu Peut organise un certain nombre d'événements organisés et semi-formels pour ceux âgés de 6 à 21 ans. Nous fournissons l'espace et les outils pour que nos jeunes construisent des liens durables et des compétences de vie essentielles.",
      description_ext: "Activités incluses:",
      description_sub_1: "Permanent",
      description_sub_1_p1: "Aide aux devoirs",
      description_sub_1_p2: "Cours de piano",
      description_sub_1_p3: "Rédaction de CV",
      description_sub_2: "Occasionnel",
      description_sub_2_p1: "Tournois de football",
      description_sub_2_p2: "Jardinage",
      description_sub_2_p3: "budgétisation",
      donate_link_text: "Soutenir ces Activités",
    }, 
    panel_3:{
      title: "Service de Prière",
      description: "Outre la gestion de programmes caritatifs, notre fondateur anime des groupes de prière virtuels et en personne chaque semaine pour les Haïtiens vivant sur place et à l'étranger. Nous créons une communauté inclusive pour ceux qui cherchent à célébrer la parole de Dieu. Nous serions ravis de vous compter parmi nous lors de sessions de prière virtuelles!",
      link_livestream_text: "Des événements en direct en ligne ont lieu tous les dimanches à 19h00.",
      donate_link_text: "Aidez le Service de Prière",
    }, 
  },
  goals: {
    panel_1:{
      title: "Expansion de l'Aide",
      description: "Plus de 120 familles haïtiennes ont reçu de l'aide de Dieu Peut Charity, ce qui a entraîné un soulagement matériel des revers économiques depuis notre création en 2022. Cette croissance linéaire est essentielle à notre mission. Avec votre aide, nous prévoyons d'étendre nos initiatives de don de nourriture au-delà des frontières de Port-au-Prince. Nous voulons ouvrir la livraison de repas à distance dans les zones rurales sans infrastructure de transport et sans ressources locales pour la disponibilité alimentaire. Notre objectif de croissance secondaire est de rendre les programmes pour les jeunes disponibles à Gonaives. Nous voyons de la valeur dans la réduction des lacunes éducatives dans les villes avec une pénétration internet insuffisante.",
    },
    panel_2: {
      title: "Contenu Web",
      description: "Rendre notre service de prière plus accessible et interactif pour un public mondial est également une priorité. Nous mettons un accent supplémentaire sur l'efficacité du capital ici ; la plupart de notre croissance se fera par la diffusion de contenu en ligne. Le nombre d'hôtes dédiés augmentera à court terme, avec du contenu allant au-delà de la prière du dimanche. Nous construisons l'infrastructure pour prendre en charge des diffusions en direct sur les principales plateformes vidéo.",
    },
  },
  organization: {
    title: "Rencontrez l'équipe!",
    staff: [
      {
				name: common.staff_names.williane,
        role: "Fondatrice et Présidente",
        bio: "15 ans d'exploitation d'église ; gestion d'événements et de charité. Plus de 20 ans à diriger le service du dimanche. Fière maman de trois enfants et experte en tout ce qui concerne la musique. Reconnaissante pour l'occasion d'aider notre communauté internationale. Faisons la différence!",
      },
      {
				name: common.staff_names.rubenson,
        role: "Directeur Général",
        bio: "Travaillait auparavant dans la radiodiffusion audio, maintenant à plein temps avec Dieu Peut. Mes intérêts naturels sont les relations publiques et l'éducation. Rejoindre cet effort me permet de tirer pleinement parti de mon expérience pour une bonne cause.",
      },
      {
				name: common.staff_names.wadlet,
        role: "Secrétaire",
        bio: "Je suis étudiante en relations d'affaires en République dominicaine. Je vois plusieurs domaines de coopération interentreprises en Haïti qui peuvent s'améliorer au bénéfice de nos clients. Mon espoir est de voir notre organisation sans but lucratif bénéficier à plus de personnes.",
      },
      {
				name: common.staff_names.baudelaire,
        role: "Coordinateur",
        bio: "Formation en génie civil. Plus de 10 ans d'expérience dans l'enseignement des mathématiques et de la physique. La sérigraphie a été ma principale préoccupation professionnelle depuis la pandémie. Ma principale motivation pour rejoindre Dieu Peut est d'aider à éduquer les jeunes.",
      },
    ],
  },
  donate: {
    amount: "Montant",
    thank_you: "Merci!",
    or_use_card: "Ou utilisez une carte",
    email: "Email",
    card_information: "Informations de Carte",
    card_exp_placeholder: "MM / AA",
    name_on_card: "Nom sur la carte",
    card_country_region: "Pays / Région",
    country: {
      canada: common.country.canada,
      dominican_republic: "République Dominicaine",
      france: common.country.france,
      haiti: "Haïti",
      united_states: "États-Unis",
    },
    _prompt: {
      invalid: "Invalide",
      success: "Succès!",
      donation_failed: "Transaction Échouée",
    },
    secured_by: "Sécurisé par",
  },
};

const creole = {
  language: "",
  wip: "",
  links: common.links,
  common: {
    donate: common.donate.cr,
    dieu_peut_long: common.dieu_peut_long.cr,
    read_more_button: common.read_more_button.cr,
    food_donation_program: common.program.food_donation.cr,
    youth_recreation_program: common.program.youth_recreation.cr,
    prayer_service: common.program.prayer_service.cr,
    to_be_assigned: common.to_be_assigned.cr,
  },
  navbar: {
    impact: "",
    goals: "",
    organization: "",
    donate: common.donate.cr,
  },
  footer: {
    contact_us: "", 
    phone_number_button: "",
    email_button: "",
    title: common.dieu_peut_long.cr,
    haitian_office: "",
    dr_office: "",
    copyright_part_1: "",
    copyright_part_2: "",
    copyright_part_3: "",
    written_by_part_1: "",
    written_by_part_2_link: "",
  },
  home: {
    panel_0: {
      title_p1: "",
      title_p2: "",
      description: "",
      contact_us_button: "",
      learn_more_button: "",
    },
    panel_1: {
      stat_1_title: "",
      stat_2_title: "",
      stat_3_title: "",
      stat_mobile_title: "",
      stat_description: "",
      description: "",
    },
    panel_2: {
      title: "", 
      description: "",
    },
    panel_3:{
      quote: "",
      name: "",
      founder_title: "",
      meet_team_button: "",
    },
  },
  impact: {
    panel_1:{
      title: "",
      description: "",
      description_sub: "",
      description_sub_p1: "",
      description_sub_p2: "",
      donate_link_text: "",
    }, 
    panel_2:{
      title: "",
      description: "",
      description_ext: "",
      description_sub_1: "",
      description_sub_1_p1: "",
      description_sub_1_p2: "",
      description_sub_1_p3: "",
      description_sub_2: "",
      description_sub_2_p1: "",
      description_sub_2_p2: "",
      description_sub_2_p3: "",
      donate_link_text: "",
    }, 
    panel_3:{
      title: "",
      description: "",
      link_livestream_text: "",
      donate_link_text: "",
    }, 
  },
  goals: {
    panel_1:{
      title: "",
      description: "",
    },
    panel_2: {
      title: "",
      description: "",
    },
  },
  organization: {
    title: "",
    staff: [
      {
        name: "",
        role: "",
        bio: "",
      },
      {
        name: "",
        role: "",
        bio: "",
      },
      {
        name: "",
        role: "",
        bio: "",
      },
      {
        name: "",
        role: "",
        bio: "",
      },
    ],
  },
  donate: {
    amount: "",
    thank_you: "",
    or_use_card: "",
    email: "",
    card_information: "",
    card_exp_placeholder: "",
    name_on_card: "",
    card_country_region: "",
    country: {
      canada: common.country.canada,
      dominican_republic: "",
      france: common.country.france,
      haiti: "",
      united_states: "",
    },
    _prompt: {
      invalid: "",
      success: "",
      donation_failed: "",
    },
    secured_by: "",
  },
};

export const language = writable(french);
