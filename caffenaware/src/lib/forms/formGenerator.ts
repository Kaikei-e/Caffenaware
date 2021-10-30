import { dForm, initForm } from './formTypes';

export function formGenerator() {
	if (dForm.length == 0) {
		dForm.push(initForm);
	} else {
		dForm.push(initForm);
	}

	return dForm;
}
