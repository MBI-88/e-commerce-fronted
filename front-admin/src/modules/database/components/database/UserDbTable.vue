<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { useUserTable } from '../../composables/useDatabase';
import { watch } from 'vue';
import type { User } from '../../interfaces/user.interface';
import type Users from '../../interfaces/user.interface';
import LoaderCmp from '@/common/components/LoaderCmp.vue';
import AlertCmp from '@/common/components/AlertCmp.vue';




const domain = import.meta.env.VITE_SERVER_DOMAIN

type Entries = {
    user_id: string ,
    username: string ,
    email: string ,
    tel: string ,
    address: string ,
    password: string ,
    image: string ,
    role: string ,
    created_at: string ,
    updated_at: string ,
    active: boolean 
}

type Load = {
    page: number
    itemsPerPage: number,
    sortBy: any
    search: Object
}

const store = useUserTable()

const dialog = ref(false)
const dialogDelete = ref(false)
const loading = ref<boolean>(false)
const totalItems = ref<number>(10)
const username = ref<string>("")
const role = ref<string>("")
const email = ref<string>("")
const search = ref<string>("")
const flag = ref<boolean>(false)
const users = ref<Array<User>>([])
const newImage = ref<File | null>(null)
const itemsPerPage = ref<number>(5)
const switchDialog = ref<boolean>(false)
const title = ref<string>("")
const body = ref<string>("")
const state = ref<boolean>(false)
const show = ref<boolean>(false)
const showPassword = ref<boolean>(true)



const headers = [
    { title: 'ID', key: 'user_id' },
    { title: 'User name', key: 'username', sortable: false },
    { title: 'Password', key: 'password', sortable: false },
    { title: 'Email', key: 'email', sortable: false },
    { title: 'Tel', key: 'tel', sortable: false },
    { title: 'Address', key: 'address', sortable: false },
    { title: 'Image', key: 'image', sortable: false },
    { title: 'Created at', key: 'created_at', sortable: false },
    { title: 'Updated at', key: 'updated_at', sortable: false },
    { title: 'State', key: 'active', sortable: false },
    { title: 'Role', key: 'role', sortable: false },
    { title: 'Actions', key: 'Publishings', sortable: false },

]


const editedIndex = ref<number>(-1)
const editedItem = ref<Entries>({
    user_id: "",
    username: "",
    email: "",
    tel: "",
    address: "",
    password: "",
    image: "",
    role: "",
    created_at: "",
    updated_at: "",
    active: false,
})
const defaultItem = {
    user_id: "",
    username: "",
    email: "",
    tel: "",
    address: "",
    password: "",
    image: "",
    role: "",
    created_at: "",
    updated_at: "",
    active: false,
}



const editItem = (item: any) => {
    editedIndex.value = users.value.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialog.value = true
    flag.value = true
}

const deleteItem = (item: any) => {
    editedIndex.value = users.value.indexOf(item)
    editedItem.value = Object.assign({}, item)
    dialogDelete.value = true
}

const deleteItemConfirm = async () => {
    switchDialog.value = true
    const resp = await store.deleteUser(editedItem.value)
    if (resp.status == 202) {
        users.value.splice(editedIndex.value, 1)
        switchDialog.value = false
        helperAlert("Delete user", "Delete user completed!", true)
    } else {
        switchDialog.value = false
        helperAlert("Delete user", "Delete user error", false)
    }
    closeDelete()
}

const close = () => {
    dialog.value = false
    showPassword.value = true
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
}

const closeDelete = () => {
    dialogDelete.value = false
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem)
        editedIndex.value = -1
    })
}

const helperAlert = (t: string, b: string, s: boolean) => {
    title.value = t
    body.value = b
    state.value = s
    setTimeout(() => {
        show.value = true
    }, 1000)
    setTimeout(() => {
        show.value = false
    }, 3000)
}

const save = async () => {
    const formData = new FormData()
    if (editedIndex.value > - 1) {
        Object.assign(users.value[editedIndex.value], editedItem.value)
        Object.keys(editedItem.value).forEach((key: string) => {
            if (key != "image") formData.append(key, (editedItem.value as { [key: string]: any })[key]);
        })
        if (newImage.value) {
            formData.append("image", newImage.value)
        }

        switchDialog.value = true
        const resp = await store.updateUser(formData)
        if (resp.status == 202) {
            switchDialog.value = false
            helperAlert("Update user", "Changes completed!", true)
        } else {
            switchDialog.value = false
            helperAlert("Update user", "Do again...", false)
        }
        Object.assign(editedItem.value, defaultItem)
        editedIndex.value = -1

    } else {
        Object.keys(editedItem.value).forEach((key: string) => {
            if (key != "image" && key != "user_id") formData.append(key, (editedItem.value as { [key: string]: any })[key])
        })

        if (newImage.value) {
            formData.append("image", newImage.value)
        }
        switchDialog.value = true
        const resp = await store.creatUser(formData)
        if (resp.status == 202) {
            switchDialog.value = false
            helperAlert("Create user", "New user added", true)
        } else {
            switchDialog.value = false
            helperAlert("Create user", "Do again...", false)
        }
        Object.assign(editedItem.value, defaultItem)
    }
    dialog.value = false
    showPassword.value = true
}

