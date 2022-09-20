<script>
  import {v4 as uuidv4} from 'uuid'
  import {createEventDispatcher} from 'svelte'
  import Card from './Card.svelte'
  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte'

  let text = '';
  let rating = 10;
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

  const handle_select = e => rating = e.detail;

  const dispatch = createEventDispatcher();

  const handle_submit = () => {
    if(text.trim().length >= min_input_len){
      const newFeedBack = {
        id: uuidv4(),
        text,
        rating: +rating, // '+' converts user string input to number
      };
      dispatch('add-feedback', newFeedBack);

      text = ''; //clearing input field.
    }
  }
</script>

<Card>
  <header>
    <h2>How would do you rate your service?</h2>
  </header>

  <form on:submit|preventDefault={handle_submit}>
    <RatingSelect on:rating-select={handle_select}/>
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
