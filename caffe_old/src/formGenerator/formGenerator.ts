export function formGenerator(dc:number) {
  let formIDs: string[] = new Array();

  
  for (let index = 0; index < dc; index++) {
    let tmpName = "drink" + (index + 1)

    formIDs.push(tmpName)
  }

  console.log(formIDs)
  return formIDs
}