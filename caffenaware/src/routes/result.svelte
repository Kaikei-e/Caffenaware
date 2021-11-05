<script lang="ts">
	import { resStruct } from '$lib/api/apiSender';
	import type { drinkFormRes } from '$lib/forms/formTypes';
	import { get } from 'svelte/store';

	//import { Chart, ChartComponent, registerables } from 'chart.js';
	import Line from "svelte-chartjs/src/Line.svelte"
	import { Chart, registerables } from "chart.js";

	//import 'chartjs-adapter-moment'; // or another adapter to avoid moment
	Chart.register(...registerables);

	import '@carbon/charts/styles.min.css';
	import 'carbon-components/css/carbon-components.min.css';
	import { LineChart } from '@carbon/charts-svelte';

	let ctx;
	let chartValues = [];
	let chartLabels = [];

	let jsonObjs = get(resStruct).res;
	let drinks: Array<drinkFormRes> = [];

	for (let index = 0; index < jsonObjs.length; index++) {
		const element = jsonObjs[index];

		let dStruct: drinkFormRes = {
			caffeine: element['caffeine'],
			dttm: element['dttm']
		};
		drinks.push(dStruct);
	}

	for (let index = 0; index < drinks.length; index++) {
		const element = drinks[index];

		chartValues.push(element.caffeine);
		chartLabels.push(element.dttm);
	}

	///////////////////////////////////////////////////
	const step = chartLabels.length / 200;

	let canvasChart;
	//onMount(async() => {
	ctx = canvasChart.getContext('2d');
	let chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: chartLabels,
			datasets: chartValues
		},
		options: {
			responsive: true,
			scales: {
				y: {
					ticks: {
						stepSize: step
					}
				}
			}
		}
	});
	//})


	let dataLine = {
		labels: chartLabels,
		datasets: [
			{
				label: "Caffeine", 
				fill: true,
				lineTension: 0.3,
				backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
				data: chartValues
			}
		]
	}
</script>

<main>
	<div class="backImage">


		<!--- 
		<canvas bind:this={canvasChart} id="chart" />
		<Line data={dataLine} options={{responsive: true}}/>

		--->

		<LineChart data={[{ group: 'Caffeine', key: chartLabels, value: chartValues }]} 
		options={{
		"title": "Line (discrete)",
		"axes": {
			"bottom": {
				"title": "2019 Annual Sales Figures",
				"mapsTo": "key",
				"scaleType": "labels"
			},
			"left": {
				"mapsTo": "value",
				"title": "Conversion rate",
				"scaleType": "linear"
			}
		},
		"height": "400px"
	}}/>	
	</div>
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
