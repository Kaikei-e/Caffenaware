
export type drinkFormHTML = {
  No: number
  method: HTMLSelectElement
  caffeineMg : HTMLInputElement
  dttm: HTMLInputElement
}



/*
export type drinkForm = {
  No: number
  method: theMethods
  caffeineMg : number
  dttm: Date
}

const methods = {
  "1" : 1,
  "2" : 2,
} as const

type theMethods = typeof methods[keyof typeof methods]

*/