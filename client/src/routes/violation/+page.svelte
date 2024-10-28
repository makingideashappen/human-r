<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import ViolationForm from '$lib/components/ViolationForm.svelte';

	let user_ip = '';
	let subject = '';
	let message = '';
	let recipient = '';

	async function sendEmail() {
		try {
			const response = await axios.post('http://127.0.0.1:8000/api/send-email/', {
				user_ip,
				subject,
				message,
				recipient
			});

			if (response.data.message) {
				alert('Email sent successfully!');
			}
		} catch (error) {
			console.error('Error sending email:', error);
			alert('Failed to send email.');
		}
	}
</script>

<section class="form-container">
	<form on:submit|preventDefault={sendEmail} class="email-form">
		<h2>Send an Email</h2>
		<div class="form-group">
			<label for="subject">Subject</label>
			<input id="subject" type="text" bind:value={subject} placeholder="Enter subject" required />
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" bind:value={message} placeholder="Enter your message" required />
		</div>
		<div class="form-group">
			<label for="recipient">Recipient Email</label>
			<input
				id="recipient"
				type="email"
				bind:value={recipient}
				placeholder="Enter recipient email"
				required
			/>
		</div>
		<button type="submit">Send Email</button>
	</form>
</section>

<style>
	body {
		font-family: Arial, sans-serif;
		background-color: #f5f5f5;
		margin: 0;
		padding: 0;
	}

	.form-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5rem;
	}

	.email-form {
		background-color: #ffffff;
		padding: 2em;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		max-width: 400px;
		width: 100%;
	}

	.email-form h2 {
		margin-bottom: 1em;
		color: #333;
		font-size: 1.5em;
	}

	.form-group {
		margin-bottom: 1.5em;
	}

	label {
		display: block;
		margin-bottom: 0.5em;
		color: #555;
		font-weight: bold;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75em;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1em;
		background-color: #f9f9f9;
	}

	input:focus,
	textarea:focus {
		border-color: #007bff;
		outline: none;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}

	button {
		display: inline-block;
		width: 100%;
		padding: 0.75em;
		border: none;
		border-radius: 4px;
		background-color: #007bff;
		color: white;
		font-size: 1em;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #0056b3;
	}

	button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>
