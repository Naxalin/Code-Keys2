<script setup>
import { ref, onMounted } from 'vue';
import Detalles from '@/components/Detalles.vue'
defineProps({
    adult: {
        type: Boolean,
        default: false
    },
    firstAirDate: {
        type: String,
        default: ""
    },
    genres: {
        type: Array,
        default: () => []
    },
    id: {
        type: Number,
        default: 0
    },
    imagen: {
        type: URL,
        default: "https://picsum.photos/200"
    },
    name: {
        type: String,
        default: ""
    },
    originalLanguage: {
        type: String,
        default: "ES"
    },
    originalName: {
        type: String,
        default: ""
    },
    overview: {
        type: String,
        default: ""
    },
    popularity: {
        type: Number,
        default: 0
    },
    voteAverage: {
        type: Number,
        default: 0
    },
    voteCount: {
        type: Number,
        default: 0
    }
})

const skeleton = ref(null);

onMounted(() => {
    // setTimeout(() => {
    //     if (skeleton.value) {
    //         skeleton.value.hidden = true;
    //     }
    // }, 2000);
});
</script>


<template>

    <div v-if="carga" class="max-w-200">
        <SkeletonCatalogo class="flex flex-col gap-2">

            <div class="bg-gray-700 w-full h-200"></div>

        </SkeletonCatalogo>
    </div>

    <section class="sm:flex items-center p-5 sm:ml-70 shadow-xl bg-white rounded-3xl text-center  gap-2">
        <div class="pl-20">
            <img class="object-cover max-h-96" :src="imagen" alt="imagen de una isla">
        </div>
        <div class="ml-20">
            <h2 class="w-full font-bold">{{ name }}</h2>
            <!-- <p>{{ overview }} </p> -->
            <span>Popularidad: {{ popularity }}</span>
            <br>
            <span>Valoración: {{ voteAverage }}</span>
            <br>
            <!-- <span>Votos: {{ voteCount }}</span> -->

            <!-- <span>Idioma: {{ originalLanguage }}</span> -->

            <span>Fecha de estreno: {{ firstAirDate }}</span>
            <br>
            <span>Generos: {{ genres.toString() }}</span>

        </div>


    </section>


</template>