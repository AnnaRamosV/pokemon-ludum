<template>

    <section v-if="false" class="flex flex-col justify-content items-center w-screen h-screen">
        <h1 class="text-3xl">Espere, por favor</h1>
        <h3 class="animate-pulse">Cargando Pokèmon</h3>
    </section>

    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">¿Quién es este Pokèmon?</h1>

        <PokemonImago/>
        <PokemonOpciones/>

    </section>
</template>

<script setup lang="ts">
import PokemonImago from '../components/PokemonImago.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';


</script>