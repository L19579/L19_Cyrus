<script>
  import Typewriter from 'svelte-typewriter';
  import { tweened } from 'svelte/motion';
  /* import { backInOut } from 'svelte/easing'; */

  const staff_quotes = [
    { 
      name: "Williane Moise",
      title_en: "Founder",
      title_fr: "PDG",
      portrait: "temporary/williane.png",
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ];
  
  let debug = false;

  let innerWidth = 0;
  let innerHeight = 0;
  let y_scroll_distance;


  let show_counter_notes = false;
  let tweened_families_fed = tweened(0);
  let tweened_enrolled_youths = tweened(0);
  let tweened_sunday_service_attendees = tweened(0);

  $: if (y_scroll_distance > 470) {
    setTimeout(() =>{
      setInterval(() => {
        if ($tweened_families_fed < 50) $tweened_families_fed++;   
      }, 100);
    }, 0); 

    setTimeout(() =>{
      setInterval(() => {
        if ($tweened_enrolled_youths < 37) $tweened_enrolled_youths++;   
      }, 100);
    }, 300); 

    setTimeout(() =>{
      setInterval(() => {
        if ($tweened_sunday_service_attendees == 0) $tweened_sunday_service_attendees = 95;   
        if ($tweened_sunday_service_attendees < 145 && $tweened_sunday_service_attendees > 94) 
          $tweened_sunday_service_attendees++;   
      }, 250);
    }, 300); 

    setTimeout(() =>{
      show_counter_notes = true;
    }, 2200); 
  };

  $: counter_families_fed = Math.floor($tweened_families_fed / 1);
  $: counter_enrolled_youths = Math.floor($tweened_enrolled_youths / 1);
  $: counter_sunday_service_attendees = Math.floor($tweened_sunday_service_attendees / 1);

</script>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y_scroll_distance}/>

