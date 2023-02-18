<svelte:head>
  <title>
    {lang.impact.page_title}
  </title>
</svelte:head>

<script>
  import { language } from './../shared/LanguageData.js';

  let lang;
  language.subscribe(value => {
    lang = value;    
  });

  const ipsum = "Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the industry's standard dummy";
</script>

<div class="background-wrapper">
  <div class="panel-0-outer-wrapper">
    <div class="panel-0-description-wrapper">
      <h2 id="temp-panel-0">
        <!-- Hover text cancelled -->
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
                {lang.impact.panel_1.title}
              </h2>
            </div>
            <div class="panels-group-description-wrapper" id="panel-1-description-wrapper">
              <p class="panels-group-description-text">
                {lang.impact.panel_1.description} <br /><br />
                <span id="panel-1-description-text-sub">
                  <span id="panel-1-description-text-sub-asub-group">
                    {lang.impact.panel_1.description_sub} <br />
                  </span>
                  <span id="panel-1-description-text-sub-tsub-group">
                    <span class="panel-1-lazy-span">&#x2022 {lang.impact.panel_1.description_sub_p1}</span>
                    <span class="panel-1-space">&nbsp &nbsp &nbsp &nbsp &nbsp</span>
                    <span class="panel-1-lazy-span">&#x2022 {lang.impact.panel_1.description_sub_p2}</span> 
                  </span>
                </span>
              </p>
            </div>
            <div class="panels-group-donate-button-wrapper" id="panel-1-donate-button-wrapper">
              <a href="/donate-food" class="panels-group-donate-button" id="panel-1-donate-button">
                {lang.impact.panel_1.donate_link_text}
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
                    {lang.impact.panel_2.title}
                  </h2>
                </div>
                <div class="panels-group-description-wrapper" id="panel-2-description-wrapper">
                  <p class="panels-group-description-text">
                    {lang.impact.panel_2.description}

                    <span id="panel-2-description-text-lower-section-wrapper">
                      <span id="panel-2-description-text-lower-section-text-ext">
                        {lang.impact.panel_2.description_ext}
                      </span>

                      <span id="panel-2-description-text-lower-section-wrapper-sub-group-wrapper">
                        <span id="panel-2-description-text-lower-section-wrapper-sub-1-wrapper">
                          <span class="panel-2-description-text-lower-section-nested-sub-group-title">
                            {lang.impact.panel_2.description_sub_1}
                          </span> 
                          <span class="panel-2-description-text-lower-section-nested-sub-group-tsub-group">
                            <ul class="panel-2-description-text-lower-section-nested-sub-group-tsub-group-sub">
                              <li>{lang.impact.panel_2.description_sub_1_p1}</li>
                              <li id="annoying-li">{lang.impact.panel_2.description_sub_1_p2}<li>
                              <li>{lang.impact.panel_2.description_sub_1_p3}</li>
                            </ul>
                          </span>
                        </span>

                        <span id="panel-2-description-text-lower-section-wrapper-sub-2-wrapper">
                          <span class="panel-2-description-text-lower-section-nested-sub-group-title">
                            {lang.impact.panel_2.description_sub_2}
                          </span>
                          <span class="panel-2-description-text-lower-section-nested-sub-group-tsub-group">
                            <ul class="panel-2-description-text-lower-section-nested-sub-group-tsub-group-sub">
                              <li>{lang.impact.panel_2.description_sub_2_p1}</li>
                              <li>{lang.impact.panel_2.description_sub_2_p2}</li>
                              <li>{lang.impact.panel_2.description_sub_2_p3}</li>
                            </ul>
                          </span>
                        </span>
                      </span>

                    </span>

                    <!-- We're strong believers in bringing positive and constructive activies to 
                    Haiti's children and young adults. Whether that's piano lessons, a listening ear, 
                    a local checkers tournament or help with brain teaser on a school assignment; 
                    we provide the space and tools for our young to build lasting bonds and critical 
                    life skills. -->
                  </p>
                </div>
                <div class="panels-group-donate-button-wrapper" id="panel-2-donate-button-wrapper">
                  <a href="/donate-recreation" class="panels-group-donate-button" id="panel-2-donate-button">
                    {lang.impact.panel_2.donate_link_text}
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
              {lang.impact.panel_3.title}
            </h2>
          </div>
          <div class="panels-group-description-wrapper" id="panel-3-description-wrapper">
            <p class="panels-group-description-text">
              {lang.impact.panel_3.description}
              
              <span id="panel-3-link-wrapper">
                <span id="panel-3-link-text">
                  {lang.impact.panel_3.link_livestream_text}
                </span>
                <span id="panel-3-link-svg-upper-wrapper">
                  <a id="panel-3-link-svg-lower-wrapper"
                  href="https://www.facebook.com/williane108">
                    <svg 
                      id="panel-3-link-svg"
                      viewBox="0 0 386 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_217_12)">
                      <path d="M129.7 135.1C133.5 135.1 136.7 132 136.7 128.1V15.8999C136.7 12.0999 133.6 8.8999 129.7 8.8999H17.5C13.7 8.8999 10.5 11.9999 10.5 15.8999V128.1C10.5 131.9 13.6 135.1 17.5 135.1H129.7Z" fill="#3D5A98"/>
                      <path d="M97.4999 135.1V86.2999H113.9L116.4 67.2999H97.4999V54.9999C97.4999 49.4999 98.9999 45.6999 106.9 45.6999H117V28.6999C115.3 28.4999 109.3 27.8999 102.3 27.8999C87.7999 27.8999 77.7999 36.7999 77.7999 53.0999V67.0999H61.3999V86.0999H77.7999V134.9H97.4999V135.1Z" fill="white"/>
                      <path d="M368.5 135.1C372.3 135.1 375.5 132 375.5 128.1V15.8999C375.5 12.0999 372.4 8.8999 368.5 8.8999H156.8C153 8.8999 149.8 11.9999 149.8 15.8999V128.1C149.8 131.9 152.9 135.1 156.8 135.1H368.5Z" fill="#EE4242"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M340.2 90.4997H315.2V75.4997H338.9V67.6997H315.2V53.4997H340.2V45.1997H305.6V98.5997H340.2V90.4997ZM277.9 98.6997L296.4 45.2997H286.2L272.9 87.5997H272.3L258.9 45.2997H248.4L267.1 98.6997H277.9ZM239.1 98.6997V45.2997H229.5V98.6997H239.1ZM219.2 90.2997H194.7V45.2997H185.1V98.6997H219.2V90.2997Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_217_12">
                      <rect width="386" height="144" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </span>
              </span>

              <!-- Besides running charity programs our founder hosts weekly virtual weekly virtual
              and in person prayer groups for a Haitian audience accross the world (?). Our
              efforts continue to grow with an increase in hosts, in-person events, and ... .
              We're building an inclusive community for those who seek to celebrate the word
              of God. -->
            </p>
          </div>
          <div class="panels-group-donate-button-wrapper" id="panel-3-donate-button-wrapper">
            <a href="/donate-church" class="panels-group-donate-button" id="panel-3-donate-button">
              {lang.impact.panel_3.donate_link_text}
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

