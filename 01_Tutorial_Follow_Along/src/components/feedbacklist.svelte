<script>
  import FeedbackItem from './feedbackitems.svelte'
  export let feedback = []

  console.log(feedback)
</script>

{#each feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}
