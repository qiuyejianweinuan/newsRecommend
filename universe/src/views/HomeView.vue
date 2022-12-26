<script>
import indexIntroduce from '@/components/indexIntroduce.vue'
import Header from '@/components/common/Header.vue'
import $ from 'jquery/dist/jquery.min'
import NewsFooter from "@/components/common/NewsFooter.vue";
import TopNews from "@/components/news/TopNews.vue";
import NewsMenu from "@/components/news/NewsMenu.vue";
import HotNews from "@/components/news/HotNews.vue";
import LoginIndexCom from "@/components/common/LoginIndexCom.vue";
import RecommendedNews from "@/components/news/RecommendedNews.vue";
import BackVideo from "@/components/common/BackVideo.vue";

export default {
  components: {
    BackVideo,
    RecommendedNews,
    LoginIndexCom,
    HotNews,
    NewsMenu,
    TopNews,
    NewsFooter,
    Header,
    indexIntroduce
  },
}

</script>

<template>

  <Header></Header>

  <index-introduce></index-introduce>

  <main>
    <div class="py-5">
      <div class="container">
        <!--                <index-introduce></index-introduce>-->
        <div class="row g-3 ">


          <div class="col-md-7">

            <div class=" nav-scroller p-3">
              <!--              新闻分类-->
              <NewsMenu class="fw-normal"></NewsMenu>
            </div>
            <!--   置顶新闻      -->
            <TopNews></TopNews>
            <!--   推荐新闻         -->
            <RecommendedNews></RecommendedNews>


          </div>
          <div class="col-md-5 ">

            <!--            登录模块-->
            <LoginIndexCom></LoginIndexCom>
            <!--            热门新闻模块-->
            <HotNews></HotNews>
          </div>
        </div>
      </div>
    </div>

  </main>

  <news-footer></news-footer>
</template>
<style scoped>
</style>
