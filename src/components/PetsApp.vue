<template>
  <main class="main">
    <section class="pets" id="pets">
      <h2 class="pets title">
        Our friends who<br>
        are looking for a house
      </h2>
      <div class="pets_wrapper">
        <div class="pets slider" v-for="item in paginatedItems" :key="item.id">
          <div class="pets slider_cards">
            <div class="pets slider_cards card one">
              <div class="pets pet_pic one" v-bind:style="{ backgroundImage: `url(${item.img})` }"></div>
              <div class="pets pet_name one">{{ item.name }}</div>
              <div class="pets button_contour">Learn more</div>
            </div>
          </div>
        </div>
        <div class="pets buttons">
          <button class="pets button disabled_one" id="disabled_one">
            <span class="pets arrow left_left"></span>
          </button>
          <button class="pets button disabled_two" id="disabled_two">
            <span class="pets arrow left"></span>
          </button>

          <button class="pets button number" v-for="pageNumber in pageCount" :key="pageNumber"
            @click="changePage(pageNumber)" 
            :class="{ 'current-page': page === pageNumber }">
            <span class="pets page_number">
              {{ pageNumber }}
            </span>
          </button>

          <!-- <Pagination :total="total" :col="items.length"
            @page-changed="getAnimalsData"
            
            /> {{ items.length }} -->
          <button class="pets button active">
            <span class="pets arrow right"></span>
          </button>
          <button class="pets button active">
            <span class="pets arrow right_right"></span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import '@/style/pets_app.css'

export default {
  name: "all-pets",
  data() {
    return {
      items: [],
      page: 1,
      pageSize: 6,
    }
  },
  created() {
    this.getAnimalsData()
  },
  computed: {
    total() {
      return this.items.length
    },
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    },
    paginatedItems() {
      let startIndex = (this.page - 1) * this.pageSize;
      let endIndex = startIndex + this.pageSize;
      return this.items.slice(startIndex, endIndex)
    }
  },
  methods: {
    async getAnimalsData() {
      this.items = await fetch(`http://localhost:3000/pets`)
        .then(response => response.json())
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    }
  },
  mounted() {
  }
}
</script>

<style>
.current-page {
  border: 3px solid teal;
}
</style>