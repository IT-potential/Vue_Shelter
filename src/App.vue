<template>
  <router-view></router-view>
  
  <Navbar_menu/>
  <br>
  <Header_info/>
  <Friends_house/>
  <Footer_contacts />
 
</template>

<script>
  import '@/style/style.css'
  import Navbar_menu from './components/Navbar_menu.vue'
  import Footer_contacts from './components/Footer_contacts.vue'
  import Friends_house from './components/Friends_house.vue'
  import Header_info from './components/Header_info.vue'

  export default {
    name: 'App',
    components: {
      Navbar_menu,
      Footer_contacts,
      Header_info,
      Friends_house,
       
    }
  }
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
