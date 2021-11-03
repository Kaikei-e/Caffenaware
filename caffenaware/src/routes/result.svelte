<script lang="ts">
	import { resStruct } from '$lib/api/apiSender';
	import type { drinkFormRes } from '$lib/forms/formTypes';
	import { get } from 'svelte/store';
	import { Chart } from 'chart.js';
	import { onMount } from 'svelte';

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

	let ctx;
	let chartValues = [];
	let chartLabels = [];

	for (let index = 0; index < drinks.length; index++) {
		const element = drinks[index];

		chartValues.push(element.caffeine);
		chartLabels.push(element.dttm);
	}

	let chartCanvas;

	onMount(async () => {});
  function renderChart() {
    let ctx = document.getElementById("myChart").getContext("2d");
    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },
      options: {}
    });
  }
</script>

<main>
	<div class="backImage">
		<canvas id="myChart" />
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
