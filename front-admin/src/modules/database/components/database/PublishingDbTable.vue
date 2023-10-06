<script setup lang="ts">
import { usePublishingTable } from "../../composables/usePublishings";
import { watch } from "vue";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { nextTick, ref } from "vue";
import type { Publishing } from "../../interfaces/publishings.interface";
import type Publishings from "../../interfaces/publishings.interface";
import LoaderCmp from "@/common/components/LoaderCmp.vue";
import AlertCmp from "@/common/components/AlertCmp.vue";

const domain = import.meta.env.VITE_SERVER_DOMAIN;

type Entries = {
  publishing_id: string;
  user_id: string;
  category: string;
  subcategory: string;
  created_at: string;
  updated_at: string;
  product_name: string;
  description: string;
  price: number;
  stock: number;
  os: string;
  ram: number;
  store: number;
  screen: number;
  in_offer: number;
  resolution: string;
  gpu: string;
  micro: string;
  long: number;
  width: number;
  height: number;
  brand: string;
  weight: number;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
};

type Load = {
  page: number;
  itemsPerPage: number;
  sortBy: any;
  search: Object;
};

const store = usePublishingTable();

const dialog = ref(false);
const dialogDelete = ref(false);
const itemsPerPage = ref<number>(5);
const switchDialog = ref<boolean>(false);
const loading = ref<boolean>(false);
const totalItems = ref<number>(10);
const publishings = ref<Array<Publishing>>([]);
const newImage = ref<File | null>(null);
const category = ref<string>("");
const subcategory = ref<string>("");
const brand = ref<string>("");
const product_name = ref<string>("");
const search = ref<string>("");
const flag = ref<boolean>(false);
const title = ref<string>("");
const body = ref<string>("");
const state = ref<boolean>(false);
const show = ref<boolean>(false);

const headers = [
  { title: "ID", key: "publishing_id", sortable: false },
  { title: "User_id", key: "user_id", sortable: false },
  { title: "Category", key: "category", sortable: false },
  { title: "Subcategory", key: "subcategory", sortable: false },
  { title: "Brand", key: "brand", sortable: false },
  { title: "Item", key: "product_name", sortable: false },
  { title: "Image", key: "image", sortable: false },
  { title: "Stock", key: "stock", sortable: false },
  { title: "Weight", key: "weight", sortable: false },
  { title: "Price", key: "price", sortable: false },
  { title: "Description", key: "description", sortable: false },
  { title: "Created at", key: "created_at", sortable: false },
  { title: "Updated at", key: "updated_at", sortable: false },
  { title: "Actions", key: "Publishings", sortable: false },
];

const editedIndex = ref<number>(-1);
const editedItem = ref<Entries>({
  publishing_id: "",
  user_id: "",
  category: "",
  subcategory: "",
  created_at: "",
  updated_at: "",
  product_name: "",
  description: "",
  price: 0,
  stock: 0,
  os: "",
  ram: 0,
  store: 0,
  screen: 0,
  in_offer: 0,
  resolution: "",
  gpu: "",
  micro: "",
  long: 0,
  width: 0,
  height: 0,
  brand: "",
  weight: 0,
  image_1: "",
  image_2: "",
  image_3: "",
  image_4: "",
  image_5: "",
});

const defaultItem = {
  publishing_id: "",
  user_id: "",
  category: "",
  subcategory: "",
  created_at: "",
  updated_at: "",
  product_name: "",
  description: "",
  price: 0,
  stock: 0,
  os: "",
  ram: 0,
  store: 0,
  screen: 0,
  in_offer: 0,
  resolution: "",
  gpu: "",
  micro: "",
  long: 0,
  width: 0,
  height: 0,
  brand: "",
  weight: 0,
  image_1: "",
  image_2: "",
  image_3: "",
  image_4: "",
  image_5: "",
};

const editItem = (item: any) => {
  editedIndex.value = publishings.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialog.value = true;
  flag.value = true;
};

const deleteItem = (item: any) => {
  editedIndex.value = publishings.value.indexOf(item);
  editedItem.value = Object.assign({}, item);
  dialogDelete.value = true;
};

