import { createWebHistory, createRouter } from "vue-router"
import AppVue from "@/App.vue"
import PetsVue from "./components/PetsApp.vue"
import Footer_contacts from './components/Footer_contacts.vue'
import Header_info from './components/Header_info.vue'

// Vue.use(Router);

const routes = [
    { path: '/', name: 'home', component: AppVue, alias: '/' },
    { path: '/pets', name: 'pets', component: PetsVue },
    { path: '#header', name: 'header', component: Header_info },
    { path: '/footer', name: 'footer', component: Footer_contacts }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;