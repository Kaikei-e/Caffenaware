import { drinkForms, initForm } from './formTypes';
import type { drinkForm } from "./formTypes";
import { get } from "svelte/store";
import { drinkCount } from '$lib/store/store';


export function formGenerator() {
	const drinkNum  = get(drinkCount)

	if (drinkNum === 0) {
		drinkForms.update(n => n.push(initForm));
	} else {
		for (let index = 0; index < drinkNum; index++) {
		
			const theForm:drinkForm = {
				No: index,
				method: "1",
				caffeineMg: 1,
				dttm: new Date()
			} 
	
			drinkForms.update(n => n.push(theForm))			
		}
			return drinkForms;
	}	
	

	console.log(drinkForms)

	return;
}
