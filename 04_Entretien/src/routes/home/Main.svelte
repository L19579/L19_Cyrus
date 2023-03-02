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
            <div class="sidebar-story-group-mid-wrapper" id="sidebar-story-1-mid-wrapper">
              <div class="sidebar-story-group-inner-wrapper" id="sidebar-story-1-inner-wrapper">

                <div id="sidebar-story-1-text-wrapper">
                  <div id="sidebar-story-1-title">Latest Podcast Episode</div>
                  <div id="sidebar-story-1-subtitle">Goldstein and associates drone on about something</div>
                </div>
                
                <div id="sidebar-story-1-content-wrapper">
                  <iframe style="border-radius:12px" 
                    src="https://open.spotify.com/embed/episode/1Q1L3nNHC4n98vARj5JcZa?utm_source=generator&theme=1" 
                    width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; 
                    clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-2-outer-wrapper">
            <div class="sidebar-story-group-mid-wrapper" id="sidebar-story-2-mid-wrapper">
              <div class="sidebar-story-group-inner-wrapper" id="sidebar-story-2-inner-wrapper">
              </div>
            </div>
          </div>
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-3-outer-wrapper">
            <div class="sidebar-story-group-mid-wrapper" id="sidebar-story-3-mid-wrapper">
              <div class="sidebar-story-group-inner-wrapper" id="sidebar-story-3-inner-wrapper">
              </div>
            </div>
          </div>
          <div class="sidebar-story-group-outer-wrapper" id="sidebar-story-4-outer-wrapper">
            <div class="sidebar-story-group-mid-wrapper" id="sidebar-story-4-mid-wrapper">
              <div class="sidebar-story-group-inner-wrapper" id="sidebar-story-4-inner-wrapper">
              </div>
            </div>
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
    border-right: 1px solid rgb(199,199,199); /* grey */
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
    border-bottom: 1px solid rgb(18,18,18); /* black */
  }

  .sidebar-story-group-outer-wrapper{
  }

  #mainbar-story-1-outer-wrapper{
    grid-row: row 1 / span 1;
    width: 100%;
    height: 100%;
  }

  .sidebar-story-group-mid-wrapper{
    margin: auto;
    height: 100%;
    width: 95%;
    border-bottom: 1px solid rgb(18,18,18); /* black */
  }

  .sidebar-story-group-inner-wrapper{
    margin: auto;
    height: 95%;
    width: 100%;

    display: grid;
    grid-template-rows: repeat(10, [row] 10%);
    /* border: 2px solid blue; */
  }

  #sidebar-story-1-text-wrapper{
    width: 100%;
    padding-top: 5%;
    grid-row: 1 / span 3;
    /* border: 1px solid red; */
  }
  
  #sidebar-story-1-title{
    font-size: 35px;
    font-weight: bold;
    /* text-align: center; */
  }

  #sidebar-story-1-subtitle{
    color: rgb(74,74,74);
    margin-top: 4px; 
  }

  #sidebar-story-1-content-wrapper{
    grid-row: 4 / span 7;
    /* border: 2px solid green; */
  }
  
  iframe{
  }
</style>
