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
      </div>
      <div class="donate-payment-outer-wrapper">
        <div class="donate-payment-inner-wrapper">

          <div class="group-form-subsection" id="form-subsection-amount">
            <div class="group-form-input-wrapper">
              <input class="group-half-input-fields" type="text" placeholder="100" bind:value={$payment_form.amount} />
              <br />
              <label> Amount </label>
            </div>
          </div>
          
          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-full-input-fields" type="text" bind:value={$payment_form.email} />
              <br />
              <label> Email </label>
            </div>
          </div>

          <div class="group-form-subsection">
            <div class="group-form-input-wrapper" id="form-name-wrapper">
              <input class="group-full-input-fields" type="text" bind:value={$payment_form.name} />
              <br />
              <label> First Name </label>
            </div>
          </div>

          <div class="group-form-subsection">
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
            <div class="group-form-input-wrapper">
            </div>
          </div>

          <div class="group-form-subsection">
            <div class="group-form-input-wrapper">
              <input class="group-half-input-fields" type="text" bind:value={$payment_form.postal_code} />
              <br />
              <label> Postal/Zip Code </label>
            </div>
            <div class="group-form-input-wrapper">
              <input class="group-half-input-fields" type="text" bind:value={$payment_form.country} />
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
  .group-form-subsection{
    display: flex;
    justify-content: center;
    border: 2px solid red;
  }

  .group-form-input-wrapper{
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-right: 2rem;
    padding-left: 2rem;
    justify-content: center;
    display: block;
    text-align: center;
    width: 100%;

    border: 2px solid red;
  }

  .group-full-input-fields{
    position: relative;
    height: 2.5rem;
    width: 100%;
    padding: 0px 2.5rem;
    box-sizing: border-box;
  }

  .group-half-input-fields{
    height: 2.5rem;
    width: 48%;
  }

  /* ---------------- Form ---------------- */

  #form-subsection-amount{
    margin-bottom: 3rem; 
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
</style>