const deleteItemConfirm = async () => {
  switchDialog.value = true;
  const resp = await store.deletePublishing(editedItem.value);
  if (resp.status == 202) {
    publishings.value.splice(editedIndex.value, 1);
    switchDialog.value = false;
    helperAlert("Delete user", "Delete user completed!", true);
  } else {
    switchDialog.value = false;
    helperAlert("Delete user", "Delete user error", false);
  }
  closeDelete();
};

const close = () => {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem);
    editedIndex.value = -1;
  });
};

const closeDelete = () => {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem);
    editedIndex.value = -1;
  });
};

const helperAlert = (t: string, b: string, s: boolean) => {
  title.value = t;
  body.value = b;
  state.value = s;
  setTimeout(() => {
    show.value = true;
  }, 1000);
  setTimeout(() => {
    show.value = false;
  }, 3000);
};

const save = async () => {
  const formData = new FormData();
  if (editedIndex.value > -1) {
    Object.assign(publishings.value[editedIndex.value], editedItem.value);
    Object.keys(editedItem.value).forEach((key: string) => {
      if (key != "image_5" && "image_4" && "image_3" && "image_2" && "image_1")
        formData.append(key, (editedItem.value as { [key: string]: any })[key]);
    });
    if (newImage.value) {
      formData.append("image_5", newImage.value);
    }

    switchDialog.value = true;
    const resp = await store.updatePublishing(formData);
    if (resp.status == 202) {
      switchDialog.value = false;
      helperAlert("Update user", "Changes completed!", true);
    } else {
      switchDialog.value = false;
      helperAlert("Update user", "Do again...", false);
    }
    Object.assign(editedItem.value, defaultItem);
    editedIndex.value = -1;
  } else {
    Object.keys(editedItem.value).forEach((key: string) => {
      if (key != "image_5" && key != "publishing_id")
        formData.append(key, (editedItem.value as { [key: string]: any })[key]);
    });

    if (newImage.value) {
      formData.append("image_5", newImage.value);
    }
    switchDialog.value = true;
    const resp = await store.creatPublishing(formData);
    if (resp.status == 202) {
      switchDialog.value = false;
      helperAlert("Create user", "New user added", true);
    } else {
      switchDialog.value = false;
      helperAlert("Create user", "Do again...", false);
    }
    Object.assign(editedItem.value, defaultItem);
  }
  dialog.value = false;
};

const loadItems = async ({ page, itemsPerPage, search: {} }: Load) => {
  loading.value = !loading.value;
  if (search.value.length > 0) {
    const rsp = await store.searchCategory(
      category.value,
      subcategory.value,
      product_name.value,
      brand.value,
      page,
      itemsPerPage * 2
    );
    if (rsp.status == 200) {
      const data: Publishings = await rsp.json();
      console.log(data);
      publishings.value = data.publishings;
      totalItems.value = publishings.value.length * 2;
    } else {
      helperAlert("Search data", "Error server", false);
    }
    search.value = "";
  } else if (
    category.value == "" &&
    subcategory.value == "" &&
    product_name.value == "" &&
    brand.value == ""
  ) {
    const rsp = await store.loadData(page, itemsPerPage * 2);
    if (rsp.status == 200) {
      const data: Publishings = await rsp.json();
      publishings.value = data.publishings;
      totalItems.value = publishings.value.length * 2;
    } else {
      helperAlert("Load data", "Error server", false);
    }
  }
  loading.value = !loading.value;
};

const reloadItems = async () => {
  loading.value = !loading.value;
  const rsp = await store.loadData(1, itemsPerPage.value * 2);
  if (rsp.status == 200) {
    const data: Publishings = await rsp.json();
    publishings.value = data.publishings;
    totalItems.value = publishings.value.length * 2;
    itemsPerPage.value = 5;
    category.value = "";
    subcategory.value = "";
    product_name.value = "";
    brand.value = "";
  } else {
    helperAlert("Load data", "Error server", false);
  }
  loading.value = !loading.value;
};

