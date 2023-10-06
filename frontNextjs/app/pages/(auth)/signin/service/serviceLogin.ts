import {TxLogin } from "../interfaces/login";

const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN

export async function Login(payload: TxLogin) {
    const url = `${domain}/users/signin`
    const config: RequestInit = {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
   
    return await (await fetch(url, config)).json();
}