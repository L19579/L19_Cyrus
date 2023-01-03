<script>
	import { writable } from 'svelte/store';
	
	let foo = 'baz'
	let bar = 'qux'
	let result = null
	
	
	export const user = writable ({
	name: "Gigi LoLo",
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
		amount: 1000,
		number: "4242424242424242",
		cvc: "123",
		exp_month: 2,
		exp_year: 24,
	},
})

async function doyathingtwentyone () {
		const response = await fetch('http://127.0.0.1:8000/doyathingtwentyone', {
			method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: "Test Jat",
          email: "test@jaykjnhkbj.com",
          phone: "1112223344",
          address: {
            postal_code: "K1H 2R4",
            country: "Canada",
          },
          card: {
            amount: 1234,
            number: "4242424242424242",
            cvc: "123",
            exp_month: 2,
            exp_year: 24,
          },
        })
		});
		
    const json = response.json()
    result = JSON.stringify(json)
    console.log("post promise result: " + result);
    console.log("End of test payment function");
    if (response.ok){
      console.log("response status: " + response.status);
    };
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
