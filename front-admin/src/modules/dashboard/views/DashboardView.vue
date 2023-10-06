<script lang="ts" setup>
import NavVerticalCmp from '@/common/components/NavVerticalCmp.vue';
import  useDashboard  from './../composables/useDashboard';
import { RouterView } from 'vue-router';
import router from '@/router';


const domain = import.meta.env.VITE_SERVER_DOMAIN
const store = useDashboard()

const { email, image, username } = store.getData()

const imageUrl = `${domain}${image}`

const logout = () => {
    store.cleanSession()
    router.push("/")
}

</script>

<template>
    <v-layout class="rounded-md pa-10">
        <NavVerticalCmp :email="email" :image-url="imageUrl" :username="username" @logout="logout"/>
        <v-main class="d-flex align-center justify-center" style="min-height: calc(100vh - 90px);">
            <RouterView />
        </v-main>
    </v-layout>
</template>

