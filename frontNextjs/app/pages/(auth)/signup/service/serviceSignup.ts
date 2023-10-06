import { TxSignup } from "../interfaces/signup";

const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN;

export async function Signup(payload: TxSignup) {
  console.log("hola dede signup services");
  // console.log({ PAYLOAD: payload });

  const url = `${domain}/users/signup`;
  console.log(url)

  const config: RequestInit = {
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    
  };
  console.log(JSON.stringify(payload));

  return await (await fetch(url, config)).json();

 
}
