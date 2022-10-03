<script>

  let mobileNavVisible = false;
  let languageNavVisible = false;

</script>


<header id="header">
  <div id="nav-top-wrapper">
    <div id="nav-mid-wrapper">
      <!-- TODO fill x-data, breaking atm -->
      <nav id="nav-low-wrapper" x-data="">
      <!-- TODO FIX LINK -->
        <a href="/" id="title-text-wrapper">
          <span id="nav-title">Dieu Peut</span>
      <!-- TODO Insert Title SVG here -->
        </a>
      <!-- TODO Nav buttons here -->
        <ul class="nav-link-wrapper">
          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/" class="nav-text">Impact</a>
            <div class="nav-svg-wrapper">
              <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="nav-svg" id="nav-svg-t1" d="M10 8C16.563 7.61394 23.1388 6.61704 29.6667 5.88889C41.2257 4.59953 52.3852 4 64 4C71 4 78 4 85 4" stroke="black" stroke-width="3" stroke-linecap="round"/>
              <path class="nav-svg" id="nav-svg-t1" d="M3 4C38.0449 4 72.9763 3.39095 108 3" stroke="black" stroke-width="3" stroke-linecap="round"/>
              </svg>

            </div>
          </li>

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/" class="nav-text">Goals</a>
            <div class="nav-svg-wrapper">
              <svg width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="nav-svg" id="nav-svg-t1" d="M3 5.95367C35.9659 0.0413027 69.9108 4.50724 103 6.45367" stroke="black" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
          </li>

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/" class="place-items-center nav-text">Organization</a>
            <div class="nav-svg-wrapper">
              <svg width="100%" height="auto" viewBox="0 0 184 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="nav-svg" id="nav-svg-t2" d="M6 5.42224C33.6588 4.54107 61.4841 2.32714 89.1667 3.20002C107.107 3.76569 125.056 4.0542 142.972 5.20002C152.924 5.83644 163.582 5.53284 173.333 7.81113C175.186 8.24401 176.611 8.42224 178.5 8.42224" stroke="black" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
          </li>

          <li id="nav-link-items" class="nav-text">
      <!-- TODO FIX LINK // Replace name w/ language icon. TODO: Dropdown menu -->
            <button class="nav-language-button">
            <div>
              <svg id="svg-translate" xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewbox="0 0 54 60" stroke="#000" stroke-linejoin="bevel">
              <path fill="none" stroke-width="3"
              d="M18,4V14M4,14h29M25,14q0,15-18,22m6-14q11,14
              18,14m0,19 9-25 9 25m-3-7H33"/>
              <path d="m15,41-3,3h6zv10m7-3 3,3-3,3zM14.5,51h9"/>
            </div>
            <span>EN</span>
            </button>
              <div class="nav-svg-wrapper">
                <svg width="54" height="8" viewBox="0 0 54 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="nav-svg" id="nav-svg-t1" d="M6 5C21.3328 5 36.6662 5 52 5" stroke="black" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </div>
          </li>
        </ul>
        <a href="/" class="nav-donate">Donate</a>
      </nav>
    </div>
  </div>
</header>


<style>

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
      before:w-10
      md:before:hidden
    ;
    padding-left: 6rem;
    padding-right: 6rem;
    border: 2px solid green;
  }

  #nav-title{
    @apply
      block w-[150px]
      -mt-2.5
      md:mt-0
      translate-x-3
      xl:translate-x-0
      /* md:w-[185px] */
      text-stone-600
      contrast-more:text-stone-900
      hover:scale-105
      justify-center
    ;
    text-decoration: none;
    display: flex;
    border: 2px solid red;
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
      max-w-xl
    ;
    list-style: none;
    border: 2px solid black;
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
      text-lg
      font-bold
      justify-center
    ;
    flex-basis: 1;
    text-align: center;
    text-decoration: none;
    /* border: 2px solid blue; */
  }

  #title-text-wrapper{
    text-decoration: none;
  }

  .nav-text{
    text-decoration: none;
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
    /* border: 0.2px solid orange; */
  }

  .nav-svg{
    stroke: red;
    stroke-width: 4;
    stroke-linecap: round;
    opacity: 0;
    /* border: 0.2px solid purple; */
  }
  
  #nav-link-items:hover .nav-text{
    @apply
      text-red-600
    ;
  }
  
  #nav-link-items:hover .nav-svg{
    opacity: 100%;
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
      bg-indigo-700
      text-white
      font-bold
      text-lg
      rounded-full
      /*
      will-change-transform
      hover:scale-110
      transition-transform duration-200 ease-in-out
      motion-reduce:transition-none
      */
    ;
    will-change: transform;
    text-decoration: none;
  }
  .nav-donate:hover, #nav-title:hover {
    transition-duration: 200ms;
    transform: scale(1.1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  #svg-translate{
    @apply
      flex;
    ;
    
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
</style>
