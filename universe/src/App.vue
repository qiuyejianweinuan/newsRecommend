<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MarkDownInfo from './components/MarkDownInfo.vue'

</script>

<template>
  <Header ></Header>
  <RouterView/>
  <Footer></Footer>
<!--  <MarkDownInfo></MarkDownInfo>-->
<!--  <RouterView class="container"></RouterView>-->
<!--  <Footer ></Footer>-->
</template>

<style scoped>
a{
  text-decoration: none;
}
</style>
