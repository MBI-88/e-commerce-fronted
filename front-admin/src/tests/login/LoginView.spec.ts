import LoginViewVue from '@/modules/login/views/LoginView.vue'
import { describe, expect, test } from 'vitest'
import {  mount } from '@vue/test-utils'
import LoginService from '@/modules/login/services/login.service'
import type { AdminData } from '@/modules/login/interfaces/admin.interface'
import { createTestingPinia} from '@pinia/testing'
import router from '@/router'

describe("LoginView", () => {

    const wrap = mount(LoginViewVue,{
        global:{
            plugins:[createTestingPinia({
                stubActions:false
            }),router]
        }
    })

    test("Mount", () => {
        expect(wrap).toBeTruthy()

    })

    test("Snapshot", () => {
        expect(wrap.html()).toMatchSnapshot()

    })

    test("LoginService", async () => {
        const resp = await LoginService("admin@admin.com","admin1234567")
        expect(resp.status).toEqual(202)
        const data: AdminData = await resp.json()
        expect(data.session_token.length).toBeGreaterThan(12)
        expect(data.email).toEqual("admin@admin.com")
        expect(data.username).toEqual("Admin")
    
    })


})