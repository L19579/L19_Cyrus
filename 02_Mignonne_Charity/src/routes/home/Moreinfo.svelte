<script>
  const staff_quotes = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  ];
</script>

<div class="info-panels-outer-wrapper">
  <div class="info-panels-inner-wrapper">
    <div class="info-panel-group-outer-wrapper" id="info-panel-1-outer-wrapper">
      <div class="info-panel-group-inner-wrapper" id="info-panel-1-inner-wrapper">
        <div id="info-panel-1-stats-grid">
          <div class="info-panel-1-stat-group" id="info-panel-1-stat-1">
            <div class="stat-number-group" id="stat-number-1">
              50+
            </div>
            <div class="stat-description-group" id="stat-description-1">
              Families fed
            </div>
          </div>
          <div class="info-panel-1-stat-group" id="info-panel-1-stat-2">
            <div class="stat-number-group" id="stat-number-2">
              30+
            </div>
            <div class="stat-description-group" id="stat-description-2">
              Enrolled Youths
            </div>
          </div>
          <div class="info-panel-1-stat-group" id="info-panel-1-stat-3">
            <div class="stat-number-group" id="stat-number-3">
              60+
            </div>
            <div class="stat-description-group" id="stat-description-3">
              Sunday Service Attendees
            </div>
          </div>
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
          <img id="info-panel-3-portrait" src="temporary/williane.png" />
        </div>
        <div id="info-panel-3-quote-wrapper">
          <div id="info-panel-3-quote">
          </div>
          <div id="info-panel-3-button-wrapper">
            <div id="info-panel-3-button">
              Meet the Team! >
            </div>
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
    transition-timing-funciton: cubic-bezier(0.4, 0,2, 1);
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
    grid-template-row: 100%;
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

  #info-panel-1-description{
    @apply
      relative
      block
      text-[clamp(28px,8.5vw,30px)]
    ;
    margin-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
    font-weight: 540;
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
    ;
    height: 98%;
    width: 1280px;
    border: 2px solid red;
  }

  #info-panel-3-portrait-wrapper{
    position: relative;
    display: inline-block;
    width: 30%; 
    margin-left: 3%;
    
    border: 2px solid blue;
  } 

  #info-panel-3-portrait{
  
  } 

  #info-panel-3-quote-wrapper{
    @apply
      flex
    ;
    display: inline-block;
    margin-left: 2%;
    margin-right: 2%;
    width: 100%;
    height: 98%;
    border: 2px solid purple;
  }

  #info-panel-3-quote{
    @apply
      flex
    ;
    height: 90%;
    text-align: center;
    border: 2px solid black;
  }

  #info-panel-3-button-wrapper{
    margin-bottom: 1em;
    
    border: 2px solid green;
  }

  #info-panel-3-button{

  }
</style>
