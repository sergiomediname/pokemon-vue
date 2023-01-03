<script setup>
const emit = defineEmits(["getDataPokemon"]);
defineProps(["data"]);
</script>

<template>
    <div class="flex items-center justify-between py-3">
        <button
            @click="emit('getDataPokemon', data.previous)"
            :disabled="!data.previous"
            class="px-4 py-2 rounded-lg bg-slate-400 text-white disabled:opacity-40 hover:opacity-80"
        >
            Anterior
        </button>
        <button
            @click="emit('getDataPokemon', data.next)"
            :disabled="!data.next"
            class="px-4 py-2 rounded-lg bg-slate-400 text-white disabled:opacity-40 hover:opacity-80"
        >
            Siguiente
        </button>
    </div>
</template>
