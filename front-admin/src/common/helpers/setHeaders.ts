import { useStore } from "../stores/store";


export default function SetToken() {
    const { getToken } = useStore()
    const token = getToken()
    return token

}