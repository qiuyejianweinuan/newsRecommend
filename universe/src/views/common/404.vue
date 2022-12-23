<template>
  <main class="my-auto p-5" id="content">
    <div class="text-center text-danger py-5 mt-5">
      <h1 class="display-1">404</h1>
      <h2>抱歉,该页面不存在..</h2>
      <RouterLink class="btn btn-outline-primary" to="/">返回首页</RouterLink>
      <button class="btn btn-outline-dark  ms-5" @click="$router.go(-1)">回到上一页</button>
    </div>

  </main>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "404",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>