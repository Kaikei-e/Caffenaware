<script lang="ts">
	import type { drinkForm } from './formTypes';

	export let theForm: drinkForm;

	let calMethod = 'Method: ';
	let caffeineMg = 'Caffeine: ';
</script>

<li id={theForm.No.toString()}>
	{theForm.No} :
	<label>{calMethod}</label>
	<select
		id={theForm.No.toString()}
		name="method"
		value="1"
		required
		class="text-gray-700 rounded-lg bg-white"
		bind:this={theForm.method}
	>
		<option value="1">1</option>
		<option value="2">2</option>
	</select>
	<label>{caffeineMg}</label>
	<input
		id="{theForm.No}-caffeine"
		name="caffeine"
		type="number"
		value="1"
		min="1"
		max="1000"
		required
		use:selectTextOnFocus
		use:blurOnEscape
		class="text-gray-700 rounded-lg bg-white"
		bind:this={theForm.caffeineMg}
	/>
	<label>mg, </label>
	<label>Date time:</label>
	<input
		id="{theForm.No}-time cal"
		name="datetime"
		type="datetime-local"
		required
		class=" bg-white border-white text-gray-700 rounded-lg"
		bind:this={theForm.dttm}
	/>
</li>

<style>
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

	li {
		margin: 10px;
	}
</style>