</div>

<style>
  p{
    display: flex flex-col;
    justify-conter: around;
    text-align: center;
    font-size: 1.6rem;
  }
  li{
    margin: 2px 0;
  }
  #annoying-li{
    margin-right: -5px; /* ghost li */
  }

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
    padding-left: 5px;
    padding-right: 5px;
    width: 99%;
    /* border: 2px solid blue; */
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
    background-position-x: 115%; 
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
    background: linear-gradient(to right, rgba(228,228,228,0.3) 0%, rgba(228,228,228,0.83) 20%, rgba(228,228,228,0.83) 80%, rgba(228,228,228, 0.3) 100%);
  }

  #panel-1-inner-wrapper{
    z-index: 2;  
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
  /*  
  background: 
      linear-gradient(to right, rgba(229,229,229,0.2) 0%, rgba(229,229,229,0.90) 10%, 
          rgba(229,229,229,0.90) 90%, rgba(229,229,229,0.2) 100%);
    ;
  */
    /* border: 1px solid green; */
  }

 #panel-1-description-wrapper{
    @apply
      flex
      text-black
      /* pt-12 */
      pl-12
    ;
    /*
    background: 
      linear-gradient(to right, rgba(229,229,229,0.2) 0%, rgba(229,229,229,0.90) 10%, 
          rgba(229,229,229,0.90) 90%, rgba(229,229,229,0.2) 100%);
    ;
    */
  }
  
  #panel-1-description-text-sub{
    display: block;
    text-align: center;
    width: 100%;
    /* border: 2px red solid; */

  }

  #panel-1-description-text-sub-asub-group{
    display: flex;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    border-bottom: 1px solid black;
    /* border: 2px blue solid; */
  }

  #panel-1-description-text-sub-tsub-group{
    display: flex;
    margin-top: 10px;
    justify-content: center;
    width: 100%;
    /* border: 2px green solid; */
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

  #panel-2-description-text-lower-section-wrapper{
    margin-top: 10px;
    display: block;
    justify-content: space-around;
    text-align: center;
    /* border: 2px solid red; */
  }
  #panel-2-description-text-lower-section-text-ext{
    display: block;
    font-weight: bold;
    /* border: 2px solid blue; */
  }
  #panel-2-description-text-lower-section-wrapper-sub-group-wrapper{
    display: flex;
    justify-content: space-around;
    /* border: 2px solid green; */
  }
  #panel-2-description-text-lower-section-wrapper-sub-1-wrapper{
    /* border: 2px solid black; */
  }
  #panel-2-description-text-lower-section-wrapper-sub-2-wrapper{
    /* border: 2px solid black; */
  }
  .panel-2-description-text-lower-section-nested-sub-group-title{
    display: block;
    font-weight: bold;
    border-bottom: 1px solid black;
    /* border: 2px solid orange; */
  }
  .panel-2-description-text-lower-section-nested-sub-group-tsub-group{
    display: block;
    max-width: 500px;
    /* border: 2px solid red; */
  }
  .panel-2-description-text-lower-section-nested-sub-group-tsub-group-sub{
    display: flex;
    font-size: 1.5rem;
    margin: 0px 0px; /* ul auto adds margin; not always obv */
    padding: 0px 0px;
    list-style-type: none;
    /* border: 2px solid black; */
  }
  /* ------------------------------------------------------------------------------- Panel 3 specific */

  #panel-3-outer-wrapper{
    width: 100%;
    height: 700px;
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
    background-position-y: -80px; 
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
    background: 
            linear-gradient(180deg, rgba(38,38,38,0.9) 10%, rgba(74,74,74,0) 40%)
            rgba(0,0,0,0.3); 
    ;
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

  #panel-3-link-wrapper{
    display: block;
    justify-content: space-around;
    text-align: center; 
    /* border: 2px solid red; */
  }

  #panel-3-link-text{
    margin-top: 30px;
    display: block;
    font-weight: bold;
    /* border: 2px solid blue; */
  }

  #panel-3-link-svg-upper-wrapper{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 40px;
    /* border: 2px solid orange; */
  }

  #panel-3-link-svg-lower-wrapper{
    display: flex;
    justify-content: center;
    height: 100%;
    width: 120px;
    /* border: 2px solid red; */
  }

  #panel-3-link-svg{
    height: 99%;
    width: auto;
  }

  /* ------------------------------------------------------------------------------- Mobile */
  @media only screen and (max-width: 1800px){
    #panel-1-background-1{
      background-position-x: 125%;
      /* background-image: url(""); */
    }
  }

  @media only screen and (max-width: 1565px){
    #panel-1-background-1{
      background-image: url(""); 
    }
  }

  @media only screen and (max-width: 1200px){
    #panel-2-background-2{
      background-image: url("");
    }
  } 

  @media only screen and (max-width: 1075px){
    .panels-group-outer-wrapper{
      height: 800px;
    } 
    #panel-1-background-2{
      background-position-y: 400px;
    }
    #panel-2-description-text-lower-section-wrapper{
      margin-top: 30px;
    }
    .panel-2-description-text-lower-section-nested-sub-group-title{
      display: none;
    }
    #panel-2-description-text-lower-section-wrapper-sub-2-wrapper{
      display: none;
    }
    #panel-2-background-1{
      background-position-y: bottom;
      /* border: 2px solid green; */
    }
  }

  @media only screen and (max-width: 799px){
    #panel-1-outer-wrapper{
      height: 800px;
    }
    #panel-1-background-2{
      background-position-y: 600px;
    }
    .panels-group-description-wrapper{
      @apply
        px-[0px]
        pl-[0px]
      ;
    }
    #panel-1-description-wrapper{
      @apply 
        px-[5px]
      ;
    }
    #panel-2-description-wrapper{
      @apply 
        px-[5px]
      ;
    }
    #panel-3-description-wrapper{
      @apply 
        px-[5px]
      ;
    }
  }

  @media only screen and (max-width: 767px){
    p{
      line-height: 2.3rem;
      font-size: 1.37rem;
    }
    li{
      line-height: 2rem; 
      margin: 0 5px;
      /* border: 1px solid blue; */
    }
    #panel-1-outer-wrapper{
      height: 650px;
    }
    #panel-1-description-text-sub-tsub-group{
      font-size: 1.3rem;
    }
    #panel-2-outer-wrapper{
      height: 650px;
    }
    #panel-3-outer-wrapper{
      height: 600px;
    }
    #panel-3-description-wrapper{
      height:  65%;
    }
  }

  @media only screen and (max-width: 700px){
    #panel-1-outer-wrapper{
      height: 710px; 
    }
    #panel-2-outer-wrapper{
      height: 660px;
    }
    
  }

  @media only screen and (max-width: 570px){
    #panel-3-outer-wrapper{
      height: 650px;
    }
    #panel-3-description-wrapper{
      height:  70%;
    }
  }

  @media only screen and (max-width: 553px){
    #panel-1-description-wrapper{
      height:  74%;
    }
    #panel-2-outer-wrapper{
      height: 710px; 
    }
    #panel-2-description-wrapper{
      height:  74%;
    }
  }

  @media only screen and (max-width: 489px){
    #panel-1-outer-wrapper{
      height: 770px; 
    }
    #panel-1-description-wrapper{
      height:  79%;
    }
    .panels-group-description-wrapper{ 
      padding-right: 0px;
      height: 79%;
    }
    #panel-3-outer-wrapper{
      height: 700px;
    }
    #panel-3-description-wrapper{
      height:  75%;
    }
  }

  @media only screen and (max-width: 449px){
    #panel-2-outer-wrapper{
      height: 770px; 
    }
    #panel-2-description-wrapper{
      height:  77%;
    }
  }
  
  @media only screen and (max-width: 419px){
    #panel-1-outer-wrapper{
      height: 830px; 
    }
    #panel-1-description-wrapper{
      height:  80%;
    }
  }

  @media only screen and (max-width: 405px){
    .panels-group-description-wrapper{ 
      height: 78%;
    }
    .panel-2-description-text-lower-section-nested-sub-group-tsub-group-sub{
      font-size: 1.2rem;
    }
    #panel-3-outer-wrapper{
      height: 750px;
    }
    #panel-3-description-wrapper{
      height:  80%;
    }
  }

  @media only screen and (max-width: 381px){
    #panel-1-outer-wrapper{
      height: 900px; 
    }
    #panel-1-description-wrapper{
      height:  82%;
    }
    #panel-1-description-text-sub-tsub-group{
      display: block;
    }
    .panel-1-lazy-span{
      display: block;
      width: 100%;
    }
    .panel-1-space{
      display: none;
    }
  }
  @media only screen and (max-width: 375px){
    .panel-2-description-text-lower-section-nested-sub-group-tsub-group-sub{
      line-height: 1.2rem;
    }
  }

  @media only screen and (max-width: 352px){
    #panel-2-outer-wrapper{
      height: 800px; 
    }
    #panel-2-description-wrapper{
      height:  80%;
    }
  }

  @media only screen and (max-width: 342px){
    #panel-1-outer-wrapper{
      height: 1000px; 
    }
    #panel-1-description-wrapper{
      height:  83%;
    }
    #panel-2-outer-wrapper{
      height: 825px; 
    }
    #panel-2-description-wrapper{
      height:  82%;
    }
    #panel-3-outer-wrapper{
      height: 750px;
    }
    #panel-3-description-wrapper{
      height: 80%;
    }
  }

  @media only screen and (max-width: 330px){
    #panel-1-outer-wrapper{
      height: 1070px; 
    }
    #panel-3-outer-wrapper{
      height: 835px;
    }
    #panel-3-description-wrapper{
      height: 81%;
    }
  }
</style>
