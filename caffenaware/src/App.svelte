<script>
	let count = 0;
	function countUp(){
		return count++
	}
</script>

<main>
  <div class="bg-img">
		<div class="countNum theOpacity">{count}</div>
		<button on:click={countUp}>Press me!!</button>
	</div>
</main>

<style>

  .bg-img {
		background-image: url("../imgs/coffee2.jpg");
		background-size: cover;
		width: 1980px;
		height: 1200px;
  }
	.countNum{
		color: crimson;
		font-size: large;
	}

	.theOpacity{
		background-color: rgb(143, 143, 143);
    opacity: 0.8;
	}

  @media (min-width: 640px) {
    main {
      max-width: 4096px;
    }
  }
</style>
