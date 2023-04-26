import { createApp } from 'vue'
import App from './App.vue'
import router from 'vue-router'

const app = createApp(App)
app.mount('#app')
app.use(router)