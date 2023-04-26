<template>
    <div class="pets carousel_cards card one" 
    v-for="animal in animals" 
        :key="animal.id"
    >
        <img class="pets pet_pic one"  src = "../../refs/pics/dogs/1.png" />
        <div class="pets pet_name one">{{ animal.name }}</div>
        <div class="pets button_contour">Learn more</div>
    </div>
</template>

<script>
import bodyParser from "body-parser";
import useData from "../../data/pets.json"

export default {
    data() {
        return {
            animals: useData
        }
    },
    method: {
        add_url() {
           const animalId = this.animal.id.toString();
           const img = new Image();
           img.src = `../../refs/pics/dogs/${ animalId }.png`
           img.onload = () => {
            bodyParser.style.backgroundImage = `url(${img.src})`
            }
        }
    }
}
</script>

<style>

</style>