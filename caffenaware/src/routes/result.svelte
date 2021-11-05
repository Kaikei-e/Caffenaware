<script lang="ts">
	import { resStruct } from '$lib/api/apiSender';
	import type { drinkFormRes } from '$lib/forms/formTypes';
	import { get } from 'svelte/store';

	//import '@carbon/charts/styles.min.css';
	//import 'carbon-components/css/carbon-components.min.css';
	//import "carbon-components-svelte/css/all.css";

	//import 'carbon-components-svelte/css/white.css';

	import { LineChart } from '@carbon/charts-svelte';
	import type { drawType } from '$lib/structs/resStructs';
	import { onMount } from 'svelte';

	let normalMin;
	let defoComponents;

	onMount(async () => {
		//normalMin = (await import('@carbon/charts/styles.min.css')).default;
		//defoComponents = (await import('carbon-components/css/carbon-components.min.css')).default;
		console.log('start3');
		await drawer();
	});

	let ctx;
	let chartGroup = [];
	let chartValues = [];
	let chartLabels = [];

	let dType: drawType[] = [];

	let jsonObjs = get(resStruct).res;
	//let drinks: Array<drinkFormRes> = [];


	console.log('start');

	function drawer(){

		for (let index = 0; index < jsonObjs.length; index++) {
		const element = jsonObjs[index];

		dType.push({
			group: 'Caffeine',
			date: element['dttm'],
			value: element['caffeine']
		});
	}
	}
	
	console.log('start2');


	///////////////////////////////////////////////////
	/*
*/
</script>

<main class="h-screen w-screen">
	<div class="backImage">
		<!--- 

		<canvas bind:this={canvasChart} id="chart" />
		<Line data={dataLine} options={{responsive: true}}/>
		{#if normalMin && defoComponents}
		{/if}

		--->
		{#await onMount}
			<p>Start4</p>
			<p class=" text-center text-white font-bold">Drawing...</p>
		{:then}
			<p>Start5</p>

			<LineChart
				data={dType}
				options={{
					title: 'Line (discrete)',
					axes: {
						bottom: {
							title: 'Caffeine Decay',
							mapsTo: 'key',
							scaleType: 'labels'
						},
						left: {
							mapsTo: 'value',
							title: 'Conversion rate',
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

		<div class="m-5">
			<LineChart
				data={[
					{
						group: 'Dataset 1',
						key: 'Qty',
						value: 34200
					},
					{
						group: 'Dataset 1',
						key: 'More',
						value: 23500
					},
					{
						group: 'Dataset 1',
						key: 'Sold',
						value: 53100
					},
					{
						group: 'Dataset 1',
						key: 'Restocking',
						value: 42300
					},
					{
						group: 'Dataset 1',
						key: 'Misc',
						value: 12300
					},
					{
						group: 'Dataset 2',
						key: 'Qty',
						value: 34200
					},
					{
						group: 'Dataset 2',
						key: 'More',
						value: 53200
					},
					{
						group: 'Dataset 2',
						key: 'Sold',
						value: 42300
					},
					{
						group: 'Dataset 2',
						key: 'Restocking',
						value: 21400
					},
					{
						group: 'Dataset 2',
						key: 'Misc',
						value: 0
					},
					{
						group: 'Dataset 3',
						key: 'Qty',
						value: 41200
					},
					{
						group: 'Dataset 3',
						key: 'More',
						value: 18400
					},
					{
						group: 'Dataset 3',
						key: 'Sold',
						value: 34210
					},
					{
						group: 'Dataset 3',
						key: 'Restocking',
						value: 1400
					},
					{
						group: 'Dataset 3',
						key: 'Misc',
						value: 42100
					},
					{
						group: 'Dataset 4',
						key: 'Qty',
						value: 22000
					},
					{
						group: 'Dataset 4',
						key: 'More',
						value: 1200
					},
					{
						group: 'Dataset 4',
						key: 'Sold',
						value: 9000
					},
					{
						group: 'Dataset 4',
						key: 'Restocking',
						value: 24000,
						audienceSize: 10
					},
					{
						group: 'Dataset 4',
						key: 'Misc',
						value: 3000,
						audienceSize: 10
					}
				]}
				options={{
					title: 'Line (discrete)',
					axes: {
						bottom: {
							title: '2019 Annual Sales Figures',
							mapsTo: 'key',
							scaleType: 'labels'
						},
						left: {
							mapsTo: 'value',
							title: 'Conversion rate',
							scaleType: 'linear'
						}
					},
					height: '400px'
				}}
			/>
		</div>

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
