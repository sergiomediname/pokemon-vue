<template>
    <LoadingSpinner v-if="loading"/>
    <PokemonsList v-else :data="pokemons" @getPokemons="getPokemonsByType"/>
</template>

<script setup>
import { useRoute } from "vue-router";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import PokemonsList from "../components/PokemonsList.vue";
import { useGetData } from "@/composables/getData";
import { ref, watch } from "vue";

const route = useRoute();
const type = ref(route.params.name);
const { getPokemonsByType, loading, pokemons } = useGetData();

getPokemonsByType(type.value);

watch(() => route.params.name, () => {
    type.value = route.params.name;
    getPokemonsByType(type.value);
});
</script>
