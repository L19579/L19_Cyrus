<script>
  import { writable } from 'svelte/store'

  import Navbar from './../shared/Navbar.svelte'
  import Footer from './../shared/Footer.svelte'
  import Todo from './../shared/Todo.svelte'

  let payment_form = writable({
    name: "",
    email: "",
    amount: 0,
    card_number: "10",
    exp: "",
    cvc: "",
    country: "",
    postal_code: ""
  });

  function into_readable(mod_id){
    console.log("DEBUG - into_readable: start");
    switch(mod_id){
      case 0: // card_number
        switch(payment_form.card_number.length){
          case(4):
          case(9):
          case(14):
            payment_form.card_number = payment_form.card_number + " ";
            break;
        };
        break;
      case 1:  // exp
        switch(payment_form.exp.length){
          case(2):
            payment_form.exp = payment_form.exp + " / "; 
            break;
        }
        break;
      case 2:  // postal_code
        switch(payment_form.country){
          case "canada":
            if (payment_form.postal_code.length == 3){
              payment_form.postal_code = payment_form.postal_code + " ";
            };
          case "haiti":
            if (payment_form.postal_code.length == 2){
              payment_form.postal_code = payment_form.postal_code + " ";
            };
            break;
          default:
            break;
        }
        break;
    };
  }  

  function card_number_remove_spaces(){
    // TODO  
  }

  let colors = [
    'rgba(66,245,185,1)',
    'rgba(50,168,129,1)',
    'rgba(73,234,242,1)',
    'rgba(46,152,158,1)',
    'rgba(235,89,128,1)',
    'rgba(179,61,92,1)'
  ];

  let first_option_color = colors[0];
  let second_option_color = colors[2];
  let third_option_color = colors[4];

  function handle_click_release(is_down, option_id){
    console.log("got a click/release");
    let donation_amount = 0;
    switch(option_id){
      case 1:
        donation_amount = 5;
        first_option_color = !is_down ? colors[0] : colors[1]; 
        break;
      case 2:
        donation_amount = 10;
        second_option_color = !is_down ? colors[2] : colors[3]; 
        break;
      case 3:
        donation_amount = 15;
        third_option_color = !is_down ? colors[4] : colors[5]; 
        break;
    }
    payment_form.amount = is_down ? donation_amount : payment_form.amount; 
    
    console.log("DEBUG: variables: " + is_down + " " + option_id + " " 
        + donation_amount + " " + payment_form.amount + ".");
  };
  
  function test_country(){
    console.log("Country: " + payment_form.country);
  }
  
  function handleRelease(){ // Test
    test_bg = 'white'
  }
  
  let postal_code_placeholder = "A1A 2B2";
  let postal_code_max_length = 7;

  function format_postal_code(){
    payment_form.postal_code = ""; 
    switch(payment_form.country){
      case "canada":
        postal_code_max_length = 7;
        postal_code_placeholder = "A1A 1A1";
        break;
      case "dominican republic":
        postal_code_max_length = 5;
        postal_code_placeholder = "12345";
        break;
      case "france":
        postal_code_max_length = 5;
        postal_code_placeholder = "12345";
        break;
      case "haiti":
        postal_code_max_length = 7;
        postal_code_placeholder = "HT 1234";
        break;
      case "united states":
        postal_code_max_length = 5;
        postal_code_placeholder = "12345";
        break;
    }; 
  }

</script>

