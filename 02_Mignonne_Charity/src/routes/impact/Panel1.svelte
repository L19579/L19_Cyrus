<svelte:head>
  <title>
    Impact
  </title>
</svelte:head>

<script>
  const ipsum = "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy";
</script>

<div class="background-wrapper">
  <div class="panel-0-outer-wrapper">
    <div class="panel-0-description-wrapper">
      <h2 id="temp-panel-0">
        <!-- Cancelled planned for text ; temp hold -->
      </h2>
    </div>
    <div class="panel-0-background-wrapper">
      <div class="panel-0-background-1">
      </div>
      <div class="panel-0-background-2">
      </div>
    </div>
  </div>

  <div class="panels-group-outer-wrapper" id="panel-1-outer-wrapper">
    <div class="panels-group-background" id="panel-1-background-1"> <!-- bit messy refactor TODO -->
      <div class="panels-group-background" id="panel-1-background-2">
        <div id="panel-1-background-cover">
          <div class="panels-group-inner-wrapper" id="panel-1-inner-wrapper">
            <div class="panels-group-title-wrapper" id="panel-1-title-wrapper">
              <h2 class="panels-group-title-text" id="panel-1-title-text">
                Food for X Program
              </h2>
            </div>
            <div class="panels-group-description-wrapper" id="panel-1-description-wrapper">
              <p class="panels-group-description-text">
                -- Write up not clean; throwing thoughts around -- <br />
                {ipsum}
              </p>
            </div>
            <div class="panels-group-donate-button-wrapper" id="panel-1-donate-button-wrapper">
              <a href="/donate-food" class="panels-group-donate-button" id="panel-1-donate-button">
                Contribute To Food Bank
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="panels-group-outer-wrapper" id="panel-2-outer-wrapper">
    <div id="panel-2-background-1">
      <div id="panel-2-background-2">
        <div id="panel-2-background-center-cover">
          <div id="panel-2-background-left-cover">
            <div id="panel-2-background-right-cover">
              <div class="panels-group-inner-wrapper" id="panel-2-inner-wrapper">
                <div class="panels-group-title-wrapper" id="panel-2-title-wrapper">
                  <h2 class="panels-group-title-text" id="panel-2-title-text">
                    Recreation Group
                  </h2>
                </div>
                <div class="panels-group-description-wrapper" id="panel-2-description-wrapper">
                  <p class="panels-group-description-text">
                    -- Write up not clean; throwing thoughts around -- <br />
                    We're strong believers in bringing positive and constructive activies to 
                    Haiti's children and young adults. Whether that's piano lessons, a listening ear, 
                    a local checkers tournament or help with brain teaser on a school assignment; 
                    we provide the space and tools for our young to build lasting bonds and critical 
                    life skills.
                  </p>
                </div>
                <div class="panels-group-donate-button-wrapper" id="panel-2-donate-button-wrapper">
                  <a href="/donate-recreation" class="panels-group-donate-button" id="panel-2-donate-button">
                    Support Youth Program
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="panels-group-outer-wrapper" id="panel-3-outer-wrapper">
    <div id="panel-3-background">
      <div id="panel-3-background-side-cover">
      <div id="panel-3-background-top-cover">
        <div class="panels-group-inner-wrapper" id="panel-3-inner-wrapper">
          <div class="panels-group-title-wrapper" id="panel-3-title-wrapper">
            <h2 class="panels-group-title-text" id="panel-3-title-text">
              Prayer Service
            </h2>
          </div>
          <div class="panels-group-description-wrapper" id="panel-3-description-wrapper">
            <p class="panels-group-description-text">
              -- Write up not clean; throwing thoughts around -- <br />
              Besides running charity programs our founder hosts weekly virtual weekly virtual
              and in person prayer groups for a Haitian audience accross the world (?). Our
              efforts continue to grow with an increase in hosts, in-person events, and ... .
              We're building an inclusive community for those who seek to celebrate the word
              of God.
              
            </p>
          </div>
          <div class="panels-group-donate-button-wrapper" id="panel-3-donate-button-wrapper">
            <a href="/donate-church" class="panels-group-donate-button" id="panel-3-donate-button">
              Help Prayer Service
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

</div>

