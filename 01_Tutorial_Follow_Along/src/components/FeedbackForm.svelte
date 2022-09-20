<script>
  import Card from './Card.svelte'
  import Button from './Button.svelte'

  let text = '';
  let btnDisabled = true;
  let min_input_len = 10;  
  let message = null;

  const handle_input = () => {
    if(text.trim().length <= min_input_len){
      message = `Text must be at least ${min_input_len} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  }
</script>

<Card>
  <header>
    <h2>How would do you rate your service?</h2>
  </header>
  <form>
    <div class="input-group">
      <input type="text" on:input={handle_input} bind:value = {text} placeholder="Leave a review!">
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
    
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}

  </form>
</Card>
