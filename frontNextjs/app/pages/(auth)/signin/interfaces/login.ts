

export interface TxLogin {
    email: string
    password: string
}


export interface RxLogin {
    user_id:number,
    session_token:string
}