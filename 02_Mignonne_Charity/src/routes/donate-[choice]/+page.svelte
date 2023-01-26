<svelte:head>
  <title>
    Thank You!
  </title>
</svelte:head>

<script>
  // lots of redundancies under style tag; clean up.

  import Navbar from './../shared/Navbar.svelte'; 
  import Footer from './../shared/Footer.svelte';
  import Todo from './../shared/Todo.svelte'; 
  
  import { donation_choice } from './+page.js';
  let current_donate_page = remove_slash_ws(donation_choice);

  let payment_form = {
    name: "",
    email: "",
    amount: 0,
    card_number: "",
    exp: "",
    cvc: "",
    country: "canada",
    postal_code: ""
  };

  let formatted_payment_form = {
    name: "",
    email: "",
    address: {
      postal_code: "",
      country: "",
    },
    card: {
      amount: 0,
      number: "",
      cvc: "",
      exp_month: 0,
      exp_year: 0,
    },
  };

  function show_amount(){
    console.log("DEBUG - show_me_amount(): non formatted: " + payment_form.amount);
    console.log("DEBUG - show_me_amount(): formatted: " + formatted_payment_form.card.amount);
  }
  
  function clear_forms(){
    payment_form = {
      name: "",
      email: "",
      amount: 0,
      card_number: "",
      exp: "",
      cvc: "",
      country: "canada",
      postal_code: ""
    };

    formatted_payment_form = {
      name: "",
      email: "",
      address: {
        postal_code: "",
        country: "",
      },
      card: {
        amount: 0,
        number: "",
        cvc: "",
        exp_month: 0,
        exp_year: 0,
      },
    };
  }
  // ----------------------------------------- Thank You Section 

  let colors = [
    'rgba(66,245,185,1)',
    'rgba(50,168,129,1)',
    'rgba(73,234,242,1)',
    'rgba(46,152,158,1)',
    'rgba(235,89,128,1)',
    'rgba(179,61,92,1)',
    'rgba(10,10,10,1)',
    'rgba(0,0,0,1)'
  ];

  let first_option_amount = 10;
  let second_option_amount = 30;
  let third_option_amount = 50;

  let first_option_color = colors[0];
  let second_option_color = colors[2];
  let third_option_color = colors[4];

  let donate_button_color = colors[6];
  let donate_button_text = "Donate";
  let donate_button_cursor = "pointer";
  let donate_button_loading_gif = 0;

  function handle_click_release(is_down, option_id){
    console.log("got a click/release");
    let donation_amount = 0;
    switch(option_id){
      case 1:
        donation_amount = first_option_amount;
        first_option_color = !is_down ? colors[0] : colors[1]; 
        break;
      case 2:
        donation_amount = second_option_amount;
        second_option_color = !is_down ? colors[2] : colors[3]; 
        break;
      case 3:
        donation_amount = third_option_amount;
        third_option_color = !is_down ? colors[4] : colors[5]; 
        break;
      case 4:
        // can improve; TODO.
        donation_amount = payment_form.amount;
        donate_button_color = !is_down ? colors[6] : colors[7]; 
        break;
    };
    payment_form.amount = is_down ? donation_amount : payment_form.amount; 
    
    console.log("DEBUG: variables: " + is_down + " " + option_id + " " 
        + donation_amount + " " + payment_form.amount + ".");
  };
  
  function test_country(){
    console.log("Country: " + payment_form.country);
  }
  
  // ----------------------------------------- Form Make Pretty

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
            break;
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

  // ----------------------------------------- Form Postal Code

  let postal_code_placeholder = "A1A 1B1";
  let postal_code_max_length = 7;
  let postal_input_mode = "text";

  function format_postal_code(){
    payment_form.postal_code = ""; 
    switch(payment_form.country){
      case "canada":
        postal_code_max_length = 7;
        postal_code_placeholder = "A1A 1B1";
        postal_input_mode = "text";
        break;
      case "dominican republic":
        postal_code_max_length = 5;
        postal_code_placeholder = "12345";
        postal_input_mode = "numeric";
        break;
      case "france":
        postal_code_max_length = 5;
        postal_code_placeholder = "12345";
        postal_input_mode = "numeric";
        break;
      case "haiti":
        postal_code_max_length = 7;
        postal_code_placeholder = "HT 1234";
        postal_input_mode = "text";
        break;
      case "united states":
        postal_code_max_length = 5;
        postal_code_placeholder = "12345";
        postal_input_mode = "numeric";
        break;
    }; 
  }

  // ----------------------------------------- Form validation 
  
  let border_color_email = 'black';  
  let border_color_card_number = 'black';  
  let border_color_exp = 'black';  
  let border_color_cvc = 'black';  
  let border_color_name = 'black';  
  let border_color_postal_code = 'black';  

  let is_valid = {
    email: 1,
    card_number: 1,
    exp: 1,
    cvc: 1,
    name: 1,
    postal_code: 1
  };

  function remove_slash_ws(value){
    let new_value = value;
    new_value = new_value.replace(/\//g, ""); // remove slashes
    new_value = new_value.replace(/\s+/g, ""); // remove whitespace
    return new_value; 
  }

  function is_all_number(value){
    let temp_value = value; // maybe not req
    temp_value = remove_slash_ws(temp_value);
    let is_num = /^\d+$/.test(temp_value); // false if not [0-9] exclusively
    return is_num;
  }

  function is_valid_email_format(){
    let temp_email = payment_form.email;
    temp_email = temp_email.toLowerCase();

    if ( temp_email.length < 6 
      || !temp_email.includes("@") 
      || !temp_email.includes(".")){
      return 0; 
    }
    // checking shortest possible email: a@b.cd
    if ((temp_email.indexOf(".") - temp_email.indexOf("@")) < 2
      && (temp_email.length - temp_email.indexOf(".")) < 2) {
      return 0;
    };
    formatted_payment_form.email = temp_email;
    return 1; 
  }

  function is_valid_postal_code_format(){
    let temp_postal_code = remove_slash_ws(payment_form.postal_code);
    temp_postal_code = temp_postal_code.toLowerCase();
    
    console.log("temp_postal_code: " + temp_postal_code);
    switch(payment_form.country){
      case "canada": 
        if (temp_postal_code.length != 6){
          return 0;
        };    
        if (temp_postal_code.length != 6){
          return 0;
        };
        for (let i = 0; i < 7; i++){
          let pos = temp_postal_code.charAt(i);
          switch(i){
            case 0: 
            case 2: 
            case 4:
              if (!pos.match(/[a-z]/i)){
                console.log(" "+ pos);
                return 0
              }; 
              break;
            case 1: 
            case 3: 
            case 5:
              if (!(/^\d+$/.test(pos))){ // eh TODO
                console.log(" "+ pos);
                return 0
              }; 
              break;
          };
        };
        break;
      case "haiti": 
        if (temp_postal_code.length != 6){
          return 0;
        };    
        console.log("DEBUG: Haiti Postal Code: " + temp_postal_code);
        for (let i = 0; i < 7; i++){
          let pos = temp_postal_code.charAt(i);
          switch(i){
            case 0: 
            case 1: 
              if (!pos.match(/[a-z]/i)){ // TODO not limited to HT
                return 0;
              }; 
              break;
            case 2: 
            case 3: 
            case 4:
            case 5:
              if (!(/^\d+$/.test(pos))){ // eh TODO
                console.log(" "+ pos);
                return 0;
              }; 
              break;
          };
        };
        break;
      case "dominican republic": 
      case "france": 
      case "united states": 
        if (temp_postal_code.length != 5){
          return 0;
        };
        if (!(/^\d+$/.test(temp_postal_code))){
          return 0;
        }
        break;
    }; 
    formatted_payment_form.address.postal_code = payment_form.postal_code.toLowerCase();
    formatted_payment_form.address.country = payment_form.country;
    return 1;
  }
  
  // boiler plate; TODO
  // Check Exp dates; TODO
  function validate_form(){ 
    let all_valid = 1;
    if (!is_valid_email_format()){
      border_color_email = 'red';
      is_valid.email = 0;
      all_valid = 0;
    } else {
      is_valid.email = 1;
      border_color_email = 'black';
    };
    if (!is_all_number(payment_form.card_number) 
      || payment_form.card_number.length != 19 ){
      border_color_card_number = 'red';
      is_valid.card_number = 0;
      all_valid = 0;
    } else {
      formatted_payment_form.card.number = payment_form.card_number;
      is_valid.card_number = 1;
      border_color_card_number = 'black';
    }; 
    if (!is_all_number(payment_form.exp) 
      || payment_form.exp.length != 7){
      border_color_exp = 'red';
      is_valid.exp = 0;
      all_valid = 0;
    } else {
      formatted_payment_form.card.exp_month = parseInt(payment_form.exp.substr(0,2));
      formatted_payment_form.card.exp_year = parseInt(payment_form.exp.substr(5,2));
      is_valid.exp = 1;
      border_color_exp = 'black';
    };
    if (!is_all_number(payment_form.cvc) 
      || payment_form.cvc.length != 3){
      border_color_cvc = 'red';
      is_valid.cvc = 0;  
      all_valid = 0;
    } else {
      formatted_payment_form.card.cvc = payment_form.cvc;
      is_valid.cvc = 1;  
      border_color_cvc = 'black';
    };
    if (payment_form.name < 2){ // weak sauce; is no last name a thing in the yr of our lord?
      border_color_name = 'red';
      is_valid.name = 0;
      all_valid = 0;
    } else {
      formatted_payment_form.name = payment_form.name; 
      is_valid.name = 1;
      border_color_name = 'black';
    };
    if (!is_valid_postal_code_format()){
      border_color_postal_code = 'red';
      is_valid.postal_code = 0;
      all_valid = 0;
    } else {
      is_valid.postal_code = 1;
      border_color_postal_code = 'black';
    };
   
    formatted_payment_form.card.amount = payment_form.amount * 100;
    console.log("DEBUG: all_valid: " + all_valid);
    console.log("DEBUG: Formatted form: " + JSON.stringify(formatted_payment_form));
    console.log("DEBUG: payment_form.amount: " + payment_form.amount);
    return all_valid;
  }

  // ----------------------------------------- Send To Backend 
  // ------------ Add timeout ; TODO  
  async function test_send_to_back_end(){
    if (!validate_form()){
      console.log("DEBUG: Form is invalid");
    } else if (formatted_payment_form.card.amount < 1){
      console.log("DEBUG: Missing Amount; Form valid");
      donate_button_text = "Please Insert Amount";
      donate_button_color = "rgb(224,56,56)";
    } else {
      console.log("DEBUG: We've got a valid form!!");
      console.log("DEBUG: Sending payment to back end");
      console.log("DEBUG: Sending payment to back end ; amount: " + formatted_payment_form.card.amount);
     
      donate_button_loading_gif = 1;
      const response = await fetch('http://127.0.0.1:8000/doyathingtwentyone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formatted_payment_form) 
      });

      donate_button_loading_gif = 0;
      if (response.ok){
        console.log("stripe submission successful");
        donate_button_text = "Success!";
        /* donate_button_cursor = "not-allowed"; */
        clear_forms();
      } else {
        console.log("stripe submission failed");
        donate_button_text = "Couldn't Process. Try again";
        /* donate_button_color = "rgb(242,70,70)"; */
        donate_button_color = "rgb(224,56,56)";
      };
    };
  }
