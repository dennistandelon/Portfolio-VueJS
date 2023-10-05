<script setup>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar/>
  <div class="main-color pt-10 main-text-color">
    <router-view/>
  </div>
  <Footer/>
</template>
