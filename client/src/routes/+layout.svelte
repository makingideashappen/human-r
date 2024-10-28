<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import DaysCounter from '../lib/components/DaysCounter.svelte';
	import CookieBanner from '../lib/components/CookieBanner.svelte';
	import ToastBanner from '../lib/components/ToastBanner.svelte';
	import logo from '../assets/logo.svg';

	// Load Font Awesome icons
	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'; // Replace with your Font Awesome URL
		document.head.appendChild(link);
	});
</script>

<header>
	<DaysCounter />
	<p><img src={logo} alt="logo" /></p>
	<a href="/" class:small={$page.url.pathname === '/'}><span>HOME</span></a>&nbsp &nbsp
	<!-- <a href="/about"><span class:small={$page.url.pathname !== '/'}>ABOUT</span></a> -->
	<a href="/media-downloads"
		><span class:small={$page.url.pathname === '/media-downloads/'}>MEDIA & DOWNLOADS</span></a
	>&nbsp &nbsp
	<a href="/book-of-guest"
		><span class:small={$page.url.pathname === '/book-of-guest/'}>BOOK OF GUEST</span></a
	>&nbsp &nbsp
	<a href="/violation"
		><span class:small={$page.url.pathname === '/violation/'}
			><em>!</em> INFORM VIOLATION <em>!</em></span
		></a
	>
</header>

<main>
	<slot />
</main>

<footer>
	<div class="social">
		<!-- <i class="fab fa-facebook fa-2x" aria-hidden="true" /> -->
		<!-- <i class="fab fa-whatsapp fa-2x" aria-hidden="true" /> -->
		<i class="fab fa-instagram fa-2x" aria-hidden="true" />
		<!-- <i class="fab fa-linkedin fa-2x" aria-hidden="true" /> -->
		<i class="fas fa-envelope fa-2x" aria-hidden="true" />
	</div>
	<ToastBanner />
	<CookieBanner />

	<p>
		<a href="/info/privacy"><span>Privacy Policy</span></a>&nbsp &nbsp<a href="/info/cookies"
			><span>Cookies Policy</span></a
		>&nbsp &nbsp
	</p>

	<p class="center">
		{new Date().getFullYear()}
	</p>
</footer>

<style>
	.center {
		display: flex;
		justify-content: center;
	}
	h2 a {
		color: #083e6c;
	}

	p {
		display: flex;
	}
	img {
		max-width: 240px;
		margin: auto;
	}

	.social {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}

	.social i {
		margin: 0 10px;
		cursor: pointer;
	}

	.social i.fa-2x {
		font-size: 2em;
	}

	:global(:root) {
		--spacing-unit: 4px;
		--color-background: #e5e5e5;
		--color-text-primary: #212121;
		--color-text-secondary: #5a5a5a;
	}

	:global(body) {
		margin: 0 auto;
		max-width: 75ch;
		padding: calc(var(--spacing-unit) * 8);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		background-color: var(--color-background);
		color: var(--color-text-primary);
		line-height: 1.51;
		font-size: 18px;
		background: #f3f6fc;
		color: #010101;
	}

	a {
		color: #010101;
	}

	em {
		color: #f03333;
	}

	:global(a, a:visited, a:active) {
		text-decoration: none;
		/* color: var(--color-text-primary); */
		font-weight: 700;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	.small {
		text-decoration: underline;
	}

	footer {
		margin-top: calc(var(--spacing-unit) * 8);
	}

	header {
	}
	/* main {
		background: linear-gradient(#0E1217,#283C5A);
	} */
</style>
