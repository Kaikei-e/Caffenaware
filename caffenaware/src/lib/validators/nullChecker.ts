class nullCheckedObj{
  drinkNum: number;
  isOverflowed: boolean;
}

export function nullChecker(drinkNum: number) {
  let isOverflowed = false;
  const nullChObj = new nullCheckedObj();

  if (drinkNum === null) {
    nullChObj.drinkNum = (drinkNum = 1);
    nullChObj.isOverflowed = isOverflowed;

    return nullChObj
  }

  if (drinkNum >= 10) {
    isOverflowed = true;
    nullChObj.drinkNum = (drinkNum = 10);
    nullChObj.isOverflowed = isOverflowed;
    return nullChObj;
  } else {
    isOverflowed = false;
  }

  
  // eslint-disable-next-line no-self-assign
  nullChObj.drinkNum = (drinkNum = drinkNum)
  nullChObj.isOverflowed = isOverflowed;

  return nullChObj;
}
