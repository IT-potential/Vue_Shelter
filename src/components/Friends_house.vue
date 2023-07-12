<template>
  <section class="pets" id="pets">
    <div class="pets_wrapper">
      <h2 class="pets title">
        Our friends who<br />
        are looking for a house
      </h2>
      <Popup :is-open="isPopupOpen" @close="isPopupOpen = false" />

      <template v-if="show">
        <CarouselItem />
      </template>
      <template v-if="!show">
        <PetsApp />
      </template>
      <button class="button_filled carousel" @click="show = !show" 
      href="./PetsApp.vue" v-bind:style="{ timeout: 2200 }">
        Get to know the rest
      </button>
    </div>
  </section>
</template>

<script>
import CarouselItem from './CarouselItem.vue';
import PetsApp from './PetsApp.vue';

export default {
  components: {
    CarouselItem,
    PetsApp
  },
  data() {
    return {
      isPopupOpen: false,
      confirmation: "",
      show: true,
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