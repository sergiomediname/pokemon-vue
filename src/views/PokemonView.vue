<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
const { pokemons, loading, getSinglePokemon } = useGetData();

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push("/");
};

getSinglePokemon(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <LoadingSpinner v-if="loading" />
    <div class="pokemon" v-else>
        <div
            class="card w-full lg:max-w-[75%] xl:max-w-[70%] mx-auto rounded-lg bg-white flex flex-wrap overflow-hidden"
            :class="pokemons.main_type"
        >
            <div class="w-full sm:w-2/5">
                <div
                    class="card__thumb relative overflow-hidden h-full aspect-video sm:aspect-[3/4] before:absolute before:w-[124%] before:h-full before:top-[-31%] before:left-2/4 before:-translate-x-2/4 sm:before:w-full sm:before:h-[124%] sm:before:left-[-35%] sm:before:top-2/4 sm:before:-translate-y-2/4 sm:before:-translate-x-0"
                >
                    <img
                        :src="pokemons.thumb"
                        alt=""
                        class="absolute z-20 object-contain w-full h-full max-h-[60%] max-w-[60%] top-2/4 -translate-y-2/4 right-[15%]"
                    />
                </div>
            </div>
            <div class="card-wrap w-full p-4 sm:w-3/5 sm:py-9 sm:px-5">
                <div
                    class="card__name flex flex-col items-center justify-center"
                >
                    <div
                        class="text-xxs px-2 py-1 font-bold bg-neutral-200 rounded-lg mb-2"
                    >
                        #{{ pokemons.order }}
                    </div>
                    <h2 class="text-2xl font-extrabold capitalize text-center">
                        {{ pokemons.name }}
                    </h2>
                </div>
                <div class="card__types my-5 flex items-center justify-center">
                    <span
                        v-for="(type, index) in pokemons.types"
                        :key="type.slot"
                        class="rounded-xl px-2 py-1 font-bold capitalize text-xxs"
                        :class="[index > 0 ? 'ml-2' : '', type.type?.name]"
                        >{{ type.type?.name }}</span
                    >
                </div>
                <div
                    class="card__stats grid grid-cols-[190px] justify-center md:grid-cols-2 md:justify-between"
                >
                    <div v-for="stat in pokemons.stats" class="text-xs" :key="stat.stat.name">
                        <span class="text-neutral-400 capitalize"
                            >{{ stat.stat.name }}:
                        </span>
                        <span class="font-bold">{{ stat.base_stat }}</span>
                        <div
                            class="w-[190px] bg-neutral-200 mb-4 rounded overflow-hidden"
                        >
                            <div
                                class="w-[var(--stat-style)] h-2 bg-type-pokemon"
                                :style="`--stat-style: ${stat.base_stat}px`"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button
        @click="back"
        class="block mx-auto mt-10 px-4 py-2 rounded-lg bg-slate-400 text-white disabled:opacity-40 hover:opacity-80"
    >
        Regresar
    </button>
</template>
