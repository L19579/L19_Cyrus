<script>
  import Navbar from './../shared/Navbar.svelte';
	import Chart from './Chart.svelte';
  import Footer from './../shared/Footer.svelte';
  import Todo from './../shared/Todo.svelte'
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  
  let ipsum_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

	const progress_families_fed = tweened(0, {
		duration: 700, 
		easing: cubicOut
	});
	const progress_youth_enrolled = tweened(0, {
		duration: 700, 
		easing: cubicOut
	});
</script>

<Navbar current_nav_page = 'goals'/>

<div class="goal-outer-wrapper">
  <div class="goal-inner-wrapper">

    <div class="group-panel-outer-wrapper" id="panel-1-outer-wrapper">
      <div class="group-panel-mid-wrapper" id="panel-1-mid-wrapper">
        <div class="group-panel-inner-wrapper" id="panel-1-inner-wrapper">
          <div class="panel-1-title-wrapper">
            <div id="panel-1-title-text">
              <h1>Example Title That Should Be THIS Long</h1>
            </div>
          </div>
          <div class="panel-1-text-outer-wrapper">
            <div id="panel-1-text">
              {ipsum_text}
            </div>
          </div>
          <div class="panel-1-progress-bar-wrapper">
            <div class="progress-bar-wrapper">
              <div class="progress-bar">
                <Chart />
              </div>
            </div>
          </div>
          <div class="panel-1-illustration-outer-wrapper">
            <div class="panel-1-group-illustration-wrapper" id="panel-1-illustration-1-wrapper"> 
              <img 
                src="https://dieupeut-bucket.us-east-1.linodeobjects.com/wide_teens_bad_edit.png" 
                class="panel-1-group-illustrations" id="panel-1-illustration-1" 
              /> 
            </div>
            <div class="panel-1-group-illustration-wrapper" id="panel-1-illustration-2-wrapper"> 
              <img 
                src="https://dieupeut-bucket.us-east-1.linodeobjects.com/narrow_old.png" 
                class="panel-1-group-illustrations" id="panel-1-illustration-2" 
              /> 
            </div>
            <div class="panel-1-group-illustration-wrapper" id="panel-1-illustration-3-wrapper"> 
              <img 
                src="https://dieupeut-bucket.us-east-1.linodeobjects.com/narrow_smiling_young.png" 
                class="panel-1-group-illustrations" id="panel-1-illustration-3" 
              /> 
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="group-panel-outer-wrapper" id="panel-2-outer-wrapper">
      <div class="group-panel-mid-wrapper" id="panel-2-mid-outer-wrapper">
        <div class="group-panel-mid-wrapper" id="panel-2-mid-inner-wrapper">
          <div class="group-panel-inner-wrapper" id="panel-2-inner-wrapper">

            <div id="panel-2-title-wrapper">
              <h1 id="panel-2-title-text">
                Example Title For Panel Two
              </h1>
            </div>
            <div id="panel-2-text-wrapper">
              <div id="panel-2-text">
                  {ipsum_text}
              </div>
            </div>
            <div id="panel-2-video-upper-wrapper">	
              <div id="panel-2-video-background-1">
              <div id="panel-2-video-background-2">
              <div id="panel-2-video-inner-wrapper">	
                <video
                  id="panel-2-video"
                  autoplay
                  muted
                  loop
                  width=100%
                  height=auto
                >
                  <source 
                    src="https://dieupeut-bucket.us-east-1.linodeobjects.com/video_goal_EDIT.mp4"
                    type="video/mp4" 
                  />
                </video>
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
  .goal-outer-wrapper{
    @apply
      flex
      xsm:pt-[45px]
      sm:pt-[45px]
      md:pt-[110px]
      xl:pt-[110px]
      xl:min-h-[410px]
      justify-center
    ;
    width: 100vw; 
    border: 1px solid red;
  }

  .goal-inner-wrapper{
    width: 100%; 
    border: 2px solid green;
  }

  .group-panel-outer-wrapper{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    border: 2px solid red;
  }

  .group-panel-mid-wrapper{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    border: 2px solid red;
  }

  .group-panel-inner-wrapper{
    width: 1285px;
    height: 700px;
    border: 2px solid green;
  }

  /* --------------- Panel 1 --------------- */
  @media (min-width: 1700px){
    #panel-1-outer-wrapper{
      background-repeat: no-repeat;
      background-position-x: 105%;
      background-position-y: 150%;
      background-size: 300px;
      background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/bw_note_img.png");
    }
  
    #panel-1-mid-wrapper{
      background-repeat: no-repeat;
      background-position-x: -5%;
      background-position-y: -30%;
      background-size: 270px;
      background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/bw_counting_frame.png");
    }
  
  }

  #panel-1-inner-wrapper{
    display: grid;
    grid-template-columns: repeat(20, [col] 5%);
    grid-template-rows: repeat(20, [row] 5%);
  }

  .panel-1-title-wrapper{
    @apply
      flex
      flex-col
      justify-center
    ;
    grid-column: col 1 / span 20;
    grid-row: row 2 / span 2;
      
    width: 100%; 
    box-sizing: border-box;
    border: 1px solid green;
  }

  #panel-1-title-text{
    width: 100%;
    text-align: center;
  }

  .panel-1-text-outer-wrapper{
    grid-column: col 1 / span 11;
    grid-row: 4 / span 10;
    border: blue solid 2px;
  }

  #panel-1-text{
    padding: 1.5rem;
		font-size: 1.5rem;
    
  }

	.panel-1-progress-bar-wrapper{
		@apply
			flex
			flex-col
			justify-center
		;
		text-align: center;
		grid-column: col 1 / span 11;	
		grid-row: row 14 / span 6;	

    border: purple solid 2px;
	}

	.panel-1-illustration-outer-wrapper{
		grid-column: col 12 / span 9;	
		grid-row: row 4 / span 17;	
		
			
    display: grid;
    grid-template-columns: repeat(20, [col] 5%);
    grid-template-rows: repeat(20, [row] 5%);
    border: blue solid 2px;
	}

	.panel-1-group-illustration-wrapper{
		/* background-color: rgba(255,255,255,1); */
		/* background-color: rgba(204, 232, 237,1); */
		/* background-color: rgba(218, 241, 245,1); */
		background-color: rgba(245,240,244,1); 
		box-shadow: 0 0 4px black;
		border-radius: 5px;
		overflow: hidden;
	}

	#panel-1-illustration-1-wrapper{
		@apply
			flex
			justify-center
		;

		grid-column: col 2 / span 12; 
		grid-row: row 3 / span 6; 
		width: 100%;	
		height: auto;	
		z-index: 3;
	}

	#panel-1-illustration-2-wrapper{
		padding-top: 2rem;
		grid-column: col 13 / span 7; 
		grid-row: row 5 / span 11; 
		width: 100%;	
		height: auto;	
		z-index: 5;
	}

	#panel-1-illustration-3-wrapper{
		@apply
			flex
			justify-center
		;
		grid-column: col 2 / span 12; 
		grid-row: row 10 / span 10; 
		width: 100%;	
		height: auto;	
		z-index: 3;
	}

	#panel-1-illustration-1{
		width: auto;
		height: 100%;
	}
	#panel-1-illustration-2{
		width: 100%;
		height: auto;
	}
	#panel-1-illustration-3{
		width: auto;
		height: 100%;
	}

  /* --------------- Panel 2 --------------- */
  #panel-2-outer-wrapper{
		background-color: rgba(245,245,244,1);
	}

  @media (min-width: 1700px){
    #panel-2-mid-outer-wrapper{
      background-repeat: no-repeat;
      background-position-x: 105%;
      background-position-y: 10%;
      background-size: 300px;
      background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/bw_flying_birds.png");
    }
  
    #panel-2-mid-inner-wrapper{
      background-repeat: no-repeat;
      background-position-x: 2%;
      background-position-y: 110%;
      background-size: 270px;
      background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/bw_two_crosses.png");
    }
  
  }

  #panel-2-inner-wrapper{
    display: grid;
    grid-template-columns: repeat(20, [col] 5%);
    grid-template-rows: repeat(20, [row] 5%);
  }
	
	#panel-2-title-wrapper{
    @apply
      flex
      flex-col
      justify-center
    ;
    grid-column: col 1 / span 20;
    grid-row: row 2 / span 2;
      
    width: 100%; 
    box-sizing: border-box;
    border: 1px solid green;
	}

  #panel-2-title-text{
    width: 100%;
    text-align: center;
  }

	#panel-2-text-wrapper{
		grid-column: col 1 / span 20;
		grid-row: row 5 / span 6;
		border: 2px solid red;
	}

	#panel-2-video-upper-wrapper{
		@apply
			flex
			justify-center
		;
		grid-column: col 1 / span 20;
		grid-row: row 11 / span 10;
		/* border: 2px solid blue; */
	}
	
	#panel-2-text{
    padding: 1.5rem;
		font-size: 1.5rem;
	}

  #panel-2-video-background-1{
    @apply
      flex
      justify-center
    ;
    width: 93%;
    height: 100%;
    box-sizing: border-box;
    background-position-x: left;
    background-position-y: 7rem;
    background-size: 20%;
    background-repeat: no-repeat;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/colored_bouquet_flowers_1.png");
    /* border: 2px red solid; */
  }

  #panel-2-video-background-2{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    height: 100%;
    background-position-x: right;
    background-size: 22%;
    background-position-y: 7rem;
    background-repeat: no-repeat;
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/colored_bouquet_flowers_2.png");
    /* border: 2px blue solid; */
  }

	#panel-2-video-inner-wrapper{
    @apply
      m-[auto]
    ;
		width: 72%;		
		height: 90%;		
		overflow: hidden;
		
		border-radius: 10px;
		box-sizing: border-box;
		box-shadow: 0 0 6px black;
		/* border: 2px solid green; */
	}

	#panel-2-video{
		box-sizing: border-box;
		object-position: 0 -2.8rem;
	}	
    
</style>
