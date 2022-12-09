<script>
  import { writable } from 'svelte/store'

  import Navbar from './../shared/Navbar.svelte'
  import Footer from './../shared/Footer.svelte'
  import Todo from './../shared/Todo.svelte'

  let payment_form = writable({
    first_name: "",
    last_name: "",
    email: "",
    amount: 0,
    card_number: "", 
    exp_month: 0,
    exp_year: 0,
    cvc: "",
    postal_code: "",
    country: "",
  });

</script>

<Navbar current_nav_page = 'donate'/>

  <div class="donate-outer-wrapper">
    <div class="donate-inner-wrapper">
      <div class="donate-thank-you-panel">
      </div>
      <div class="donate-payment-outer-wrapper">
        <div class="donate-payment-inner-wrapper">

          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.amount} />
              <br />
              <label> Amount </label>
            </div>
          </div>
          
          <div class="group-form-subsection">
            <div class="group-form-input-wrapper" id="form-first-name-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.first_name} />
              <br />
              <label> First Name </label>
            </div>
            <div class="group-form-input-wrapper" id="form-last-name-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.last_name} />
              <br />
              <label> Last Name </label>
            </div>
          </div>

          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.email} />
              <br />
              <label> Email </label>
            </div>
          </div>
          
          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.card_number} />
              <br />
              <label> Card Number </label>
            </div>
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.cvc} />
              <br />
              <label> CVC </label>
            </div>
          </div>

          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="number" bind:value={$payment_form.exp_month} />
              <br />
              <label> Exp Month </label>
            </div>
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="number" bind:value={$payment_form.exp_year} />
              <br />
              <label> Exp Year </label>
            </div>
          </div>

          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.postal_code} />
              <br />
              <label> Postal/Zip Code </label>
            </div>
            <div class="group-form-input-wrapper">
              <input class="group-input-fields" type="text" bind:value={$payment_form.country} />
              <br />
              <label> Country </label>
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
    border: 2px red solid; 
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

  .donate-payment-inner-wrapper{
    width: 75%;
    border: 2px solid green;
  }

  /* ---------------- Form Group ---------------- */
  .group-input-fields{
    height: 2.5rem;
    width: 20rem;
  }
  
  .group-form-input-wrapper{
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: block;
    text-align: center;
    border: 2px solid red;
  }

  .group-form-subsection{
    display: flex;
    justify-content: space-around;
    border: 2px solid red;
  }
  /* ---------------- Form Group ---------------- */

  #form-first-name-wrapper{
  }

</style>
