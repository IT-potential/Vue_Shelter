<template>
  <header class="header">
    <div class="header_wrapper">
      <a class="logo" href="../main/index.html">
        <h1 class="logo_one">Cozy House</h1>
        <h2 class="logo_two">Shelter for pets in Boston</h2>
      </a>
      <nav class="nav_menu">
        <ul class="nav_menu items">
          <li class="nav_menu item">
            <a class="nav_menu link" href="../main/index.html">About the shelter</a>
          </li>
          <li class="nav_menu item">
            <a class="nav_menu link" >Our pets</a>
          </li>
          <li>
            <!-- <router-link :to="{ name: 'pets' }" class="nav_menu link">BLABLA</router-link> -->
          </li>
          <li class="nav_menu item">
            <a class="nav_menu link" href="../main/index.html#help">Help the shelter</a>
          </li>
          <li class="nav_menu item">
            <a class="nav_menu link" href="#footer">Contacts</a>
          </li>
        </ul>
      </nav>
      <div class="burger"></div>
    </div>
  </header>
</template>

<script>

export default {
  components: {

  },
  methods: {
    
  }
}
</script>

<style></style>