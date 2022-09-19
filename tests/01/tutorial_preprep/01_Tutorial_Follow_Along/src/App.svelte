<script>
  let first_name = 'JoJo';
  let last_name = 'MoMo';
  let color = 'green';
  let show_text = false;
  let users = [
    {id: '1', name: 'Steven'},
    {id: '2', name: 'Mike'},
    {id: '3', name: 'Kate'},
  ];

  $: name = first_name + ' ' + last_name;
  
  const fn_toggle = () => {
    color = color === 'blue' ? 'red' : 'blue';
    show_text = !show_text;
    users = [...users, {id: '4', name: 'Jen'}]
  }

</script>

<main>
	<h1 style="color: {color}">Hello {name}!</h1>
  {#if show_text}
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  {:else}
    <p>No Text</p>
  {/if}
  <button on:click={fn_toggle}>Click</button>
  
 {#each users as user (user.id)}
  <h3>{user.id}: {user.name}</h3>
 {/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
