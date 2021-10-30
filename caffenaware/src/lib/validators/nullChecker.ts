import { drinkCount, isOverflowed } from "$lib/store/store";
import { get } from "svelte/store";

export function nullChecker() {


  if (drinkCount === null) {
    drinkCount.update(n => n + 1)
    isOverflowed.set(false)

    return 
  }

  const drinkNum = get(drinkCount)

  if (drinkNum >= 10) {
    isOverflowed.set(true);
    drinkCount.set(10)
    return;
  } else {
    isOverflowed.set(false);
  }

  
  return;
}
