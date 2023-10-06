import { CreateUser, DeleteUser, GetUsers, SearchUser, UpdateUser } from "../services/user.service"



export const useUserTable = () => {
    const loadData = async (page: number, size: number) => {
        const result = await GetUsers(page, size)
        return result
    }
    const deleteUser = async (user: any) => {
        const result = await DeleteUser(user)
        return result

    }
    const creatUser = async (user: any) => {
        const result = await CreateUser(user)
        return result

    }
    const updateUser = async (user: any) => {
        const result = await UpdateUser(user)
        return result
    }

    const searchUser = async (username: string, email: string, role: string, page: number, page_size: number) => {
        const result = await SearchUser(username, email, role, page, page_size)
        return result
    }


    return {
        loadData,
        creatUser,
        updateUser,
        searchUser,
        deleteUser,

    }
}