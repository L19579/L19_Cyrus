<script>
  import { language, change_language } from './LanguageData.js';

  let lang;
  language.subscribe(value =>{
    lang = value;    
  });

  function en_fr(){
    let choice = 0;
    lang.language == "EN" ? choice = 1 : choice = 0; 
    change_language(choice);
  };

  export let current_nav_page;   

  let mobileNavVisible = false;
  let languageNavVisible = false;
  
  import Wopprompt from './Wopprompt.svelte';
  import { invalidateAll } from '$app/navigation';
  
  /* Taking shortcuts here; may not be readable on review. Pulling */
  /* value from donate/page.js and repurposing function here for chop */
  function refresh_donate(){
    console.log("refresh_donate called; current_nav_page: " + current_nav_page);
    switch(current_nav_page){
      case "FoodDonationProgram":
      case "YouthRecreationGroup":
      case "PrayerService":
        console.log("found reason to invalidate page.");
        invalidateAll();
        break;
      default:
        console.log("NO invalidation.");
        break;
    };
  };

  let active = "";
  function burger_menu_toggle(){
    active === "active" ? active = "" : active = "active";
  };
</script>

<header id="header">
  <div id="nav-top-wrapper">
    <div id="nav-mid-wrapper">
      <!-- Mobile menu -->
      <div class="burger-menu-wrapper">
        <button class="burger-menu {active}" on:click={() => burger_menu_toggle()}></button>
      </div>
      <nav id="nav-low-wrapper">
      <!-- TODO FIX LINK -->
        <a href="/" id="title-text-wrapper">
          <span id="nav-title">
            <img id="nav-title-sub" src="https://dieupeut-bucket.us-east-1.linodeobjects.com/logo_text_and_symbol_stacked.png">
          </span>
        </a>
        <ul class="nav-link-wrapper">
          <li id="nav-link-items">
            <a href="/impact" class="{current_nav_page === 'impact' ? 'nav-text-selected' : 'nav-text'}">
              {lang.navbar.impact}
            </a>
            <div class="nav-svg-wrapper">
              <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="{current_nav_page === 'impact' ? 'nav-svg-selected' : 'nav-svg'}" id="nav-svg-t1" d="M10 8C16.563 7.61394 23.1388 6.61704 29.6667 5.88889C41.2257 4.59953 52.3852 4 64 4C71 4 78 4 85 4" stroke-width="3" stroke-linecap="round"/>
              <path class="{current_nav_page === 'impact' ? 'nav-svg-selected' : 'nav-svg'}" id="nav-svg-t1" d="M3 4C38.0449 4 72.9763 3.39095 108 3"/>
              </svg>

            </div>
          </li>

          <li id="nav-link-items">
            <a href="/goals" class="{current_nav_page === 'goals' ? 'nav-text-selected' : 'nav-text'}">
              {lang.navbar.goals}
            </a>
            <div class="nav-svg-wrapper">
              <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="{current_nav_page === 'goals' ? 'nav-svg-selected' : 'nav-svg'}" id="nav-svg-t1" d="M3 5.95367C35.9659 0.0413027 69.9108 4.50724 103 6.45367"/>
              </svg>
            </div>
          </li>

          <li id="nav-link-items">
            <a href="/organization" class="place-items-center {current_nav_page === 'organization' ? 'nav-text-selected' : 'nav-text'}">
              {lang.navbar.organization}
            </a>
            <div class="nav-svg-wrapper">
              <svg width="100%" height="auto" viewBox="0 0 184 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="{current_nav_page === 'organization' ? 'nav-svg-selected' : 'nav-svg'}" id="nav-svg-t2"  d="M6 5.42224C33.6588 4.54107 61.4841 2.32714 89.1667 3.20002C107.107 3.76569 125.056 4.0542 142.972 5.20002C152.924 5.83644 163.582 5.53284 173.333 7.81113C175.186 8.24401 176.611 8.42224 178.5 8.42224">
              </svg>
            </div>
          </li>

          <li id="nav-link-items" class="nav-text">
      <!-- TODO FIX LINK // Replace name w/ language icon. TODO: Dropdown menu -->
            <button on:click={() => en_fr()} class="nav-language-button nav-text">
            <div>
              <svg id="nav-language-button-svg" xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewbox="0 0 54 60" stroke-linejoin="bevel">
              <path fill="none" stroke-width="3"
              d="M18,4V14M4,14h29M25,14q0,15-18,22m6-14q11,14
              18,14m0,19 9-25 9 25m-3-7H33"/>
              <path d="m15,41-3,3h6zv10m7-3 3,3-3,3zM14.5,51h9"/>
            </div>
            {#if lang.language === "EN"}
              <span>FR</span>
            {:else}
              <span>EN</span>
            {/if}
            </button>
              <div class="nav-svg-wrapper">
                <svg width="54" height="8" viewBox="0 0 54 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="nav-svg" id="nav-svg-t1" d="M6 5C21.3328 5 36.6662 5 52 5"/>
                </svg>
              </div>
          </li>
        </ul>
        <a on:click={() => refresh_donate()} href="/donate-standard" class="nav-donate" id="donate-web">
          {lang.navbar.donate}
        </a>
      </nav>
    </div>
  </div>

</header>

<div class="burger-menu-dropdown-wrapper {active}">
  <div class="burger-menu-dropdown-options-wrapper">
    <ul class="burger-menu-dropdown-nav-link-wrapper"> 
      <li id="nav-link-items">
        <a href="/impact" class="{current_nav_page === 'impact' ? 'nav-text-selected' : 'nav-text'}">
          {lang.navbar.impact}
        </a>
      </li>
      <li id="nav-link-items">
        <a href="/goals" class="{current_nav_page === 'goals' ? 'nav-text-selected' : 'nav-text'}">
          {lang.navbar.goals}
        </a>
      </li>
      <li id="nav-link-items">
        <a href="/organization" class="{current_nav_page === 'organization' ? 'nav-text-selected' : 'nav-text'}">
          {lang.navbar.organization}
        </a>
      </li>
      <li id="nav-link-items">
      <div>
        <ul class="burger-nav-language-buttons-wrapper">
          <li class="burger-menu-nested-link-items" id="nav-link-items">
            <button class="nav-language-button nav-text nav-nested-mobile-button"
            on:click={() => change_language(0)}>
              🇺🇸 
            </button>
          </li>
          <li class="burger-menu-nested-link-separators" id="nav-link-items">|</li>
          <li class="burger-menu-nested-link-items" id="nav-link-items">
            <button class="nav-language-button nav-text nav-nested-mobile-button"
            on:click={() => change_language(1)}>
              🇫🇷
            </button> 
          </li>
          <li class="burger-menu-nested-link-separators" id="nav-link-items">|</li>
          <li class="burger-menu-nested-link-items" id="nav-link-items">
            <button class="nav-language-button nav-text nav-nested-mobile-button"
            on:click={() => change_language(2)}>
              🇭🇹
            </button> 
          </li>
        </ul>
      </div>
      </li>
    </ul>
    <div class="nav-mobile-donate-wrapper">
      <a on:click={() => refresh_donate()} href="/donate-standard" class="nav-mobile-donate">
        {lang.navbar.donate}
      </a>
    </div>
  </div>
</div>


<style>

  li{ /* here to stop mobile language flag horizontal slide */
    overflow: hidden;
  }

  #header{
    @apply
      fixed
      w-full
      z-30
      top-0
      left-0
      right-0
    ;
  }

  #nav-top-wrapper{
    @apply
      bg-stone-200 
      py-5
      xl:pt-9
      xl:pb-7
    ;
    /* TODO: bg too bland, reconsider */
    /* background-color: rgb(242,210,139); */
    /* background-color: rgb(215,227,238); */
    /* background-color: rgb(202, 211, 200); */
    /* background-color: rgb(236, 240, 241); grey */
    /* background-color: rgb(210,215,211); darkey grey */
    /* background-color: rgb(255, 218, 121); decent yellow, no match */
    /* background-color: rgb(227,225,240);  Close to ok */
    /* background-color: rgba(235,233,242,1); ligher shade of below */
    /* background-color: rgb(221,223,235,0.6); */
    /* background-color: rgb(230,232,239);  liveable */
    border-bottom: 1px solid rgb(30,41,59);
    box-shadow: 0 0.2px 2px rgb(30,41,59);
  }

  #nav-mid-wrapper{
    @apply
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      md:px-8
      lg:px-10
    ;
  }

  #nav-low-wrapper{
    @apply
      flex
      justify-around
      items-center
      md:flex-col
      xl:flex-row
      before:block
      before:w-10 /* prob not needed */
      md:before:hidden
    ;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  #nav-title{
    @apply
      block 
      /* w-[150px] */
      w-[110px]
      h-[39px]
      -mt-2.5
      md:mt-0
      translate-x-3
      xl:translate-x-0
      /* md:w-[185px] */
      text-stone-600
      contrast-more:text-stone-900
      hover:scale-105
      justify-center
      text-3xl
    ;
    text-decoration: none;
    display: flex;
    /* border: 2px solid red; */
  }

  #nav-title-sub{
    transform: scale(1.55) translateY(8%) translateX(-7%);
  }

  /* !! hidden no use, refactor; px-0 voodoo fix for left margin */
  .nav-link-wrapper{
    @apply
      hidden
      md:flex
      px-0
      mt-2
      -mb-1
      xl:my-0
      justify-around
      items-center
      w-full
      /* max-w-3xl */
      max-w-2xl
    ;
    list-style: none;
    /* border: 2px solid black; */
  }

  /*
    Absent here: 
      group
      hover:text-indigo
  */

  /* transition likely not useful ; and block?*/
  #nav-link-items{
    @apply
      text-stone-600
      contrast-more:text-stone-900
      relative
      block
      px-3
      py-2
      /* text-xl */
      font-bold
      justify-center
    ;
    font-size: 1.34rem;
    stroke-opacity: 0%;
    flex-basis: 1;
    text-align: center;
    text-decoration: none;
    /* border: 2px solid blue; */
  }

  #title-text-wrapper{
    @apply
      font-bold
      text-stone-600
    ;
    text-decoration: none;
  }

  /* -------------------------- burger menu */
  .burger-menu-wrapper{
    visibility: hidden;
    margin-left: 88%;
    height: 0px;
  }
  
  .burger-menu{
    transform: translateY(20px);

    outline: none;
    height: 20px;
    width: 15px;
    border: 0px;
    padding: 0px;
    background: transparent;
    transition: all 250ms ease-out;
    cursor: pointer;
  }

  .burger-menu:before, .burger-menu:after{
    content: '';
    width: 24px;
    height: 2px;
    position: absolute;
    background: rgb(26,26,26); /* fix TODO */
    transition: all 250ms ease-out;
    will-change: transform;
  }

  .burger-menu:before{
    transform: translateY(-3px);
  }

  .burger-menu:after{
    transform: translateY(3px);
  }

  .active.burger-menu:before{
    transform: translateY(0) rotate(45deg);
  }

  .active.burger-menu:after{
    transform: translateY(0) rotate(-45deg);
  }

  .nav-text{
    color: inherit;
    text-decoration: none;
    stroke: black; /* no longer rel */
  }

  .nav-text-selected{
    text-decoration: none; 
    /* color: red; */
    /* stroke: red; */
    color: rgb(24,0,101);
    stroke: rgb(24,0,101);
  }

  svg{
    /* border: 0.2px solid purple; */
  }

  .nav-svg-wrapper{
    @apply
      flex
      absolute
      justify-center
      inset-x-1.5
      bottom-[5px]
      h-2.5
    ;
    /* stroke: red; */
    stroke: rgb(24,0,101);
    stroke-width: 4;
    stroke-linecap: round;
    /* border: 0.2px solid orange; */
  }

  .nav-svg{
    stroke-opacity: inherit;
  }
  
  .nav-svg-selected{
    stroke-opacity: 100%;
  }
  
  #nav-link-items:hover .nav-text{
    /* 
    @apply
      text-red-600 
    ;
    */
    /* for language svg */
    /* stroke: red; */
    stroke: rgb(24,0,101);
    color: rgb(24,0,101);
    stroke-opacity: 100%;
  }
  
  #nav-link-items:hover .nav-svg{
    stroke-opacity: 100%;
    stroke-dasharray: 1000;
  }

  #nav-link-items:hover #nav-svg-t1{
    animation: dash 1.5s linear forwards;
  }
  
  #nav-link-items:hover #nav-svg-t2{
    animation: dash 0.7s linear forwards;
  }
  
  @keyframes dash{
    from{
      stroke-dashoffset: 1000;
    }
    to{
      stroke-dashoffset: 0; 
    }
  }

  .nav-donate{
    @apply
      hidden
      xl:block
      py-2
      px-8
      /* bg-indigo-700 */
      text-white
      font-bold
      text-xl
      rounded-full
      /*
      will-change-transform
      hover:scale-110
      transition-transform duration-200 ease-in-out
      motion-reduce:transition-none
      */
    ;
    border: 0.2px solid black;
    background-color: rgb(45,10,171);
    will-change: transform;
    text-decoration: none;
  }

  .nav-mobile-donate-wrapper{
    @apply
      flex 
      justify-center
    ;
    padding-left: 45px;
    /* border: 2px solid green; */
  }

  .nav-mobile-donate{ /* simplify w/ above */
    @apply
      xl:block
      py-2
      px-8
      text-white
      font-bold
      text-xl
      rounded-full
    ;
    border: 1px solid rgb(254,189,44);
    background-color: rgb(45,10,171);
    will-change: transform;
    text-decoration: none;
  }

  .nav-mobile-donate:hover, .nav-donate:hover, #nav-title:hover {
    transition-duration: 200ms;
    transform: scale(1.1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
    
  .nav-language-button{
    @apply
      block
      flex
      items-center
      gap-0.5
    ;
    background-color: inherit;
    border: inherit;
    color: inherit;
    font: inherit;
  }

  .nav-language-button:hover{
    cursor: pointer;
  }
  
  #nav-language-button-svg{
    @apply
      flex
    ;
    stroke-opacity: 100%;
  }

  /* -------------------------- burger menu dropdown */
  .burger-menu-dropdown-wrapper{
    @apply
      flex
      justify-center
    ;
    visibility: hidden;
    position: fixed;
    z-index: 29;
    background-color: rgb(245,245,244);
    height: 110vh;
    width: 100vw;
    transition: all 0.5s ease-in-out;
    transform: translateY(-105%);
    will-change: transform;
    /* border: 2px solid red; */
  }

  .active.burger-menu-dropdown-wrapper{
    transform: translateY(0%);
    visibility: visible;
  }

  .burger-menu-dropdown-options-wrapper{
    margin-top: 20vh;
    width: 90%;
    height: 400px;  
    padding-right: 25px;
    margin-right: 0.7rem;
    /* border: 2px solid red; */
  }

  .burger-menu-dropdown-nav-link-wrapper{
    @apply
      flex
      flex-col
      justify-around
    ;
    height: 70%;
    /* border: 2px solid blue; */
  }

  /* -------------------------- burger menu activation */
  @media only screen and (max-width: 767px){
    .burger-menu-wrapper{
      visibility: visible;
    }
    
    #title-text-wrapper{
      margin-top: 20px;
      margin-bottom: 20px;
    } 
  }

  @media only screen and (min-width: 768px){
    .active.burger-menu-dropdown-wrapper{
      visibility: hidden;
    }
  }
  
  .burger-nav-language-buttons-wrapper{
    display: flex;
    justify-content: center;
    max-height: 50px;
    padding-right: 35px;
    transform: translateX(-0.5rem);
    /* border: 2px solid red; */
  }

  .burger-menu-nested-link-items{
    @apply
      flex
    ;
    overflow-y: hidden;
    /* border: 2px solid blue; */
  }

</style>
