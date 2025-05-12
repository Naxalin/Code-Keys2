<template>
  <div>
    <h1>Juegos de Steam</h1>
    <div v-if="loading">Cargando...</div>
    <div v-if="error">Error al cargar los juegos</div>
    <ul v-if="games.length">
      <li v-for="game in games" :key="game.id">
        <h2>{{ game.name }}</h2>
        <p>{{ game.short_description }}</p>
        <p>{{ game.price_overview ? game.price_overview.final_formatted : 'Gratis' }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      games: [],
      loading: true,
      error: false,
    };
  },
  mounted() {
    this.fetchGames();
  },
  methods: {
    async fetchGames() {
      try {
        const { data } = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2');
        const gameIds = data.applist.apps.slice(0, 10);
        const gameDetails = await Promise.all(gameIds.map(game =>
          axios.get('https://store.steampowered.com/api/appdetails', {
            params: { appids: game.appid, key: 'TU_CLAVE_DE_API_DE_STEAM' }
          })
        ));
        this.games = gameDetails.map((response, index) => {
          const gameData = response.data[gameIds[index].appid].data;
          return { id: gameIds[index].appid, name: gameData.name, short_description: gameData.short_description, price_overview: gameData.price_overview };
        });
        this.loading = false;
      } catch {
        this.error = true;
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
