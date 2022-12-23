export let donation_choice = '';
/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  console.log("DEBUG - donate/page.js: url.pathname: " + url.pathname);

  switch (url.pathname){
    case "/donate-standard":
      break;
    case "/donate-food":
      donation_choice = "Food Donation Program"
      break;
    case "/donate-recreation":
      donation_choice = "Youth Recreation Group"
      break;
    case "/donate-church":
      donation_choice = "Prayer Service"
      break;
  };
  return { }
}

