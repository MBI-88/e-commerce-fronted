
const domain = import.meta.env.VITE_SERVER_DOMAIN

export default async function LoginService(email:string,pass:string) {
    const payload = {
        "email": email,
        "password":pass
    }
    const url = `${domain}/admin/signin`
    const resp = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    return resp
}