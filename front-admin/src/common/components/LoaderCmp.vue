<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
    switchDialog: {
        type:Boolean,
        required:true
    }
})


</script>

<template>
     <div class="text-center">
        <v-dialog
          v-model="props.switchDialog"
          :scrim="false"
          persistent
          width="auto"
        >
          <v-card
            color="primary"
          >
            <v-card-text>
              Sending data...
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    
</template>

<style lang="postcss" scoped>
    
</style>
