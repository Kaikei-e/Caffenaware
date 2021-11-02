<script lang="ts">
	import { resData } from '$lib/api/apiSender';
	import { get } from 'svelte/store';

	const resJson = get(resData);
	let dForms = get(resData);


</script>

<div class="backImage" />

<div>
	{#each dForms as formData, index}
		<p>{formData[index].method}</p>
		<p>{formData[index].caffeine}</p>
		<p>{formData[index].dttm}</p>
	{/each}
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
