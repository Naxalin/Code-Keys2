<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Juegos de Steam</h1>

    <ul v-if="visibleGames.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <li
        v-for="game in visibleGames"
        :key="game.appid"
        class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
      >
        <img
          :src="game.image"
          alt="Imagen del juego"
          class="w-full h-auto rounded-md mb-4"
        />
        <h2 class="text-lg font-semibold text-center mb-2">{{ game.name }}</h2>
        <p class="text-gray-700 mb-2"><strong>Precio:</strong> {{ game.price }}</p>

        <button
          @click="toggleInfo(game.appid)"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ selectedGameId === game.appid ? 'Ocultar Información' : 'Más Información' }}
        </button>

        <div
          v-if="selectedGameId === game.appid"
          class="mt-4 w-full bg-gray-100 rounded p-3 text-sm"
        >
          <p><strong>Fecha de lanzamiento:</strong> {{ game.release_date }}</p>
          <p><strong>Precio original:</strong> {{ game.price_raw }}</p>
          <p v-if="game.discount_percent > 0" class="text-green-600 font-semibold mt-2">
            ¡Está en oferta!
          </p>
        </div>
      </li>
    </ul>

    <p v-else class="text-center text-gray-500">Cargando juegos...</p>

    <!-- Elemento observado para cargar más -->
    <div ref="loadMoreTrigger" class="h-10"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { fetchGames } from '@/servicies/steam';

export default {
  setup() {
    const games = ref([]); // Todos los juegos cargados
    const visibleGames = ref([]); // Los juegos visibles (para mostrar en pantalla)
    const selectedGameId = ref(null); // El juego seleccionado para mostrar más información
    const loadMoreTrigger = ref(null); // Elemento del DOM que se observa para cargar más juegos
    const itemsPerLoad = 9; // Cuántos juegos cargar cada vez
    const totalGames = ref(0); // Total de juegos disponibles

    // Mezclar los juegos aleatoriamente (Fisher-Yates)
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Función para cargar más juegos
    const loadMore = () => {
      const next = games.value.slice(visibleGames.value.length, visibleGames.value.length + itemsPerLoad);
      if (next.length > 0) {
        visibleGames.value.push(...next);
      }
    };

    // Toggle para mostrar la información del juego
    const toggleInfo = (appid) => {
      selectedGameId.value = selectedGameId.value === appid ? null : appid;
    };

    onMounted(async () => {
      // Cargar todos los juegos desde Steam
      const fetchedGames = await fetchGames();
      games.value = shuffle(fetchedGames); // Mezclar aleatoriamente
      totalGames.value = games.value.length; // Guardar el total de juegos
      loadMore(); // Cargar los primeros 9 juegos

      // Scroll infinito
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleGames.value.length < totalGames.value) {
          loadMore(); // Cargar más juegos si estamos cerca del final
        }
      }, {
        rootMargin: '100px', // Iniciar la carga cuando esté 100px antes de llegar al final
      });

      if (loadMoreTrigger.value) {
        observer.observe(loadMoreTrigger.value);
      }
    });

    return {
      visibleGames,
      selectedGameId,
      toggleInfo,
      loadMoreTrigger
    };
  }
};
</script>
