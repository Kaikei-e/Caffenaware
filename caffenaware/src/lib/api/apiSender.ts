import type { drinkForm } from "$lib/forms/formTypes";
import { get, writable } from "svelte/store";

export type responseType = {
  loading: boolean,
  res: string,
}

export const isSucess: responseType = {
  loading: false,
  res: '{ "response":"badrequest"}'
}

export const resStruct = writable<responseType>(isSucess)

//export let recievedData = writable<string>("{err: bad request}");

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
      console.log(res.headers)
    } else {
      resData = res;
    }
  }).catch(error => console.error("Can't get the response properly : " + error));



  if (resData.ok) {
    const data = await resData.json();

    resStruct.set(data)
    console.log(get(resStruct));

  } else {
    console.error("Bad request.");
  }
}