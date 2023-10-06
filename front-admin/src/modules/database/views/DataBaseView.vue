<script setup lang="ts">
import { ref } from "vue";
import UserDbTable from "../components/database/UserDbTable.vue";
import PublishingDbTable from "../components/database/PublishingDbTable.vue";

const tab = ref<string>();
</script>

<template>
  <v-card class="layout">
    <v-tabs v-model="tab" bg-color="#45115c" color="#E53935">
      <v-tab value="one">User</v-tab>
      <v-tab value="two">Publishings</v-tab>
      <v-tab value="three">Views</v-tab>
      <v-tab value="four">Confirmation Code</v-tab>
      <v-tab value="five">Comments</v-tab>
      <v-tab value="six">Trolley</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <user-db-table />
        </v-window-item>

        <v-window-item value="two">
          <publishing-db-table />
        </v-window-item>

        <v-window-item value="three"> Three </v-window-item>

        <v-window-item value="four"> Four </v-window-item>

        <v-window-item value="five"> Five </v-window-item>

        <v-window-item value="six"> Six </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="css">
.layout {
  width: calc(100% - 50px);
  height: calc(100vh - 100px);
}
</style>
