<script>
  import Navbar from './../shared/Navbar.svelte'
  import Footer from './../shared/Footer.svelte'
  import Todo from './../shared/Todo.svelte'
  
  let ipsum_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
</script>

<Navbar current_nav_page = 'goals'/>

<div class="goal-outer-wrapper">
  <div class="goal-inner-wrapper">

    <div class="group-panel-outer-wrapper" id="panel-1-outer-wrapper">
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
					<h2>~ Progress Bar Animation Here ~</h2>
        </div>
        <div class="panel-1-illustration-outer-wrapper">
          <div id="panel-1-illustration-1-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-2-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-3-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-4-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-5-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-6-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-7-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-8-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>
          <div id="panel-1-illustration-9-wrapper"> 
            <img 
							src="https://dieupeut-bucket.us-east-1.linodeobjects.com/temp_goal_commission_1.png" 
							id="panel-1-illustration-1" 
						/> 
          </div>

        </div>
      </div>
    </div>
    <div class="group-panel-outer-wrapper" id="panel-2-outer-wrapper">
      <div class="group-panel-inner-wrapper" id="panel-2-inner-wrapper">
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

  .group-panel-inner-wrapper{
    width: 1285px;
    height: 700px;
    border: 2px solid green;
  }

  /* --------------- Panel 1 --------------- */
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
    grid-column: col 1 / span 10;
    grid-row: 4 / span 13;
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
		grid-column: col 1 / span 10;	
		grid-row: row 17 / span 3;	

    border: purple solid 2px;
	}

	.panel-1-illustration-outer-wrapper{
		grid-column: col 11 / span 10;	
		grid-row: row 4 / span 17;	
		
			
    display: grid;
    grid-template-columns: repeat(20, [col] 5%);
    grid-template-rows: repeat(20, [row] 5%);
    border: blue solid 2px;
	}

	#panel-1-illustration-1-wrapper{
		grid-column: col 2 / span 6; 
		grid-row: row 2 / span 6; 

		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-2-wrapper{
		grid-column: col 8 / span 6; 
		grid-row: row 2 / span 6; 
		
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-3-wrapper{
		grid-column: col 14 / span 6; 
		grid-row: row 2 / span 6; 
		
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-4-wrapper{
		grid-column: col 2 / span 6; 
		grid-row: row 8 / span 6; 
		
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-5-wrapper{
		grid-column: col 8 / span 6; 
		grid-row: row 8 / span 6; 
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-6-wrapper{
		grid-column: col 14 / span 6; 
		grid-row: row 8 / span 6; 
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-7-wrapper{
		grid-column: col 2 / span 6; 
		grid-row: row 14 / span 6; 
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-8-wrapper{
		grid-column: col 8 / span 6; 
		grid-row: row 14 / span 6; 
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}
	#panel-1-illustration-9-wrapper{
		grid-column: col 14 / span 6; 
		grid-row: row 14 / span 6; 
		width: 100%;	
		height: auto;	
		border: 1px solid red;
	}

	#panel-1-illustration-1{
		width: 100%;
		height: auto;
		
	}

  /* --------------- Panel 2 --------------- */
    
</style>
