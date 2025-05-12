<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="container2">
        <header>
            <Menu />
        </header>
        <main class="ml-0 gap-4 mt-[90px] sm:ml-[270px]">
            <slot></slot>
        </main>

        <Footer />

    </div>
</template>

<style scoped></style>