<style>
  .background-wrapper{
    @apply
      relative
      w-[100%]
    ;
    overflow: hidden;
    /* border: 2px solid black; */
  }
  
  /* Panel 0 specifics */

  .panel-0-outer-wrapper{
    /*width: 11100px;*/
    width: 2720px;
    /* border: 5px solid black; */
  }

  .panel-0-background-wrapper{
    @apply
      z-10
      flex /* This solved our sliding bg headaches */
    ;
    width: 200%;
    height: 140px;
    top: 0px;
    left: 0px;
    overflow: hidden;
    background-color: black;
    /* border: 2px solid orange; */
  }
  
  .panel-0-background-1{
    @apply
      relative
      top-0;
    ;
    width: 100%;
    height: 100%;
    float: left;

    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/edited_impact_0_banner_fill_check_2.png");
    /* background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/impact_0_banner_fill_check_2.png"); */
    /* background-image: url("./../../../static/temporary/impact_0_banner_fill_check_2.png"); */
    background-size: 2720px;
    /* animation: slide 385s linear infinite; */
    animation: slide 90s linear infinite;

    /* border: 4px solid green; */
  }

  .panel-0-background-2{
    @apply
      relative
      top-0;
    ;
    width: 100%;
    height: 100%;
    float: left;
    
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/edited_impact_0_banner_fill_check_2.png");
    /* background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/impact_0_banner_fill_check_2.png"); */
    /* background-image: url("./../../../static/temporary/impact_0_banner_fill_check_2.png"); */
    background-size: 2720px;
    /* animation: slide 385s linear infinite; */
    animation: slide 90s linear infinite;

    /* border: 4px solid red; */
  }

  @keyframes slide{
    to{
      transform: translateX(-100%)
    }
  }

  /* also acts as image filter */
  .panel-0-description-wrapper{
    @apply
      flex
      top-0
      left-0
      z-20
      justify-center
      text-white
    ;
    width: 100%;
    height: 141px;
    position: absolute;
    /* background-color: rgba(28, 25, 23, 0); */
    /* border: 4px solid blue; */
  }

  h2{
    font-weight: 800;
  }
  
  /* ------------------------------------------------------------------------------- Panel group specific (1-3) */

  .panels-group-outer-wrapper{
    @apply
      flex 
      justify-center
    ;
    overflow: hidden;
    width: 100%;
    height: 700px;
    background-color: white;
    /* border: 2px solid blue; */
  }

  .panels-group-background{
    @apply
      flex
      justify-center
      relative
    ;
    overflow: hidden;
    height: 100%; 
    width: 100%;
    /* border: 2px solid purple; */
  }
  
  .panels-group-inner-wrapper{
    @apply
      xsm:px-4
      md:px-8
      lg:px-10
      
    ;
    height: 98%;
    width: 1200px;
    /* border: 3px solid red; */
  }
  
  .panels-group-title-wrapper{
    /* TEMP */
  }

  .panels-group-title-text{
    @apply
      text-[clamp(30px,8.5vw,70px)]
    ;
    white-space: nowrap;
  }

  /* styling not reaching base atm */
  .panels-group-description-wrapper{ 
    @apply
      text-xl
      leading-[1.75]
      text-left
    ;
    font-weight: 500;
    height: 68%;
    padding-right: 40px;
    
    /* border: 1px solid orange; */
  }

  .panels-group-description-text{ 
    border: 2px solid blue;
    padding-left: 5px;
    padding-right: 5px;
    width: 99%;
  }

  .panels-group-donate-button-wrapper{ 
    @apply
      flex
    ;
    height: 60px;
    /* border: 2px solid red; */
  }

  .panels-group-donate-button{ 
    @apply
      p-[10px]
      m-[auto]
      /* ml-[10%] */
    ;
    min-width: 250px;
    width: 70%;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: white;
    white-space: nowrap;
    background-color: rgba(0,0,0,0.97);
    border: black 1px solid;
    border-radius: 15px;

    will-change: transform;
  }

  .panels-group-donate-button:hover{ 
    box-shadow: 0 0 7px black;
    transition-duration: 200ms;
    transform: scale(102%);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ------------------------------------------------------------------------------- Panel 1 specific */

  #panel-1-outer-wrapper{
    width: 100%;
    overflow: hidden;
    /* background-color: rgb(228,228,228); */
    /* border: 2px solid blue; */
  }

  /* This is inheriting a "relative" attr thats not needed; untis affected */
  .panel-1-title-wrapper{
    solid: 2px solid black;
  }

  #panel-1-background-1{
    @apply
      flex
      justify-center
    ;
    overflow: hidden;
    width: 100%;
    background-attachment: local;
    background-size: 67rem;
    background-position-y: 10rem; 
    background-position-x: 110%; 
    background-repeat: no-repeat;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/edited_sect_2_panel_1_bg_kids_eating.png");
    /* border: 2px solid red; */
  }

  #panel-1-background-2{
    @apply
      flex
      justify-center
    ;
    overflow: hidden;
    width: 100%;
    background-attachment: local;
    background-size: 1000px;
    background-position-y: 15rem; 
    background-position-x: -10rem; 
    background-repeat: no-repeat;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/edited_sect_1_panel_1_bg_kids_eating.png");
    /* border: 2px solid black; */
  }

  #panel-1-background-cover{
    @apply
      flex
      justify-center
    ;
    overflow: hidden;
    width: 100%;
    background-color: rgba(228,228,228,0.2);
  }

  #panel-1-inner-wrapper{
    z-index: 2;  
    width: 1200px;
  }
  
  #panel-1-title-wrapper{
    @apply
      flex
      justify-center
      text-black
      text-xl
    ;
    margin: auto;
    height: 10;
    background: 
      linear-gradient(to right, rgba(229,229,229,0.2) 0%, rgba(229,229,229,0.90) 10%, 
          rgba(229,229,229,0.90) 90%, rgba(229,229,229,0.2) 100%);
    ;
    /* border: 1px solid green; */
  }

 #panel-1-description-wrapper{
    @apply
      flex
      text-black
      /* pt-12 */
      pl-12
    ;
    background: 
      linear-gradient(to right, rgba(229,229,229,0.2) 0%, rgba(229,229,229,0.90) 10%, 
          rgba(229,229,229,0.90) 90%, rgba(229,229,229,0.2) 100%);
    ;
  }
  
  /* ------------------------------------------------------------------------------- Panel 2 specific */
  #panel-2-outer-wrapper{
    width: 100%;
    overflow: hidden;
    background-color: rgba(245,245,244,1);
  }
  
  #panel-2-background-1{
    @apply
      flex
      justify-center
    ;
    
    width: 100%;
    background-position-y: 22rem; 
    background-position-x: right;
    background-size: 1500px;
    background-repeat: no-repeat;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/edited_panel_2_bg_boys_soccer.png");

    /* border: yellow solid 2px; */
  } 

  #panel-2-background-2{
    @apply
      flex
      justify-center
    ;
    
    width: 100%;
    background-position-y: 22rem; 
    background-position-x: 0%;
    background-size: 1500px;
    background-repeat: no-repeat;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/edited_sect_1_panel_2_bg_boys_soccer.png");

    /* border: yellow solid 2px; */
  } 

  #panel-2-background-center-cover{
    @apply
      flex
      relative 
      justify-center
    ;

    width: 100%;
    height: 100%;
    background: rgba(245,245,245,0.3);
  }

  #panel-2-background-left-cover{
    @apply
      relative
    ;
    height: 100%;
    width: 100%;
    /* background: linear-gradient(90deg, rgba(245,245,244,1) 5%, rgba(74,74,74,0) 30%); */
    background-color: rgba(245,245,244,0.01);
    /* border: solid 2px red; */
  }

  #panel-2-background-right-cover{
    @apply
      relative
      flex
      justify-center
    ;
    height: 100%;
    width: 100%;
    /* background: linear-gradient(270deg, rgba(245,245,244,1) 5%, rgba(74,74,74,0) 30%); */
    /* border: solid 2px green; */
  }
    
  #panel-2-title-wrapper{
    @apply
      flex
      justify-center
      text-black
      text-xl
    ;
    margin: auto;
    height: 10;
    /* border: 1px solid green; */ 
  }

 #panel-2-description-wrapper{
    @apply
      flex
      text-black
      pl-12
    ;
  }

  /* ------------------------------------------------------------------------------- Panel 3 specific */

  #panel-3-outer-wrapper{
    width: 100%;
    overflow: hidden;
    background-color: rgba(38,38,38,1);
  }
  
  #panel-3-background{
    @apply
      flex
      justify-center
    ;
    
    /* width: 2000px; */
    width: 100%;
    background-position-y: -100px;
    background-position-x: 100px;
    background-size: 1900px;
    background-image: url(../../../static/bg_impact/panel_3_church_goers.jpg);

    /* border: yellow solid 2px; */
  } 

  #panel-3-background-side-cover{
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(9,9,121,0) 20%, rgba(38,38,38,1) 92%);
  }

  #panel-3-background-top-cover{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(38,38,38,0.9) 10%, rgba(74,74,74,0) 40%);
  }

  #panel-3-title-wrapper{
    @apply
      flex
      justify-center
      text-white
      text-xl
    ;
    margin: auto;
    height: 10;
    /* border: 1px solid green; */
  }

 #panel-3-description-wrapper{
    @apply
      flex
      text-white
      pl-12
    ;
 }

  /* ------------------------------------------------------------------------------- Mobile */

  @media only screen and (max-width: 1200px){
    #panel-2-background-2{
      background-image: url("");
    }
  } 

  @media only screen and (max-width: 960px){
    #panel-1-background-1{
      background-image: url("");
    }
  }

  @media only screen and (max-width: 561px){
    .panels-group-outer-wrapper{
    }
    #panel-1-background-2{

    }
  }

  @media only screen and (max-width: 478px){
    .panels-group-outer-wrapper{
      /* height: 1200px; */
    }
    .panels-group-description-wrapper{ 
      padding-right: 0px;
    }
    .panels-group-description-text{ 
      margin-left: -40px;
    }
  }

  @media only screen and (max-width: 405px){
    .panels-group-description-wrapper{ 
      height: 78%;
    }
  }

  @media only screen and (max-width: 332px){
    .panels-group-description-wrapper{ 
      @apply
        leading-[1.5]
      ;
      /* height: 80%; */
    }
  }
  
</style>
