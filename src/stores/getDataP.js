// import axios from "axios";
// import { defineStore } from "pinia";
// import { ref } from "vue";

// export const usePokemonsStore = defineStore("pokemons", () => {
//     const pokemons = ref(null);
//     const loading = ref(true);

//     const sanitizeData = async (url) => {
//         try {
//             const { data } = await axios.get(url);
//             const pokemon_data = {
//                 name: data.name,
//                 order: data.order.toString().padStart(4, "0"),
//                 types: data.types,
//                 main_type: data.types[0].type.name ? data.types[0].type.name : "",
//                 // thumb: data.sprites.other.dream_world.front_default ?? data.sprites.other['official-artwork'].front_default,
//                 thumb: data.sprites.other.dream_world.front_default || data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
//                 stats: data.stats
//             };
//             return pokemon_data;
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const getPokemons = async (url) => {
//         loading.value = true;
//         try {
//             const res = await axios.get(url);
//             const promises = await res.data.results.map(async (pokemon) => sanitizeData(pokemon.url));
//             const results = await Promise.all(promises);
//             pokemons.value = {
//                 next: res.data.next,
//                 previous: res.data.previous,
//                 results
//             };
//         } catch (error) {
//             console.log(error);
//         } finally {
//             loading.value = false;
//         }
//     };

//     const getPokemonsByType = async (type, start, end) => {
//         loading.value = true;
//         try {
//             const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
//             const promises = await res.data.pokemon.map(async ({ pokemon }) => sanitizeData(pokemon.url));
//             const results = await Promise.all(promises);

//             pokemons.value = {
//                 next: end,
//                 previous: start,
//                 results: results.slice(start, end)
//             };
//         } catch (error) {
//             console.log(error);
//         } finally {
//             loading.value = false;
//         }
//     };

//     return {
//         pokemons,
//         loading,
//         getPokemons,
//         getPokemonsByType
//     };
// });
