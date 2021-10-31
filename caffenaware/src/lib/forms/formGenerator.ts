import { drinkForms, initForm } from './formTypes';
import type { drinkForm } from './formTypes';
import { get } from 'svelte/store';
import { drinkCount } from '$lib/store/store';
import { onDestroy, tick } from "svelte/internal";

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
			dttm: new Date()
		}
		drinkForms.update((n) => {
			n.push(theForm as drinkForm);
			return n
		});
	}

	console.log(drinkForms);

	return drinkForms;

}

export async function remover() {

	tick();

	await drinkForms.update((n) => {
		n.pop();
		return n;
	})
}
