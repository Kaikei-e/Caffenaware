<script lang="ts">
	import { drinkForms } from '$lib/forms/formTypes';
	import { get } from 'svelte/store';

	$: dforms = get(drinkForms);
</script>

<div class="backImage" />

<div>
	Hi !! {dforms}
</div>

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
		background-blend-mode: lighten;
		background-color: rgba(223, 188, 147, 0.3);
	}
</style>
