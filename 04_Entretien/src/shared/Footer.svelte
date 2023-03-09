<script>
  import Logoyellow from './Logoyellow.svelte';
</script>

<div class="footer-outer-wrapper">
  <div class="footer-mid-wrapper">

    <div class="footer-top-section-outer-wrapper">
      <div class="footer-title-outer-wrapper">
        <Logoyellow width={"15rem"}/> 
      </div>
    </div>

    <div class="footer-directory-outer-wrapper">
      <div class="footer-directory-inner-wrapper">
        <div class="footer-directory-title">
          Sections & Highlights
        </div>
        <div class="footer-directory-links">
          <div class="footer-category-links-columns" id="footer-category-links-column-1">
            <a href="" class="footer-grouped-links" id="footer-category-links-column-1-link-1">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-1-link-2">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-1-link-3">
              Extended link
            </a>
          </div>
          
          <div class="footer-links-seperator" />

          <div class="footer-category-links-columns" id="footer-category-links-column-2">
            <a href="" class="footer-grouped-links" id="footer-category-links-column-1-link-1">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-2-link-1">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-2-link-2">
              Extended link
            </a>
          </div>
          
          <div class="footer-links-seperator" />

          <div class="footer-category-links-columns" id="footer-category-links-column-3">
            <a href="" class="footer-grouped-links" id="footer-category-links-column-3-link-1">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-3-link-2">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-3-link-3">
              Extended link
            </a>
          </div>
          
          <div class="footer-links-seperator" />

          <div class="footer-category-links-columns" id="footer-category-links-column-4">
            <a href="" class="footer-grouped-links" id="footer-category-links-column-4-link-1">
              Extended link
            </a>
            <a href="" class="footer-grouped-links" id="footer-category-links-column-3-link-2">
              Extended link
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>


<style>
  .footer-outer-wrapper{
display: flex;
    border-top: 2px solid #ffc274;
    margin-top: 30px;
    width: 100vw;
    height: 300px;
    /* background-color: #fdc141; */
    background-color: #ebe8e1;
  }
    
  .footer-mid-wrapper{
    margin: auto auto;
    width: 1200px;
    height: 80%;
    border: 2px solid red;
  }

  .footer-top-section-outer-wrapper{
    border: 2px solid blue;
  }
  .footer-directory-title{
    width: 100%;
    margin: 10px auto 5px 1rem;
    color: rgb(46,46,46);
    font-size: 18px;
    font-weight: bold;
  }
  .footer-directory-links{
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto 5px 1rem;
    font-size: 18px;
    border: 1px solid green;
  }
  .footer-category-links-columns{
    margin: 0 1rem;
    height: 100%;
    border: 1px solid white;
  }

  .footer-grouped-links{
    display: flex;
    margin: 0.5rem 0;
    color: rgb(46,46,46);
    text-decoration: none;
    white-space: nowrap;
    border: 1px solid red;
  }

  .footer-links-seperator{
    width: 1px;
    height: 100%;
    border: 1px solid rgb(46,46,46);
  }
</style>
