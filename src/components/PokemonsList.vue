<template>

    <PaginationList :data="data" @next="emit('getPokemons', data.next)" @previous="emit('getPokemons', data.previous)"/>

    <div class="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <PokemonCard v-for="pokemon in data.results" :key="pokemon.name" :pokemon="pokemon" />
    </div>

</template>

<script setup>
import PaginationList from "./PaginationList.vue";
import PokemonCard from "./PokemonCard.vue";

defineProps(["data"]);
const emit = defineEmits(["getPokemons"]);
</script>
