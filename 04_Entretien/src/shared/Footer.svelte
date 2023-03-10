<script>
  import Logoyellow from './Logoyellow.svelte';

  let social_icons_sides = 24;
</script>

<div class="footer-outer-wrapper">
  <div class="footer-mid-wrapper">

    <div class="footer-top-section-outer-wrapper">
      <div class="footer-title-outer-wrapper">
        <Logoyellow width={"13rem"}/> 
      </div>
      <div class="footer-social-media-outer-wrapper">
        <div class="footer-social-media-inner-wrapper">
          <a href="" 
            class="footer-social-media-link" id="footer-social-media-link-youtube">
            <svg class="social-icon-svgs" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 {social_icons_sides} {social_icons_sides}" width="{social_icons_sides}px" height="{social_icons_sides}px">    <path d="M 5.6796875 2 L 7.1582031 7.34375 L 7.1582031 9.90625 L 8.4394531 9.90625 L 8.4394531 7.34375 L 9.9375 2 L 8.6464844 2 L 8.109375 4.4316406 C 7.958375 5.1416406 7.8623594 5.6462656 7.8183594 5.9472656 L 7.7792969 5.9472656 C 7.7162969 5.5262656 7.6202813 5.017875 7.4882812 4.421875 L 6.9707031 2 L 5.6796875 2 z M 11.431641 4.0175781 C 10.997641 4.0175781 10.647859 4.1023906 10.380859 4.2753906 C 10.113859 4.4473906 9.9170156 4.7226094 9.7910156 5.0996094 C 9.6660156 5.4766094 9.6035156 5.9756563 9.6035156 6.5976562 L 9.6035156 7.4375 C 9.6035156 8.0525 9.6575781 8.5450156 9.7675781 8.9160156 C 9.8775781 9.2870156 10.063219 9.5603281 10.324219 9.7363281 C 10.585219 9.9123281 10.944344 10 11.402344 10 C 11.848344 10 12.202891 9.9132344 12.462891 9.7402344 C 12.722891 9.5672344 12.911344 9.295875 13.027344 8.921875 C 13.143344 8.547875 13.201172 8.0535 13.201172 7.4375 L 13.201172 6.5976562 C 13.201172 5.9766562 13.142437 5.4794687 13.023438 5.1054688 C 12.904438 4.7324687 12.715031 4.45725 12.457031 4.28125 C 12.199031 4.10525 11.858641 4.0175781 11.431641 4.0175781 z M 13.878906 4.1308594 L 13.878906 8.4453125 C 13.878906 8.9793125 13.968391 9.3720469 14.150391 9.6230469 C 14.332391 9.8740469 14.615047 10 14.998047 10 C 15.550047 10 15.966187 9.7332188 16.242188 9.1992188 L 16.269531 9.1992188 L 16.382812 9.90625 L 17.400391 9.90625 L 17.400391 4.1308594 L 16.101562 4.1308594 L 16.101562 8.71875 C 16.051563 8.82575 15.975094 8.9134219 15.871094 8.9824219 C 15.767094 9.0524219 15.659875 9.0859375 15.546875 9.0859375 C 15.414875 9.0859375 15.320672 9.031875 15.263672 8.921875 C 15.206672 8.811875 15.177734 8.6271406 15.177734 8.3691406 L 15.177734 4.1308594 L 13.878906 4.1308594 z M 11.402344 4.9121094 C 11.584344 4.9121094 11.713156 5.0072187 11.785156 5.1992188 C 11.857156 5.3902187 11.892578 5.694375 11.892578 6.109375 L 11.892578 7.9082031 C 11.892578 8.3352031 11.857156 8.6440312 11.785156 8.8320312 C 11.713156 9.0200312 11.585297 9.1142344 11.404297 9.1152344 C 11.222297 9.1152344 11.096344 9.0200313 11.027344 8.8320312 C 10.957344 8.6440313 10.923828 8.3352031 10.923828 7.9082031 L 10.923828 6.109375 C 10.923828 5.695375 10.95925 5.3912188 11.03125 5.1992188 C 11.10325 5.0082187 11.226344 4.9121094 11.402344 4.9121094 z M 5 11 C 3.9 11 3 11.9 3 13 L 3 20 C 3 21.1 3.9 22 5 22 L 19 22 C 20.1 22 21 21.1 21 20 L 21 13 C 21 11.9 20.1 11 19 11 L 5 11 z M 12.048828 13 L 13.105469 13 L 13.105469 15.568359 L 13.113281 15.568359 C 13.208281 15.382359 13.344531 15.233141 13.519531 15.119141 C 13.694531 15.005141 13.883938 14.949219 14.085938 14.949219 C 14.345937 14.949219 14.549266 15.01825 14.697266 15.15625 C 14.845266 15.29425 14.953531 15.517219 15.019531 15.824219 C 15.085531 16.132219 15.117187 16.559469 15.117188 17.105469 L 15.117188 17.876953 L 15.119141 17.876953 C 15.119141 18.603953 15.030469 19.136516 14.855469 19.478516 C 14.680469 19.820516 14.408109 19.992188 14.037109 19.992188 C 13.830109 19.992188 13.642656 19.944609 13.472656 19.849609 C 13.302656 19.754609 13.174844 19.623984 13.089844 19.458984 L 13.066406 19.458984 L 12.955078 19.919922 L 12.048828 19.919922 L 12.048828 13 z M 5.4863281 13.246094 L 8.7382812 13.246094 L 8.7382812 14.130859 L 7.6484375 14.130859 L 7.6484375 19.919922 L 6.5761719 19.919922 L 6.5761719 14.130859 L 5.4863281 14.130859 L 5.4863281 13.246094 z M 17.097656 14.951172 C 17.473656 14.951172 17.762844 15.020203 17.964844 15.158203 C 18.165844 15.296203 18.307625 15.511734 18.390625 15.802734 C 18.472625 16.094734 18.513672 16.497719 18.513672 17.011719 L 18.513672 17.847656 L 16.677734 17.847656 L 16.677734 18.095703 C 16.677734 18.408703 16.686078 18.642828 16.705078 18.798828 C 16.724078 18.954828 16.762312 19.069625 16.820312 19.140625 C 16.878312 19.212625 16.967844 19.248047 17.089844 19.248047 C 17.253844 19.248047 17.366734 19.183641 17.427734 19.056641 C 17.488734 18.929641 17.522344 18.718875 17.527344 18.421875 L 18.474609 18.476562 C 18.479609 18.518563 18.482422 18.578344 18.482422 18.652344 C 18.482422 19.103344 18.358328 19.440109 18.111328 19.662109 C 17.864328 19.885109 17.517406 19.996094 17.066406 19.996094 C 16.525406 19.996094 16.145734 19.825328 15.927734 19.486328 C 15.709734 19.147328 15.601562 18.623109 15.601562 17.912109 L 15.601562 17.060547 C 15.601562 16.328547 15.714453 15.794031 15.939453 15.457031 C 16.164453 15.120031 16.551656 14.951172 17.097656 14.951172 z M 8.4101562 15.044922 L 9.5097656 15.044922 L 9.5097656 18.625 C 9.5097656 18.842 9.5340312 18.997844 9.5820312 19.089844 C 9.6300313 19.182844 9.7083125 19.228516 9.8203125 19.228516 C 9.9153125 19.228516 10.008703 19.199625 10.095703 19.140625 C 10.183703 19.082625 10.246062 19.007969 10.289062 18.917969 L 10.289062 15.044922 L 11.388672 15.044922 L 11.388672 19.919922 L 11.386719 19.919922 L 10.527344 19.919922 L 10.433594 19.322266 L 10.408203 19.322266 C 10.174203 19.774266 9.8244219 20 9.3574219 20 C 9.0334219 20 8.7965781 19.893641 8.6425781 19.681641 C 8.4885781 19.469641 8.4101563 19.1375 8.4101562 18.6875 L 8.4101562 15.044922 z M 17.074219 15.693359 C 16.957219 15.693359 16.870453 15.728875 16.814453 15.796875 C 16.758453 15.865875 16.721125 15.978766 16.703125 16.134766 C 16.684125 16.290766 16.675781 16.527703 16.675781 16.845703 L 16.675781 17.195312 L 17.478516 17.195312 L 17.478516 16.845703 C 17.478516 16.532703 17.468266 16.296766 17.447266 16.134766 C 17.427266 15.972766 17.388031 15.858969 17.332031 15.792969 C 17.276031 15.726969 17.191219 15.693359 17.074219 15.693359 z M 13.591797 15.728516 C 13.485797 15.728516 13.388828 15.770469 13.298828 15.855469 C 13.208828 15.940469 13.144422 16.049641 13.107422 16.181641 L 13.107422 18.949219 C 13.155422 19.034219 13.217922 19.097625 13.294922 19.140625 C 13.371922 19.182625 13.453922 19.205078 13.544922 19.205078 C 13.661922 19.205078 13.753266 19.163125 13.822266 19.078125 C 13.891266 18.993125 13.941703 18.850437 13.970703 18.648438 C 13.999703 18.447437 14.013672 18.1675 14.013672 17.8125 L 14.013672 17.185547 C 14.013672 16.803547 14.002516 16.509734 13.978516 16.302734 C 13.954516 16.095734 13.911562 15.946375 13.851562 15.859375 C 13.790563 15.772375 13.703797 15.728516 13.591797 15.728516 z"/>
            </svg>
          </a>
          <a href=""
            class="footer-social-media-link" id="footer-social-media-link-tiktok">
            <svg class="social-icon-svgs" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 {social_icons_sides} {social_icons_sides}" width="{social_icons_sides}px" height="{social_icons_sides}px"><path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"/>
            </svg>
          </a>
          <a href=""
            class="footer-social-media-link" id="footer-social-media-link-instagram">
            <svg class="social-icon-svgs" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 {social_icons_sides} {social_icons_sides}" width="{social_icons_sides}px" height="{social_icons_sides}px">    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
            </svg>
          </a>
          <a href="" 
            class="footer-social-media-link" id="footer-social-media-link-facebook">
            <svg class="social-icon-svgs" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 {social_icons_sides} {social_icons_sides}" width="{social_icons_sides}px" height="{social_icons_sides}px">    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"/>
            </svg>
          </a>
          <a href="" 
            class="footer-social-media-link" id="footer-social-media-link-twitter">
            <svg class="social-icon-svgs" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 {social_icons_sides} {social_icons_sides}" width="{social_icons_sides}px" height="{social_icons_sides}px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/>
            </svg>
          </a>
          <a href="" 
            class="footer-social-media-link" id="footer-social-media-link-whatsapp">
            <svg class="social-icon-svgs" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 {social_icons_sides} {social_icons_sides}" width="{social_icons_sides}px" height="{social_icons_sides}px">    <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="footer-l19579-outer-wrapper">
        <div class="footer-l19579-inner-wrapper nowrap">
          <a href="https://www.l19579.com/" class="l19579-link no-text-decoration">
            website and infrastructure by <span class="l19579-logo-wrapper"><img class="l19579-logo" src="https://avatars.githubusercontent.com/u/98875234?v=4"/></span>
            <b>L19579 Ltd.</b>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-mid-section-outer-wrapper">

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
            
            <div class="footer-links-separator" />

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
            
            <div class="footer-links-separator" />

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
            
            <div class="footer-links-separator" />

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

      <div class="footer-company-outer-wrapper">
        <div class="footer-company-inner-wrapper">
          <div class="footer-company-title nowrap">
            About Us
          </div>
          <div class="footer-company-links">

            <div  class="footer-company-links-columns" id="footer-company-link-column-1">
              <a href="" class="footer-grouped-links" id="footer-company-link-column-1-link-1">
                Another Link
              </a>
              <a href="" class="footer-grouped-links" id="footer-company-link-column-1-link-2">
                Another Link
              </a>
            </div>

              <div class="footer-links-separator" />

            <div class="footer-company-links-columns" d="footer-company-link-column-2">
              <a href="" class="footer-grouped-links" id="footer-company-link-column-2-link-1">
                Another Link
              </a>
              <a href="" class="footer-grouped-links" id="footer-company-link-column-2-link-2">
                Another Link
              </a>
            </div>

              <div class="footer-links-separator" />

            <div class="footer-company-links-columns" d="footer-company-link-column-3">
              <a href="" class="footer-grouped-links" id="footer-company-link-column-3-link-1">
                Another Link
              </a>
              <a href="" class="footer-grouped-links" id="footer-company-link-column-3-link-2">
                Another Link
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>

    <div class="footer-bottom-section-outer-wrapper">
      <div class="footer-bottom-section-inner-wrapper nowrap">
        <a href="" class="bottom-section-links nowrap">&copy; 2023 Entretien 2000</a>
        <a href="" class="bottom-section-links nowrap">Terms of Use</a>
        <a href="" class="bottom-section-links nowrap">Privacy Policy</a>
      </div>
    </div>

  </div>
