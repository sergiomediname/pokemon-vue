<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container mx-auto">
        <div class="wrapp py-3">
            <div class="logotipo text-center">
                <RouterLink to="/" class="inline-block">
                    <img src="./../assets/logo.png" alt="" width="104" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>
