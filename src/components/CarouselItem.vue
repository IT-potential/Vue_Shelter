<template >
    <pets id="#pets" class="pets carousel_cards card one" @click="isOpen = true" 
         v-for="animal in animals" :key="animal.id"
        >
        
        <div class="pets pet_pic one"  v-for="lk in alinks" :key="lk.id"
         
          v-bind:style="{backgroundImage:`url(+ lk.link +)`}"></div>

        <div class="pets pet_name one">{{ animal.name }}</div>
        <button class="pets button_contour">Learn more</button>
        <Popup :open="isOpen" @click="isOpen = !isOpen" />
    </pets>
</template>

<script>
import useData from '../../data/pets.json'
import Popup from '@/components/Pop_up.vue'
import { ref } from "vue"

export default {
    components: {
        Popup,
    },
    data() {
        // for (let animal in useData) {
        //     animal.img = require(animal.img)
        // }
        // console.log(useData[0].img);
       
        const alinks = [
            { link: '/2.png' },
            { link: '/dogs/donation-dog.png' },
        ]
        return {
            alinks,
            animals: useData,
            isInfoPopupVisible: false,
            // imgs: useData,
        }
    },
    computed: {
        itemImage() {
            if(!this.alinks) {
                return 
            }
            const fileName = this.alinks;
          
            return require(`${fileName}`);
      
            
            }
              
        },

    setup() {
        const isOpen = ref(false)
        return { isOpen }
    }
}
</script>

<style>
</style>