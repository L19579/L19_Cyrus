<script>
  import Moreinfo from './Moreinfo.svelte'
</script>

<div class="panels"> 
  <div class="panel-1-outer-wrapper">
    <div class="panel-1-inner-wrapper">
      <div class="panel-1-title">
        <div class="leading-title-statement-wrapper"> <!-- Additional wrappers for scale responsive test -->
          <h1 class="leading-title-statement">
            Focused on contributing <br/> to foundations of ....
          </h1>
        </div>

        <div class="leading-title-statement-description-top-wrapper">
            <div class="leading-title-statement-description-main-wrapper">
              <div class="leading-title-statement-description-main-text-wrapper">
                <p class="leading-title-statement-description-main-text">
                  Lorem Ipsum has been the industry's standard dummy
                  Lorem Ipsum has been the industry's standard dummy
                  Lorem Ipsum has been the industry's standard dummy
                  Lorem Ipsum has been the industry's standard dummy
                  Lorem Ipsum has been the industry's standard dummy
                  Lorem Ipsum has been the industry's standard dummy
                </p>
            </div>
            <div class="leading-title-statement-description-main-buttons-wrapper">
              <div class="panel-1-buttons-wrapper">
                <a href="/" class="panel-1-buttons" id="contact-button">Contact us</a>
                <a href="/" class="panel-1-buttons" id="learn-button">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Moreinfo />
  
  <div class="panel-video-outer-wrapper">
    <div class="panel-video-inner-wrapper">
      <div class="panel-video-video-wrapper">
        <video
          class="panel-video-video"
          autoplay 
          muted
          loop
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-animals-in-an-african-village-17221-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  </div>
</div>

<style>
  .panels{
		@apply
      block
      xsm:pt-[45px]
      sm:pt-[45px]
      md:pt-[110px]
      xl:pt-[110px]
      /* xl:min-h-[810px]  Not req */ 
    ; 
    width: 100%;
  }
  
  /* Panel 1 specific */
	.panel-1-outer-wrapper{
		@apply
      flex
			relative
			bg-stone-100
			overflow-hidden
      md:h-screen /* boiler plate */
      lg:h-screen
      xl:h-screen
      justify-center
      pb-10
		;
    width: 100%;
    border: 2px solid red;
	}	
	
  .panel-1-inner-wrapper{
    @apply
      lg:px-10
      md:px-8
      sm:px-4
      xsm:px-4
      flex
    ;
    min-height: 500px;
    max-width: 1200px; 
    border: 2px solid purple;
    
  }

 .leading-title-statement-wrapper{
  @apply
    grow
    flex
    flex-col
    justify-between
  ;
 }
  
  .leading-title-statement{
      @apply
        text-[clamp(28px,8.5vw,68px)]
        lg:w-2/3
        xl:w-2/3
        xl:pr-96
      ;
  }

  .leading-title-statement-description-main-text-wrapper{
      @apply
        xl:pr-96
        pb-7
      ;
  }

  .leading-title-statement-description-main-text{
    @apply 
      md:pr-32
      lg:pr-32
      xl:pr-10
      text-xl
      leading-[1.75]
      text-left
    ;
  }
  
  .panel-1-buttons-wrapper{
    @apply
      flex
    ;
  }

  .panel-1-buttons{
    @apply
      flex
      text-white
      font-bold
      text-xl
      py-2
      px-8
      mx-2
      rounded-full
    ;
    white-space: nowrap;
    text-decoration: none;
    will-change: transform;
  }
  
  .panel-1-buttons:hover{
    transition-duration: 200ms;
    transform: scale(1.1);
    transition-timing-function: cubic-bezier(0.4, 0.2, 1);
  }

  #contact-button{
    @apply bg-indigo-700;
  }

  #learn-button{
    @apply bg-stone-600;
  }
  
  /* Panel-video specific */

	.panel-video-outer-wrapper{
		@apply
      flex
			relative
			bg-stone-100
			overflow-hidden
      justify-center
		;
    width: 100%;
    max-height: 200px;
    border: 2px solid blue;
	}	
	
  .panel-video-inner-wrapper{
    @apply
      flex
    ;
    width:2000px;
    width: full;
    border: 2px solid red;
  }

  .panel-video-video-wrapper{
    @apply
      flex
      justify-around
      items-center
    ;
    width: 100%;
    border: 2px solid purple;
  }

  .panel-video-video{
    display: block;
    overflow: hidden;
    border: 2px solid blue;
    width: 100%;
  }
</style>
