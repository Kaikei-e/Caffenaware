import { dForm, initForm } from './formTypes';
import type { drinkForm } from "./formTypes";
import { drinkCount } from "$lib/store/store";
import { get } from "svelte/store";


export function formGenerator(drinkCount) {
	console.log("/////////////////////")
	const length = get(drinkCount)


	if (dForm.length == 0) {
		dForm.push(initForm);
	} else {
		for (let index = 0; index < length; index++) {
		
			const theForm:drinkForm = {
				No: get(drinkCount),
				method: "1",
				caffeineMg: 1,
				dttm: new Date()
			} 
	
			dForm.push(theForm)			
		}
			return dForm;
	}	
	

	console.log(dForm)

	return;
}
