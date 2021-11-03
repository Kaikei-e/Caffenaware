import { writable } from "svelte/store"
import dayjs from 'dayjs'

export const format = 'YYYY-MM-DDTHH:mm'
export let date = new Date()

let internal
const ISO3339 = date.toISOString();

const input = (x) => (internal = dayjs(x).format(format))
const output = (x) => (date = dayjs(x, format).toDate())

input(date)
output(internal)

export interface drinkForm {
  No: number
  method: theMethods 
  caffeine : number
  drinkMl: number
  dttm: string
}

export type drinkFormRes = {
  caffeine : number
  dttm: string
}



export interface drinkFormHTML {
  No: number
  method: HTMLSelectElement
  caffeineMg : HTMLInputElement
  dttm: HTMLInputElement
}


export const initForm: drinkForm = {
  No : 1,
  caffeine : 1,
  method : "1",
  drinkMl: 1,
  dttm : internal.toString(),
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
