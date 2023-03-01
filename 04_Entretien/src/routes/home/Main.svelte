<script>
  import Navbar from './../../shared/Navbar.svelte';
</script>

<Navbar />

<div class="main-outer-wrapper">
  <div class="main-mid-wrapper">
    <div class="main-inner-wrapper">
      <div class="mainbar-outer-wrapper">
        <div class="mainbar-mid-wrapper">
          <div class="mainbar-story-group-outer-wrapper" id="mainbar-story-1-outer-wrapper">
          </div>
          <div class="mainbar-story-group-outer-wrapper" id="mainbar-story-2-outer-wrapper">
          </div>
          <div class="mainbar-story-group-outer-wrapper" id="mainbar-story-3-outer-wrapper">
          </div>
          <div class="mainbar-story-group-outer-wrapper" id="mainbar-story-4-outer-wrapper">
          </div>
        </div>
      </div>
      <div class="sidebar-outer-wrapper">
        <div class="sidebar-mid-wrapper">
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-1-outer-wrapper">
          </div>
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-2-outer-wrapper">
          </div>
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-3-outer-wrapper">
          </div>
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-4-outer-wrapper">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .main-outer-wrapper{
    display: flex;
    width: 100wv;
    /* border: 2px solid red; */
  }
  
  .main-mid-wrapper{
    margin: 0 auto;
    width: 1300px;
    margin-top: 1.5rem;
    /* border: 2px solid blue; */
  }

  .main-inner-wrapper{
    display: grid;
    grid-template-columns: repeat(20, [col] 5%);
    /* border: 2px solid green; */
  }

  .mainbar-outer-wrapper{
    grid-column: col 1 / span 13; 
    border-right: 1px solid grey;
  }

  .mainbar-mid-wrapper{
    margin: 0 auto;
    width: 95%;
    display: grid;
    grid-template-rows: repeat(4, [row] 445px); 
    /* border: 2px solid red; */
  }

  .sidebar-outer-wrapper{
    grid-column: col 14 / span 7; 
    /* border: 2px solid blue; */
  }

  .sidebar-mid-wrapper{
    margin: 0 auto;
    display: grid;
    width: 95%;
    grid-template-rows: repeat(5, [row] 356px); 
  }

  .mainbar-story-group-outer-wrapper{
    border-bottom: 1px solid black;
  }

  .sidebar-story-group-outer-wrapper{
    border-bottom: 1px solid black;
  }

  #mainbar-story-1-outer-wrapper{
    grid-row: row 1 / span 1;
    width: 100%;
    height: 100%;
  }

  .temp-sidebar-story-1-outer-wrapper{
     
  }
</style>
