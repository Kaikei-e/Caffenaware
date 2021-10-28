<script lang="ts">

import { now } from "svelte/internal";
  import { numValidator } from "$lib/validators/numValidator";
  import { nullChecker } from "$lib/validators/nullChecker";
  import { formGenerator } from "$lib/forms/formGenerator";
  import type { drinkForm } from "$lib/forms/formTypes"

  import {
    selectTextOnFocus,
    blurOnEscape,
  } from "$lib/validators/inputDirective";

  $: drinkCount = 1;
  $: isOverflowed = false;
  $: isUndered = false;
  $: formArr = formGenerator(drinkCount);

  let dForm: drinkForm[];

  let calMethod = "Method :";
  let caffeineMg = "Caffeine: ";

  function realTimeNChecker() {
    let nullChObj = nullChecker(drinkCount);

    drinkCount = nullChObj.drinkNum;
    isOverflowed = nullChObj.isOverflowed;
  }

  function numVali() {
    let validatedNum = numValidator(drinkCount);

    drinkCount = validatedNum.drink;
    isOverflowed = validatedNum.isOverflowed;
  }

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
      <div class="countNum text-xl2 text-gray-100">How many bottles did you drink? : {drinkCount}</div>
      {#if isOverflowed}
        <p class="maxWarning">You could calculate only 10 drinks at once! :)</p>
      {:else if isUndered}
        <p class="maxWarning">The drink number must be greater than 0! :)</p>
      {/if}
      <form class="firstForm m-4 text-gray-100" on:submit={numVali}>
        <label for="status" class=" text-xl font-bold">Number of drinks</label>
        <input
          type="number"
          required
          class=" text-gray-700 rounded-md px-4 py-2"
          placeholder="Enter here !"
          bind:value={drinkCount}
          on:keyup={realTimeNChecker}
          on:blur={numVali}
          use:selectTextOnFocus
          use:blurOnEscape
        />
      </form>
      <div class="flex flex-wrap justify-center items-baseline text-gray-700">

        <button class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5" on:click={() => countUp(drinkCount)}> +1 drink :) </button>
        <button class="countUp bg-primary rounded-lg text-center px-4 py-2 m-5" on:click={() => countDown(drinkCount)}> -1 drink :) 
        </button>
        
      </div><br />
    </div>
		
	</div>

	<form action="submit" class="text-gray-100">
		<ul>
			{#each formArr as name, i}
				<li class="drinkDetails m-3">
					{i + 1} : 
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label>{calMethod}</label>
          <select id="{name}-method"
          value="1"
          required
          class="text-gray-700 rounded-lg bg-white"
          bind:this="{dForm[i].method}"
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
            bind:this="{dForm[i].caffeineMg}"
					/>
          <label>mg, </label>
          <label>Date time:</label>
					<input id="{name}-time" type="datetime-local" required class=" bg-white border-white text-gray-700 rounded-lg"
          bind:this="{dForm[i].dttm}"
          />
				</li>
			{/each}
			<input type="submit" class="submit px-4 py-2 bg-primary border-white rounded-lg text-gray-700" value="Submit"/>
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
  .countUp {
    font-weight: bold;
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