const loadItems = async ({
    page, itemsPerPage, search: { } }: Load) => {
    loading.value = !loading.value
    if (search.value.length > 0) {
        const resp = await store.searchUser(username.value, email.value, role.value, page, itemsPerPage * 2)
        if (resp.status == 200) {
            const data: Users = await resp.json()
            users.value = data.users
            totalItems.value = users.value.length * 2
        } else {
            helperAlert("Search data", "Error server", false)
        }
        search.value = ""
    } else if (username.value == "" && email.value == "" && role.value == "") {
        const rsp = await store.loadData(page, itemsPerPage * 2)
        if (rsp.status == 200) {
            const data: Users = await rsp.json()
            users.value = data.users
            totalItems.value = users.value.length * 2
        } else {
            helperAlert("Load data", "Error server", false)
        }
    }
    loading.value = !loading.value

}

const reloadItems = async () => {
    loading.value = !loading.value
    const rsp = await store.loadData(1, itemsPerPage.value * 2)
    if (rsp.status == 200) {
        const data: Users = await rsp.json()
        users.value = data.users
        totalItems.value = users.value.length * 2
        itemsPerPage.value = 5
        email.value = ""
        username.value = ""
        role.value = ""
    } else {
        helperAlert("Load data", "Error server", false)
    }
    loading.value = !loading.value
}

const uploadImage = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        newImage.value = target.files[0]
    }
}

watch([username, email, role], ([newusername, newemail, newrole]) => {
    search.value = String(Date.now())
})

</script>

<template>
    <v-expand-x-transition style="height: 12%;">
        <alert-cmp :title="title" :body="body" :state="state" :show="show" />
    </v-expand-x-transition>
    <loader-cmp :switch-dialog="switchDialog" />
    <v-data-table-server :headers="headers" v-model:items-per-page="itemsPerPage" :items-length="totalItems"
        :loading="loading" item-value="username" :items="users" @update:options="loadItems" class="elevation-1"
        :search="search" height="700px" :hover="true" density="compact">

        <template v-slot:top>
            <v-toolbar flat color="transparent" rounded="0">
                <v-layout>
                    <v-text-field v-model="username" hide-details placeholder="Search name..." class="ma-2 "
                        density="compact"></v-text-field>
                    <v-text-field v-model="role" hide-details placeholder="Search role..." type="text" class="ma-2"
                        density="compact"></v-text-field>
                    <v-text-field v-model="email" hide-details placeholder="Search email..." type="text" class="ma-2"
                        density="compact"></v-text-field>
                    <v-btn icon="mdi-reload" size="large" class="mb-2 ma-2" color="#1565C0" @click="reloadItems"></v-btn>
                </v-layout>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ props }">
                        <v-btn color="#1565C0" class="mb-2 ma-2" v-bind="props" icon="mdi-account-plus" size="large">
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">User Fields</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-text-field v-model="editedItem.user_id" disabled label="ID"></v-text-field>
                                <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                                <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                                <v-text-field v-model="editedItem.email" label="Email" type="email"></v-text-field>
                                <div class=" pt-1 pb-2">
                                    <v-img :src="editedItem.image !== '' ? domain + editedItem.image : ''"
                                        alt="No image loaded" sizes="x-small"></v-img>
                                </div>
                                <div class="pt-2 pb-2">
                                    <v-file-input accep="image/*" @change="uploadImage" label="New image" show-size
                                        prepend-icon="mdi-image-area"></v-file-input>
                                </div>
                                <v-text-field v-model="editedItem.tel" label="Tel"></v-text-field>
                                <v-layout class=" align-center">
                                    <v-text-field v-model="editedItem.password" label="Password"
                                        :type="showPassword ? 'password' : 'text'"></v-text-field>
                                    <v-icon end @click="showPassword = !showPassword" v-show="showPassword"
                                        icon="mdi-eye-off-outline" class="icon pb-5 pr-5" />
                                    <v-icon @click="showPassword = !showPassword" class="icon" v-show="!showPassword"
                                        icon="mdi-eye-outline" />
                                </v-layout>
                                <v-checkbox v-model="editedItem.active" label="State"></v-checkbox>
                                <v-select v-model="editedItem.role" label="Role"
                                    :items="['client', 'seller', 'admin']"></v-select>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="close" icon="mdi-close-circle" size="large">
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save" icon="mdi-content-save-check-outline">
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#1565C0" variant="text" @click="closeDelete" icon="mdi-close-circle"
                                size="large"></v-btn>
                            <v-btn color="#1565C0" variant="text" @click="deleteItemConfirm"
                                icon="mdi-content-save-check-outline" size="large"></v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>

        <template v-slot:item.image="{ item }">
            <v-img :src="item.raw.image !== '' ? domain + item.raw.image : ''" alt="No image loaded"></v-img>
        </template>

        <template v-slot:item.active="{ item }">
            <span type="text" v-if="item.raw.active">True</span>
            <span type="text" v-else>False</span>
        </template>

        <template v-slot:item.password="{ item }">
            <input type="password" value="{{ item.raw.password }}" disabled />
        </template>

        <template v-slot:item.Publishings="{ item }">
            <v-icon size="large" class="me-2" @click="editItem(item.raw)" color="#1565C0">
                mdi-lead-pencil
            </v-icon>
            <v-icon size="large" @click="deleteItem(item.raw)" color="#1565C0">
                mdi-delete
            </v-icon>
        </template>

    </v-data-table-server>
</template>

<style scoped lang="css">
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