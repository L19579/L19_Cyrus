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
  });

</script>

<Navbar current_nav_page = 'donate'/>

  <div class="donate-outer-wrapper">
    <div class="donate-inner-wrapper">
      <div class="donate-thank-you-panel">
      </div>
      <div class="donate-payment-outer-wrapper">
        <div class="donate-payment-inner-wrapper">
          <label> Amount </label> <br>
          <input type="text" bind:value={$payment_form.amount} />
          <br />
          <br />

          <label> First Name </label>
          <input type="text" bind:value={$payment_form.first_name} />
          <br />
          <label> Last Name </label>
          <input type="text" bind:value={$payment_form.last_name} />
          <br />
          <label> Email </label>
          <input type="text" bind:value={$payment_form.email} />
          <br />

          <label> Card Number </label>
          <input type="text" bind:value={$payment_form.card_number} />
          <br />
          <label> Exp Month </label>
          <input type="number" bind:value={$payment_form.exp_month} />
          <br />
          <label> Exp Year </label>
          <input type="number" bind:value={$payment_form.exp_year} />
          <br />
          <label> CVC </label>
          <input type="text" bind:value={$payment_form.cvc} />
          <br />
          <label> Postal Code </label>
          <input type="text" bind:value={$payment_form.postal_code} />
          <br />


          {$payment_form.first_name}
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
</style>
