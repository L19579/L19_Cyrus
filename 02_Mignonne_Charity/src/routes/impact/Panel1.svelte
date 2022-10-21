<div class="background-wrapper">
  <div class="panel-0-outer-wrapper">
    <div class="panel-0-background-1">
    </div>
    <div class="panel-0-background-2">
    </div>
  </div>
  <h2 class="temp-panel-0">This is for Panel 0</h2>
  <div class="panel-1-outer-wrapper">
    <div class="panel-1-title-wrapper">
      <h2 class="panel-1-title-text">
        For for X Food Program
      </h2>
    </div>
    <div class="panel-1-description-wrapper">
      <p>This is for Panel1</p>
    </div>
  </div>
</div>

<style>
  .background-wrapper{
    @apply
      relative
      w-[100%]
      h-[400px]
    ;
    overflow: hidden;
    border: 2px solid black; 
  }
  
  /* Panel 0 specifics */

  .panel-0-outer-wrapper{
    @apply
      flex /* This solved our sliding bg headaches */
    ;
    width: 100%;
    height: 100px;

    overflow: hidden;
    border: 2px solid orange;
  }
  
  .panel-0-background-1{
    @apply
      relative
    ;
    width: 200%;
    height: 100%;
    float: left;

    background-image: url("./../../../static/backgrounds/old_img_black_group.webp");
    background-size: 800%;
    animation: slide1 8s linear infinite;

    border: 4px solid green;
  }

  .panel-0-background-2{
    @apply
      relative
    ;
    width: 200%;
    height: 100%;
    float: left;
    
    background-image: url("./../../../static/backgrounds/old_img_black_group.webp");
    background-size: 800%;
    animation: slide2 8s linear infinite;

    border: 4px solid red;
  }

  .panel-0-background-3{
    @apply
      relative
    ;
    transform: translateX(200%);
    width: 100%;
    height: 100%;
    float: left;
    
    background-image: url("./../../../static/backgrounds/old_img_black_group.webp");
    background-size: 800%;
    animation: slide3 8s linear infinite;

    border: 4px solid blue;
  }

  @keyframes slide1{
    to{
      transform: translateX(-100%)
    }
  }
  
  @keyframes slide2{
    to{
      transform: translateX(-100%)
    }
  }
  
  @keyframes slide3{
    to{
      transform: translateX(0%)
    }
  }
  
  /* Panel 1 specifics */

  .panel-1-outer-wrapper{
    @apply
      flex 
      justify-center
    ;
    width: 100%;
    border: 2px solid red; 
  }

  .panel-1-title-wrapper{
    solid: 2px solid black;
  }

  .panel-1-descriptioon-wrapper{
    @apply
      flex
    ;
  }
    
</style>
