import { useStore } from "@/common/stores/store"


const useDashboard = () => {
    const { getAdminData,removeAdminData } = useStore()

    const getData = () => {
        const admin = getAdminData()
        return admin
    }
    const cleanSession = () => {
        removeAdminData()
    }
    return {
        getData,
        cleanSession
    }
}

export default useDashboard