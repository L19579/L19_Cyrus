<script>
  import FeedbackList from './components/feedbacklist.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'
  import FeedbackForm from './components/FeedbackForm.svelte'

  let feedback = [
    {id: 1, rating: 8, text: "These shoes rule!"},
    {id: 2, rating: 0, text: "These shoes SUCK!"},
    {id: 3, rating: 1, text: "These shoes SUUUCK!"},
    {id: 4, rating: 10, text: "Lets get some shoes. Let's party!"},
  ];

  $: count = feedback.length
  $: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length
  
  const deleteFeedback = (event) => {
    const item_id = event.detail
    feedback = feedback.filter((item) => item.id != item_id)
  };

</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats {count} {average} />
  <FeedbackList feedback={feedback} on:delete-feedback={deleteFeedback} />
</main>
