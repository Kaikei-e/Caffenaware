import { writable } from "svelte/store";

export const drinkCount = writable(1);
export const isOverflowed = writable(false);
export const isUndered = writable(false);
