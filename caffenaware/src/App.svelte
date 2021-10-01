<script>
  let drinkCount = 1;
  function countUp() {
    return drinkCount++;
  }
</script>

<main>
  <div class="bg-img">
    <div class="inputForm theOpacity">
      <div class="countNum"> How many bottles did you drink? : {drinkCount} </div>
      <form class="firstForm">
        <input type="number" maxlength="1" bind:value={drinkCount} />
      </form>
      <button class="countUp" on:click={countUp}>  +1 drink :) </button>
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
    margin: 0px;
    border-radius: 20px;
  }
	.countUp{
    border-radius: 20px;
    background-color: sienna;
		color: antiquewhite;
		font-weight: bold;
		text-align: center;
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
