
export type User = {
    user_id: number,
    username: string,
    password: string,
    email: string,
    tel: string,
    address: string,
    image: string | "Empty",
    role: string,
    created_at: string,
    updated_at: string,
    active: boolean,
    Publishings: null,
    Trolley: null
}


export default interface Users {
    users: Array<User>
}

