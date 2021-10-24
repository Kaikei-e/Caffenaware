export function formGenerator(dc:number) {
  const formIDs: string[] = [];

  
  for (let index = 0; index < dc; index++) {
    const tmpName = "drink" + (index + 1)

    formIDs.push(tmpName)
  }

  console.log(formIDs)
  return formIDs
}