<script setup>
import { ref, onMounted } from 'vue';
import PropsDetalles from '@/components/PropsDetalles.vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const peliculas = ref({});

const carga = ref(true);


const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

const url = `${API_URL}/Serie/Detail?Items=${route.params.id}&Language=en-US`;

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
        peliculas.value = result.slice(0, 1);

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
console.log(route.params.id)
</script>


<template>
    <div v-if="carga" class="max-w-300">
        <SkeletonCatalogo>
            <div class="bg-gray-700 w-full h-100"></div>
        </SkeletonCatalogo>
    </div>
    <section v-else class="max-w-200">
        <div>
            <PropsDetalles v-for="pelicula in peliculas" :key="pelicula.id" :imagen="pelicula.image"
                :adult="pelicula.adult" :first-air-date="pelicula.firstAirDate" :genres="pelicula.genres"
                :id="pelicula.id" :name="pelicula.name" :original-language="pelicula.originalLanguage"
                :original-name="pelicula.originalName" :overview="pelicula.overview" :popularity="pelicula.popularity"
                :vote-average="pelicula.voteAverage" :vote-count="pelicula.voteCount" />
        </div>
    </section>

</template>

<style scoped></style>