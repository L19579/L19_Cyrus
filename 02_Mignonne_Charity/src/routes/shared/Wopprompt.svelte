<script>
  import { language } from './LanguageData.js';

  let wip;
  language.subscribe(value =>{
    wip = value.wip;    
  });
</script>

<div class="top-wrapper">
  <div class="statement">
    {wip}
  </div>
</div>

<style>
  .top-wrapper{
    @apply
      flex
      fixed
      justify-center
      z-50
      top-0
      left-0
    ;
    width: 100vw;
    height: 20px;
    background-color: orange;
    border: 2px solid red;
  }
</style>
