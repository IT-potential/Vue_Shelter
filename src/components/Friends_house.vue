<template>
  <section class="pets" id="pets">
    <div class="pets_wrapper">
      <h2 class="pets title">
        Our friends who<br />
        are looking for a house
      </h2>
        <div class="pets carousel">
        <div class="pets button left">
          <span class="pets arrow left"></span>
        </div>
        <div class="pets carousel_cards_wrapper">
          <div class="pets carousel_cards">
            <CarouselItem />
          </div>
          <Popup 
            :is-open="isPopupOpen"
            @close="isPopupOpen = false"  
          />
        </div>
        <div class="pets button right">
          <span class="pets arrow right"></span>
        </div>
      </div>
      <a class="button_filled carousel" href="../pets/index.html">Get to know the rest</a>
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
    return {isPopupOpen: false, confirmation: ""}
  },
  methods: {
    openPopup() {
      this.confirmation = "";
      this.isPopupOpen = true;
    }
  }
  
}
</script>



<style></style>