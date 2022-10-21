<div class="background-wrapper">
  <div class="panel-0-outer-wrapper">
    <div class="panel-0-background-wrapper">
      <div class="panel-0-background-1">
      </div>
      <div class="panel-0-background-2">
      </div>
    </div>
    <div class="panel-0-description-wrapper">
      <h2 class="temp-panel-0">
        Panel 0 overlay text here ; black gradient at max
      </h2>
    </div>
  </div>

  <div class="panels-group-outer-wrapper">
    <div class="panels-group-inner-wrapper">
      <div class="panel-1-title-wrapper">
        <h2 class="panel-1-title-text">
          Food for X Program
        </h2>
      </div>
      <div class="panel-1-description-wrapper">
        <p>This is for Panel 1</p>
      </div>
    </div>
  </div>

  <div class="panels-group-outer-wrapper">
    <div class="panels-group-inner-wrapper">
      <div class="panel-1-title-wrapper">
        <h2 class="panel-1-title-text">
          Youth Recreation
        </h2>
      </div>
      <div class="panel-1-description-wrapper">
        <p>This is for Panel 2</p>
      </div>
    </div>
  </div>

  <div class="panels-group-outer-wrapper">
    <div class="panels-group-inner-wrapper">
      <div class="panel-1-title-wrapper">
        <h2 class="panel-1-title-text">
          Sunday Prayer Group
        </h2>
      </div>
      <div class="panel-1-description-wrapper">
        <p>This is for Panel 3</p>
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
    position: relative;
    width: 100%;
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
    width: 50%;
    height: 100%;
    float: left;

    background-image: url("./../../../static/backgrounds/old_img_black_group.webp");
    background-size: 800%;
    animation: slide 8s linear infinite;

    border: 4px solid green;
  }

  .panel-0-background-2{
    @apply
      relative
      top-0;
    ;
    width: 50%;
    height: 100%;
    float: left;
    
    background-image: url("./../../../static/backgrounds/old_img_black_group.webp");
    background-size: 800%;
    animation: slide 8s linear infinite;

    border: 4px solid red;
  }

  @keyframes slide{
    to{
      transform: translateX(-100%)
    }
  }

  .panel-0-description-wrapper{
    @apply
      relative
      flex
      top-0
      left-0
      z-20
      justify-center
    ;
    /* margin-top: -100%; issue */
    overflow: hidden;
    border: 10px solid blue;
  }

  h2{
    font-weight: 800;
  }
  
  /* Panel 1 specifics */

  .panels-group-outer-wrapper{
    @apply
      flex 
      justify-center
    ;
    width: 100%;
    height: 500px;
    border: 2px solid red; 
  }
  
  .panels-group-inner-wrapper{
    @apply
      relative
      justify-center
    ;
    height: 100%;
    width: 1278px;
    border: 2px solid blue; 
  }

  /* This is inheriting a "relative" attr thats not needed; untis affected */
  .panel-1-title-wrapper{
    solid: 2px solid black;
  }

  .panel-1-title-wrapper{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    height: 20%;
    border: 1px solid green;
  }

  .panel-1-description-wrapper{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    height: 80%;
    border: 1px solid orange;
  }

  .panel-1-title-text{
    white-space: nowrap;
  }
    
</style>
