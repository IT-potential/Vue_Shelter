<template>
  <body class="body fixed" id="body" ref="dropdown">
    <header class="header" id="header">
      <div class="header_wrapper">
        <a class="logo" href="../main/index.html">
          <h1 class="logo_one">Cozy House</h1>
          <h2 class="logo_two">Shelter for pets in Boston</h2>
        </a>
        <nav class="nav_menu" v-if="!show">
          <li class="nav_menu item">
            <a class="nav_menu link"></a>
          </li>
          <ul class="nav_menu items">
            <li class="nav_menu item active">
              <a class="nav_menu link" href="#header">About the shelter</a>
            </li>
            <li class="nav_menu item">
              <a class="nav_menu link" href="#pets">Our pets</a>
            </li>

            <li class="nav_menu item">
              <a class="nav_menu link" href="../main/index.html#help">Help the shelter</a>
            </li>
            <li class="nav_menu item">
              <a class="nav_menu link" href="#footer">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="burger" @click="show = !show">
        <span class="burger_line"></span>
        <span class="burger_line"></span>
        <span class="burger_line"></span>
      </div>
    </header>
    <nav class="burger_menu" v-if="show">
      <div class="burger_transfer" @click="show = !show">
        <span class="burger_line"></span>
        <span class="burger_line"></span>
        <span class="burger_line"></span>
      </div>
      <ul class="burger_nav_menu_items">
        <li class="burger_nav_menu_item" v-for="item in links" :key="item.id">
          <a class="burger_nav_menu_link" :href="`${item.link}`"> {{ item.name }}</a>
        </li>
      </ul>
    </nav>
    <!-- <div class="overlay"></div> -->
  </body>
</template>

<script>
import '@/style/burger_menu.css'

export default {
  data() {
    const links = [
      { name: 'About the shelter', link: '#header' },
      { name: 'Our pets', link: '#pets' },
      { name: 'Help the shelter', link: '#help' },
      { name: 'Contacts', link: '#footer' }
    ]
    return {
      links,
      show: false,
      action: ''
    }
  },
  methods: {
  
}
</script>

<style></style>