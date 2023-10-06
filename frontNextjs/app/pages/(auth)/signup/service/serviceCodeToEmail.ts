

import { InfoConfirmCode } from "@/app/interfaces/confirm_code"



export async function SendCodeToEmail(payload: InfoConfirmCode) {
    const url = '/api/codemail'
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