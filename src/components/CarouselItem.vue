<template >
    <pets id="#pets" class="pets carousel_cards card one" @click="isOpen = true" v-for="animal in animals" :key="animal.id">
        <div class="pets pet_pic one" v-bind:style="{ backgroundImage: `url(${animal.img})` }"></div>
        <div class="pets pet_name one">{{ animal.name }}</div>
        <button class="pets button_contour" @click="isOpen = true">Learn more</button>
        <Popup :open="isOpen" @close="closeHandler" :animalInfo="animal" />
    </pets>
</template>

<script>
import useData from '../../data/pets.json'
import Popup from '@/components/Pop_up.vue'
// import { ref } from "vue"

export default {
    components: {
        Popup,
    },
    data() {
        return {
            animals: useData,
            isInfoPopupVisible: false,
            isOpen: false
        }
    },
    methods: {
        closeHandler() {
            console.log("Closed");
            this.isOpen = false;
        }
    }
    // setup() {
    //     const isOpen = ref(false)
    //     return { isOpen }
    // }
}
</script>

<style></style>