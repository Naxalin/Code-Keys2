import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import 'flowbite'

const app = createApp(App)

app.use(router)
app.component('DefaultLayout', DefaultLayout)
app.mount('#app')