</div>


<style>

  /* utility */

  .nowrap{
    white-space: nowrap;
  }

  .no-text-decoration{
    text-decoration: none;
  }
  .footer-outer-wrapper{
    display: flex;
    border-top: 2px solid #ffc274;
    margin-top: 30px;
    width: 100%;
    padding-top: 10px;
    /* height: 180px; */
    /* background-color: #fdc141; */
    /* background-color: #ebe8e1;
    background-color: #c1bcb3;
    background-color: #eae7e0; tad too dark
    background-color: #e1ddd3; lightest*/
    background-color: #e5e1d8;
  }
    
  .footer-mid-wrapper{
    margin: 5px auto;
    width: 1150px;
    /* border: 2px solid red; */
  }

  .footer-top-section-outer-wrapper{
    display: flex;
    margin-bottom: 7px;
    height: 30px;
    justify-content: space-between;
    /* border: 2px solid blue; */
  }

  .footer-title-outer-wrapper{
    min-width: 260px;
    /* border: 1px solid green; */
  }
  
  .footer-social-media-outer-wrapper{
    display: flex;
    height: 100%;
    min-width: 340px;
    box-sizing: border-box;
    /* border: 2px solid red; */
  }
  .footer-social-media-inner-wrapper{
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    display: flex;
  }
  .footer-social-media-link{
    display: flex;
    margin: auto 0;
    width: 24px;
    height: 24px;
    background-color: #ebe8e1;
    border-radius: 90px;
    border: 1px solid rgb(78,77,76);
  }  
  .footer-social-media-link:hover{
    background-color: rgb(255,203,86);
    border-color: black;
  }
  .social-icon-svgs{
    margin: 10% 14% auto auto;
    width: 70%;
    height: 70%;
    /* fill: #2E2E2E; */
  }
  
  .footer-l19579-outer-wrapper{
    min-width: 260px;
    display: flex;
    box-sizing: border-box;
    /* border: 1px solid green; */
  }
  .footer-l19579-inner-wrapper{
    margin: auto 0;
  }
  .l19579-link{
    display: flex;
    color: rgb(46,46,46);
    font-size: 13.5px;
  }

  .l19579-logo-wrapper{
    display: flex;
    width: 15px;
    height: 15px;
    border-radius: 90px;
    /* border: 1px solid black; */
    overflow: hidden;
    /* transform: scale(130%); */
    animation: spin 5s infinite linear;
    margin: 0 0.26rem 0 0.32rem;
  }

  .l19579-logo{
    height: 20px;
    width: auto;
  }
  
  @keyframes spin{
    from{
      transform: scale(130%) rotate(0deg) /* eh scale is an issue */
    } to {
      transform: scale(130%) rotate(359deg) 
    }
  }
  
  .footer-mid-section-outer-wrapper{
    display: flex;
    width: 98%;
    margin: 0 auto;
    justify-content: space-between;
    /* border: 1px solid red; */
  }

  .footer-directory-outer-wrapper{
    width: 100%;
    max-width: 600px;
    /* border: 1px solid black; */
  }

  .footer-directory-title, .footer-company-title{
    margin: 10px auto 1px 1rem;
    color: rgb(46,46,46);
    font-size: 16px;
    font-weight: bold;
    box-sizing: border-box;
    /* border: 1px solid white; */
  }
  .footer-directory-links, .footer-company-links{
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    height: 80px;
    min-height: 60px;
    margin: 0 auto 5px 1rem;
    padding: 0 1rem;
    font-size: 14px;
    /* border: 1px solid blue;*/
    /* border-top: 1px solid #2E2E2E; */
  }
  .footer-category-links-columns, .footer-company-links-columns{
    margin: auto 0;
    /* border: 1px solid white; */
  }
  #footer-category-links-column-4{ /* sorta bs setup TODO */
    margin-top: 0.27rem;
  }
  .footer-grouped-links{
    display: flex;
    margin: 0.3rem 0;
    color: rgb(46,46,46);
    text-decoration: none;
    white-space: nowrap;

    /* border: 1px solid red; */
  }
  .footer-grouped-links:hover{
    color: black;
  }
  .footer-links-separator{
    height: 80%;
    margin: auto 0;
    box-sizing: border-box;
    border-left: 1px solid rgb(199,199,199);
  }

  .footer-company-outer-wrapper{
    width: 360px;
    /* border: 1px solid red; */
  }

  .footer-company-links{
    margin-top: -5px; /* band aid for alignment TODO */
    height: 10px;
    max-width: 300px;
    /* border: 1px solid blue; */
  }

  .footer-bottom-section-outer-wrapper{
    display: flex;
    border-top: 1px solid #2E2E2E;
  }

  .footer-bottom-section-inner-wrapper{
    margin: 6px auto 0 auto;
    font-size: 13px;
    /* border: 1px solid red; */
  }

  .bottom-section-links{
    margin: 0 0.2rem;
    white-space: nowrap;
    color: rgb(46,46,46);
    text-decoration: none;
  }
  .bottom-section-links:hover{
    color: black;
  }
</style>
