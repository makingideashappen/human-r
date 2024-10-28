<script>
	import { onMount } from 'svelte';

	let showBanner = true;

	onMount(() => {
		const consent = localStorage.getItem('cookieConsent');
		if (consent === 'true') {
			showBanner = false;
		}
	});

	function acceptCookies() {
		localStorage.setItem('cookieConsent', 'true');
		showBanner = false;
	}
</script>

{#if showBanner}
	<div class="cookie-banner">
		<div class="cookie-content">
			<p>We use cookies to ensure you get the best experience on our website.</p>
			<button on:click={acceptCookies}>Accept</button>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #083e6c;
		color: #fff;
		padding: 1rem;
		text-align: center;
	}

	.cookie-content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	button {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
