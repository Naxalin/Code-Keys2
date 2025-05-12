<script setup>
import { ref, onMounted } from 'vue';
import PropsCatalogo from '@/components/PropsCatalogo.vue';
import SkeletonCatalogo from '@/components/SkeletonCatalogo.vue';
const peliculas = ref({});

const carga = ref(true);


const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

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

        peliculas.value = result.slice(0, 8);
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
    <div v-if="carga">
        <SkeletonCatalogo class="flex flex-col gap-2">
            <div class="bg-gray-700 w-full h-20"></div>
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
    <section>
        <h1 class="text-center text-29">¡ULTIMAS PELICULAS EN NUESTRA PAGINA!</h1>
    </section>
    <article>
        <div class="sm:ml-[30px] mb-20 ">
            <section class="grid md:grid-cols-3 sm:grid-cols-1 xl:grid-cols-4 gap-3">
                <PropsCatalogo v-for="pelicula in peliculas" :key="pelicula.id" :imagen="pelicula.image"
                    :adult="pelicula.adult" :first-air-date="pelicula.firstAirDate" :genres="pelicula.genres"
                    :id="pelicula.id" :name="pelicula.name" :original-name="pelicula.originalName"
                    :overview="pelicula.overview" :popularity="pelicula.popularity" :vote-average="pelicula.voteAverage"
                    :vote-count="pelicula.voteCount" />
            </section>
        </div>
    </article>
</template>

<style scoped></style>