<script lang="ts">
	import { drinkCount, isOverflowed, isUndered } from '$lib/store/store';

	import CountUpDown from '$lib/forms/CountUpDown.svelte';
	import DrinkDetails from '$lib/forms/DrinkDetails.svelte';
	import { drinkForms } from '$lib/forms/formTypes';
	import { resStruct, sendData } from '$lib/api/apiSender';
	import { get } from 'svelte/store';
	import dayjs from 'dayjs';
	import { goto } from '$app/navigation';

	const info1 =
		'Mode1 calculates the amount of caffeine in mg per 100 ml from the total amount of the drink';

	const info2 = 'Mode2 can calculate only the total amount of caffeine in mg.';

	async function onSubmit() {
		for (let index = 0; index < $drinkForms.length; index++) {
			const elem = $drinkForms[index];
			elem.dttm = dayjs(elem.dttm).format('YYYY-MM-DDTHH:mm:ssZ');
		}

		await sendData($drinkForms);

		if ($resStruct) {
			await goto('/result');
		} else {
			console.error('Bad request, try it again!');
		}
	}

	function postTest() {
		console.log(get(drinkForms));
		sendData($drinkForms);
	}
</script>

<main>
	<div class="backImage" />

	<div class="inputForm">
		<div class=" flex flex-col justify-center">
			<div class="countNum text-xl2 text-gray-100">
				How many bottles did you drink? : {$drinkCount}
			</div>
			{#if $isOverflowed}
				<p class="maxWarning">You could calculate only 10 drinks at once! :)</p>
			{:else if $isUndered}
				<p class="maxWarning">The drink number must be greater than 0! :)</p>
			{/if}
			<CountUpDown />
			<p class=" text-xl text-gray-200 font-bold">{info1}</p>
			<p class=" text-xl text-gray-200 font-bold">{info2}</p>
		</div>
	</div>
	<form method="POST" class="text-gray-200 font-medium">
		<ul>
			<DrinkDetails />
			<button
				type="button"
				class="submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700"
				value="Submit"
				on:click={onSubmit}>Submit</button
			>
		</ul>
	</form>

	<br />

	<!---
	<div>
		<DrinkDetails />
		<button on:click="{postTest}">Test</button>
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

	.countNum {
		margin: 20px;
		font-size: 20px;
		font-weight: bold;
	}
	.inputForm {
		text-align: center;
	}
	.submit {
		font-weight: bold;
		text-align: center;
	}

	.maxWarning {
		color: rgb(59, 92, 10);
		font-size: 20px;
		font-weight: bold;
	}

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

	@media (min-width: 640px) {
		main {
			max-width: 4096px;
		}
	}
</style>
