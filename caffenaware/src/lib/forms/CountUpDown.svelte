<script lang="ts">
	export let isOverflowed = false;
	export let isUndered = false;
	export let drinkCount = 1;

	function countUp(num) {
		if (num >= 10) {
			isOverflowed = true;
			return (drinkCount = 10);
		} else {
			isOverflowed = false;
		}

		return drinkCount++;
	}

	function countDown(num) {
		if (num <= 1) {
			isUndered = true;
			return (drinkCount = 1);
		} else {
			isUndered = false;
		}

		return (drinkCount -= 1);
	}
</script>

<div>
	<div class="flex flex-wrap justify-center items-baseline text-gray-700">
		<button
			class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5"
			on:click={() => countUp(drinkCount)}
		>
			+1 drink :)
		</button>
		<button
			class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5"
			on:click={() => countDown(drinkCount)}
		>
			-1 drink :)
		</button>
	</div>
	<br />
</div>
