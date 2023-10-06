
import { defineStore } from 'pinia'
import type { AdminData } from '../../modules/login/interfaces/admin.interface'
import router from '@/router'


export const useStore = defineStore('admin', {
    state: () => ({
        // Admin data
        adminData: new Object as AdminData,

    }),
    actions: {

        // Operations
        setAdminData(ad:AdminData) {
            this.adminData = ad
        },
    },
    getters: {
        getToken() {
            return () => this.adminData.session_token
        },
        removeAdminData() {
            return () => {
                this.adminData = new Object as AdminData
                router.push("/")
            }
        },
        getAdminData() {
            return () => this.adminData
        }

    }
})