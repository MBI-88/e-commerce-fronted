//import users from '../mock/users.json'
import SetToken from "@/common/helpers/setHeaders"

const domain = import.meta.env.VITE_SERVER_DOMAIN
export async function GetUsers(page: number, page_size: number) {
    const url = `${domain}/admin/get-users?page=${page}&page_size=${page_size}`
    const headers = {
        "Authorization": SetToken(),
        "Content-Type": "application/json"
    }
    const resp = await fetch(url, {
        method: "GET",
        headers
    })

    //const : Users = { ...users }
    return resp
}


export async function CreateUser(user: FormData) {
    const url = `${domain}/admin/create-users`
    const headers = {
        "Authorization": SetToken()
    }
    const resp = await fetch(url, {
        method: "POST",
        headers,
        body: user
    })
    return resp
}


export async function UpdateUser(user:FormData) {
    const url = `${domain}/admin/update-users`
    const headers = {
        "Authorization": SetToken()
    }
    const resp = await fetch(url, {
        method: "PATCH",
        headers,
        body: user
    })
    return resp

}

export async function DeleteUser(user:any) {
    const url = `${domain}/admin/delete-users`
    const headers = {
        "Authorization": SetToken(),
        "Content-Type": "application/json"
    }
    const resp = await fetch(url,{
        method: "DELETE",
        headers,
        body: JSON.stringify(user)
    })
    return resp
}

export async function SearchUser(username = "",email = "",role = "", page:number, page_size:number) {
    const url = `${domain}/admin/search-users?username=${username}&email=${email}&role=${role}&page=${page}&page_size=${page_size}`
    const headers = {
        "Authorization": SetToken(),
        "Content-Type": "application/json"
    }
    const resp = await fetch(url,{
        method: "GET",
        headers
    })
    return resp
}

