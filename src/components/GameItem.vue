<template>
  <div>
    <strong>{{ game.name }}</strong> – {{ game.price }} €
    <span class="text-sm text-gray-600">({{ game.releaseDate || 'Sin fecha' }})</span>
  </div>
</template>

<script setup>
const props = defineProps({
  game: Object
})
</script>
