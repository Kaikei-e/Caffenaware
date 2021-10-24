<main>
	<div class="backImage" />

	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>

<style>
	:global(body) {
		padding: 0;

	}

	.backImage {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
    
		background-image: url('/coffee.jpg');
		z-index: -1;
    background-size: cover;
    background-blend-mode:lighten;
    background-color: rgba(223, 188, 147, 0.3);
	}
</style>
