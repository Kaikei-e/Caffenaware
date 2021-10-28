<script lang="ts">
	import { selectTextOnFocus, blurOnEscape } from '$lib/validators/inputDirective';
  import { formGenerator } from "$lib/forms/formGenerator";
  import { dForm } from "$lib/forms/formTypes"

  let dForm;
  export let drinkCount = 1;

  let formArr = formGenerator(drinkCount);
  
  let calMethod = "Method :";
  let caffeineMg = "Caffeine: ";

</script>

{#each formArr as name, i}
	<li class="drinkDetails m-3">
		{i + 1} :
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>{calMethod}</label>
		<select
			id="{name}-method"
			value="1"
			required
			class="text-gray-700 rounded-lg bg-white"
			bind:this={dForm[i].method}
		>
			<option value="1">Method1</option>
			<option value="2">Method2</option>
		</select>
		<label>{caffeineMg}</label>
		<input
			id="{name}-caffeine"
			type="number"
			value="1"
			min="1"
			max="1000"
			required
			use:selectTextOnFocus
			use:blurOnEscape
			class="text-gray-700 rounded-lg bg-white"
			bind:this={dForm[i].caffeineMg}
		/>
		<label>mg, </label>
		<label>Date time:</label>
		<input
			id="{name}-time"
			type="datetime-local"
			required
			class=" bg-white border-white text-gray-700 rounded-lg"
			bind:this={dForm[i].dttm}
		/>
	</li>
{/each}
