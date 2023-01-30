<svelte:head>
  <title>
    Our Team
  </title>
</svelte:head>

<script>
  import Navbar from './../shared/Navbar.svelte'
  import Footer from './../shared/Footer.svelte'
  import Todo from './../shared/Todo.svelte'
</script>

<Navbar current_nav_page = 'organization'/>

<div class="panels-top-wrapper"> 
  <div class="panels-lower-wrapper"> 
    <div class="panels-background-filter">
      <div class="meet-the-team-title-wrapper">
        <div class="meet-the-team-title-wrapper-filter">
          <h2 class="meet-the-team-title">Meet the team!</h2>
        </div>
      </div>
      <div class="panel-1-outer-wrapper">
        <div class="panel-1-inner-wrapper">
          <div class="panel-1-inner-wrapper-cover">
            <div class="meet-the-team-portraits-wrapper">
              <div class="meet-the-team-portraits" id="portrait-1">
                <div class="portrait-img-wrapper" id="portrait-1-img-wrapper">
                  <img class="portrait-imgs" id="portrait-img-2" src="https://dieupeut-bucket.us-east-1.linodeobjects.com/williane_portrait.png" />
                </div>
                <div class="portrait-employee-info" id="portrait-1-emplopyee-info">
                  <div class="employee-name" id="employee-1-name">
                    Williane Moise
                  </div>
                  <div class="employee-function" id="employee-1-function">
                    President
                  </div>
                  <div class="employee-bio" id="employee-1-bio">
                    <p> 
                      Bio of person in focus. Section should be 2 - 3 sentences long and briefly 
                      touch on relevant career hightlights. Include a couple non specific/relatable 
                      attribute or interest (i.e. "expert in all things tomatoes, ask about the farm!").
                    </p>
                  </div>
                </div>
              </div>
              <div class="meet-the-team-portraits" id="portrait-2">
                <div class="portrait-img-wrapper" id="portrait-2-img-wrapper">
                  <img class="portrait-imgs" id="portrait-img-1" src="https://dieupeut-bucket.us-east-1.linodeobjects.com/rubenson_portrait.png" />
                </div>
                <div class="portrait-employee-info" id="portrait-2-emplopyee-info">
                  <div class="employee-name" id="employee-2-name">
                    Rubenson Alexandre
                  </div>
                  <div class="employee-function" id="employee-2-function">
                    General Manager
                  </div>
                  <div class="employee-bio" id="employee-2-bio">
                    <p>
                      Bio of person in focus. Section should be 2 - 3 sentences long and briefly 
                      touch on relevant career hightlights. Include a couple non specific/relatable 
                      attribute or interest (i.e. "expert in all things tomatoes, ask about the farm!").
                    </p>
                  </div>
                </div>
              </div>
              <div class="meet-the-team-portraits" id="portrait-3">
                <div class="portrait-img-wrapper" id="portrait-3-img-wrapper">
                  <img class="portrait-imgs" id="portrait-img-3" src="https://dieupeut-bucket.us-east-1.linodeobjects.com/wadlet_portrait.png" />
                </div>
                <div class="portrait-employee-info" id="portrait-3-emplopyee-info">
                  <div class="employee-name" id="employee-3-name">
                    Wadlet Merassaint
                  </div>
                  <div class="employee-function" id="employee-3-function">
                    Secretary
                  </div>
                  <div class="employee-bio" id="employee-3-bio">
                    <p>
                      Bio of person in focus. Section should be 2 - 3 sentences long and briefly 
                      touch on relevant career hightlights. Include a couple non specific/relatable 
                      attribute or interest (i.e. "expert in all things tomatoes, ask about the farm!").
                    </p>
                  </div>
                </div>
              </div>
              <div class="meet-the-team-portraits" id="portrait-4">
                <div class="portrait-img-wrapper" id="portrait-4-img-wrapper">
                  <img class="portrait-imgs" id="portrait-img-4" src="https://dieupeut-bucket.us-east-1.linodeobjects.com/saintis_portrait.png" />
                </div>
                <div class="portrait-employee-info" id="portrait-4-emplopyee-info">
                  <div class="employee-name" id="employee-4-name">
                    Baudelaire Saintis
                  </div>
                  <div class="employee-function" id="employee-4-function">
                    Coordinator
                  </div>
                  <div class="employee-bio" id="employee-4-bio">
                    <p>
                      Bio of person in focus. Section should be 2 - 3 sentences long and briefly 
                      touch on relevant career hightlights. Include a couple non specific/relatable 
                      attribute or interest (i.e. "expert in all things tomatoes, ask about the farm!").
                    </p>
                  </div>
                </div>
              </div>
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
      xsm:pt-[106px]
      sm:pt-[106px]
      md:pt-[106px]
      xl:pt-[106px]
      bg-stone-100
      w-full
      /*xl:min-h-[410px]*/
    ;
    overflow: hidden; 
    /* border: 3px solid purple; */
  }
  
  .panels-lower-wrapper{
    @apply
      flex
      w-full
      h-full
    ;
    position: relative;
    overflow: hidden;
    background-size: 190px;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/bw_logo_text_and_symbol_tilted.png");
    /*
    background-attachment: local;
    background-size: 2000px;
    background-position-x: -445px;
    background-position-y: -200px;
    background-repeat: repeat-x;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/old_img_black_group.webp"); 
     */
  }
  
  .panels-background-filter{
    @apply
      w-full
      h-full
    ;
    background: 
      linear-gradient(to left, rgba(255,255,255,0.2) -30%, rgba(255,255,255,0.97) 10%,  
          rgba(255,255,255,0.97) 90%, rgba(255,255,255, 0.2) 130%);
  }

  /* 
     This doesn't have a max height, but works
      for now. May need to change for mobile view.
   */
  .panel-1-outer-wrapper{
    @apply
      flex
      relative
       /* h-[90vh] */
      min-h-[870px]
      justify-center
      mb-0
    ;

    /* border: 2px solid red; */
  }
  
  .panel-1-inner-wrapper{
    @apply
      /* eh, review for mobile scaling refactor */
      flex
      mb-10
      justify-center
    ;
    overflow: hidden;
    width: 1200px;
    height: 1300px;
    /* border: 2px solid red; */
    /* border-radius: 20px; */
    /* background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/paper-texture-6.jpg"); */
  }

  .panel-1-inner-wrapper-cover{
    @apply
      /*
      xsm:px-4
      sm:px-4
      md:px-8
      lg:px-10
      */
      justify-center
    ;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* background-color: rgba(41,37,36,0.15); */
  }

  .meet-the-team-title-wrapper{ /* expl? */
    @apply
      relative
      flex
      /* h-[107px] */
      justify-center
      mb-2
      h-[140px]
    ;
    background-attachment: local;
    background-position-x: -300px;
    background-position-y: -1200px;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/paper-texture-6.jpg");

    overflow: hidden;
    border-bottom: 3px solid;
    border-color: rgb(120,113,108);
    /*border: 2px solid red;*/
  }

  .meet-the-team-title-wrapper-filter{
    @apply
      flex
      relative
      justify-center
      pb-6
    ;

    width: 100%;
    height: 100%;
    background-color: rgba(120,113,108,0.3);
  }

  .meet-the-team-title{
    @apply
      relative
      mt-3
      text-[clamp(50px,8.5vw,70px)]
    ;
    margin: auto;
    text-align: center;
    white-space: nowrap;
    /* border: 3px solid red; */
  }
  
  .meet-the-team-portraits-wrapper{
    @apply
      flex
      relative
      h-[100%]
      justify-center
    ;
    display: grid;
    grid-template-columns: repeat(2, [col], 50%);
    grid-template-rows: repeat(2, [row], 50%);
    background-color: rgba(255,255,255,0.1);
    /* border: 2px solid green; */
  }

  .meet-the-team-portraits{
    @apply
      mx-5
      /* bg-stone-300 */
    ;
    padding-top: 30px;
    min-width: 480px;
    height: 570px; 
    /* border-radius: 20px; */
    /* border: 2px solid black; */
  }

  #portrait-1{
    grid-column: col 1 / span 1;    
    grid-row: row 1 / span 1;    
  }
  
  #portrait-2{
    grid-column: col 2 / span 1;    
    grid-row: row 1 / span 1;    
  }

  #portrait-3{
    grid-column: col 1 / span 1;    
    grid-row: row 2 / span 1;    
  }
  
  #portrait-4{
    grid-column: col 2 / span 1;    
    grid-row: row 2 / span 1;    
  }
 /* 
  #portrait-5{
    grid-column: col 1 / span 1;    
    grid-row: row 3 / span 1;    
  }
  
  #portrait-6{
    grid-column: col 2 / span 1;    
    grid-row: row 3 / span 1;    
  }
  */

  @media only screen and (max-width: 900px){ 
    .panel-1-inner-wrapper{
      height: 2600px;
    }
    .meet-the-team-portraits-wrapper{
      grid-template-columns: repeat(1, [col], 100%);
      grid-template-rows: repeat(4, [row], 25%);
    }

    #portrait-1{
      grid-column: col 1 / span 1;    
      grid-row: row 1 / span 1;    
    }
    
    #portrait-2{
      grid-column: col 1 / span 1;    
      grid-row: row 2 / span 1;    
    }

    #portrait-3{
      grid-column: col 1 / span 1;    
      grid-row: row 3 / span 1;    
    }
    
    #portrait-4{
      grid-column: col  / span 1;    
      grid-row: row 4 / span 1;    
    }
  }

  .portrait-img-wrapper{
    @apply
      flex
      mt-1
      mb-2
      mx-[auto]
      rounded-full
      justify-center
    ;
    width: 270px;
    height: 270px;
    /* border: red solid 2px; */
  }  

  .portrait-imgs{
    @apply
      flex
      relative
    ;
    /* border: 2px solid green; */
  }

  #portrait-img-1{
  }

/* weird nesting issue here. Likely an error in html */
  .portrait-employee-info{
    @apply
      relative
      flex
      flex-col
      justify-center
    ;
    max-width: 100%;
    max-height: 100%;
    /* border: 5px solid black; */
  }
  
  .employee-name{
    @apply
      text-4xl
    ;
    margin-top: 4px;
    font-weight: 700;
    text-align: center;
    /* border: 2px solid green; */
  }

  .employee-function{
    @apply
      text-2xl
    ;
    font-weight: 600;
    text-align: center;
    /* border: 2px solid red; */
  }

  .employee-bio{
    @apply
      text-xl
      px-14
    ;
    /* color: rgb(61, 60, 58); */
    text-align: center;
    font-weight: 600;
    /* border: 2px solid red; */
  }
</style>
