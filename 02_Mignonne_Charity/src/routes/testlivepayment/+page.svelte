<script>
	import { writable } from 'svelte/store';
	
	let foo = 'baz'
	let bar = 'qux'
	let result = null
	
	
	export const user = writable ({
	first_name: "Gigi",
	last_name: "Fifi",
	email: "Gigi@fifi.com",
	phone: "1112223344",
	address: {
		line1: "416 Yadi Road",
		line2: "",
		city: "Boogieville",
		province: "Manitoba",
		postal_code: "K1H 2R4",
		country: "Canada",
	},
	card: {
		amount: 6666,
		number: "4242424242424242",
		cvc: "123",
		exp_month: 2,
		exp_year: 24,
	},
})

async function doyathingtwentyone () {
		const res = await fetch('http://127.0.0.1:8000/doyathingtwentyone', {
			method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          first_name: "Gigi",
          last_name: "Fifi",
          email: "Gigi@fifi.com",
          phone: "1112223344",
          address: {
            line1: "416 Yadi Road",
            line2: "",
            city: "Boogieville",
            province: "Manitoba",
            postal_code: "K1H 2R4",
            country: "Canada",
          },
          card: {
            amount: 6666,
            number: "4242424242424242",
            cvc: "123",
            exp_month: 2,
            exp_year: 24,
          },
        })
		})
    .then(response => response.json())
    .then(data => console.log(data));
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
	
	
	async function doPost () {
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			body: JSON.stringify({
				foo,
				bar
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
</script>


<input bind:value={foo} />
<input bind:value={bar} />
<button type="button" on:click={doyathingtwentyone}>
	Post it.
</button>
<p>
	Result:
</p>
<pre>
{result}
</pre>
