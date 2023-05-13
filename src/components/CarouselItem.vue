<template >
    <div class="pets carousel">
        <div class="pets button left" @click="leftSlide">
            <span class="pets arrow left"></span>
        </div>
        <div class="pets carousel_cards_wrapper">
            <div class="pets carousel_cards" :interval="2000"
                :style="{ 'margin-left': '-' + (109 * currentSlideIndex) + '%' }">
                <pets id="#pets" class="pets carousel_cards card one" v-for="(animal, index) in  animals " :key="index"
                    :animal="animal">
                    <div class="pets pet_pic one" v-bind:style="{ backgroundImage: `url(${animal.img})` }"></div>
                    <div class="pets pet_name one">{{ animal.name }}</div>
                    <button class="pets button_contour" @click="openPopup(animal)">Learn more</button>
                    <Popup :open="isOpen" @close="closePopup" :animalInfo="selectedAnimal" />
                </pets>
            </div>
        </div>
        <div class="pets button right" @click="rightSlide">
            <span class="pets arrow right"></span>
        </div>
    </div>
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
        console.log(useData);
        return {
            animals: useData,
            currentSlideIndex: 0,
            isInfoPopupVisible: false,
            isOpen: false,
            selectedAnimal: {},
        }
    },
    methods: {
        openPopup(animal) {
            this.selectedAnimal = animal;
            this.isOpen = true;
            // console.log(animal);
        },
        closePopup() {
            this.selectedAnimal = {};
            this.isOpen = false;
        },
        leftSlide() {
            if (this.currentSlideIndex < 0) {
                this.currentSlideIndex = this.animals.length - 6
            } else {
                this.currentSlideIndex--
            }
        },
        rightSlide() {
            console.log(this.animals.length);
            if (this.currentSlideIndex >= this.animals.length - 6) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex++
            }
        },
        mounted() {
            if (this.interval > 0) {
                setInterval(() =>
                    this.rightSlide()
                ), 2000
            }
        }
    }
    // setup() {
    //     const isOpen = ref(false)
    //     return { isOpen }
    // }
}
</script>

<style></style>