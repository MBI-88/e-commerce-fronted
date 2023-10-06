import { TxRestore } from "../interfaces/restorepassword";

const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN

export async function RePassword(payload: TxRestore) {
    const url = `${domain}/users/restorepassword` 
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
    const request = await fetch(url, config)
    return request

}