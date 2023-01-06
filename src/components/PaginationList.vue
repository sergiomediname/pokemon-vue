<script setup>
defineProps(["data"]);
const emit = defineEmits(["next", "previous"]);
</script>

<template>
    <div class="flex items-center justify-between py-3">
        <button
            @click="emit('previous')"
            :disabled="!data.previous || data.previous === 0"
            class="px-4 py-2 rounded-lg bg-slate-400 text-white disabled:opacity-40 hover:opacity-80"
            >
            Anterior
        </button>
        <button
            @click="emit('next')"
            :disabled="!data.next || data.next === 0"
            class="px-4 py-2 rounded-lg bg-slate-400 text-white disabled:opacity-40 hover:opacity-80"
        >
            Siguiente
        </button>
    </div>
</template>
