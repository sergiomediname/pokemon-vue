<template>

    <LoadingSpinner v-if="loading"/>

    <PokemonsList v-else :data="pokemons" @getPokemons="getPokemons"/>

</template>

<script setup>
import { ref } from "vue";
import { useGetData } from "@/composables/getData";
import PokemonsList from "@/components/PokemonsList.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const { getPokemons, loading, pokemons } = useGetData();

const post_x_page = 12;
const offset_pagination = ref(0);
const limit_pagination = ref(post_x_page);

getPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offset_pagination.value}&limit=${limit_pagination.value}`);
</script>
