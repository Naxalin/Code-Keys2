<template>
  <ul>
    <li v-for="game in sortedGames" :key="game.appid">
      <GameItem :game="game" />
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import GameItem from '@/components/GameItem.vue'

const props = defineProps({
  games: Array,
  sortBy: String
})

const sortedGames = computed(() => {
  if (props.sortBy === 'price') {
    return [...props.games].sort((a, b) => a.price - b.price)
  } else if (props.sortBy === 'date') {
    return [...props.games].sort((a, b) => new Date(b.releaseDateObj) - new Date(a.releaseDateObj))
  }
  return props.games
})
</script>
