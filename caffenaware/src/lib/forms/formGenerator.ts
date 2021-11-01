import { drinkForms, initForm } from './formTypes';
import type { drinkForm } from './formTypes';
import { get } from 'svelte/store';
import { drinkCount } from '$lib/store/store';
import { tick } from "svelte/internal";
import dayjs from 'dayjs'

export const format = 'YYYY-MM-DDTHH:mm'
export let date = new Date()

let internal

const input = (x) => (internal = dayjs(x).format(format))
const output = (x) => (date = dayjs(x, format).toDate())

input(date)
output(internal)


export function formGenerator() {
	const drinkNum = get(drinkCount);

	if (drinkNum === 1) {
		drinkForms.update((n) => {
			n.push(initForm);
			return n;
		});

		return drinkForms;

	} else {

	
		const theForm: drinkForm = {
			No: drinkNum,
			method: '1',
			caffeineMg: 1,
			dttm: internal
		}
		drinkForms.update((n) => {
			n.push(theForm as drinkForm);
			return n
		});


	}

	console.log(internal);
	console.log(get(drinkForms));

	return drinkForms;

}

export function remover() {

	tick();

	drinkForms.update((n) => {
		console.log(n.pop());
		n.pop();
		return n;
	})
}
