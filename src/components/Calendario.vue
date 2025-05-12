<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
    <div class="pr-90 md:pr-150">
        <iframe
            src="https://calendar.google.com/calendar/embed?src=classroom108030458071049528811%40group.calendar.google.com&ctz=Europe%2FMadrid"
            class="md:w-100 xl:w-full xl:pl-50" style="border: 0" width="400" height="400" frameborder="0"
            scrolling="no"></iframe>
    </div>
</template>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background-color: #f2f2f2;
}

th,
td {
    border: 1px solid #f2f2f2;
    padding: 8px;
    text-align: center;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:nth-child(odd) {
    background-color: #f2f2f2;
}

.dias {
    background-color: white;
}
</style>