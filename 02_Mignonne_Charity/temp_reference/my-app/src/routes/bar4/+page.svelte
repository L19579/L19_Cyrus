<div class="custom-styling">
  <h1 class="">Bar4</h1>
</div>
<div>
  <svg viewbox="0 0 100 100">
    <rect 
      class = "square-svg"
      x="50" y="10" 
      width="10%" height="10%"
    />
  </svg>
</div>

<style>
  .custom-styling{
    @apply text-xl italic text-red-600 border-red-600 bg-slate-400 pl-8;
    border:1px solid red;
  }

  .square-svg{
    fill: red;
    stroke: green;
    transition: transform 1s;
  }
  
  .square-svg:hover{
    transform: rotate(360deg);
  }
</style>
