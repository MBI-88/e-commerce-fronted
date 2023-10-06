<script lang="ts" setup>


const props = defineProps({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    },
    show: {
        type:Boolean,
        required:true,
        default:false
    }
    
})

</script>

<template>
    <v-alert :type="props.state ? 'info' : 'error'" 
    :title="props.title" class="alert" width="300"
    :text="props.body" variant="tonal" v-show="props.show"></v-alert>
</template>

<style lang="postcss" scoped>
    .alert {
        position: absolute;
        z-index: 10;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        margin: auto;

    }

</style>
