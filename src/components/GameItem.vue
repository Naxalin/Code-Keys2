<template>
  <div class="flex items-center gap-2">
    <strong>{{ game.name }}</strong>
    – {{ formatPrice(game.price) }}
    <span class="text-sm text-gray-600">
      ({{ formatDate(game.releaseDate) }})
    </span>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
      default: () => ({
        name: '',
        price: 0,
        releaseDate: null
      })
    }
  },
  methods: {
    // Formatea el precio a moneda local (es-ES)
    formatPrice(value) {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
      }).format(value)
    },
    // Formatea la fecha a "8 de mayo de 2025" o devuelve 'Sin fecha'
    formatDate(value) {
      if (!value) return 'Sin fecha'
      return new Date(value).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    }
  }
}
</script>
