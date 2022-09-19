<script>
import FeedbackList from './components/feedbacklist.svelte'

  let feedback = [
    {id: 1, rating: 8, text: "These shoes rule!"},
    {id: 2, rating: 0, text: "These shoes SUCK!"},
    {id: 3, rating: 1, text: "These shoes SUUUCK!"},
    {id: 4, rating: 10, text: "Lets get some shoes. Let's party!"},
  ];
  
  const deleteFeedback = (event) => {
    console.log(event.detail)  
  }

</script>

<main class= "container">
  <FeedbackList feedback={feedback} on:delete-feedback={delete-Feedback} />
</main>
