<template>
<section class="flex flex-col mt-5">
    <button 
   
    :disabled="nonEligere"
    @click="$emit('electusOption', id)"
    v-for="{nomen, id} in optiones" 
    :key="id" 
    class="bg-white shadow-md rounded-lg p-3 my-2 cursor-pointer w-40 text-center hover:bg-gray-100 transition-all"
    :class="['capitalize disabled:shadow-none disabled:bg-gray-100', {
        'recte': id === recteResponsio && nonEligere,
        'non-recte': id !== recteResponsio && nonEligere
    }]">
        {{ nomen }}
    </button>
</section>


</template>

<script setup lang="ts">
import { LudumStatus, type Pokemon } from '../interfaces';

    interface Props {
        optiones: Pokemon[];
        nonEligere: boolean;
        recteResponsio: number;
    }
    defineProps<Props>();

    defineEmits<{
        electusOption: [id: number]
    }>()

</script>

<style scoped>
@import 'tailwindcss';

.recte {
    background-color: blue;
    color: white;
}

.non-recte {
    background-color: red;
    color: white;
}

</style>