</script>

  <Navbar current_nav_page = {current_donate_page}/>

  <div class="donate-outer-wrapper">
    <div class="donate-mid-wrapper">
      <div class="donate-mid-wrapper-cover">
        <div class="donate-inner-wrapper">

          <div class="donate-thank-you-panel">
            <div id="group-thank-you-subsection">

              <div id="amount-manual-wrapper">
                <input class="group-full-input-fields" id="amount-manual-field" type="text" maxlength="4" 
                  placeholder="$ 0" bind:value={payment_form.amount} on:change={() => show_amount()}/>
                <br />
                <div id="amount-manual-field-text"> 
                  {#if (donation_choice.length < 2)}
                    Amount 
                  {:else}
                    To {donation_choice}
                  {/if}

                </div>
              </div> 

              <div class="amount-options-outer-wrapper">
                <div class="amount-options-inner-wrapper">
                 
                  <div class="group-amount-options block-select" id="first-amount-option"
                    on:mousedown={() => handle_click_release(1, 1)} on:mouseup={() => handle_click_release(0, 1)} 
                    style="--first-option-color: {first_option_color}">  
                    <div class="group-amount-option-text" id="first-amount-option-text">
                      ${first_option_amount}
                    </div>
                  </div>  
                  <div class="group-amount-options block-select" id="second-amount-option" 
                    on:mousedown={() => handle_click_release(1, 2)} on:mouseup={() => handle_click_release(0, 2)} 
                    style="--second-option-color: {second_option_color}">  
                    <div class="group-amount-option-text" id="second-amount-option-text">
                      ${second_option_amount}
                    </div>
                  </div>  
                  <div class="group-amount-options block-select" id="third-amount-option"
                    on:mousedown={() => handle_click_release(1, 3)} on:mouseup={() => handle_click_release(0, 3)} 
                    style="--third-option-color: {third_option_color}">  
                    <div class="group-amount-option-text" id="third-amount-option-text">
                      ${third_option_amount}
                    </div>
                  </div>  

                </div>
              </div>
              <div class="thank-you-message-wrapper">
                <div id="thank-you-message-text">
                  Thank You!
                </div>
              </div>
            </div>
          </div>

          <div class="donate-payment-outer-wrapper">
            <div class="donate-payment-mid-wrapper">
              <div class="donate-payment-inner-wrapper">

                <div class="ext-button-form-subsection block-select">
                  <a href="" id="paypal-donate-button">
                    <img id="paypal-button-image" src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg" />
                  </a>
                </div>

                <div class="ext-button-form-subsection block-select">
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
                  <div class="group-form-label-wrapper">
                    <label class="form-label-title">Email</label>
                    {#if !is_valid.email}
                      <label class="form-label-invalid">Invalid</label>
                    {/if}
                  </div>
                  <div class="group-form-input-wrapper">
                    <input class="group-full-input-fields" type="text" id="email-field"
                      style="--email-field-border-color: {border_color_email}" maxlength="50"
                      placeholder="example@email.com" bind:value={payment_form.email} />
                    <br />
                  </div>
                </div>

                <div class="group-form-subsection">
                  <div class="group-form-label-wrapper">
                    <label class="form-label-title">Card Information</label>
                    {#if (!is_valid.card_number || !is_valid.exp || !is_valid.cvc)}
                      <label class="form-label-invalid">Invalid</label>
                    {/if}
                  </div>
                  <div class="group-form-input-wrapper" id="card-form-input-wrapper">
                    <input class="group-full-input-fields" id="card-number-field" type="text"
                      style="--card-number-field-border-color: {border_color_card_number}"
                      bind:value={payment_form.card_number} on:input={() => into_readable(0)}
                      placeholder="1234 1234 1234 1234" maxlength="19"/>
                    <input class="group-full-input-fields" id="card-exp-field" type="text"
                      style="--exp-field-border-color: {border_color_exp}"
                      on:input={() => into_readable(1)} bind:value={payment_form.exp} 
                      placeholder="MM / YY" maxlength="7"/>
                    <input class="group-full-input-fields" id="card-cvc-field" type="text"
                      style="--cvc-field-border-color: {border_color_cvc}"
                      bind:value={payment_form.cvc} placeholder="CVC" maxlength="3" />
                  </div>
                </div>

                <div class="group-form-subsection">
                  <div class="group-form-label-wrapper">
                    <label class="form-label-title">Name on card</label>
                    {#if !is_valid.name}
                      <label class="form-label-invalid">Invalid</label>
                    {/if}
                  </div>
                  <div class="group-form-input-wrapper" id="form-name-wrapper">
                    <input class="group-full-input-fields" id="name-field" type="text"
                      style="--name-field-border-color: {border_color_name}" maxlength="50"
                      placeholder="Josaphine Doe" bind:value={payment_form.name} />
                    <br />
                  </div>
                </div>

                <div class="group-form-subsection">
                  <div class="group-form-label-wrapper">
                    <label class="form-label-title"> Country / Region </label>
                    {#if !is_valid.postal_code}
                      <label class="form-label-invalid">Invalid</label>
                    {/if}
                  </div>
                  <div class="group-form-input-wrapper" id="region-form-input-wrapper">
                    <select class="group-full-input-fields" id="region-country-field" type="text"
                      bind:value={payment_form.country} on:change={format_postal_code}> 
                      <option selected value="canada">Canada</option>
                      <option value="dominican republic">Dominican Republic</option>
                      <option value="france">France</option>
                      <option value="haiti">Haiti</option>
                      <option value="united states">United States</option>
                    </select>
                    <input class="group-full-input-fields" id="region-postal-code-field" type="text" 
                      style="--postal-code-field-border-color: {border_color_postal_code}"
                      bind:value={payment_form.postal_code} on:input={() => into_readable(2)} 
                      placeholder={postal_code_placeholder} maxlength={postal_code_max_length}
                      inputmode={postal_input_mode} />
                  </div>
                </div>
                  
                <!-- TODO id rename reqd -->
                <div class="group-form-subsection" id="button-form-subsection">
                  <div class="block-select" id="form-donate-button" 
                  style="--donate-button-color: {donate_button_color}"
                  on:mousedown={() => handle_click_release(1, 4)} on:mouseup={() => handle_click_release(0, 4)} 
                  on:click={() => test_send_to_back_end()}
                  >
                    <div
                    class="form-donate-button-click-cover" 
                    style="--donate-button-cursor: {donate_button_cursor}"
                    >
                      {#if donate_button_loading_gif}
                        <div id="form-donate-button-loading-gif-wrapper">
                          <img id="form-donate-button-loading-gif"
                            src="https://dieupeut-bucket.us-east-1.linodeobjects.com/donate_loading.svg">
                        </div>
                      {:else}
                        {donate_button_text}
                      {/if}
                    </div>
                  </div>
                </div>

                <div id="donate-secured-by-stripe-wrapper">
                  <div id="donate-secured-by-stripe-text">
                    Secured by <img 
                    id="donate-secured-by-stripe-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                    alt="Stripe" />
                  </div>
                </div>

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
    background-image: url("https://dieupeut-bucket.us-east-1.linodeobjects.com/bg_donate.jpg");
    background-repeat: no-repeat;
    background-position-y: -30rem;
    background-size: 120%;
    /* border: 2px solid yellow; */
  }

  .donate-mid-wrapper{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    height: 100%;
    border: 2px solid red;
  }

  .donate-mid-wrapper-cover{
    @apply
      flex
      justify-center
    ;
    width: 100%;
    height: 100%;
    background-color: rgba(242,241,240,0.7); /* EDIT HERE ------------- background */
  }

  .donate-inner-wrapper{
    margin-top: 0.3rem;
    height: 900px;
    width: 1285px;
    display: grid;
    grid-template-columns: repeat(5, [col] 20%);
    grid-template-rows: 100%;

    /* border: 2px red solid; */
  }

  .block-select{
    /* block text selection across browsers */
    -moz-user-select: none;
    -ktml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
      py-[4rem]
      justify-end
    ;
    grid-column: 1 / span 2;
    /* background-image: linear-gradient(to right, rgba(186,184,182,1), rgba(230, 229, 218,1)); */

    /* background-image: linear-gradient(to right, rgba(227,216,209,1), rgba(230, 229, 218,1)); */
    /* background-image: linear-gradient(to right, rgba(222,220,181,1), rgba(230, 229, 218,1)); */
    /* border: 4px solid red; */
    /* background-color: rgba(186, 222, 215, 1); */
    /* background-color: rgba(222, 220, 186, 1); */

    /* background: linear-gradient(to right, rgba(184,184,184,1), rgba(230,229,218,0)); */
    /* border: 2px solid blue; */
  }

  #group-thank-you-subsection{
    display: grid;
    padding-top: 1rem;
    grid-template-columns: 100%;
    grid-template-rows: repeat(40, [row] 2.5%);
    width: 100%;
    background-image: url("../../../static/final_donate_thankyou_bg.jpg"); 
    /* background-color: rgb(232,227,223); */
    background-size: 120%;
    background-position-y: -100px;
    background-position-x: -10px;
    border-radius: 10px 0px 0px 10px;
    box-shadow: -4px 0 6px rgba(121,121,122,1);
    overflow: hidden;
    border: 2px solid black;
  }

  /* --------------------------------------------- GRID  */
  #amount-manual-wrapper{
    /* margin-top: 2rem; */
    justify-content: center;
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    /* border: 4px solid red; */
    grid-row: row 3 / span 5;
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

  /* --------------------------------------------- GRID  */
  .amount-options-outer-wrapper{
    @apply
      flex
      justify-center
    ;
    grid-row: row 8 / span 26;
    width: 100%;
    height: 100%;
    /* border: 4px solid purple; */
  }

  .amount-options-inner-wrapper{
    margin-top: 1rem;
    justify-content: center;
    text-align: center;
    width: 80%;
    box-sizing: border-box;

    /* border: 4px solid purple; */
  }

  .group-amount-options{
    @apply
      flex /* vertical center */
      flex-col
      justify-center
    ;
    cursor: pointer;
    margin: 2.1rem 0rem;
    height: 100px;
    width: 100%;
    box-shadow: 0;
    transition: box-shadow 100ms;
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid black;
  }

  .group-amount-options:hover{
    box-shadow: 0 0 4px black;
  }

  .group-amount-option-text{
    font-size: 50px;
    font-weight: bold;
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

  /* ----------- GRID  something off here; width not full on certain views*/
  .thank-you-message-wrapper{
    @apply
      flex
      flex-col
      justify-center
    ;
    grid-row: row 35 / span 7;

    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    /* border: 2px solid red; */
  }  

  #thank-you-message-text{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: white;
  }  

  /* ---------------- Donate Form Section ---------------- */
  .donate-payment-outer-wrapper{
    @apply
      flex
      justify-start
      py-[2rem]
    ;
    /* box-shadow: -4px 0 4px rgba(121,121,122,1); */ 
    grid-column: 3 / span 3;
    background-color: rgba(242, 241, 240, 0);
    /* border: 4px solid blue; <--- might need */
  }

  .donate-payment-mid-wrapper{
    @apply
      flex
      justify-center
      py-[2.2rem]
    ;
    box-shadow: 4px 0 6px rgba(121,121,122,1);
    background-color: rgba(232,227,223,1);
    border-radius: 10px;
    width: 100%;
    border: 2px solid black;
  }

  .donate-payment-inner-wrapper{
    position: relative;
    width: 80%;
    height: 100%;
    /* border: 4px solid green; */
  }
  /* ---------------- Form Group ---------------- */
  .group-form-subsection{
    @apply
      flex
      flex-col
    ;
    padding: 0.7rem 0px;

    /* border: 2px solid blue; */
  }

  .group-form-input-wrapper{
    /* margin-top: 2rem; margin-bottom: 1rem; */
    justify-content: center;
    display: block;
    text-align: center;
    width: 100%;

    /* border: 2px solid purple; */
  }

  .group-full-input-fields{
    position: relative;
    height: 3.2rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 0px 2.1rem;
    box-sizing: border-box;
    border: 3px solid;
  }

  .group-half-input-fields{
    box-sizing: border-box;
    height: 2.5rem;
    width: 48%;
  }

  .group-form-label-wrapper{
    margin-bottom: 0.1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, [col] 50%);
    grid-template-rows: 100%;

    /* border: 2px solid green; */
  }

  .form-label-title{
    padding: 0px 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    white-space: nowrap;
    box-sizing: border-box;
    grid-column: col 1 / span 1;

    /* border: 2px solid red; */
  }

  .form-label-invalid{
    padding: 0px 2rem;
    color: red;
    font-size: 1.1rem;
    width: 100%;
    white-space: nowrap;
    text-align: right;
    box-sizing: border-box;
    grid-column: col 2 / span 1;

    /* border: 2px solid red; */
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
    /* border: 2px solid blue; */
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
    border-color: var(--email-field-border-color);
    /* above returns non black color */
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
    border-color: var(--card-number-field-border-color);
    border-bottom: 1px;
  }

  #card-exp-field{
    grid-column: col 1 / span 1;
    grid-row: row 2 / span 1;
    border-radius: 0px 0px 0px 10px;
    border-color: var(--exp-field-border-color);
    border-right: 1px;
  }

  #card-cvc-field{
    grid-column: col 2 / span 1;
    grid-row: row 2 / span 1;
    border-radius: 0px 0px 10px 0px;
    border-color: var(--cvc-field-border-color);
  }

  #name-field{
    border-radius: 10px;
    border-color: var(--name-field-border-color);
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
    border-right: 1px;
  }

  #region-country-field:focus{
    outline: none; 
   /* use shadow black in future */
  }

  #region-postal-code-field{
    text-transform: uppercase;
    border-radius: 0px 10px 10px 0px;
    grid-column: col 2 / span 1;
    border-color: var(--postal-code-field-border-color);
  }

  #form-donate-button{
    margin-top: 1rem;
    text-align: center;
    color: white;
    font-size: 21px;
    font-weight: bold;
    background-color: var(--donate-button-color);
    width: 100%;
    height: 100%; 
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid orange;
  }

  #form-donate-button:hover{
    box-shadow: 0 0 4px black;  
    overflow: hidden;
  }

  .form-donate-button-click-cover{
    /* padding: 15px 0px; */
    @apply
      flex
      flex-col
      justify-center
    ;
    width: 100%;
    height: 50px;
    cursor: var(--donate-button-cursor);
    text-align: center;
    overflow: hidden;
    /* border: 3px solid blue; */
  }

  #form-donate-button-loading-gif-wrapper{
    width: 100%;
    overflow: hidden;
    box-sizing: content-box;
    /* border: 2px red solid; */
  }

  #form-donate-button-loading-gif{
    width: auto;
    height: 2.9rem;
  }

  #donate-secured-by-stripe-wrapper{
    margin-top: 0.5rem;
    width: 100%;
    height: 20px;
    /* border: 2px solid red; */
  }

  #donate-secured-by-stripe-text{
    @apply
      flex
      justify-center
    ;

    white-space: nowrap;
    width: 100%; 
    text-align: center;
  }

  #donate-secured-by-stripe-img{
    margin-top: -0.1rem;
    height: auto;
    width: 50px;
  }

  /* Negative value; review. TODO */
  #payment-separator-wrapper{
    width: 100%;
    height: 40px;
    display: grid;
    margin: 1.5rem 0 -0.2rem 0; 
    grid-template-columns: repeat(8, [col] 12.5%);
    grid-template-rows: 100%;

    /* border: 2px red solid; */
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
