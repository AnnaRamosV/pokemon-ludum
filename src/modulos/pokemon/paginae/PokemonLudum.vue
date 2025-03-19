<template>
    <section v-if="estPortat" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere, por favor</h1>
        <h3 class="animate-pulse">Cargando juego</h3>
    </section>

    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">¿Quién es este Pokèmon?</h1>
        <PokemonImago :pokemon-id="temerePokemon.id" :revelare-pokemon="ludumStatus !== LudumStatus.Ludit"/>
        <PokemonOptiones :optiones ="optiones" @electus-option="examineResponsio"/>

    </section>
</template>

<script setup lang="ts">
import PokemonImago from '../components/PokemonImago.vue';
import PokemonOptiones from '../components/PokemonOptiones.vue';
import { usePokemonLudum } from '../composables/usePokemonLudum';
import { LudumStatus } from '../interfaces';

const {ludumStatus, estPortat, temerePokemon, pokemonOptiones: optiones, 
    examineResponsio
} = usePokemonLudum();




   
</script>

<style scoped>
</style>