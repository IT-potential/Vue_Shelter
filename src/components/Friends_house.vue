<template>
  <section class="pets" id="pets">
    <div class="pets_wrapper">
      <h2 class="pets title">
        Our friends who<br />
        are looking for a house
      </h2>
          <CarouselItem />
          <Popup 
            :is-open="isPopupOpen"
            @close="isPopupOpen = false"  
          />
        
      <a class="button_filled carousel" href="./PetsApp">
        Get to know the rest</a>
    </div>
  </section>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

export default {
  components: {
    CarouselItem,
  },
  data() {
    return {isPopupOpen: false, confirmation: "",
      
  }
  },
  methods: {
    openPopup() {
      this.confirmation = "";
      this.isPopupOpen = true;
    },
    
  }
  
}
</script>



<style></style>