<div class="info-panels-outer-wrapper">
  <div class="info-panels-inner-wrapper">
    <div class="info-panel-group-outer-wrapper" id="info-panel-1-outer-wrapper">
      <div class="info-panel-group-inner-wrapper" id="info-panel-1-inner-wrapper">
        <div id="info-panel-1-stats-grid">
          <div class="info-panel-1-stat-group" id="info-panel-1-stat-1">
            <div class="stat-number-group" id="stat-number-1">
              {counter_families_fed}+
            </div>
            <div class="stat-description-group" id="stat-description-1">
              Families Fed
            </div>
          </div>
          <div class="info-panel-1-stat-group" id="info-panel-1-stat-2">
            <div class="stat-number-group" id="stat-number-2">
              {counter_enrolled_youths}+
            </div>
            <div class="stat-description-group" id="stat-description-2">
              Enrolled Youths
            </div>
          </div>
          <div class="info-panel-1-stat-group" id="info-panel-1-stat-3">
            <div class="stat-number-group" id="stat-number-3">
              {counter_sunday_service_attendees}+
            </div>
            <div class="stat-description-group" id="stat-description-3">
              Sunday Service Attendees
            </div>
          </div>
        </div>
        <div id="info-panel-1-counter-note">
          {#if show_counter_notes}
            <Typewriter mode="cascade" interval="50" cursor="false">
              ...and counting.
            </Typewriter>
          {/if}
        </div>
        <div id="info-panel-1-description">
          Since our founding(??) we've dedicated resources to helping
          families and children in critical need in Haiti, and Canada.
          The hardships we aim to ameliorate have been experienced by
          our staff first hand. Our mission is to reduce the number of
          people forced to walk difficult paths alone. Programs currently
          supported by our donors include meal assitance, and youth social
          programs. We also host prayer services in person and online.
        </div>
        {#if debug}
          <div>
            screen_height: {innerHeight} <br />
            screen_width: {innerWidth} <br />
            Distance scrolled on Y-Axis: {y_scroll_distance} <br />
            show_counter_notes: {show_counter_notes}
          </div>
        {/if}
      </div>

      <div class="info-panel-group-footer-outer-wrapper" id="info-panel-1-footer-outer-wrapper"> 
        <div class="info-panel-group-footer-inner-wrapper" id="info-panel-1-footer-inner-wrapper"> 
          <div class="info-panel-group-footer-button-wrapper" id="info-panel-1-footer-button-wrapper">
            <a href="/impact" class="info-panel-group-footer-button" id="info-panel-1-footer-button">
              Read More >
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="info-panel-group-outer-wrapper" id="info-panel-2-outer-wrapper">
      <div class="info-panel-group-inner-wrapper" id="info-panel-2-inner-wrapper">
      </div>
      <div class="info-panel-group-footer-outer-wrapper" id="info-panel-2-footer-outer-wrapper"> 
        <div class="info-panel-group-footer-inner-wrapper" id="info-panel-2-footer-inner-wrapper"> 
          <div class="info-panel-group-footer-button-wrapper" id="info-panel-2-footer-button-wrapper">
            <a href="/goals" class="info-panel-group-footer-button" id="info-panel-2-footer-button">
              Read More >
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="info-panel-group-outer-wrapper" id="info-panel-3-outer-wrapper">
      <div class="info-panel-group-inner-wrapper" id="info-panel-3-inner-wrapper">
        <div id="info-panel-3-portrait-wrapper">
          <img id="info-panel-3-portrait" src="{staff_quotes[0].portrait}" />
        </div>
        <div id="info-panel-3-quote-wrapper">
          <div id="info-panel-3-quote">
            "{staff_quotes[0].quote}"
          </div>
          <div id="info-panel-3-quote-name-wrapper">
            <div id="info-panel-3-quote-name">
              {staff_quotes[0].name}
            </div>
          </div>
          <div id="info-panel-3-quote-title-wrapper">
            <div id="info-panel-3-quote-title">
              {staff_quotes[0].title_en}
            </div>
          </div>
          <div id="info-panel-3-button-wrapper">
            <a href="/organization" id="info-panel-3-button">
              Meet the Team! >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .info-panels-outer-wrapper{
    @apply
      flex
      justify-center
    ;
    width: 100vw;
    border: 3px solid red;
  }


/* ---------------------------------- Group ---------------------------------- */
  .info-panel-group-outer-wrapper{
    @apply
      flex
      flex-col
      mr-3 /* don't rly care for this */
    ;
    width: 100vw;
    height: 760px;
    border: solid 10px cyan;
  }  

  .info-panel-group-inner-wrapper{
    @apply
      mx-[auto]
    ;
    width: 1280px; /* <-- weird, expected 1200px */
  }

/* /// ----------------- Group Footer --------------------- /// */

  .info-panel-group-footer-outer-wrapper{
    height: 140px;
    width: 100%;
    background-color: black;
    border: 2px red solid;
  }

  .info-panel-group-footer-inner-wrapper{
    @apply
      flex
      mx-[auto]
    ;
    width: 50%;
    height: 99%;
    border: 2px solid black;
  }
  
  .info-panel-group-footer-button-wrapper{
    @apply
      my-[auto]
      ml-[auto]
      mr-[10px]
    ;
  }

  .info-panel-group-footer-button{
    @apply
      flex
      text-black
      font-bold
      text-xl
      rounded-full
      bg-white
      my-[auto]
      py-2
      px-8
      mx-2
      /* text-[clamp(28px,8.5vw,30px)] */
    ;
    white-space: nowrap;
    text-decoration: none;
    will-change: transform;
  }

  .info-panel-group-footer-button:hover{
    transition-duration: 200ms;
    transform: scale(1.1);
    transition-timing-function: cubic-bezier(0.4,0,2,1);
  }


/* ---------------------------------- Panel 1 ---------------------------------- */
  #info-panel-1-outer-wrapper{
    border: 2px solid blue; 
  }

  #info-panel-1-inner-wrapper{
    position: relative;
    margin-top: 40px;
    height: 600px;
    border: 2px solid black;
  } 

  #info-panel-1-stats-grid{
    @apply
      flex
      justify-around
    ;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, [col] 30%);
    grid-template-rows: 100%;
    grid-gap: 2px;

    width: 100%;
    height: 150px;
    border: 2px solid green;
  }

  .info-panel-1-stat-group{
    @apply
      flex
      flex-col
      text-xl
      justify-around
    ;
    width: 100%;
    text-align: center;
    font-weight: 700; 
    border: 2px solid black;
  }

  .stat-number-group{
    @apply
      block
      text-xl
      text-[clamp(28px,8.5vw,60px)]
    ;
  }

  .stat-description-group{
    @apply
      block
      text-xl
      text-[clamp(28px,8.5vw,35px)]
    ;
    
  }

  #info-panel-1-stat-1{
    grid-column: col 1;
    padding-top: 17px;
    padding-bottom: 15px;
  }

  #info-panel-1-stat-2{
    grid-column: col 2;
    padding-top: 17px;
    padding-bottom: 15px;
  }

  #info-panel-1-stat-3{
    grid-column: col 3;
    padding-top: 15px;
    padding-bottom: 5px;
  }

  #info-panel-1-counter-note{
    @apply
      relative
      block
      text-[clamp(28px,8.5vw,30px)]
    ;
    font-weight: 600; 
    height: 15%;
    width: 100%;
    text-align: center;
    margin-top: 0.6rem;

    border: 2px solid black;
  }

  #info-panel-1-description{
    @apply
      relative
      block
      text-[clamp(28px,8.5vw,30px)]
    ;
    line-height: 2.6rem;
    margin-top: 2.5rem;
    padding-left: 8%;
    padding-right: 8%;
    text-align: center;
    font-weight: 540;

    border: 2px solid blue;
  }


