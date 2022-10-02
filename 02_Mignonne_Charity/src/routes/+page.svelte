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
        <a href="/" >
          <span id="title">Dieu Peut</span>
      <!-- TODO Insert Title SVG here -->
        </a>
      <!-- TODO Nav buttons here -->
        <ul class="nav-link-wrapper">

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/"> Impact </a>
            <svg width="89" height="16" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="example_svg" clip-path="url(#clip0_3_13)">
              <path id="Vector 1" d="M4 19C6.30004 12.5923 9.35865 7.09731 13.049 5.6142C20.0659 2.79426 27.8318 10.4268 34.6507 13.4829C51.0295 20.8236 67.7271 16.7293 84 10.046" 
              stroke="red" stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3_13">
              <rect width="89" height="19" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </li>

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/"> Impact </a>
            <svg width="89" height="16" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="example_svg" clip-path="url(#clip0_3_13)">
              <path id="Vector 1" d="M4 19C6.30004 12.5923 9.35865 7.09731 13.049 5.6142C20.0659 2.79426 27.8318 10.4268 34.6507 13.4829C51.0295 20.8236 67.7271 16.7293 84 10.046" 
              stroke="red" stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3_13">
              <rect width="89" height="19" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </li>

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/"> Impact </a>
            <svg width="89" height="16" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="example_svg" clip-path="url(#clip0_3_13)">
              <path id="Vector 1" d="M4 19C6.30004 12.5923 9.35865 7.09731 13.049 5.6142C20.0659 2.79426 27.8318 10.4268 34.6507 13.4829C51.0295 20.8236 67.7271 16.7293 84 10.046" 
              stroke="red" stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3_13">
              <rect width="89" height="19" fill="white"/>
              </defs>
            </svg>
          </li>

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/"> Impact </a>
            <svg width="89" height="16" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="example_svg" clip-path="url(#clip0_3_13)">
              <path id="Vector 1" d="M4 19C6.30004 12.5923 9.35865 7.09731 13.049 5.6142C20.0659 2.79426 27.8318 10.4268 34.6507 13.4829C51.0295 20.8236 67.7271 16.7293 84 10.046" 
              stroke="red" stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3_13">
              <rect width="89" height="19" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </li>

          <li id="nav-link-items">
      <!-- TODO FIX LINK -->
            <a href="/"> Impact </a>
            <svg width="89" height="16" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="example_svg" clip-path="url(#clip0_3_13)">
              <path id="Vector 1" d="M4 19C6.30004 12.5923 9.35865 7.09731 13.049 5.6142C20.0659 2.79426 27.8318 10.4268 34.6507 13.4829C51.0295 20.8236 67.7271 16.7293 84 10.046" 
              stroke="red" stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3_13">
              <rect width="89" height="19" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </li>

        </ul>
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
    padding-left: 5rem;
    padding-right: 5rem;
    border: 2px solid green;
  }

  #title{
    @apply
      block w-[158px]
      -mt-2.5
      md:mt-0
      translate-x-3
      xl:translate-x-0
      md:w-[185px]
      text-stone-600
      contrast-more:text-stone-900
      hover:scale-105
      justify-center
    ;
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
      justify-between
      items-center
      w-full
      max-w-3xl
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
    min-width: 125px;
    flex-basis: 1;
    text-align: center;
    text-decoration: none;
    border: 2px solid blue;
  }
</style>
