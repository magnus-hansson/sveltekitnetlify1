<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/users');
		const json = await res.json();

		return { props: { stats: json } };
	}
</script>

<script>
	export let stats = {};
	let users = [];
	async function readdata() {
		try {
			const res = await fetch('/users');
			const json = await res.json();
			users = json.users;
			console.log(users);
		} catch (err) {
			console.log(err);
		}
	}
</script>

<main>
	<h1>Hello world!</h1>

	<p>Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
	<h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
		{stats.users.length}
	</h2>
	<button on:click={readdata}>read data</button>
	{#each users as user}
		<ul><li>{user.username}</li></ul>
	{/each}
</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
