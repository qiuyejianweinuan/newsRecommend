<template>

  <nav class="nav">

    <a class="newsMenu">关注</a>
    <a class="newsMenu active" >推荐</a>
    <a class="newsMenu" >热门</a>
    <a class="newsMenu">金融</a>
    <a class="newsMenu">科技</a>
    <a class="newsMenu">视频</a>
    <a class="newsMenu">国际</a>
    <a class="newsMenu">更多</a>
  </nav>
</template>

<script>
import $ from 'jquery/dist/jquery.min'

export default {
  name: "NewsMenu",
  methods:{
  },
  mounted() {
    $(".newsMenu").on("click",()=>{
      // console.log(event.target.tagName)
      $(".newsMenu").removeClass("active")
      console.log($(this).text())
      $(this).addClass("active")
    })
  }
}
</script>

<style scoped>

</style>