import { createRouter, createWebHistory } from "vue-router";
import AppVue from "@/App.vue"
import PetsVue from "../pages/pets/PetsApp.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name:'home', component: AppVue, alias: '/' },
        { path: '/pets', name: 'pets', component: PetsVue }
    ]
})