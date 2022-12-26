<script setup>
import {RouterLink, RouterView} from 'vue-router'
import ToTop from "@/components/toTop.vue";
</script>

<template>
  <RouterView/>

  <to-top></to-top>
</template>

<style scoped>
a{
  text-decoration: none;
}
</style>
