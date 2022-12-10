<script>
  import { writable } from 'svelte/store'

  import Navbar from './../shared/Navbar.svelte'
  import Footer from './../shared/Footer.svelte'
  import Todo from './../shared/Todo.svelte'

  let payment_form = writable({
    name: "",
    email: "",
    amount: 0,
    card_number: "", 
    exp: "",
    cvc: "",
    postal_code: "",
    country: "",
  });

</script>

<Navbar current_nav_page = 'donate'/>

  <div class="donate-outer-wrapper">
    <div class="donate-inner-wrapper">
      <div class="donate-thank-you-panel">
        <div class="group-form-subsection" id="form-subsection-amount">
          <div class="group-form-input-wrapper">
            <input class="group-half-input-fields" type="text" placeholder="100" bind:value={$payment_form.amount} />
            <br />
            <label> Amount </label>
          </div>
        </div>
      </div>

      <div class="donate-payment-outer-wrapper">
        <div class="donate-payment-mid-wrapper">
          <div class="donate-payment-inner-wrapper">

            <div class="group-form-subsection" id="button-form-subsection">
              <div id="paypal-donate-button">
                <img id="paypal-button-image" src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-color.svg" />
              </div>
            </div>

            <div class="group-form-subsection" id="button-form-subsection">
              <div id="gpay-donate-button">
                <img id="gpay-button-image" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" />
              </div>
            </div>

            <div id="payment-separator-wrapper">
              <div class="payment-separator-group-sides" id="payment-separator-start"> 
                <hr>
              </div>
              <div id="payment-separator-text">
                Or use card
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
                  placeholder="1234 1234 1234 1234" bind:value={$payment_form.card_number} />
                <input class="group-full-input-fields" id="card-exp-field" type="text" 
                  placeholder="MM / YY" bind:value={$payment_form.exp} />
                <input class="group-full-input-fields" id="card-cvc-field" type="text" 
                  placeholder="CVC" bind:value={$payment_form.cvc} />
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
                <input class="group-full-input-fields" id="region-country-field" type="text"
                  placeholder="Country" bind:value={$payment_form.country} />
                <input class="group-full-input-fields" id="region-postal-code-field" type="text" 
                  placeholder="Postal Code" bind:value={$payment_form.postal_code} />
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
      xsm:pt-[45px]
      sm:pt-[45px]
      md:pt-[110px]
      xl:pt-[110px]
      xl:min-h-[410px]
    ;
    width: 100%;
  }

  .donate-inner-wrapper{
    @apply
      flex
      justify-center
    ;
    margin-top: 0.3rem;
    height: 1000px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, [col] 20%);
    grid-template-rows: 100%;

    border: 2px red solid;
  }

  .donate-thank-you-panel{
    grid-column: 1 / span 2;
    /* background-color: rgba(186, 222, 215, 1); */
    background-color: rgba(222, 220, 186, 1);

    border: 4px solid red;
  } 

  .donate-payment-outer-wrapper{
    @apply
      flex
      justify-center
      py-[3rem]
    ;
    grid-column: 3 / span 3;
    border: 4px solid blue;
    background-color: rgba(242, 241, 240, 1);
  } 

  .donate-payment-mid-wrapper{
    @apply
      flex
      justify-center
      py-[3rem]
    ;
    width: 70%;
    border: 2px solid green;
  }

  .donate-payment-inner-wrapper{
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
  #paypal-donate-button{ /* some in efficiencies w/ wrapper */
    padding: 15px 0px;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    background-color: rgba(7,12,31,1);
    width: 100%;
    height: 25px;
    border-radius: 10px;
    border: 2px solid red;
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
    background-color: black;
    width: 100%;
    height: 25px;
    border-radius: 10px;
    border: 2px solid red;
  }

  #gpay-button-image{
    position: relative;
    height: 110%;
  }

  /* ---------------- Form ---------------- */

  #form-subsection-amount{
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
    border-radius: 10px 0px 0px 10px;
    grid-column: col 1 / span 1; 
  } 

  #region-postal-code-field{
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
