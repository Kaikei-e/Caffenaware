import { writable } from "svelte/store"

export interface drinkForm {
  No: number
  method: theMethods
  caffeineMg : number
  dttm: Date
}


export interface drinkFormHTML {
  No: number
  method: HTMLSelectElement
  caffeineMg : HTMLInputElement
  dttm: HTMLInputElement
}


export const initForm: drinkForm = {
  No : 0,
  caffeineMg : 1,
  method : 1,
  dttm : new Date()
};

export const dForm : drinkForm[] = [];
writable(dForm)

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
