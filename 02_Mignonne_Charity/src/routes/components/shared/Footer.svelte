<div class="footer-wrapper">
  <!-- Contact Panel-->
  <div class="contact-top-panel-wrapper">
    <div class="contact-top-panel-main-section">
      <div class="contact-top-panel-main-section-text">
        Contact us
      </div>
      <div class="contact-top-panel-main-section-buttons">
        <a href="tel:4376006987" class="contact-buttons" id="button-phone">
          +1(437) 600-6987
        </a>
        <a href="mailto:contact@dieupeut.com" class="contact-buttons" id="button-email">
          contact@dieupeut.com
        </a>
      </div>
      <div class="buttons-grouped-social-media-wrapper">
        <div class="buttons-grouped-social-media">
          <!-- SOCIAL MEDIA BUTTONS -->
        </div>
      </div>
    </div>
  </div>

  <!-- Company Panel-->
  <div class="company-top-panel-wrapper">
  </div>
</div>

<style>
  .footer-wrapper{
    width: 100%;  
    border: 2px solid green;
  }
  
  .contact-top-panel-wrapper{
    @apply
      bg-indigo-600
    ;
    height: 380px;
    width: 100%;
    border: 2px solid red;
  }
  
  .company-top-panel-wrapper{
    @apply
      bg-stone-700
    ;
    height: 300px;
    width: 100%;
    border: 2px solid red;
  }
  
  .contact-top-panel-main-section{
    @apply
      flex
      flex-col
      justify-between
      items-center
      pt-12
    ;
    height: 230px;
    border: 2px solid yellow;
  }
  
  .contact-top-panel-main-section-text{
    @apply
      text-white
    ;
    font-size: 60px;
    border: 2px solid white;
  }
  
  .contact-top-panel-main-section-buttons{
    @apply
      flex
      flex-col
      justify-between
      font-bold
    ;
    width: 260px;
    height: 105px;
    border: 2px solid red;
  }

  .contact-buttons{
    @apply
      leading-[35px]
      bg-white
      rounded-full
      text-center
      text-indigo-500
    ;
    text-decoration: none;
    height: 36px;
    border: 2px solid green;
    font-size: 18px;
    font-family: Real, sans-serif;
  }
</style>
