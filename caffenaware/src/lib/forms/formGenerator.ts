import { drinkForms, initForm } from './formTypes';
import type { drinkForm } from './formTypes';
import { get } from 'svelte/store';
import { drinkCount } from '$lib/store/store';
import { tick } from "svelte/internal";



export function formGenerator() {
	const drinkNum = get(drinkCount);

	if (drinkNum === 0) {
		drinkForms.update((n) => {
			n.push(initForm);
			return n;
		});
	} else {
		const theForm: drinkForm = {
			No: drinkNum,
			method: '1',
			caffeineMg: 1,
			dttm: dateString
		}
		drinkForms.update((n) => {
			n.push(theForm as drinkForm);
			return n
		});
	}

	console.log(drinkForms);

	return drinkForms;

}

export function remover() {

	tick();

	drinkForms.update((n) => {
		console.log(nowS);
		console.log(n.pop());
		n.pop();
		return n;
	})
}
