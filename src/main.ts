import { createApp } from 'vue'
import 'uno.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ routes, history: createWebHashHistory() })

createApp(App).use(router).mount('#app')
