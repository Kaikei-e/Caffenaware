import type { drinkForm } from "$lib/forms/formTypes";
import { writable } from "svelte/store";

export type responseType = {
  loading: boolean,
  res: [],
}

export const defaultRes = {
  method: "1",
  caffeineMg: 1,
  dttm: "2021-11-3T20:10",
}

export const isSucess: responseType = {
  loading: false,
  res: []
}

export const resStruct = writable<responseType>(isSucess)


export async function sendData(dForms: drinkForm[]) {
  let resData;
  const hostname = "http://localhost:9000";

  await fetch(hostname + '/api/calculate', {

    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dForms)
  }).then(res => {
    if (!res.ok) {
      console.error("Response is bad. Server error : " + res)
    } else {
      resData = res;
    }
  }).catch(error => console.error("Can't get the response properly : " + error));



  if (resData.ok) {
    const data = await resData.json();

    const ress: responseType = {
      loading: false,
      res: data
    }


    resStruct.set(ress)

  } else {
    console.error("Bad request.");
  }
}