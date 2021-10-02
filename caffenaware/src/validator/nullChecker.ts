export function nullChecker(drinkNum: number) {
  let isOverflowed = false;

  if (drinkNum === null) {
    return (drinkNum = 1), isOverflowed;
  }

  if (drinkNum >= 10) {
    isOverflowed = true;
    return (drinkNum = 10), isOverflowed;
  } else {
    isOverflowed = false;
  }

  
  return (drinkNum = drinkNum), isOverflowed;
}
