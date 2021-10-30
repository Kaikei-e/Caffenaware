<script lang="ts">
	import { drinkCount, isOverflowed, isUndered } from "$lib/store/store";
	


	function countUp(num) {
		console.log("////////////////////////")
		if (num >= 10) {
			$isOverflowed = true;
			return ($drinkCount = 10);
		} else {
			$isOverflowed = false;
		}

		return drinkCount.update(n => n++)
	}

	function countDown(num) {
		if (num <= 1) {
			$isUndered = true;
			return ($drinkCount = 1);
		} else {
			$isUndered = false;
		}

		return drinkCount.update(n => n--)
	}
</script>

<div>
	<div class="flex flex-wrap justify-center items-baseline text-gray-700">
		<button
			class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md"
			on:click={() => countUp(drinkCount)}
		>
			+1 drink :)
		</button>
		<button
			class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5 shadow-md"
			on:click={() => countDown(drinkCount)}
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