<Navbar current_nav_page = 'donate'/>

  <div class="donate-outer-wrapper">
    <div class="donate-inner-wrapper">

      <div class="donate-thank-you-panel">
        <div id="group-thank-you-subsection">

          <div id="amount-manual-wrapper">
            <input class="group-full-input-fields" id="amount-manual-field" type="text" 
              placeholder="$ 0" bind:value={payment_form.amount} />
            <br />
            <div id="amount-manual-field-text"> Amount </div>
          </div> 

          <div class="amount-options-wrapper">
           
            <div class="group-amount-options" id="first-amount-option"
              on:mousedown={() => handle_click_release(1, 1)} on:mouseup={() => handle_click_release(0, 1)} 
              style="--first-option-color: {first_option_color}">  
              <div class="group-amount-option-text" id="first-amount-option-text">
                $5
              </div>
            </div>  
            <div class="group-amount-options" id="second-amount-option" 
              on:mousedown={() => handle_click_release(1, 2)} on:mouseup={() => handle_click_release(0, 2)} 
              style="--second-option-color: {second_option_color}">  
              <div class="group-amount-option-text" id="second-amount-option-text">
                $10
              </div>
            </div>  
            <div class="group-amount-options" id="third-amount-option"
              on:mousedown={() => handle_click_release(1, 3)} on:mouseup={() => handle_click_release(0, 3)} 
              style="--third-option-color: {third_option_color}">  
              <div class="group-amount-option-text" id="third-amount-option-text">
                $15
              </div>
            </div>  

            </div>
          <div>
          </div>
        </div>
      </div>

      <div class="donate-payment-outer-wrapper">
        <div class="donate-payment-mid-wrapper">
          <div class="donate-payment-inner-wrapper">

            <div class="ext-button-form-subsection">
              <a href="" id="paypal-donate-button">
                <img id="paypal-button-image" src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg" />
              </a>
            </div>

            <div class="ext-button-form-subsection">
              <a href="" id="gpay-donate-button">
                <img id="gpay-button-image" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" />
              </a>
            </div>

            <div id="payment-separator-wrapper">
              <div class="payment-separator-group-sides" id="payment-separator-start">
                <hr>
              </div>
              <div id="payment-separator-text">
                Or use a card
              </div>
              <div class="payment-separator-group-sides" id="payment-separator-end">
                <hr>
              </div>
            </div>

            <div class="group-form-subsection">
              <label>Email</label>
              <div class="group-form-input-wrapper">
                <input class="group-full-input-fields" type="text" id="email-field"
                  placeholder="email@example.com" bind:value={$payment_form.email} />
                <br />
              </div>
            </div>

            <div class="group-form-subsection">
              <label>Card Information</label>
              <div class="group-form-input-wrapper" id="card-form-input-wrapper">
                <input class="group-full-input-fields" id="card-number-field" type="text"
                  bind:value={payment_form.card_number} on:input={() => into_readable(0)}
                  placeholder="1234 1234 1234 1234" maxlength="19"/>
                <input class="group-full-input-fields" id="card-exp-field" type="text"
                  on:input={() => into_readable(1)} bind:value={payment_form.exp} 
                  placeholder="MM / YY" maxlength="7"/>
                <input class="group-full-input-fields" id="card-cvc-field" type="text"
                  bind:value={payment_form.cvc} placeholder="CVC" maxlength="3" />
              </div>
            </div>

            <div class="group-form-subsection">
              <label>Name on card</label>
              <div class="group-form-input-wrapper" id="form-name-wrapper">
                <input class="group-full-input-fields" id="name-field" type="text"
                  placeholder="Josaphine Doe" bind:value={$payment_form.name} />
                <br />
              </div>
            </div>

            <div class="group-form-subsection">
              <label> Country / Region </label>
              <div class="group-form-input-wrapper" id="region-form-input-wrapper">
                <select class="group-full-input-fields" id="region-country-field" type="text"
                  bind:value={payment_form.country} on:change={format_postal_code}> 
                  <option value="canada" selected="selected">Canada</option>
                  <option value="dominican republic" selected="selected">Dominican Republic</option>
                  <option value="france" selected="selected">France</option>
                  <option value="haiti" selected="selected">Haiti</option>
                  <option value="united states" selected="selected">United States</option>
                </select>
                <input class="group-full-input-fields" id="region-postal-code-field" type="text"
                  bind:value={payment_form.postal_code} on:input={() => into_readable(2)}
                  placeholder={postal_code_placeholder} maxlength={postal_code_max_length} />
              </div>
            </div>

            <div class="group-form-subsection" id="button-form-subsection">
              <div id="form-donate-button">
                Donate
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

<Footer />

