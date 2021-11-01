import type { drinkForm } from "$lib/forms/formTypes";
import { writable } from "svelte/store";

export let recievedData = writable<string>("");

export async function sendData(dForms: drinkForm[]) {
  console.log(JSON.stringify(dForms));


  const res = await fetch('/api/calculate', {

    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dForms)
  });


  if (res.ok) {
    console.log("///////////////////////");
    const data = await res.json();

    console.log(data);

    recievedData = data;

  }else{
    console.log("xxxxxxxxxxxxxxxxxxxxxx");
  }
}