/* ---------------------------------- Panel 2 ---------------------------------- */
  #info-panel-2-outer-wrapper{
    border: 2px solid red; 
  }

  #info-panel-2-inner-wrapper{
    position: relative;
    margin-top: 40px;
    height: 600px;
    border: 2px solid black;
  } 

/* ---------------------------------- Panel 3 ---------------------------------- */
  #info-panel-3-outer-wrapper{
    height: 350px;
    border: 2px solid green; 
  }

  #info-panel-3-inner-wrapper{
    @apply
      flex
      py-[0.5rem]
    ;
    height: 98%;
    width: 1280px;
    border: 2px solid red;
  }

  #info-panel-3-portrait-wrapper{
    @apply
      my-[auto]
    ;
    position: relative;
    padding: auto;
    height: 90%;
    width: 30%; 
    margin-left: 3%;
    
    border: 2px solid blue;
  } 

  #info-panel-3-portrait{
    height: 90%; 
    width: auto; 
  } 

  #info-panel-3-quote-wrapper{
    @apply
      my-[auto]
    ;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(20, [row] 5%);

    margin-left: 2%;
    margin-right: 2%;
    width: 100%;
    height: 90%;
    border: 2px solid purple;
    text-align: center;
  }

  #info-panel-3-quote{
    @apply
      flex
      py-[2%]
      px-[10%]
      text-[clamp(12px,5.5vw,22px)]
    ;
    font-style: italic;
    grid-row: row 1 / span 13;

    /* height: 90%; */
    border: 2px solid black;
  }

  #info-panel-3-quote-name-wrapper{
    @apply
      flex
      text-[clamp(12px,5.5vw,22px)]
    ;
    height: 100%;
    grid-row: row 14 / span 2;
    border: 2px solid red;
  }

  #info-panel-3-quote-name{
    @apply
      m-[auto]
      text-[clamp(12px,5.5vw,22px)]
    ;
    font-weight: 600;
  }

  #info-panel-3-quote-title-wrapper{
    @apply
      flex
    ;
    height: 100%;
    grid-row: row 16 / span 2;
    border: 2px solid blue;
  }

  #info-panel-3-quote-title{
    @apply
      text-[clamp(10px,5.5vw,20px)]
      m-[auto]
    ;
    font-style: italic;
    text-align: center;
  }

  #info-panel-3-button-wrapper{
    @apply
      flex
      py-[auto]
    ;
    height: 100%;
    grid-row: row 18 / span 3;
    border: 2px solid green;
  }

  #info-panel-3-button{
    @apply
      m-[auto]
      px-6

      text-white
      font-bold
      text-xl
      rounded-full
      bg-indigo-700;
    ;
    white-space: nowrap;
    text-decoration: none;
    will-change: transform;

    border: 2px solid red;
  }

  #info-panel-3-button:hover{
    transition-duration: 200ms;
    transform: scale(1.1); 
    transition-timing-function: cubic-bezier(0.4,0.2,1);
  }
</style>
