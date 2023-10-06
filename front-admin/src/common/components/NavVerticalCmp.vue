<template>
    <v-navigation-drawer expand-on-hover rail class="layout">
        <v-card class="layout">
            <v-layout>
                <v-list>
                    <v-list-item :prepend-avatar="imageUrl"  nav>
                    <v-list-item-title>{{ email }}</v-list-item-title>
                    <v-list-item-subtitle>{{ username }}</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
            </v-layout>
            <v-divider></v-divider>

        </v-card>
        <v-list density="compact" nav>
            <v-list-item  prepend-icon="mdi-database-eye-outline" value="Database">
                <RouterLink to="/database" class="router">Database</RouterLink>
            </v-list-item>
        </v-list>
        <div style="height: calc(100vh - 35%);">

        </div>
        <v-list density="compact" nav>
            <v-list-item title="Logout" value="Logout" prepend-icon="mdi-logout" @click="cleanSession"></v-list-item>
            <v-list-item title="Set up" value="Set up" prepend-icon="mdi-security"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    email:{
        type:String,
        required:true,
    },
    username:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    }
})

const emiter = defineEmits(["logout"])

const cleanSession = () => {
    emiter("logout")
}

</script>

<style lang="css" scoped>
.layout {
    background-color: #45115c;
    color: white;
}

.router {
    color: white;
    text-decoration: none;
    
}
</style>