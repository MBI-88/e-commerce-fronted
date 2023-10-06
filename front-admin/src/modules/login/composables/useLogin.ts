import { useStore } from "@/common/stores/store"
import type { AdminData } from "../interfaces/admin.interface"


export const useLogin = () => {
    const { setAdminData } = useStore()
    
    const WrapAdminData = (ad:AdminData) => {
        setAdminData(ad)
    }

    return {
        WrapAdminData
    }
}