<script lang="ts">
	export let data;

	let container: HTMLDivElement;
	let startX: number;
	let scrollLeft: number;
	let isDown = false;
	let cardDisplay = data.posts;

	const slideLeft = (): void => {
		container.scrollBy({
			left: -container.clientWidth,
			behavior: 'smooth'
		});
	};

	const slideRight = (): void => {
		container.scrollBy({
			left: container.clientWidth,
			behavior: 'smooth'
		});
	};

	const startDragging = (e: MouseEvent | TouchEvent) => {
		isDown = true;
		startX =
			e instanceof MouseEvent
				? e.pageX - container.offsetLeft
				: e.touches[0].pageX - container.offsetLeft;
		scrollLeft = container.scrollLeft;
	};

	const stopDragging = () => {
		isDown = false;
	};

	const onDrag = (e: MouseEvent | TouchEvent) => {
		if (!isDown) return;
		e.preventDefault();
		const x =
			e instanceof MouseEvent
				? e.pageX - container.offsetLeft
				: e.touches[0].pageX - container.offsetLeft;
		const walk = (x - startX) * 1.5; // Reduced scroll speed for smoothness
		container.scrollLeft = scrollLeft - walk;
	};
</script>

<div class="box-relative">
	<div
		class="carousel-container"
		bind:this={container}
		on:mousedown={startDragging}
		on:touchstart={startDragging}
		on:mousemove={onDrag}
		on:touchmove={onDrag}
		on:mouseup={stopDragging}
		on:mouseleave={stopDragging}
		on:touchend={stopDragging}
	>
		<div class="carousel">
			{#each cardDisplay as card}
				<a class="card" href={card.slug}>
					<img
						src={'https://via.placeholder.com/600x180'}
						alt="{'some image'}}"
						class="card-image"
					/>
					<h2>{card.title}</h2>
					<p>{card.description}</p>
					<p>author</p>
					<p>date</p>
				</a>
			{/each}
		</div>
		<div class="button-container">
			<button on:click={slideLeft}>❮</button>
			<button on:click={slideRight}>❯</button>
		</div>
	</div>
</div>

<style>
	.box-relative {
		position: relative;
	}

	.carousel-container {
		display: flex;
		overflow: hidden;
		min-width: 100%;
		cursor: grab;
		padding-bottom: 50px;
		scroll-behavior: smooth;
	}

	.carousel-container:active {
		cursor: grabbing;
	}

	.carousel {
		display: flex;
		transition: transform 0.4s ease; /* Smooth sliding transition */
		width: 100%;
	}

	.card {
		color: #010101;
		min-width: 80%;
		margin: 10px;
		padding: 20px;
		background-color: transparent;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		user-select: none; /* Prevent text selection during drag */
	}

	.button-container {
		position: absolute;
		bottom: 0%;
		width: 100%;
		display: flex;
		justify-content: center;
		transform: translateY(-50%);
	}

	.button-container button {
		background-color: transparent;
		color: #0a0909;
		border: none;
		padding: 10px;
		cursor: pointer;
		border-radius: 50%;
		transition: background-color 0.3s ease; /* Smooth button hover */
	}

	.button-container button:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.button-container button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>
