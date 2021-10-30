<script lang="ts">
  import { numValidator } from "./validator/numVdalidator.js";
  import { nullChecker } from "./validator/nullChecker.js";
  import { formGenerator } from "./formGenerator/formGenerator.js";

  import {
    selectTextOnFocus,
    blurOnEscape,
  } from "../src/validator/inputDirectives.js";

  $: isOverflowed = false;
  $: isUndered = false;
  $: dateNow = Date.now();
  $: formArr = formGenerator(drinkCount);

  let calMethod = "Method :";
  let caffeineMg = "Caffeine: ";
  let formDescription = "Enter the methods, caffeine in mg and datetime."

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
  <div class="bg-img">
    <div class="inputForm theOpacity">
      <div class="countNum">How many bottles did you drink? : {drinkCount}</div>
      {#if isOverflowed}
        <p class="maxWarning">You could calculate only 10 drinks at once! :)</p>
      {:else if isUndered}
        <p class="maxWarning">The drink number must be greater than 0! :)</p>
      {/if}
      <form class="firstForm" on:submit={numVali}>
        <label for="status">Number of drinks</label>
        <input
          type="number"
          required
          placeholder="Enter here !"
          bind:value={drinkCount}
          style="border-radius: 10px;"
          on:keyup={realTimeNChecker}
          on:blur={numVali}
          use:selectTextOnFocus
          use:blurOnEscape
        />
      </form>
      <button class="countUp" on:click={() => countUp(drinkCount)}>
        +1 drink :)
      </button>
      <button class="countUp" on:click={() => countDown(drinkCount)}>
        -1 drink :)
      </button>
      <br />
    </div>

    <div class="formDiscription theOpacity">
      <p>{formDescription}</p>
    </div>

    <form action="submit">
      <ul class="theOpacity">
        {#each formArr as name, i}
          <li class="drinkDetails">
            {i + 1} : {name}
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>{calMethod}</label>
            <input
              id="{name}-method"
              type="number"
              max="2"
              min="1"
              value="1"
              required
              use:selectTextOnFocus
              use:blurOnEscape
              style="border-radius: 10px;"
            />
            <!-- svelte-ignore a11y-label-has-associated-control -->
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
              style="border-radius: 10px;"
            />
            <input
              id="{name}-time"
              type="datetime-local"
              required
              style="border-radius: 10px;"
            />
          </li>
        {/each}
        <input type="submit" class="submit" />
      </ul>
    </form>
  </div>
</main>

<style>
  .bg-img {
    background-image: url("../imgs/coffee2.jpg");
    background-size: cover;
    width: 1980px;
    height: 1200px;
  }
  .countNum {
    color: rgba(85, 52, 14, 0.8);
    font-size: 20px;
    font-weight: bold;
  }
  .inputForm {
    text-align: center;
  }
  .firstForm {
    margin: 10px;
    border-radius: 20px;
  }
  .countUp {
    border-radius: 20px;
    background-color: sienna;
    color: antiquewhite;
    font-weight: bold;
    text-align: center;
  }

  .submit {
    margin: 20px;
    border-radius: 20px;
    background-color: sienna;
    color: antiquewhite;
    font-weight: bold;
    text-align: center;
  }

  .maxWarning {
    color: rgb(91, 124, 0);
    font-size: 20px;
    font-weight: bold;
  }

  .theOpacity {
    padding: 30px;
    background-color: rgb(202, 202, 202, 0.8);
  }

  .formDiscription{
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: rgb(121, 52, 20);
  }
  .drinkDetails {
    font-size: 20px;
    font-weight: 600;
    color: rgb(121, 52, 20);
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
