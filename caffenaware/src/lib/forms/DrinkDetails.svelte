<script lang="ts">
	import { selectTextOnFocus, blurOnEscape } from '$lib/validators/inputDirective';
	import type { drinkForm } from "./formTypes";


	let calMethod = 'Method: ';
	let caffeineMg = 'Caffeine: ';

	export let dForms: drinkForm[];
</script>

{#each dForms as theForm (theForm.No)}
	<li class="drinkDetails m-3">
		{theForm.No + "1"} :
		<label>{calMethod}</label>
		<select id="{theForm.No}-method" value="1" required class="text-gray-700 rounded-lg bg-white">
			<option value={theForm.method}>{theForm.method}</option>
		</select>
		<label>{caffeineMg}</label>
		<input
			id="{theForm.No}-caffeine"
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
			id="{theForm.No}-time"
			type="datetime-local"
			required
			class=" bg-white border-white text-gray-700 rounded-lg"
			bind:this={theForm.dttm}
		/>
	</li>
{/each}
