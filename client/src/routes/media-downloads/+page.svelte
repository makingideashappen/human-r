<script>
	import YouTube from '$lib/components/Youtube.svelte';

	let files = [];

	// Fetch the list of PDF files from the Django backend
	async function fetchFiles() {
		const response = await fetch('http://127.0.0.1:8000/files/list/');
		files = await response.json();
	}

	// Handle file download
	async function downloadFile(filename) {
		const response = await fetch(`http://localhost:8000/files/download/${filename}/`);
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
	}

	// Fetch files when the component is created
	fetchFiles();
</script>

<main>
	<section>
		<br /><br />
		<h1>Selected youtube materials</h1>
		<details>
			<summary> Modern slavery ⭐⭐</summary>
			<p><YouTube videoId="watch?v=05JZfcPg3dk" /></p>
		</details>
		<details>
			<summary> Guantantanamo means ⭐⭐⭐⭐</summary>
			<p><YouTube videoId="watch?v=KzM4RdBmkDo" /></p>
		</details>
		<details>
			<summary>Poem of human right violation ⭐⭐⭐</summary>
			<p><YouTube videoId="watch?v=YLPPCGua5wY" /></p>
		</details>
		<details>
			<summary> Interasting aspects of descrutive characters ⭐⭐</summary>
			<p><YouTube videoId="watch?v=z5hB7TqSJ7A&t=526s" /></p>
		</details>
		<details>
			<summary>Interview with actual sociopath ⭐⭐⭐</summary>
			<p><YouTube videoId="watch?v=z5hB7TqSJ7A&t=526s" /></p>
		</details>
		<details>
			<summary> Info on psycho manipulation spirituality ⭐⭐⭐</summary>
			<p><YouTube videoId="watch?v=8BWorqyxtEc" /></p>
		</details>
	</section>

	<section>
		<h1>Download PDF Files</h1>
		<ul class="file-list">
			{#each files as file}
				<li class="file-item">
					{#if file.thumbnail}
						<!-- <img src={`http://127.0.0.1:8000${file.thumbnail}`} alt="Thumbnail" class="thumbnail" /> -->
					{:else}
						<span>No Thumbnail Available</span>
					{/if}
					<span>{file.name}</span>
					<button class="download-button" on:click={() => downloadFile(file.name)}>Download</button>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1>Paintings aand fotos</h1>
	</section>
</main>

<style>
	details {
		cursor: pointer;
		margin-bottom: 16px;
	}
</style>
