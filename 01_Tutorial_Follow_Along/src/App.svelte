<script>
  import FeedbackList from './components/feedbacklist.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'
  import FeedbackForm from './components/FeedbackForm.svelte'

  let feedback = [
    {id: 1, rating: 8, text: "This is a review."},
    {id: 2, rating: 0, text: "Here's another!"},
    {id: 3, rating: 1, text: "Review, review, review!"},
    {id: 4, rating: 10, text: "Ah, guess what!"},
  ];

  $: count = feedback.length
  $: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length
  
  const deleteFeedback = (event) => {
    const item_id = event.detail
    feedback = feedback.filter((item) => item.id != item_id)
  };

  const add_feedback = (event) => {
    const new_feedback = event.detail;
    /* Array needs to be reassigned to add/delete components */
    feedback = [new_feedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={add_feedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList feedback={feedback} on:delete-feedback={deleteFeedback} />
</main>
