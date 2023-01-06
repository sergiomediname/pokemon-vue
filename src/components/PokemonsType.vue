<!-- https://pokeapi.co/api/v2/type/ -->
<script setup>
import { RouterLink } from "vue-router";
import axios from "axios";
import { ref } from "vue";

const types = ref([]);

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type");
        types.value = data.results;
    } catch (error) {
        console.log(error);
    }
};
getData();
</script>

<template>
    <div class="pokemons-filter mb-8">
        <ul class="filter-type flex flex-wrap items-center justify-center gap-2">
            <li
                v-for="type in types"
                class="filter-type__item"
                :class="type.name"
                :key="type.name"
            >
                <RouterLink
                    :to="`/type/${type.name}`"
                    class="filter-type__link py-1 px-3 rounded-lg block hover:opacity-80"
                    >{{ type.name }}</RouterLink
                >
            </li>
        </ul>
    </div>
</template>
