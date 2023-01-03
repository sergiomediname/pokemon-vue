<script setup>
import { ref } from "vue";
import PokemonCard from "./../components/PokemonCard.vue";
import PaginationList from "../components/PaginationList.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

import { useGetData } from "@/composables/getData";
const { data, error, loading, getDataPokemon } = useGetData();

const post_x_page = 12;
const offset_pagination = ref(0);
const limit_pagination = ref(post_x_page);

const pagination = (type) => {
    switch (type) {
        case "next":
            offset_pagination.value = offset_pagination.value + post_x_page;
            break;

        case "prev":
            offset_pagination.value = offset_pagination.value - post_x_page;
            break;

        default:
            break;
    }
    loading.value = true;
    getData();
};

getDataPokemon(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset_pagination.value}&limit=${limit_pagination.value}`
);
</script>

<template>
    <LoadingSpinner v-if="loading" />
    <div class="pokemons" v-else>
        <div
            class="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"
        >
            <PokemonCard v-for="pokemon in data.results" :pokemon="pokemon" />
        </div>
        <PaginationList :data="data" @getDataPokemon="getDataPokemon" />
    </div>
</template>
