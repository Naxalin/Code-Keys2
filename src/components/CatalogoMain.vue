<script setup>
import { ref, onMounted } from 'vue';
import CartaPeliculasView from '@/components/PropsCatalogo.vue';
import SkeletonCatalogo from '@/components/SkeletonCatalogo.vue'
const peliculas = ref({});

const carga = ref(true);


const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;
console.log(API_URL, API_KEY, API_HOST);

const url = `${API_URL}/Serie/Popular?Page=1&Language=en-US`;
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }
};


const cargarPeliculanas = async () => {
    try {
        carga.value = true;
        const response = await fetch(url, options);
        const result = await response.json();

        peliculas.value = result;
        console.log(result);
        carga.value = false;
    } catch (error) {
        console.error(error);
        carga.value = false;
    }
}
onMounted(() => {

    cargarPeliculanas();
}) 
</script>

<template>
    <div>
        <div v-if="carga">
            <SkeletonCatalogo class="flex flex-col gap-2">
                <div class="bg-gray-700 w-full h-20"></div>
                <div class="bg-gray-700 w-full h-4"></div>
                <!-- <p>{{ overview }} </p> -->
                <div class="grid grid-cols-4 gap-2">
                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                    <span class="w-full bg-gray-700 h-72"></span>

                </div>

            </SkeletonCatalogo>
        </div>
        <section v-else class="grid grid-cols-1 bg-white rounded-3xl shadow-xl p-2 
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    
     gap-4    ">
            <CartaPeliculasView v-for="pelicula in peliculas" :key="pelicula.id" :imagen="pelicula.image"
                :adult="pelicula.adult" :first-air-date="pelicula.firstAirDate" :genres="pelicula.genres"
                :id="pelicula.id" :name="pelicula.name" :original-language="pelicula.originalLanguage"
                :original-name="pelicula.originalName" :overview="pelicula.overview" :popularity="pelicula.popularity"
                :vote-average="pelicula.voteAverage" :vote-count="pelicula.voteCount" />

        </section>
    </div>
</template>

<style scoped></style>