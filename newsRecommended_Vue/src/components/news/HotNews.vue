<template>
  <div class="position-sticky rounded-4 " style="top:5rem">
    <div class="p-2 bg-white rounded-4 mt-4 ">
      <div class="row">
        <div class="h3  col-md-7 col-lg-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" style="color: #ff2834" class="bi bi-fire svg-icon " viewBox="0 0 16 16">
          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
        </svg><span>近期热搜</span></div>
        <div class="mousePoint h6 py-2 col-md-5 col-lg-4 text-danger" @click="changeTest">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
               class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
          换一换
        </div>
      </div>
      <div class="row px-3 mx-auto" v-for="(item,index) in newsHot">
        <a class="h5 newsHot" @click="gotoAbout(item.newId)"><span class="my-auto badge bg-danger me-3"
                                                                   v-text="index"></span>{{ item.newTitle }}
        </a>
      </div>
      <news-footer class="mt-2 mx-auto"></news-footer>
    </div>


  </div>

</template>

<script>
import NewsFooter from "@/components/common/NewsFooter.vue";

export default {
  name: "HotNews",
  components: {NewsFooter},
  data() {
    return {
      newsHot: []
    }
  },
  methods: {
    gotoAbout(val) {
      this.$router.push({
        path: '/NewsInfo',
        query: {
          newsId: val
        }
      })
    },
    getHotNews() {
      this.newsHot = [
        {newId: 'wjkfj', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'erre', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'erget', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rnrj', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'erre', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rtnr', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'tbrt', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rtr', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'brtbrt', newTitle: '国家卫健委：不再公布无症状感染者数据'},
      ]
    },
    changeTest() {
      this.newsHot = [
        {newId: '666gg', newTitle: '热门新闻更换测试'},
        {newId: 'er5re', newTitle: '热门新闻更换测试'},
        {newId: 'er5get', newTitle: '国家卫健委：热门新闻更换测试据'},
        {newId: 'rn4rj', newTitle: '国家卫健热门新闻更换测试'},
        {newId: 'e4rre', newTitle: '热门新闻更换测试'},
        {newId: 'rt33nr', newTitle: '国家热门新闻更换测试'},
        {newId: 'tbfbgrt', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'rtr', newTitle: '国家卫健委：不再公布无症状感染者数据'},
        {newId: 'brtbrt', newTitle: '国家卫健委：不再公布无症状感染者数据'}
      ]
    }
  },
  mounted() {
    this.getHotNews()
  }
}
</script>

<style scoped>

</style>