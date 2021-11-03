<script lang="ts">
	import type { drinkForm } from './formTypes';
	import { selectTextOnFocus, blurOnEscape } from '$lib/validators/inputDirective';

	export let drinkForms: drinkForm[];
	export let index;
	export let theForm: drinkForm;

	let calMethod = 'Method: ';
	let caffeineMg = 'Caffeine: ';
</script>

<div>
	<li>
		{theForm.No} :

		<label>{calMethod}</label>
		<select
			id={theForm.No.toString()}
			name="method"
			required
			class="text-gray-700 rounded-lg bg-white"
			bind:value={theForm.method}
		>
			<option value="1">1</option>
			<option value="2">2</option>
		</select>
		<label>{caffeineMg}</label>
		<input
			id="{theForm.No}-caffeine"
			name="caffeine"
			type="number"
			min="1"
			max="1000"
			required
			use:selectTextOnFocus
			use:blurOnEscape
			class="text-gray-700 rounded-lg bg-white"
			bind:value={theForm.caffeine}
		/>
		<label>mg, </label>
		<label>Drink(ml)</label>
		<input
			id="{theForm.No}-drinkMl"
			name="drinkMl"
			type="number"
			min="1"
			max="1000"
			required
			use:selectTextOnFocus
			use:blurOnEscape
			class="text-gray-700 rounded-lg bg-white"
			bind:value={theForm.drinkMl}
		/>
		<label>ml, </label>
		<label>Date time:</label>
		<input
			id="{theForm.No}-time"
			name="datetime"
			type="datetime-local"
			required
			class=" bg-white border-white text-gray-700 rounded-lg"
			bind:value={theForm.dttm}
		/>
	</li>
</div>

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
