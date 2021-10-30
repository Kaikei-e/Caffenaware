<script lang="ts">
	import { drinkCount, isOverflowed, isUndered } from '$lib/store/store';
	import { formGenerator } from './formGenerator';

	function countUp() {
		if ($drinkCount >= 10) {
			$isOverflowed = true;
			return ($drinkCount = 10);
		} else {
			$isOverflowed = false;
		}

		$drinkCount += 1;

		return formGenerator();
	}

	function countDown() {
		console.log(drinkCount);

		if ($drinkCount <= 1) {
			$isUndered = true;
			return ($drinkCount = 1);
		} else {
			$isUndered = false;
		}
		return ($drinkCount -= 1);
	}
</script>

<div>
	<div class="flex flex-wrap justify-center items-baseline text-gray-700">
		<button
			class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md"
			on:click={() => countUp()}
		>
			+1 drink :)
		</button>
		<button
			class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md"
			on:click={() => countDown()}
		>
			-1 drink :)
		</button>
	</div>
	<br />
</div>

<style>
	.countUp {
		font-weight: bold;
	}
</style>
