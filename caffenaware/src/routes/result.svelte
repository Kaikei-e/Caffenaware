<script lang="ts">
	import { resStruct } from '$lib/api/apiSender';
	import type { drinkFormRes } from '$lib/forms/formTypes';
	import { get } from 'svelte/store';

	//const resJson = get(resStruct););
	console.log(get(resStruct).res);
	let jsonObjs = get(resStruct).res;
	let drinks: Array<drinkFormRes> = [];

	for (let index = 0; index < jsonObjs.length; index++) {
		const element = jsonObjs[index];

		console.log(element);

		let dStruct: drinkFormRes = {
			method: element["method"],
			caffeineMg: element["caffeine"],
			dttm: element["dttm"]
		}
		console.log(dStruct)
		drinks.push(dStruct)
		
	}
	//console.log(drinks)
</script>

<div class="backImage" />

<div>
	{#each drinks as formData}
		<p>{formData.method}</p>
		<p>{formData.caffeineMg}</p>
		<p>{formData.dttm}</p>
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
