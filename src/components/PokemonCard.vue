<script setup>
defineProps(["pokemon"]);
</script>

<template>
    <div
        class="card overflow-hidden rounded-lg bg-white"
        :class="pokemon.main_type"
    >
        <div
            class="card__thumb relative overflow-hidden aspect-video before:absolute before:left-2/4 before:-translate-x-2/4 inset-0"
        >
            <img
                :src="pokemon.thumb"
                :alt="pokemon.name"
                :title="pokemon.name"
                loading="lazy"
                class="absolute z-20 object-contain w-full h-full max-h-[70%] max-w-[50%] top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
            />
        </div>
        <div class="card-wrap p-4">
            <div class="card__name flex flex-col items-center justify-center">
                <div
                    class="text-xxs px-2 py-1 font-bold bg-neutral-200 rounded-lg mb-2"
                >
                    #{{ pokemon.order }}
                </div>
                <h2>
                    <RouterLink
                        :to="`/pokemons/${pokemon.name}`"
                        class="text-lg font-extrabold capitalize text-center"
                        >{{ pokemon.name }}</RouterLink
                    >
                </h2>
            </div>
            <div class="card__types my-5 flex items-center justify-center">
                <!-- v-for="(type, index) in pokemon.types" -->
                <span
                    v-for="(type, index) in pokemon.types"
                    :key="type.slot"
                    class="rounded-xl px-2 py-1 font-bold capitalize text-xxs"
                    :class="[index > 0 ? 'ml-2' : '', type.type?.name]"
                    >{{ type.type?.name }}</span
                >
            </div>
            <div class="card__stats flex items-center justify-between">
                <div
                    v-for="stat in pokemon.stats.filter((stat) =>
                        ['attack', 'defense', 'speed'].includes(stat.stat.name)
                    )"
                    :key="stat.stat.name"
                    class="text-center text-sm sm:text-xs"
                >
                    <span class="block font-bold">{{ stat.base_stat }}</span>
                    <span class="block text-neutral-400 capitalize">{{
                        stat.stat.name
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
