<template>
  <NavbarVue />
  <Header_infoVue />
  <Footer_contactsVue />
</template>

<script>
  import NavbarVue from '@/components/Navbar_menu.vue'
  import Header_info from '@/components/Header_info.vue'
  import Footer_contactsVue from '@/components/Footer_contacts.vue'

export default {
    components: {
        NavbarVue,
        Header_info,
        Footer_contactsVue
    }
}
</script>

<style>

</style>