<script>
	import { onMount } from 'svelte';

	let show = true;

	function closeBanner() {
		show = false;
	}
</script>

{#if show}
	<div class="banner">
		<p>
			If you wish you can support us with a donation via
			<a href="https://paypal.me/your-paypal-link" target="_blank" rel="noopener noreferrer"
				>PayPal</a
			>
			or
			<a href="bitcoin:your-bitcoin-address">Bitcoin</a>. Resources for domain and hosting are
			needed.
		</p>
		<button on:click={closeBanner}>✖</button>
	</div>
{/if}

<style>
	.banner {
		background-color: rgb(244, 235, 196); /* Yellow background for attention */
		color: #333; /* Dark text for readability */
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000; /* Ensure it stays on top */
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.banner a {
		color: #000000; /* Link color */
		text-decoration: underline;
	}

	.banner button {
		margin-left: 15px;
		background: transparent;
		border: none;
		cursor: pointer;
		font-size: 12px;
	}
</style>
