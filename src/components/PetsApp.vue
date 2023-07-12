<template>
  <main class="main">
    <section class="pets" id="pets">
      <div class="pets_wrapper">
        <div class="pets slider" v-for="item in paginatedItems" :key="item.id">
          <div class="pets slider_cards">
            <div class="pets slider_cards card one">

              <div class="pets pet_pic one" v-bind:style="{ backgroundImage: `url(${item.img})` }"></div>
           
              <div class="pets pet_name one">{{ item.name }}</div>
              <button class="pets button_contour" @click="openPopup(item)">Learn more</button>
              <Popup :open="isOpen" @close="closePopup" :animalInfo="selectedAnimal"/>
            </div>
          </div>
        </div>
        <div class="pets buttons">
          <button class="pets button disabled_one" id="disabled_one" @click="movePagesToStart()">
            <span class="pets arrow left_left"></span>
          </button>
          <button class="pets button disabled_two" id="disabled_two" @click="nextPage(-1)">
            <span class="pets arrow left"></span>
          </button>

          <button class="pets button number" v-for="pageNumber in pagesIdx" :key="pageNumber"
            @click="changePage(pageNumber)" 
            :class="{ 'current-page': page === pageNumber }">
              <span class="pets page_number" v-bind:style="{}">
                {{ pageNumber }}
              </span>
          </button>
          <!-- <Pagination :total="total" :col="items.length"
            
            @page-changed="getAnimalsData"
                      @click="changePage(pageNumber + this.page - 1)" 
            :class="{ 'current-page': page === pageNumber + this.page - 1 }"
            /> {{ items.length }} -->
          <button class="pets button active" @click="nextPage(1)">
            <span class="pets arrow right"></span>
          </button>
          <button class="pets button active" @click="movePagesToEnd()">
            <span class="pets arrow right_right"></span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import '@/style/pets_app.css'
import Popup from '@/components/Pop_up.vue'

export default {
  name: "all-pets",
  components: {
    Popup
  },
  data() {
    return {
      items: [],
      page: 1,
      pageSize: 4,
      pagesIdx: [1, 2, 3],
      isOpen: false,
      selectedAnimal: Object,
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
    },
  },
  methods: {
    async getAnimalsData() {
      this.items = await fetch(`http://localhost:3000/pets`)
        .then(response => response.json())

    },
    openPopup(item) {
            this.selectedAnimal = item;
            this.isOpen = true;
            console.log(item);
        },
        closePopup() {
            this.selectedAnimal = {};
            this.isOpen = false;
        },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.pagesIdx = []
      for (let i = 0; i < 3; i++) {
        if ((this.page + i - 1) > 0 && (this.page + i - 1) <= this.pageCount) {
          this.pagesIdx.push(this.page + i - 1)
        }
      }
    },
    nextPage(p) {
      this.page += p;
      this.pagesIdx = []
      if (this.page > this.pageCount) {
        this.page = 1
      } else if (this.page < 1) {
        this.page = this.pageCount
      }
      for (let i = 0; i < 3; i++) {
        if ((this.page + i - 1) > 0 && (this.page + i - 1) <= this.pageCount) {
          this.pagesIdx.push(this.page + i - 1)
        }
      }
      // this.currentItems = [...this.items].splice(this.page, 4)
    },
    movePagesToEnd() {
      this.page = this.pageCount;
    },
    movePagesToStart() {
      this.page = 1;
    },
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