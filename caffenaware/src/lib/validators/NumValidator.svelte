<script lang="ts">
import { drinkCount, isOverflowed } from "$lib/store/store";
import { get } from "svelte/store";

class validatedNum {
  drink: number;
  isOverflowed : boolean
}


export function numValidator() {
    $isOverflowed = false;

    if (drinkCount === null || typeof drinkCount === "undefined") {
      $drinkCount = 1;
      return;
    }

    if (get(drinkCount) >= 10) {
      $drinkCount = 10
      $isOverflowed = true;

      return;
    } 

    if (get(drinkCount) <= 0) {
      drinkCount.set(1)
      $isOverflowed;

      return;
    }
  }
</script>

