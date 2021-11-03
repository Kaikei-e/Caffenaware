<script lang="ts">
	import { resStruct } from '$lib/api/apiSender';
	import type { drinkFormRes } from '$lib/forms/formTypes';
	import { get } from 'svelte/store';

	let jsonObjs = get(resStruct).res;
	let drinks: Array<drinkFormRes> = [];

	for (let index = 0; index < jsonObjs.length; index++) {
		const element = jsonObjs[index];


		let dStruct: drinkFormRes = {
			caffeine: element["caffeine"],
			dttm: element["dttm"],
		}
		drinks.push(dStruct)
		
	}
</script>

<div class="backImage" />

<div>
	{#each drinks as drink, index}
		{#if index % 500 == 0}
			<div>{drink.caffeine}</div>
			<div>{drink.dttm}</div>

		{/if}		
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
