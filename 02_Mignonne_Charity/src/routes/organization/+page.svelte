<script>
  import Navbar from './../components/shared/Navbar.svelte'
  import Footer from './../components/shared/Footer.svelte'
  import Todo from './../components/shared/Todo.svelte'
</script>

<Navbar current_nav_page = 'organization'/>

<div class="panels-top-wrapper"> 
  <div class="panels-lower-wrapper"> 
    <div class="panels-background-filter">
      <div class="panel-1-outer-wrapper">
        <div class="panel-1-inner-wrapper">
          <div class="meet-the-team-title-wrapper">
            <h2 class="meet-the-team-title">Meet the team!</h2>
          </div>
          <div class="meet-the-team-portraits-wrapper">
            <div class="meet-the-team-portraits" id="portrait-1">
            </div>
            <div class="meet-the-team-portraits" id="portrait-2">
            </div>
            <div class="meet-the-team-portraits" id="portrait-3">
            </div>
            <div class="meet-the-team-portraits" id="portrait-4">
            </div>
            <div class="meet-the-team-portraits" id="portrait-5">
            </div>
            <div class="meet-the-team-portraits" id="portrait-6">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer />

<style>
  .panels-top-wrapper{
    @apply
      block
      xsm:pt-[45px]
      sm:pt-[45px]
      md:pt-[110px]
      xl:pt-[110px]
      bg-stone-100
      w-full
      /*xl:min-h-[410px]*/
    ;
    overflow: hidden; 
    border: 3px solid white;
  }
  
  .panels-lower-wrapper{
    @apply
      flex
      w-full
      h-full
    ;
    position: relative;
    overflow: hidden;
    background-attachment: local;
    background-size: 3000px;
    background-position-x: -445px;
    background-position-y: -200px;
    background-repeat: repeat-x;
    background-image: url("./../../../static/bw_fb_temp_group_img.png");
  }
  
  .panels-background-filter{
    @apply
      w-full
      h-full
    ;
    background-color: rgba(41,37,36,0.4);
  }

  /* No longer req */
  .panel-1-outer-wrapper{
    @apply
      flex
      relative
      /* h-[120vh] */
      h-[1110px]
      justify-center
    ;

    border: 2px solid red;
  }
  
  .panel-1-inner-wrapper{
    @apply
      xsm:px-4
      sm:px-4
      md:px-8
      lg:px-10
      /* eh, review for mobile scaling refactor */
      justify-center
      mb-10
    ;
    overflow: hidden;
    width: 1200px;
    border: 2px solid purple; 
  }

  .meet-the-team-title-wrapper{ /* expl? */
    @apply
      grow
      flex
      m-10
      h-[107px]
      min-w-[200px]
      justify-center
    ;
    overflow: hidden;
    background-size: 50%;
    background-image: url("./../../../static/backgrounds/paper-texture-1.webp");
    border: 2px solid red;
  }

  .meet-the-team-title{
    @apply
      relative
      mt-3
      pb-0
      text-[clamp(28px,8.5vw,68px)]
    ;
    white-space: nowrap;
  }
  
  .meet-the-team-portraits-wrapper{
    @apply
      relative
      h-[70%]
      px-10
    ;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, [col], 50%);
    grid-template-rows: repeat(3, [row], 90);
    border: 2px solid green;
  }

  .meet-the-team-portraits{
    @apply
      mx-5
      bg-stone-100
    ;
    border: 3px solid blue;
  }

  /* This auto adjusts the other grids */
  #portrait-1{
    grid-column: col 1 / span 1;    
    grid-row: row 1 / span 1;    
  }

</style>
