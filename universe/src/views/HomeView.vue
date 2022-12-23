<script>
import indexIntroduce from '@/components/indexIntroduce.vue'
import Header from '@/components/common/Header.vue'
import $ from 'jquery/dist/jquery.min'

export default {
  components: {
    Header,
    indexIntroduce
  },
  data() {
    return {
      getNews: false,
    }
  },
  methods: {
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
      if (scrollTop + windowHeight === scrollHeight) {
        this.getNews() //也可以使用setTimeout定时器延时追加内容
      }
    },
    getNews() {
      this.getNews = true;
      // setTimeout(()=>{
      //   this.getNews = false
      // },2000)
    }


  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
    document.title = '新闻推荐系统';
    // $(window).scroll(function (){
    //   if($(this).scrollTop()===$(window).height){
    //     alert('aa')
    //   }
    // })
  }
}

</script>

<template>
  <Header></Header>
  <index-introduce></index-introduce>

  <main>
    <div class="py-5">
      <div class="container">
        <!--        <index-introduce></index-introduce>-->
        <div class="row g-3 ">


          <div class="col-md-7">

            <div class=" nav-scroller p-3">
              <nav class="nav">
                <a class="newsTop ms-3 " href="#">关注</a>
                <li class="dropdown-divider fw-bold text-danger"></li>
                <a class="newsTop ms-3 active" href="#">推荐</a>
                <a class="newsTop ms-3" href="#">热门</a>
                <a class="newsTop ms-3" href="#">金融</a>
                <a class="newsTop ms-3" href="#">科技</a>
                <a class="newsTop ms-3" href="#">视频</a>
                <a class="newsTop ms-3" href="#">国际</a>
              </nav>
            </div>
            <!--   置顶新闻      -->
            <div class="p-3">
              <div class="px-4 mb-3">
                <a class=" newsTop" href="#">这是一条置顶新闻,测试文字长度这是一条置顶新闻,测试文字长度</a>
                <nav class="mt-1">
                  <a class="small me-2" href="#">交大网</a>
                  <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                  <a class="small me-2" href="#">转发</a>
                  <a class="small me-2" href="#">2022年10月30日21:32:06</a>

                </nav>

              </div>
              <div class="px-4 mb-3">
                <a class="newsTop" href="#">这也是一条置顶新闻</a>
                <nav class="mt-1">
                  <a class="small me-2" href="#">海外网</a>
                  <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                  <a class="small me-2" href="#">转发</a>
                  <a class="small me-2" href="#">2022年10月30日21:32:06</a>
                </nav>

              </div>
              <div class="px-4">
                <a class="newsTop" href="#">这也是一条置顶新闻</a>
                <nav class="mt-1">
                  <a class="small me-2" href="#">点赞</a>
                  <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                  <a class="small me-2" href="#">转发</a>
                  <a class="small me-2" href="#">2022年10月30日21:32:06</a>
                </nav>

              </div>
            </div>

            <div class="spinner-border text-danger me-5 d-none" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <!--   推荐新闻         -->
            <div class="news">
              <div class="mt-3 p-4 row">
                <div class="col-8">
                  <a class="newsTop" href="#"> 国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据</a>
                  <div class="d-flex mt-5">
                    <nav>
                      <a class="small me-2" href="#">交大网</a>
                      <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                      <a class="small me-2" href="#">9 mins</a>
                    </nav>

                  </div>
                </div>
                <div class="col-4">
                  <div class="overflow-hidden">
                    <img class="news-img" src="src/assets/photo/faker.jpg">
                  </div>
                </div>
              </div>
              <div class="mt-3 p-4 ">
                <a class="newsTop" href="#">国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据</a>
                <div class="d-flex justify-content-between align-items-center mt-4">
                  <nav>
                    <a class="small me-2" href="#">交大网</a>
                    <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                    <a class="small me-2" href="#">转发</a>
                  </nav>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              <div class="mt-3 p-4 ">
                <a class="newsTop" href="#">国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据</a>
                <div class="d-flex justify-content-between align-items-center mt-4">
                  <nav>
                    <a class="small me-2" href="#">交大网</a>
                    <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                    <a class="small me-2" href="#">转发</a>
                  </nav>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              <div class="mt-3 p-4 ">
                <a class="newsTop" href="#">国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据</a>
                <div class="d-flex justify-content-between align-items-center mt-4">
                  <nav>
                    <a class="small me-2" href="#">交大网</a>
                    <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                    <a class="small me-2" href="#">转发</a>
                  </nav>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              <div class="mt-3 p-4 ">
                <a class="newsTop" href="#">国家卫健委：今天（2022年12月14日）起不再公布无症状感染者数据</a>
                <div class="d-flex justify-content-between align-items-center mt-4">
                  <nav>
                    <a class="small me-2" href="#">交大网</a>
                    <span class="small">1234</span><a class="small me-2" href="#">评论</a>
                    <a class="small me-2" href="#">转发</a>
                  </nav>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
            <div class="spinner-border text-primary " role="status" id="getNews" :class="{'d-none':!getNews}">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="col-md-5 ">

            <div class="p-4 bg-dark text-white rounded-4 mt-4">
              <div class="modal-header border-bottom-0">
                <h3>您还未登录</h3>
              </div>
              <div>
                <p class="ms-3">登录获得更好的浏览以及推荐体验</p>
              </div>
              <div class="ms-3">
                <button type="button" class="btn rounded-btn  btn-light" data-bs-toggle="modal"
                        data-bs-target="#ModalSignIn" @click="userLogin">点此登录
                </button>
              </div>
            </div>

            <div class="position-sticky rounded-4" style="top:5rem">
              <div class="p-3 bg-white rounded-4 mt-4 ">
                <div class="h3 float-start">🔥近期热搜</div>
                <div class="float-end mousePoint h6 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                       class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                  </svg>
                  换一换
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>

</template>
<style scoped>
</style>
