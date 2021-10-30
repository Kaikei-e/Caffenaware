<script lang="ts">
	import { numValidator } from '$lib/validators/numValidator';
	import { nullChecker } from '$lib/validators/nullChecker';
	import { blurOnEscape, selectTextOnFocus } from '$lib/validators/inputDirective';
	import { drinkCount, isOverflowed, isUndered } from '$lib/store/store';

	import CountUpDown from '$lib/forms/CountUpDown.svelte';
	import { get } from 'svelte/store';
	import DrinkDetails from '$lib/forms/DrinkDetails.svelte';

	let dForm;

	function realTimeNChecker() {
		let nullChObj = nullChecker(get(drinkCount));

		drinkCount.update((n) => (nullChObj.drinkNum = n));
		$isOverflowed = nullChObj.isOverflowed;
	}

	function numVali() {
		let validatedNum = numValidator(get(drinkCount));

		drinkCount.update((n) => (validatedNum.drink = n));
		$isOverflowed = validatedNum.isOverflowed;
	}

	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	}

	function generateDrinkList() {
		drinkCount;
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
			<form class="firstForm m-4 text-gray-100" on:submit={numVali}>
				<label for="status" class=" text-xl font-bold">Number of drinks</label>
				<input
					type="number"
					required
					class=" text-gray-700 rounded-md px-4 py-2"
					placeholder="Enter here !"
					bind:value={$drinkCount}
					on:keyup={realTimeNChecker}
					on:blur={numVali}
					use:selectTextOnFocus
					use:blurOnEscape
				/>
			</form>
			<CountUpDown />
		</div>
	</div>

	<form action="submit" class="text-gray-100">
		<ul>
			<DrinkDetails />
			<input
				type="submit"
				class="submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700"
				value="Submit"
			/>
		</ul>
	</form>
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
		font-size: 20px;
		font-weight: bold;
	}
	.inputForm {
		text-align: center;
	}
	.firstForm {
		margin: 20px;
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
