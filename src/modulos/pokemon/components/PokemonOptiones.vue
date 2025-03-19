<template>
<section class="flex flex-col mt-5">
    <button 
    @click="$emit('electusOption', id)"
    v-for="{nomen, id} in optiones" 
    :key="id" 
    class="capitalize bg-white shadow-md rounded-lg p-3 my-2 cursor-pointer w-40 text-center hover:bg-gray-100 transition-all">
        {{ nomen }}
    </button>
</section>


</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

    interface Props {
        optiones: Pokemon[];
    }
    defineProps<Props>();

    defineEmits<{
        electusOption: [id: number]
    }>()

</script>

<style scoped>

</style>