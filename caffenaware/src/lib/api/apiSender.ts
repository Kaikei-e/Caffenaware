import type { drinkForm } from "$lib/forms/formTypes";
import { writable } from "svelte/store";

type justRes = {
  method: string;
  caffeine: string;
  dttm: string;
}


export const initData: justRes = {
  method: "1",
  caffeine: "100",
  dttm: "2021-11-03 20:20"
}

export const resTest = writable<justRes[]>();

export const resData = writable<justRes>(initData);

//export let recievedData = writable<string>("{err: bad request}");

export async function sendData(dForms: drinkForm[]) {
  const hostname = "http://localhost:9000";

  const res = await fetch(hostname + '/api/calculate', {

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

    const rData: justRes = {
      method: data.method,
      caffeine: data.caffeine,
      dttm: data.datetime,
      
    }
    
  } else {
    console.log("xxxxxxxxxxxxxxxxxxxxxx");
  }
}