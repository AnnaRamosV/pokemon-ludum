import { computed, onMounted, ref } from "vue";
import { LudumStatus, type Pokemon, type PokemonListaResponsio } from "../interfaces";
import { pokemonApi } from "@/api/pokemonApi";

export const usePokemonLudum = () => {
    const ludumStatus = ref<LudumStatus>(LudumStatus.Ludit);

    const pokemon = ref<Pokemon[]>([]);

    const pokemonOptiones = ref<Pokemon[]>([]);

    const estPortat = computed(() => pokemon.value.length === 0);

    const obtienePokemon = async(): Promise<Pokemon[]> => {
        const responsio = await pokemonApi.get<PokemonListaResponsio>("/?limit=151")
        
        const pokemonArray : Pokemon[] = responsio.data.results.map((pokemon) => {
            const urlPartes = pokemon.url.split("/");
            const id = urlPartes[urlPartes.length - 2] ?? 0;

            return {
                nomen: pokemon.name,
                id: +id
            }
        })
        return pokemonArray.sort(() => Math.random() - 0.5);


    }

    const sequentiOptiones = (quot: number = 4) => {
        pokemon.value = pokemon.value.slice(quot);
    }


    onMounted(async () => {

        await new Promise((r) => setTimeout(r, 500))
      pokemon.value = await obtienePokemon();
      sequentiOptiones();
    });

    return{
        ludumStatus,
        estPortat,
        pokemonOptiones,
        sequentiOptiones,
    }
}