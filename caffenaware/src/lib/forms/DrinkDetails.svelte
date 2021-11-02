<script lang="ts">
	import { drinkCount } from '$lib/store/store';
	import { drinkForms } from './formTypes';
	import { tick } from 'svelte/internal';
	import TheForm from './TheForm.svelte';


	//export let dynamicForms: drinkForm[];
	$: isLoaded = false;

	async function loading() {
		isLoaded = false;

		if ($drinkForms.length === $drinkCount) {
			isLoaded = true;
		}

		if (isLoaded) {
			await isLoaded;
		}

		await tick();
	}
</script>

{#await loading()}
	<div><p>Loading....</p></div>
{:then}
	<ul>
		{#each $drinkForms as theForm, index}
			<TheForm bind:$drinkForms {theForm} {index} />
		{/each}
	</ul>
{/await}

<style>
	.drinkDetails {
		font-size: 20px;
		font-weight: 600;
		display: inline-block;
	}
	ul {
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
		list-style-position: inside;
		padding: 0;
	}

	li {
		margin: 10px;
	}
</style>
