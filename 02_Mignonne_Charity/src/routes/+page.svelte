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
        <a id="title" href="/" >
          <span>Dieu Peut</span>
      <!-- TODO Insert Title SVG here -->
        </a>
      <!-- TODO Nav buttons here -->
        <ul class="nav-link-wrapper">
          <li>
      <!-- TODO FIX LINK -->
            <a id="nav-link-items" href="/"
            >
              Impact
              <!-- 
                TODO Missing
                x-underline:linecontainer.hover.starty.6.curvex.60%.curvey.4.endy.6 
              -->
            </a>
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
    ;
  }

  #nav-top-wrapper{
    @apply
      bg-stone-200
      py-5
      xl:pt-9
      xl:pb-7
      dark:bg-stone-700
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
      justify-between
      items-center
      md:flex-col
      xl:flex-row
      xl:items-end
      before:block
      before:w-10
      md:before:hidden
    ;
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
      dark:text-stone-400
      contrast-more:dark:text-stone-200
      will-change-transform
      hover:scale-105
      transition-transform
      duration-200
      ease-in-out
      motion-reduce:transition-none
    ;
  }

  #nav-link-wrapper{
    @apply
      hidden
      md:flex
      mt-2
      -mb-1
      xl:my-0
      justify-between
      items-center
      w-full
      max-w-3xl
    ;
  }
 
  /*
    Absent here: 
      group
      hover:text-indigo
  */
  .nav-link-items{
    @apply
      text-stone-600
      contrast-more:text-stone-900
      dark:text-stone-400
      contrast-more:dark:text-stone-200
      relative
      block
      px-3
      py-2
      text-lg
      font-bold
      dark:hover:text-white
      transition
    ;
  }
</style>
