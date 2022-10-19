<script>
  import Navbar from './../components/shared/Navbar.svelte'
  import Footer from './../components/shared/Footer.svelte'
  import Todo from './../components/shared/Todo.svelte'
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
          <div class="meet-the-team-portraits-wrapper">
            <div class="meet-the-team-portraits" id="portrait-1">
              <div class="portrait-img-wrapper" id="portrait-1-img-wrapper">
                <img class="portrait-imgs" id="portrait-img-1" src="../../../static/temporary/huey_portrait_cropped_transparent_bg.png" />
              </div>
              <div class="portrait-employee-info" id="portrait-1-emplopyee-info">
                <div class="employee-function" id="employee-1-function">
                  Event Manager
                </div>
                <div class="employee-name" id="employee-1-name">
                  Junandre Paul
                </div>
                <div class="employee-bio" id="employee-1-bio">
                  <p> 
                    Extensive background in charity management and customer relations.
                  </p>
                </div>
              </div>
            </div>
            <div class="meet-the-team-portraits" id="portrait-2">
              <div class="portrait-img-wrapper" id="portrait-2-img-wrapper">
                <img class="portrait-imgs" id="portrait-img-2" src="../../../static/temporary/huey_portrait_cropped_transparent_bg.png" />
              </div>
              <div class="portrait-employee-info" id="portrait-2-emplopyee-info">
                <div class="employee-function" id="employee-2-function">
                </div>
                <div class="employee-name" id="employee-2-name">
                </div>
                <div class="employee-bio" id="employee-2-bio">
                </div>
              </div>
            </div>
            <div class="meet-the-team-portraits" id="portrait-3">
              <div class="portrait-img-wrapper" id="portrait-3-img-wrapper">
                <img class="portrait-imgs" id="portrait-img-3" src="../../../static/temporary/huey_portrait_cropped_transparent_bg.png" />
              </div>
              <div class="portrait-employee-info" id="portrait-3-emplopyee-info">
                <div class="employee-function" id="employee-3-function">
                </div>
                <div class="employee-name" id="employee-3-name">
                </div>
                <div class="employee-bio" id="employee-3-bio">
                </div>
              </div>
            </div>
            <div class="meet-the-team-portraits" id="portrait-4">
              <div class="portrait-img-wrapper" id="portrait-4-img-wrapper">
                <img class="portrait-imgs" id="portrait-img-4" src="../../../static/temporary/huey_portrait_cropped_transparent_bg.png" />
              </div>
              <div class="portrait-employee-info" id="portrait-4-emplopyee-info">
                <div class="employee-function" id="employee-4-function">
                </div>
                <div class="employee-name" id="employee-4-name">
                </div>
                <div class="employee-bio" id="employee-4-bio">
                </div>
              </div>
            </div>
            <div class="meet-the-team-portraits" id="portrait-5">
              <div class="portrait-img-wrapper" id="portrait-5-img-wrapper">
                <img class="portrait-imgs" id="portrait-img-5" src="../../../static/temporary/huey_portrait_cropped_transparent_bg.png" />
              </div>
              <div class="portrait-employee-info" id="portrait-5-emplopyee-info">
                <div class="employee-function" id="employee-5-function">
                </div>
                <div class="employee-name" id="employee-5-name">
                </div>
                <div class="employee-bio" id="employee-5-bio">
                </div>
              </div>
            </div>
            <div class="meet-the-team-portraits" id="portrait-6">
              <div class="portrait-img-wrapper" id="portrait-6-img-wrapper">
                <img class="portrait-imgs" id="portrait-img-6" src="../../../static/temporary/huey_portrait_cropped_transparent_bg.png" />
              </div>
              <div class="portrait-employee-info" id="portrait-6-emplopyee-info">
                <div class="employee-function" id="employee-6-function">
                </div>
                <div class="employee-name" id="employee-6-name">
                </div>
                <div class="employee-bio" id="employee-6-bio">
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
      xsm:pt-[45px]
      sm:pt-[45px]
      md:pt-[106px]
      xl:pt-[106px]
      bg-stone-100
      w-full
      /*xl:min-h-[410px]*/
    ;
    overflow: hidden; 
    border: 3px solid purple;
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
    background-size: 2000px;
    background-position-x: -445px;
    background-position-y: -200px;
    background-repeat: repeat-x;
    background-image: url("./../../../static/backgrounds/old_img_black_group.webp");
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
       /* h-[90vh] */
      min-h-[870px]
      justify-center
      mb-0
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
    height: 1020px;
    border: 2px solid purple; 
  }

  .meet-the-team-title-wrapper{ /* expl? */
    @apply
      relative
      flex
      /* h-[107px] */
      justify-center
      mb-10
      h-[140px]
    ;
    background-attachment: local;
    background-position-x: -300px;
    background-position-y: -1200px;
    background-image: url("./../../../static/backgrounds/paper-texture-6.jpg");

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
      text-[clamp(28px,8.5vw,68px)]
    ;
    margin: auto;
    text-align: center;
    border: 3px solid red;
    white-space: nowrap;
  }
  
  .meet-the-team-portraits-wrapper{
    @apply
      relative
      h-[100%]
      px-10
    ;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(2, [col], 50%);
    grid-template-rows: repeat(3, [row], 33.33%);
    border: 2px solid green;
  }

  .meet-the-team-portraits{
    @apply
      mx-5
      bg-stone-300
      w-[300px]
      h-[300px]
    ;
    border: 3px solid blue;
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
  
  #portrait-5{
    grid-column: col 1 / span 1;    
    grid-row: row 3 / span 1;    
  }
  
  #portrait-6{
    grid-column: col 2 / span 1;    
    grid-row: row 3 / span 1;    
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
    width: 200px;
    height: 200px;
  }  

  .portrait-imgs{
    @apply
      flex
      relative
    ;
    border: 2px solid green;
  }

  #portrait-img-1{
  }
</style>
