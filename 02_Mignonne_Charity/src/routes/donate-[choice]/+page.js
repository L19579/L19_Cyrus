import { language } from './../shared/LanguageData.js';
let lang;
language.subscribe(value => {
  lang = value;
});

export let donation_choice = '';
/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  console.log("DEBUG - donate/page.js: url.pathname: " + url.pathname);

  switch (url.pathname){
    case "/donate-standard":
      break;
    case "/donate-food":
      donation_choice = lang.common.food_donation_program;
      break;
    case "/donate-recreation":
      donation_choice = lang.common.youth_recreation_program;
      break;
    case "/donate-church":
      donation_choice = lang.common.prayer_service;
      break;
  };
  return { }
}
