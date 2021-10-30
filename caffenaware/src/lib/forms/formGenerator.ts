import { drinkCount } from '$lib/store/store';
import { dForm, initForm } from './formTypes';
import { get } from 'svelte/store'

export function formGenerator() {
	if (dForm.length == 0) {
		dForm.push(initForm);
	} else {
		for (let index = 0; index < get(drinkCount); index++) {
			dForm.push(initForm);

		}
	}
}
