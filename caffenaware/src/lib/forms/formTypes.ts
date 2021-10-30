import { writable } from "svelte/store"

export interface drinkForm {
  No: number | HTMLInputElement
  method: theMethods 
  caffeineMg : number | HTMLInputElement
  dttm: Date | HTMLInputElement
}


export interface drinkFormHTML {
  No: number
  method: HTMLSelectElement
  caffeineMg : HTMLInputElement
  dttm: HTMLInputElement
}


export const initForm: drinkForm = {
  No : 1,
  caffeineMg : 1,
  method : "1",
  dttm : new Date(),
};

const dForms : drinkForm[] = [];


export const drinkForms = writable(dForms)

drinkForms.update(n => {n.push(initForm as drinkForm);
return n})

const methods = {
  "1" : "1",
  "2" : "2",
} as const

type theMethods = typeof methods[keyof typeof methods]
