import { writable } from 'svelte/store'; 

export const common = {
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
    contact: "Contact us", 
    phone_number_button: "+1(647) 854-3160",
    email_button: "contact@dieupeut.com",
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
      //title_p1: "Focused on contributing",
      //title_p2: "to foundations of ....",
      //description: "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry\'s standard dummy Lorem Ipsum has been the industry\'s standard dummy",
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
      //description: "Since our founding(??) we've dedicated resources to helping families and children in critical need in Haiti, and Canada. The hardships we aim to ameliorate have been experienced by our staff first hand. Our mission is to reduce the number of people forced to walk difficult paths alone. Programs currently supported by our donors include meal assitance, and youth social programs. We also host prayer services in person and online.",
    },
    panel_2: {
      title: "We Want To Do More!", 
      description: "We’re only in the early stages of our journey. The long term strategy of our effort is to have a meaningful impact on as many lives as possible. We hope to scale our operations to numerous high density jurisdictions in Haiti. Your support will allow us to make our meal assistance service available in remote areas; bringing food staples to those unable to travel. Plans are also in place for a more diversified, and career focused youth program portfolio.",
      //description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    panel_3:{
      //quote: "orem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pub.",
      quote: "Dieu Peut Charity is an extension of various Haitian-Canadian church services under our leadership. Formalising the charity wing was a natural step forward. We have extensive experience in managing food drives, social programs. Making that experience useful where it’s needed most in Haiti is a goal that is now possible with your backing. Thank you!",
      name: "Williane Moise",
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
      //link_livestream_text: "Livestream",
      link_livestream_text: "Live online events are held at 7:00pm every Sunday.",
      donate_link_text: "Help Prayer Service",
    }, 
  },
  goals: {
    panel_1:{
      title: "Expanding Aid",
      description: "Over 120 Haitian families have received assistance from Dieu Peut Charity, resulting in material relief from economic setbacks since our founding in 2022. This linear growth is critical to our mission. With your assistance we plan to expand our food donation initiatives beyond the borders of Port-au-Prince. We want to open remote meal delivery to rural areas without the transport infrastructure and local resources for food availability. Our secondary growth objective is to make youth programs available in Gonaives. We see value in closing educational gaps in cities with insufficient internet penetration. ",
      //description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    panel_2: {
      title: "Digital Growth",
      description: "Making our prayer service more accessible and interactive for a global audience is also top of mind. We’re putting an extra emphasis on capital efficiency on this project. Most of our growth will be in online content delivery. The number of dedicated hosts and streams will increase in the near term, with content going beyond Sunday prayer. We’re building a team infrastructure to support live streams and other content across major streaming platforms and social media.",
      //description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.",
    },
  },
  organization: {
    title: "Meet the team!",
    staff: [
      {
        name: "Williane Moise",
        role: "Founder & President",
        bio: "Bio of person in focus. Section should be 2 - 3 sentences long and briefly touch on relevant career hightlights. Include a couple non specific/relatable attribute or interest (i.e. \"expert in all things tomatoes, ask about the farm!\").",
      },
      {
        name: "Rubenson Alexandre",
        role: "General Manager",
        bio: "Bio of person in focus. Section should be 2 - 3 sentences long and briefly touch on relevant career hightlights. Include a couple non specific/relatable attribute or interest (i.e. \"expert in all things tomatoes, ask about the farm!\").",
      },
      {
        name: "Wadlet Merassaint",
        role: "Secretary",
        bio: "Bio of person in focus. Section should be 2 - 3 sentences long and briefly touch on relevant career hightlights. Include a couple non specific/relatable attribute or interest (i.e. \"expert in all things tomatoes, ask about the farm!\").",
      },
      {
        name: "Baudelaire Saintis",
        role: "Coordinator",
        bio: "Bio of person in focus. Section should be 2 - 3 sentences long and briefly touch on relevant career hightlights. Include a couple non specific/relatable attribute or interest (i.e. \"expert in all things tomatoes, ask about the farm!\").",
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

export const language = writable(english);
