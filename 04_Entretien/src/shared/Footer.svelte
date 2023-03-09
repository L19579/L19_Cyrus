<script>
  import Logoyellow from './Logoyellow.svelte';
</script>

<div class="footer-outer-wrapper">
  <div class="footer-mid-wrapper">

    <div class="footer-top-section-outer-wrapper">
      <div class="footer-title-outer-wrapper">
        <Logoyellow width={"13rem"}/> 
      </div>
      <div class="footer-social-media-outer-wrapper">
      </div>
      <div class="footer-copyright-statement-outer-wrapper">
        <div class="footer-copyright-statement-inner-wrapper nowrap">
          &copy; Entretien 2000. All Rights Reserved
        </div>
      </div>
    </div>

    <div class="footer-directory-outer-wrapper">
      <div class="footer-directory-inner-wrapper">
        <div class="footer-directory-title nowrap">
          Sections & Highlighted
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
    /* height: 180px; */
    /* background-color: #fdc141; */
    background-color: #ebe8e1;
  }
    
  .footer-mid-wrapper{
    margin: 5px auto;
    width: 1200px;
    /* height: 88%; */
    border: 2px solid red;
  }

  .footer-top-section-outer-wrapper{
    display: flex;
    height: 30px;
    justify-content: space-between;
    border: 2px solid blue;
  }
  
  .footer-social-media-outer-wrapper{
    height: 100%;
    min-width: 400px;
    box-sizing: border-box;
    border: 2px solid red;
  }

  .footer-copyright-statement-outer-wrapper{
    display: flex;
    box-sizing: border-box;
    border: 1px solid green;
  }
  .footer-copyright-statement-inner-wrapper{
    margin: auto 0;
    font-size: 13.5px;
  }

  .footer-directory-title{
    margin: 10px auto 5px 1rem;
    color: rgb(46,46,46);
    font-size: 16px;
    font-weight: bold;
    box-sizing: border-box;
    border: 1px solid white;
  }
  .footer-directory-links{
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    height: 80px;
    min-height: 60px;
    margin: 0 auto 5px 1rem;
    font-size: 14px;
    border: 1px solid green;
  }
  .footer-category-links-columns{
    margin: auto 1rem;
    border: 1px solid white;
  }

  .footer-grouped-links{
    display: flex;
    margin: 0.3rem 0;
    color: rgb(46,46,46);
    text-decoration: none;
    white-space: nowrap;
    border: 1px solid red;
  }

  .footer-links-seperator{
    height: 80%;
    margin: auto 0;
    box-sizing: border-box;
    border-left: 1px solid rgb(199,199,199);
  }

  /* utility */

  .nowrap{
    white-space: nowrap;
  }
</style>
