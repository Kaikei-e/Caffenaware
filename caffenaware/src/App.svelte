<script lang="ts">
  $: drinkCount = 1;
  $: isOverflowed = false;

  function countUp(num) {
    if (num >= 10) {
      isOverflowed = true;
      return (drinkCount = 10);
    }else{
      isOverflowed = false;
    }

    return drinkCount++;
  }

  function nullChecker(){
    console.log(drinkCount);
    if(drinkCount === null){
      return drinkCount = 1
    }

  }

  function numValidator() {
    
    if(drinkCount === null || typeof drinkCount === "undefined"){
      console.log("................")
      return drinkCount = 1;
    }


    if (drinkCount >= 10) {
      isOverflowed = true;
      return (drinkCount = 10);
    }else{
      isOverflowed = false;
    }


    if(drinkCount <= 0){
      return drinkCount = 1
    }



  }

  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
  }
</script>

<main>
  <div class="bg-img">
    <div class="inputForm theOpacity">
      <div class="countNum">How many bottles did you drink? : {drinkCount}</div>
      {#if isOverflowed}
        <p class="maxWarning">You could calculate only 10 drinks at once! :)</p>
      {/if}
      <form class="firstForm" on:submit={numValidator}>
        <label for="status">Number of drinks</label>
        <input
          type="number"
          required
          placeholder="Enter here !"
          bind:value={drinkCount}
          style="border-radius: 10px;"
          on:keyup={nullChecker}
          on:blur={numValidator}
        />
      </form>
      <button class="countUp" on:click={() => countUp(drinkCount)}>
        +1 drink :)
      </button>
      <br />
      <button type="submit" class="submit"> Submit!! </button>
    </div>
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
    padding: 20px;
    background-color: rgb(202, 202, 202);
    opacity: 0.6;
  }

  @media (min-width: 640px) {
    main {
      max-width: 4096px;
    }
  }
</style>
