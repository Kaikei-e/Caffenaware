

export function numValidator(drinkNum: number) {
    let isOverflowed = false;


    if (drinkNum === null || typeof drinkNum === "undefined") {
      return (drinkNum = 1, isOverflowed);
    }

    if (drinkNum >= 10) {
      let isOverflowed = true;
      return (drinkNum = 10, isOverflowed);
    } else {
      
    }

    if (drinkNum <= 0) {
      return (drinkNum = 1, isOverflowed);
    }
  }
