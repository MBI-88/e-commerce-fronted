import { RxLogin } from "../pages/(auth)/signin/interfaces/login";

export function setToken(payload: RxLogin) {
    localStorage.setItem("user_id", String(payload.user_id))
    localStorage.setItem("session_token", payload.session_token)

}

export function getToken(): RxLogin {
    const user: RxLogin = {
        user_id: Number(localStorage.getItem("user_id")),
        session_token: String(localStorage.getItem("session_token"))
    }
    return user
}




//este file  se va a borrar