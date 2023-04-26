<script>
import CarouselItemVue from './CarouselItem.vue'

export default {
  components: {
    CarouselItemVue
  }
  // function showCardInfo() {
  //   let cardInfo = 'data/pets.json()';
  // const res = await fetch(cardInfo);
  // const data = await res.json();
  // nextAnimal = Math.floor(1 + Math.random() * (data.length + 1 - 1));
  // // name.textContent = `${data[nextAnimal].name}`
  // nameAnimal =`${data[nextAnimal].name}`
  //   console.log(cardInfo);
  // }
  // console.log(nextAnimal);

}
</script>

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
            <CarouselItemVue />
            <!-- <div class="pets carousel_cards card two">
              <div class="pets pet_pic two"></div>
              <div class="pets pet_name two">{{ }}</div>
              <div class="pets button_contour">Learn more</div>
            </div>
            <div class="pets carousel_cards card three">
              <div class="pets pet_pic three"></div>
              <div class="pets pet_name three">{{  }}</div>
              <div class="pets button_contour">Learn more</div>
            </div> -->
          </div>
        </div>
        <div class="pets button right">
          <span class="pets arrow right"></span>
        </div>
      </div>
      <a class="button_filled carousel" href="../pets/index.html">Get to know the rest</a>
    </div>
  </section>
</template>

<style></style>