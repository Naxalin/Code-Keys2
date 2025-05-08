import axios from 'axios';

export async function fetchGames(offset = 0, limit = 100) {
  try {
    const response = await axios.get('/steam-api/ISteamApps/GetAppList/v2/');
    const apps = response?.data?.applist?.apps;

    if (!Array.isArray(apps)) {
      throw new Error('No se encontraron juegos en la respuesta de Steam.');
    }

    // Barajamos los juegos y aplicamos paginación
    const shuffledApps = apps.sort(() => Math.random() - 0.5);
    const paginatedApps = shuffledApps.slice(offset, offset + limit);

    const enrichedGames = [];

    for (const app of paginatedApps) {
      try {
        const storeResponse = await axios.get(`/store-api/api/appdetails?appids=${app.appid}`);
        const gameData = storeResponse.data[app.appid];

        if (
          gameData.success &&
          gameData.data &&
          !gameData.data.is_free &&
          !gameData.data.is_dlc &&
          !gameData.data.is_soundtrack &&
          !gameData.data.is_adult &&
          gameData.data.price_overview
        ) {
          const data = gameData.data;
          const isOnSale = data.price_overview.discount_percent > 0;

          enrichedGames.push({
            appid: app.appid,
            name: data.name,
            image: data.header_image,
            price: data.price_overview.final_formatted,
            release_date: data.release_date?.date || 'Sin fecha',
            release_timestamp: new Date(data.release_date?.date).getTime() || 0,
            price_raw: data.price_overview.final,
            is_on_sale: isOnSale,
          });
        }
      } catch (innerErr) {
        console.warn(`No se pudo obtener info del juego ${app.appid}`, innerErr);
      }
    }

    // Ordenamos: primero en oferta, luego por precio descendente
    enrichedGames.sort((a, b) => {
      if (b.is_on_sale === a.is_on_sale) {
        return b.price_raw - a.price_raw;
      }
      return b.is_on_sale ? 1 : -1;
    });

    return enrichedGames;
  } catch (error) {
    console.error('Error al obtener juegos de Steam:', error);
    return [];
  }
}
