export function formGenerator(drinkCount:number) {
  let formIDs: string[]

  
  for (let index = 0; index < drinkCount; index++) {
    let tmpName = "drink" + (index + 1)

    formIDs.push(tmpName)
  }

  return formIDs
}