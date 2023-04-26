import { createRouter, createWebHistory } from "vue-router";
import AppVue from "./src/App.vue"
import PetsVue from "./pages/pets/PetsApp.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name:'home', component: AppVue },
        { path: '/pets', name: 'pets', component: PetsVue }
    ]
})