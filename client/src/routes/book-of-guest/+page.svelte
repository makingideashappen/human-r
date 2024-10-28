<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import axios from 'axios';
	import List from '../../lib/components/List.svelte';

	let entries = [];
	let name = '';
	let message = '';

	async function fetchEntries() {
		const response = await axios.get('http://127.0.0.1:8000/entries/');
		entries = response.data;
	}

	async function addEntry() {
		if (name && message) {
			const entry = { name, message };
			await axios.post('http://127.0.0.1:8000/entries/', entry);
			name = '';
			message = '';
			await fetchEntries();
		}
	}

	onMount(() => {
		fetchEntries();
	});
</script>

<section>
	<br /><br />

	<div class="guestbook">
		<h1>Guestbook</h1>

		<div class="form-group">
			<input type="text" bind:value={name} placeholder="Your name" />
		</div>
		<div class="form-group">
			<textarea bind:value={message} placeholder="Your message" />
		</div>
		<button on:click={addEntry} disabled={!name || !message}>Add Entry</button>
	</div>

	<div>
		{#each entries as entry}
			<div class="entry">
				<p class="entry-header">
					<strong>{entry.name}</strong><span>{entry.date}</span>
				</p>
				<div>{entry.message}</div>
			</div>
		{/each}
	</div>
	<br /><br />
</section>

<style>
	.entry-header {
		display: flex;
		justify-content: space-between;
	}
	section {
		min-height: 100vh;
	}

	.guestbook {
		max-width: 600px;
		margin: 0 auto;
		padding: 1em;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.entry {
		border-bottom: 1px solid #ccc;
		padding: 1em 0;
	}

	.entry:last-child {
		border-bottom: none;
	}

	.form-group {
		margin-bottom: 1em;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.5em;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		padding: 0.5em 1em;
		border: none;
		background-color: #007bff;
		color: white;
		border-radius: 5px;
		cursor: pointer;
	}

	button:disabled {
		background-color: #ccc;
	}
</style>
