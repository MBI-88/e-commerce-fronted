


const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN

export async function getUser(payload:number,token:string) {
    const url = `${domain}/users/${payload}`
    const config: RequestInit = {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        },
        // body: JSON.stringify(payload)

    }

    return await (await fetch(url,config)).json()

}