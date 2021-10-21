<script lang="ts">
  
</script>

<main>
	<div class="backImage" />
	<h1 class="">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>



<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

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
    background-color: rgba(212, 189, 161, 0.3);
	}
</style>
