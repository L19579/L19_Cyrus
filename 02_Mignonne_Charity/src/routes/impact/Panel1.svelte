<script>
  const ipsum = "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy";
</script>

<div class="background-wrapper">
  <div class="panel-0-outer-wrapper">
    <div class="panel-0-description-wrapper">
      <h2 class="temp-panel-0">
        Panel 0 overlay text here ; black gradient at max
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
    <div class="panels-group-background" id="panel-1-background">
      <div class="panels-group-background-cover" id="panel-1-background-cover">
        <div class="panels-group-background-cover-2" id="panel-1-background-cover-2">
          <div class="panels-group-inner-wrapper">
            <div class="panels-group-title-wrapped" id="panel-1-title-wrapper">
              <h2 class="panels-group-title-text" id="panel-1-title-text">
                Food for X Program
              </h2>
            </div>
            <div class="panels-group-description-wrapper" id="panel-1-description-wrapper">
              <p>
                -- Write up not clean; throwing thoughts around -- <br />
                {ipsum}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="panels-group-outer-wrapper" id="panel-2-outer-wrapper">
    <div id="panel-2-background">
      <div id="panel-2-background-center-cover">
        <div id="panel-2-background-left-cover">
          <div id="panel-2-background-right-cover">
            <div class="panels-group-inner-wrapper" id="panel-2-inner-wrapper">
              <div class="panels-group-title-wrapper" id="panel-2-title-wrapper">
                <h2 class="panels-group-title-text" id="panel-2-title-text">
                  Youth Recreation Group
                </h2>
              </div>
              <div class="panels-group-description-wrapper" id="panel-2-description-wrapper">
                <p>
                  -- Write up not clean; throwing thoughts around -- <br />
                  We're strong believers in bringing positive and constructive activies to 
                  Haiti's children and young adults. Whether that's piano lessons, a listening ear, 
                  a local checkers tournament or help with brain teaser on a school assignment; 
                  we provide the space and tools for our young to build lasting bonds and critical 
                  life skills.
                </p>
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
              Sunday Prayer Service
            </h2>
          </div>
          <div class="panels-description-wrapper" id="panel-3-description-wrapper">
            <p>
              -- Write up not clean; throwing thoughts around -- <br />
              Besides running charity programs our founder hosts weekly virtual weekly virtual
              and in person prayer groups for a Haitian audience accross the world (?). Our
              efforts continue to grow with an increase in hosts, in-person events, and ... .
              We're building an inclusive community for those who seek to celebrate the word
              of God.
              
            </p>
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
    border: 2px solid black; 
  }
  
  /* Panel 0 specifics */

  .panel-0-outer-wrapper{
    /*width: 11100px;*/
    width: 2720px;
    border: 5px solid black;
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
    border: 2px solid orange;
  }
  
  .panel-0-background-1{
    @apply
      relative
      top-0;
    ;
    width: 100%;
    height: 100%;
    float: left;

    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/impact_0_banner_fill_check_2.png");
    /* background-image: url("./../../../static/temporary/impact_0_banner_fill_check_2.png"); */
    background-size: 2720px;
    /* animation: slide 385s linear infinite; */
    animation: slide 90s linear infinite;

    border: 4px solid green;
  }

  .panel-0-background-2{
    @apply
      relative
      top-0;
    ;
    width: 100%;
    height: 100%;
    float: left;
    
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/impact_0_banner_fill_check_2.png");
    /* background-image: url("./../../../static/temporary/impact_0_banner_fill_check_2.png"); */
    background-size: 2720px;
    /* animation: slide 385s linear infinite; */
    animation: slide 90s linear infinite;

    border: 4px solid red;
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
    background-color: rgba(28, 25, 23, 0.2);
    border: 4px solid blue;
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
    border: 2px solid red; 
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
    border: 2px solid purple;
  }
  
  .panels-group-inner-wrapper{
    @apply
      xsm:px-4
      md:px-8
      lg:px-10

      justify-center
    ;
    height: 100%;
    width: 1200px;
    border: 2px solid white; 
  }
  
  .panels-group-title-wrapped{
    /* ---- temp ---- */
  }

  .panels-group-title-text{
    @apply
      text-[clamp(28px,5vw,50px)]
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
  }
  
  /* ------------------------------------------------------------------------------- Panel 1 specific */

  #panel-1-outer-wrapper{
    width: 100%;
    overflow: hidden;
    background: linear-gradient(120deg, rgba(214,211,209,1) 37%, rgba(38,38,38,1) 50%);
    border: 2px solid blue;
  }

  /* This is inheriting a "relative" attr thats not needed; untis affected */
  .panel-1-title-wrapper{
    solid: 2px solid black;
  }

  #panel-1-background{
    @apply
      relative
    ;
    overflow: hidden;
    width: 1700px;
    background-attachment: local;
    background-size: 1600px;
    background-position-y: -200px; 
    background-position-x: 370px; 
    background-repeat: no-repeat;
    background-image: url(../../../static/bg_impact/panel_1_bg_kids_eating.webp);
  }
  
  #panel-1-background-cover{
    @apply
      flex
      relative
      justify-center
    ;
    width: 100%;
    
    background: radial-gradient(circle, rgba(9,9,121,0) 70%, rgba(38,38,38,1) 90%);
    border: 2px solid green;
  }
  
  #panel-1-background-cover-2{
    @apply
      flex
      relative
      justify-center
    ;
    min-width: 100%;
    
    background: linear-gradient(120deg, rgba(214,211,209,1) 37%, rgba(74,74,74,0) 80%);
    border: 2px solid red;
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
    border: 1px solid green;
  }

 #panel-1-description-wrapper{
    @apply
      flex
      text-black
      pt-12
      pl-12
      pr-40
    ;
    height: 80%;
    border: 1px solid orange;
  }

  /* ------------------------------------------------------------------------------- Panel 2 specific */
  #panel-2-outer-wrapper{
    background-color: rgba(245,245,244,1);
  }
  
  #panel-2-background{
    @apply
      flex
      justify-center
    ;
    
    width: 2000px;
    background-position-y: -400px; 
    /* background-position-x: 100px; */
    background-size: 2200px;
    background-image: url(../../../static/bg_impact/panel_2_bg_boys_soccer.jpeg);

    border: yellow solid 2px;
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
    background: linear-gradient(90deg, rgba(245,245,244,1) 5%, rgba(74,74,74,0) 30%);
    border: solid 2px red;
  }

  #panel-2-background-right-cover{
    @apply
      relative
      flex
      justify-center
    ;
    height: 100%;
    width: 100%;
    background: linear-gradient(270deg, rgba(245,245,244,1) 5%, rgba(74,74,74,0) 30%);
    border: solid 2px green;
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
    border: 1px solid green;
  }

 #panel-2-description-wrapper{
    @apply
      flex
      text-black
      pt-12
      pl-12
      pr-40
    ;
    height: 80%;
    border: 1px solid orange;
  }

  /* ------------------------------------------------------------------------------- Panel 3 specific */

  #panel-3-outer-wrapper{
    background-color: rgba(38,38,38,1);
  }
  
  #panel-3-background{
    @apply
      flex
      justify-center
    ;
    
    width: 2000px;
    background-position-y: -100px;
    background-position-x: 100px;
    background-size: 1900px;
    background-image: url(../../../static/bg_impact/panel_3_church_goers.jpg);

    border: yellow solid 2px;
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
    border: 1px solid green;
  }

 #panel-3-description-wrapper{
    @apply
      flex
      text-white
      pt-12
      pl-12
      pr-40
    ;
    height: 80%;
    border: 1px solid orange;
  }
</style>
