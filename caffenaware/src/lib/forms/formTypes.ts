export type drinkForm = {
  No: number
  method: theMethods
  caffeineMg : number
  dttm: Date
}


export type drinkFormHTML = {
  No: number
  method: HTMLSelectElement
  caffeineMg : HTMLInputElement
  dttm: HTMLInputElement
}


let initForm: drinkFormHTML;
initForm.No = 0;
initForm.caffeineMg = HTMLInputElement.arguments(1);
initForm.method = HTMLSelectElement.arguments(1);
initForm.dttm = HTMLInputElement.arguments(Date.now())

export let dForm: drinkFormHTML[];

dForm.push(initForm)


/*
export type drinkForm = {
  No: number
  method: theMethods
  caffeineMg : number
  dttm: Date
}
*/


const methods = {
  "1" : 1,
  "2" : 2,
} as const

type theMethods = typeof methods[keyof typeof methods]
