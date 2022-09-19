<script>
  import {createEventDispatcher} from 'svelte'
  import Card from './Card.svelte'
  export let item

  const dispatch = createEventDispatcher()

  const handle_delete = (item_id) => {
    dispatch('delete-feedback', item_id)
  }
</script>

<Card>
  <div class="num-display">
    {item.id}
  </div>
  <button class="close" on:click={() => handle_delete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
.num-display{
  position: absolute;
  top: -10px;
  left: -10px;
  width: 50px;
  height: 50px;
  background : #ff6a95;
  color: #fff;
  border: 1px #eee solid;
  border-radius: 50%;
  padding: 10px;
  text-align: center;
  front-size: 19px;
}

.close{
  position: absolute;
  top: 10px;
  right: 20px; 
  cursor: pointer;
  background: none;
  border: none;
}

</style>
