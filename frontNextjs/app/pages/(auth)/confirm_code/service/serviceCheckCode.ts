// import { RxLogin } from "../interfaces/login";
// import { RxRestore } from "../interfaces/restorepassword";

import { DataCode } from "@/app/interfaces/confirm_code"



const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN

export async function SendCode(payload: DataCode) {
    const url = `${domain}/users/check-code`
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

    return await (await fetch(url,config)).json()

}