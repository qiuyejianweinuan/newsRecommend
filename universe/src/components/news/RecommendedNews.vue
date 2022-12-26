<template>
  <div class="news animate__animated animate__fadeIn animate__slow" v-for="newItem in news"
       :class="{'d-none':!newItem.openSw}">

    <div class="mt-3 p-4 row ">
      <div class="col-8">
        <a class="newsTop" href="#" style="z-index: 0!important;"> {{ newItem.newsHead }}</a>
        <div class="d-flex mt-5 ">
          <nav class="col-md-10">
            <a class="small me-2" href="#">{{ newItem.newsAuth }}</a>
            <span class="small">{{ newItem.newsComments }}</span><a class="small me-2" href="#">评论</a>
            <a class="small me-2" href="#">{{ newItem.newsTime }}</a>
          </nav>

          <div type="button" class="btn-close " @click="newItem.openSw = false"></div>

        </div>

      </div>

      <div class="col-4" :class="{'d-none':newItem.newsPhoto==null}" style="z-index: 0!important;">
        <div class="overflow-hidden">
          <img class="news-img" :src="newItem.newsPhoto" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center" :class="{'d-none':!loadNews}">
    <!--              <div class="spinner-border text-danger" role="status" >-->
    <!--                <span class="visually-hidden">Loading...</span>-->
    <!--              </div>-->
    <small class="spinner-text">正在获取新的内容...</small>
  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min'

export default {
  name: "RecommendedNews",
  data() {
    return {
      loadNews: false,
      getNewsOpen: false,
      news: [
        {
          newsId: 1,
          newsHead: '推荐新闻1',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
        {
          newsId: 1,
          newsHead: '国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
        {
          newsId: 1,
          newsHead: '国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
        {
          newsId: 1,
          newsHead: '国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: '9mins',
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true,
        },
      ],

      newItems: [
        {
          newsId: Math.random() * 1000,
          newsHead: '追加数据',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: new Date(),
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true
        },
        {
          newsId: Math.random() * 1000,
          newsHead: '追加数据1',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: new Date(),
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true
        },
        {
          newsId:Math.random() * 1000,
          newsHead: '追加数据22',
          newsAuth: '交大网',
          newsComments: '1234',
          newsTime: new Date(),
          newsPhoto: 'src/assets/photo/faker.jpg',
          openSw: true
        },
      ],
    }
  },
  methods: {
    closeOpen(newItem) {
      newItem.openSw = false;
    },
    userLogin() {
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 500)

    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滚动条距离顶部的距离
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight // 可视区的高度
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight //dom元素的高度，包含溢出不可见的内容
      let that = this;
      // 滚动条到底部的条件scrollTop + windowHeight === scrollHeight
      if (scrollTop + windowHeight >= scrollHeight) {
        this.getNews() //也可以使用setTimeout定时器延时追加内容
      }
    },
    getNews() {

      setTimeout(() => {
        this.loadNews = true
      }, 500)
      if (this.getNewsOpen) {
        // alert("提取到数据")
        this.news.push(...this.newItems)
        // this.news.push(this.newItems)
        this.getNewsOpen = false;
      }
      setTimeout(() => {
        this.getNewsOpen = true;
        this.loadNews = false
      }, 5000)

    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
    // $(window).scroll(function (){
    //   if($(this).scrollTop()===$(window).height){
    //     alert('aa')
    //   }
    // })
  }
}
</script>

<style scoped>

</style>