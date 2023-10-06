<script setup lang="ts">
import { ref } from 'vue';
import LoginService from '../services/login.service';
import { useLogin } from "../composables/useLogin"
import type { AdminData } from '../interfaces/admin.interface';
import { useRouter } from 'vue-router';
import AlertCmp from '@/common/components/AlertCmp.vue';


const store = useLogin()
const router = useRouter()
const signal = ref<number>(0)
const valid = ref<boolean>(false)
const email = ref<string>("")
const password = ref<string>("")
const title = ref<string>("")
const body = ref<string>("")
const state = ref<boolean>(false)
const showPassword = ref<boolean>(true)
const emailRules = [
    (value: string) => {
        if (value) return true
        return "Email is required"
    },
    (value: string) => {
        if (/.+@.+\..+/.test(value)) return true
        return "Email must be valid"
    }
]
const passwordRule = [
    (value: string) => {
        if (value.length > 8) return true
        return "Password must be over 8 caracters"
    },
    (value: string) => {
        if (!value.includes(" ")) return true
        return "Password must not contain empty space"
    }
]

const handlerSubmit = async () => {
    if (valid.value) {
        const rs = await LoginService(email.value, password.value)
        if (rs.status == 202) {
            title.value = "Login successful"
            body.value = "Ready for dashboard!"
            state.value = true
            signal.value = 202
            const data: AdminData = await rs.json()
            store.WrapAdminData(data)
            setTimeout(() => {
                signal.value = 0
                router.push({ path: "/dashboard" })
            }, 3000)
        } else {
            title.value = "Login error"
            body.value = "Do again..."
            state.value = false
            signal.value = 403
            setTimeout(() => {
                signal.value = 0
            }, 3000)
        }
    }

}



</script>

<template>
    <v-sheet class="bglayout pa-16" rounded width="100%">
        <v-expand-x-transition style="height: 12%;">
            <alert-cmp :title="title" :body="body" :state="state"
                :show="signal == 202 ? true : signal == 403 ? true : false" />
        </v-expand-x-transition>
        <div style="height: 15%;"></div>
        <v-container class="my-16">
            <v-card class="mx-auto px-6 py-10 shadow-md form" max-width="600" height="350" title="D'Todo Admin panel">
                <v-form v-model="valid" fast-fail @submit.prevent>
                    <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
                    <v-layout class="align-center">
                        <v-text-field v-model="password" :type="showPassword ? 'password' : 'text'" label="Password"
                            required :rules="passwordRule">
                        </v-text-field>
                        <v-icon end @click="showPassword = !showPassword" v-show="showPassword" icon="mdi-eye-off-outline"
                            class="icon pb-5 pr-5" />
                        <v-icon @click="showPassword = !showPassword" class="icon" v-show="!showPassword" icon="mdi-eye-outline" />
                    </v-layout>

                    <v-layout>
                        <v-spacer class="mx-8"></v-spacer>
                        <v-btn type="submit" class="ma-2 mx-1" @click="handlerSubmit" size="large" color="primary"> Go
                            <v-spacer class=" mx-1"></v-spacer>
                            <v-icon>
                                mdi-send
                            </v-icon>
                        </v-btn>
                    </v-layout>
                </v-form>
            </v-card>
        </v-container>
    </v-sheet>
</template> 

<style scoped lang="css">
.bglayout {
    background-color: #45115c;
    height: 100vh;

}

.form {
    background-color: #fcfbfc;
    border-radius: 2% #3a03509a;
    box-shadow: 5px -10px #3a03509a, -10px 8px #3a03509a;
}

.icon {
    position: absolute;
    left: 95%;
    right: auto;
    transform: translateX(-50%);
    margin: auto;
    padding-bottom: 3%;
  
    padding-right: 3%
}
</style>