const uploadImage = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    newImage.value = target.files[0];
  }
};

watch(
  [category, subcategory, product_name, brand],
  ([newcategory, newsubcategory, newproduct_name, newbrand]) => {
    search.value = String(Date.now());
  }
);
</script>

<template>
  <v-expand-x-transition style="height: 12%">
    <alert-cmp :title="title" :body="body" :state="state" :show="show" />
  </v-expand-x-transition>
  <loader-cmp :switch-dialog="switchDialog" />
  <v-data-table-server
    :headers="headers"
    v-model:items-per-page="itemsPerPage"
    :items-length="totalItems"
    :loading="loading"
    item-value="product_name"
    :items="publishings"
    @update:options="loadItems"
    class="elevation-1"
    :search="search"
    height="700px"
    :hover="true"
    density="compact"
  >
    <template v-slot:top>
      <v-toolbar flat color="transparent" rounded="0">
        <v-layout>
          <v-text-field
            v-model="category"
            hide-details
            placeholder="Search category..."
            class="ma-2"
            density="compact"
          ></v-text-field>
          <v-text-field
            v-model="subcategory"
            hide-details
            placeholder="Search subcategory..."
            class="ma-2"
            density="compact"
          ></v-text-field>
          <v-text-field
            v-model="product_name"
            hide-details
            placeholder="Search item..."
            type="text"
            class="ma-2"
            density="compact"
          ></v-text-field>
          <v-text-field
            v-model="brand"
            hide-details
            placeholder="Search brand..."
            type="text"
            class="ma-2"
            density="compact"
          ></v-text-field>
          <v-btn
            icon="mdi-reload"
            size="large"
            class="mb-2 ma-2"
            color="#1565C0"
            @click="reloadItems"
          ></v-btn>
        </v-layout>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn
              color="#1565C0"
              class="mb-2 ma-2"
              v-bind="props"
              icon="mdi-plus-circle"
              size="large"
            ></v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Publishing Fields</span>
            </v-card-title>
            <v-card-text
              ><v-container
                ><v-text-field
                  v-model="editedItem.publishing_id"
                  disabled
                  label="ID"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.user_id"
                  label="UserId"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.category"
                  label="Category"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.subcategory"
                  label="Subcategory"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.product_name"
                  label="ProductName"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.description"
                  label="Description"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.price"
                  label="Price"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.stock"
                  label="Stock"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.brand"
                  label="Brand"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.weight"
                  label="Weight"
                ></v-text-field>
                <div class="pt-1 pb-2">
                  <v-img
                    :src="
                      editedItem.image_5 !== ''
                        ? domain + editedItem.image_5
                        : ''
                    "
                    alt="No image loaded"
                    sizes="x-small"
                  ></v-img>
                </div>
                <div class="pt-2 pb-2">
                  <v-file-input
                    accep="image/*"
                    @change="uploadImage"
                    label="New image"
                    show-size
                    prepend-icon="mdi-image-area"
                  ></v-file-input>
                </div> </v-container
            ></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
                icon="mdi-close-circle"
                size="large"
              >
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
                icon="mdi-content-save-check-outline"
              >
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h6"
              >Are you sure you want to delete this publishing?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="#1565C0"
                variant="text"
                @click="closeDelete"
                icon="mdi-close-circle"
                size="large"
              ></v-btn>
              <v-btn
                color="#1565C0"
                variant="text"
                @click="deleteItemConfirm"
                icon="mdi-content-save-check-outline"
                size="large"
              ></v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.image="{ item }">
      <v-img
        :src="item.raw.image !== '' ? domain + item.raw.image : ''"
        alt="No image loaded"
      ></v-img>
    </template>

    <template v-slot:item.Publishings="{ item }">
      <v-icon
        size="large"
        class="me-2"
        @click="editItem(item.raw)"
        color="#1565C0"
      >
        mdi-lead-pencil
      </v-icon>
      <v-icon size="large" @click="deleteItem(item.raw)" color="#1565C0">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table-server>
</template>
