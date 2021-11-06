<script lang="ts">
	import { resStruct } from '$lib/api/apiSender';
	import { get } from 'svelte/store';

	import '@carbon/charts/styles.min.css';
	//import 'carbon-components/css/carbon-components.min.css';
	//import "carbon-components-svelte/css/all.css";

	//import 'carbon-components-svelte/css/white.css';

	import { LineChart } from '@carbon/charts-svelte';
	import type { drawType } from '$lib/structs/resStructs';
	import { onMount } from 'svelte';

	let promise;

	onMount(() => {
		promise = drawer();
	});

	let dType: drawType[] = [];

	const testData = [
		{
			group: 'Caffeine',
			date: '2021-11-07T19:31:00.000',
			value: 5.112241110621567
		},
		{
			group: 'Caffeine',
			date: '2021-11-07T21:31:00.000',
			value: 5.112241110621567
		},
		{
			group: 'Caffeine',
			date: '2021-11-07T06:31:00.000',
			value: 5.112241110621567
		}
	];

	let jsonObjs = get(resStruct).res;
	console.log(jsonObjs.length)

	drawer();

	console.log('start');

	async function drawer() {
		for (let index = 0; index < jsonObjs.length; index++) {
			if (index % 6 === 0) {
				const element = jsonObjs[index];
				//console.log(element);

				let elem = {
					group: 'Caffeine',
					date: element['dttm'] + 'Z',
					value: element['caffeine']
				};

				dType.push(elem);
				
			}
		}

		console.log(dType.length);
		 
		await console.log('converted');
	}

	console.log('start2');

	///////////////////////////////////////////////////
	/*
	 */
</script>

<main class="h-screen w-screen">
	<div class="backImage">
		{#await promise}
			<p>Start4</p>
			<p class=" text-center text-white font-bold">Drawing...</p>
		{:then}
			<p>Start5</p>

			<LineChart
				data={dType}
				options={{
					title: 'Line (Time Series)',
					axes: {
						bottom: {
							title: 'Caffeine Decay',
							mapsTo: 'date',
							scaleType: 'time'
						},
						left: {
							mapsTo: 'value',
							title: 'Caffeine(mg)',
							scaleType: 'linear'
						}
					},

					curve: 'curveMonotoneX',
					height: '800px'
				}}
			/>
		{/await}
	</div>

	<!--- 

	--->
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
		background-blend-mode: lighten;
		background-color: rgba(223, 188, 147, 0.3);
	}
</style>