<style>
  .donate-outer-wrapper{
    @apply
      flex
      xsm:pt-[45px]
      sm:pt-[45px]
      md:pt-[110px]
      xl:pt-[110px]
      xl:min-h-[410px]
      justify-center
    ;
    width: 100vw;
    background: linear-gradient(to right, rgba(222,220,181,1) 50%, rgba(242,241,240,1) 50%);
    /* border: 2px solid yellow; */
  }

  .donate-inner-wrapper{
    margin-top: 0.3rem;
    height: 1000px;
    width: 1285px;
    display: grid;
    grid-template-columns: repeat(5, [col] 20%);
    grid-template-rows: 100%;

    /* border: 2px red solid; */
  }

  /* ---------------- Thank You Section ---------------- */

  .test{ /* Delete */
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    font-size: 50px;
    background-color: var(--theme-color);
    border: 2px red solid;
  }

  .donate-thank-you-panel{
    @apply
      flex
      py-[3rem]
      justify-end
    ;
    grid-column: 1 / span 2;
    background-image: linear-gradient(to right, rgba(222,220,181,1), rgba(230, 229, 218,1));
    border: 4px solid red;
    /* background-color: rgba(186, 222, 215, 1); */
    /* background-color: rgba(222, 220, 186, 1); */
  }

  #group-thank-you-subsection{
    display: block;
    width: 100%;
    padding: 1rem 0px;
    border: 2px solid blue;
  }

  #amount-manual-wrapper{
    margin-top: 2rem;
    justify-content: center;
    display: block;
    text-align: center;
    width: 100%;
    height: 100px;
    box-sizing: border-box;

    /* border: 4px solid blue; */
  }

  #amount-manual-field{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Times New Roman';
    height: 4rem;
    border: 0px;
    width: 80%;
    border-bottom: 3px solid black;
    background-color: rgba(0,0,0,0);
  }

  #amount-manual-field-text{
    margin-top: 0.4rem;
    font-size: 1.7rem;
    font-weight: bold;
  }

  .amount-options-wrapper{
    margin-top: 1rem;
    justify-content: center;
    text-align: center;
    width: 100%;
    box-sizing: border-box;

    border: 4px solid purple;
  }

  .group-amount-options{
    @apply
      flex /* vertical center */
      flex-col
      justify-center
    ;
    cursor: pointer;
    margin: 2.6rem 0rem;
    height: 120px;
    width: 100%;
    box-shadow: 0;
    transition: box-shadow 100ms;
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid green;
  }

  .group-amount-options:hover{
    box-shadow: 0 0 4px black;
  }

  .group-amount-option-text{
    font-size: 50px;
    font-weight: bold;
   
    /* block text selection across browsers */
    -moz-user-select: none;
    -ktml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  #first-amount-option{
    background-color: var(--first-option-color); 
  }

  #second-amount-option{
    background-color: var(--second-option-color);
  }

  #third-amount-option{
    background-color: var(--third-option-color);
  }

  /* ---------------- Donate Form Section ---------------- */
  .donate-payment-outer-wrapper{
    @apply
      flex
      justify-start
      py-[1rem]
    ;
    box-shadow: -4px 0 4px rgba(121,121,122,1);
    grid-column: 3 / span 3;
    background-color: rgba(242, 241, 240, 1);
    /* border: 4px solid blue; <--- might need */
  }

  .donate-payment-mid-wrapper{
    @apply
      flex
      justify-center
      py-[2rem]
    ;
    width: 100%;
    border: 2px solid green;
  }

  .donate-payment-inner-wrapper{
    position: relative;
    width: 80%;
    border: 4px solid green;
  }
  /* ---------------- Form Group ---------------- */
  .group-form-subsection{
    @apply
      flex
      flex-col
    ;
    padding: 1rem 0px;
    border: 2px solid blue;
  }

  .group-form-input-wrapper{
    /* margin-top: 2rem; margin-bottom: 1rem; */
    justify-content: center;
    display: block;
    text-align: center;
    width: 100%;

    border: 2px solid purple;
  }

  .group-full-input-fields{
    position: relative;
    height: 2.5rem;
    width: 100%;
    font-size: 1.03rem;
    padding: 0px 2.1rem;
    box-sizing: border-box;
  }

  .group-half-input-fields{
    box-sizing: border-box;
    height: 2.5rem;
    width: 48%;
  }

  label{
    padding: 0px 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    white-space: nowrap;
    box-sizing: border-box;
    border: 2px solid red;
  }

  input:focus{
    outline: none;
  }

  /* ------- Quick Payment Buttons ------- */
  .ext-button-form-subsection{
    @apply
      flex
      flex-col
    ;
    padding: 0.5rem 0px;
    border: 2px solid blue;
  }

  #paypal-donate-button{ /* some in efficiencies w/ wrapper */
    padding: 15px 0px;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    /* background-color: rgba(7,12,31,1); */
    /* background-color: rgba(255,255,255,1); */
    /* background-color: rgba(4,6,18,1); */
    background-color: rgba(184,193,224,1);
    width: 100%;
    height: 25px;
    border-radius: 10px;
    border: 2px solid rgba(21,56,191,1);

    box-shadow: 0;
    transition: box-shadow 100ms;
  }

  #paypal-donate-button:hover{
    box-shadow: 0 0 4px rgba(21,56,191,1);
  }

  #paypal-button-image{
    position: relative;
    height: 110%;
  }

  #gpay-donate-button{
    padding: 15px 0px;
    text-align: center;
    color: white;
    font-size: 21px;
    font-weight: bold;
    background-color: rgba(15,15,15,1);
    width: 100%;
    height: 25px;
    border-radius: 10px;
    border: 2px solid red;

    box-shadow: 0;
    transition: box-shadow 100ms;
  }

  #gpay-donate-button:hover{
    box-shadow: 0 0 4px black;
  }

  #gpay-button-image{
    position: relative;
    height: 110%;
  }

  /* ---------------- Form ---------------- */

  #form-subsection-amount{
    max-width: 400px;
    margin-bottom: 3rem;
  }

  #email-field{
    border-radius: 10px;
  }

  #card-form-input-wrapper{
    display: grid;
    gap: 0px;
    grid-template-columns: repeat(2, [col] 50%);
    grid-template-rows: repeat(2, [row] 50%);
  }

  #card-number-field{
    grid-column: col 1 / span 2;
    grid-row: row 1 / span 1;
    border-radius: 10px 10px 0px 0px;
  }

  #card-exp-field{
    grid-column: col 1 / span 1;
    grid-row: row 2 / span 1;
    border-radius: 0px 0px 0px 10px;
  }

  #card-cvc-field{
    grid-column: col 2 / span 1;
    grid-row: row 2 / span 1;
    border-radius: 0px 0px 10px 0px;
  }

  #name-field{
    border-radius: 10px;
  }

  #region-form-input-wrapper{
    display: grid;
    gap: 0px;
    grid-template-columns: repeat(2, [col] 50%);
  }

  #region-country-field{
    background-color: white;
    border-radius: 10px 0px 0px 10px;
    grid-column: col 1 / span 1;
    border: 2px solid black;
  }

  #region-country-field:focus{
    outline: none; 
   /* use shadow black in future */
  }

  #region-postal-code-field{
    text-transform: uppercase;
    border-radius: 0px 10px 10px 0px;
    grid-column: col 2 / span 1;
  }

  #form-donate-button{
    padding: 15px 0px;
    text-align: center;
    color: white;
    font-size: 21px;
    font-weight: bold;
    background-color: black;
    width: 100%;
    border-radius: 10px;
    border: 2px solid red;
  }

  #donate-button:hover{

  }

  #payment-separator-wrapper{
    width: 100%;
    height: 40px;
    display: grid;
    margin: 0.5rem 0;
    grid-template-columns: repeat(8, [col] 12.5%);
    grid-template-rows: 100%;

    border: 2px red solid;
  }

  hr{
    width: 100%;
  }

  .payment-separator-group-sides{
    @apply
      flex
      flex-col
      justify-center
    ;
  }
  #payment-separator-start{
    grid-column: col 1 / span 3;
  }

  #payment-separator-text{
    @apply
      flex
      my-[auto]
      justify-center
    ;
    white-space: nowrap;
    grid-column: col 4 / span 2;
    border: 2px black black;
  }

  #payment-separator-end{
    grid-column: col 6 / span 3;
  }

</style>
