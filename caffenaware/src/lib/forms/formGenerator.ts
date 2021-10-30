import { drinkForms, initForm } from './formTypes';
import type { drinkForm } from './formTypes';
import { get } from 'svelte/store';
import { drinkCount } from '$lib/store/store';

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

export function remover() {
	const drinkNum = get(drinkCount);

	drinkForms.update((n) => {
		n.pop();
		return n;
	})
}
