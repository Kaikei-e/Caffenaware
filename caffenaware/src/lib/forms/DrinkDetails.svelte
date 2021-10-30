<script lang="ts">
	import { selectTextOnFocus, blurOnEscape } from '$lib/validators/inputDirective';
	import { dForm } from "$lib/forms/formTypes";

  
  let calMethod = "Method :";
  let caffeineMg = "Caffeine: ";


</script>

{#each dForm as theForm, i}
	<li class="drinkDetails m-3">
		{i + 1} :
		<label>{calMethod}</label>
		<select
			id="{theForm.No}-method"
			value="1"
			required
			class="text-gray-700 rounded-lg bg-white"
			bind:this={theForm.method[1]}
		>
			<option value="1">Method1</option>
			<option value="2">Method2</option>
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
