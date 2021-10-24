class validatedNum {
  drink: number;
  isOverflowed : boolean
}

export function numValidator(drinkNum: number) {
    let isOverflowed = false;
    const vNum = new validatedNum();

    if (drinkNum === null || typeof drinkNum === "undefined") {
      vNum.drink = (drinkNum = 1);
      vNum.isOverflowed = isOverflowed;
      
      return vNum;
    }

    if (drinkNum >= 10) {
      drinkNum = 10
      isOverflowed = true;

      vNum.drink = drinkNum;
      vNum.isOverflowed = isOverflowed;

      return vNum;
    } 

    if (drinkNum <= 0) {
      vNum.drink = 1;
      vNum.isOverflowed = isOverflowed;

      return vNum;
    }
  }
