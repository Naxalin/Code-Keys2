// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/steam-api': {
        target: 'https://api.steampowered.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/steam-api/, '')
      },
      '/store-api': {
        target: 'https://store.steampowered.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/store-api/, '')
      }
    }
  }

})
