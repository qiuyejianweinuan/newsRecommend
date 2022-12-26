<template>

  <div class="navbar navbar-expand-lg  navbar-dark animate__animated" id="topHead">
    <LoadScroll></LoadScroll>
    <div class="header">
      <!-- Logo START -->
      <RouterLink class="h3 my-auto text-white tf-wr fw-normal" to="/" title="网站首页">
        新闻系统
      </RouterLink>


      <button class="navbar-toggler ms-auto icon-md btn btn-light p-0 me-2 " type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class=" navbar-toggler-icon ">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <!-- Main navbar START -->
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- Nav Search START 搜索框-->
<!--        <SearchGroup></SearchGroup>-->
        <!-- Nav Search END -->

        <HeadMenu></HeadMenu>
        <Account></Account>
      </div>
      <!-- Main navbar END -->

      <!--             Nav right START 设置以及发布快捷图标-->


      <!-- Nav right END -->
    </div>

  </div>
  <div class=" navbar navbar-expand-lg navbar-light d-none bg-white animate__animated  " id="hea">
    <LoadScroll></LoadScroll>
    <div class="header">
      <div class="navbar-brand">
        <RouterLink class="h4 my-auto text-danger tf-wr fw-normal float-start"  to="/">新闻系统</RouterLink>
        <NewsMenu></NewsMenu>
<!--        <a class="newsTop ms-2">关注</a>-->
<!--        <a class="newsTop ms-2 active" href="#">推荐</a>-->
<!--        <a class="newsTop ms-2">热门</a>-->
<!--        <a class="newsTop ms-2">金融</a>-->
<!--        <a class="newsTop ms-2">科技</a>-->
<!--        <a class="newsTop ms-2">视频</a>-->
<!--        <a class="newsTop ms-2">国际</a>-->
      </div>

      <button class="navbar-toggler ms-auto icon-md btn btn-light p-0 me-2 " type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse1" aria-controls="navbarCollapse1" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class=" navbar-toggler-icon ">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div class="collapse navbar-collapse " id="navbarCollapse1">
        <SearchGroup ></SearchGroup>
        <HeadMenu></HeadMenu>
        <Account></Account>
      </div>

    </div>
  </div>

  <Login></Login>
  <SendBlog></SendBlog>
</template>

<script>
import $ from 'jquery/dist/jquery.min'
import {RouterLink} from 'vue-router'
import Login from "@/components/common/Login.vue";
import SendBlog from "@/components/common/SendBlog.vue";
import SearchGroup from "@/components/search/SearchGroup.vue";
import LoadScroll from "@/components/Load/LoadScroll.vue";
import Account from "@/components/userCompoents/Account.vue";
import HeadMenu from "@/components/common/HeadMenu.vue";
import NewsMenu from "@/components/news/NewsMenu.vue";

export default {
  name: "header",
  data() {
    return {
      userInfo: null,
    };
  },
  components: {
    NewsMenu,
    HeadMenu,
    Account,
    LoadScroll,
    SearchGroup,
    SendBlog,
    Login,
  },
  methods: {
    userLogin() {
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 500)

    },
    postBlog() {
      // alert("11")
      setTimeout(() => {
        $("#withPhBody").focus()
      }, 500)

    },
  },
  mounted() {
    let he = 0;
    $(window).scroll(function () {

      if (document.documentElement.scrollTop >= 375) {



        let hea = $("#hea")
        if (he === 0) {
          hea.removeClass("d-none")
          hea.addClass(" animate__slideInDown")
          hea.hide()
          hea.addClass("fixed-top").addClass("shadow");
          hea.fadeIn()
          he = 1
        }



      } else if (document.documentElement.scrollTop <= 415) {

        if (he === 1) {
          $("#hea").addClass("d-none")
          $("#hea").removeClass("fixed-top").removeClass("shadow").removeClass(" animate__slideInDown")
          he = 0;
        }


      }
    })

    let t = 0;
    $(window).scroll(function () {
      let p = $(this).scrollTop();
      if (t < p) {
        // $("#hea").addClass("bg-opacity-25");

        // $("#hea1").removeClass("d-none translate-middle")
        //下滚
        // //console.log("下滚")
      } else {
        // $("#hea").removeClass("bg-opacity-25");
        // //console.log("上滚 ")
      }
      t = p;

    })


    const fileUploader = $("#blogPhoto")
    fileUploader.change((event) => {
      const files = event.target.files;
      let fileName = '';
      for (let i = 0; i < files.length; i++) {
        fileName += files[i].name + ' '
      }
      if (files.length > 0) {
        $("#photoUp").text(fileName)
      }

      console.log('files', files);
    });
  },
  created() {
  },
  beforeCreate() {

  }, //生命周期 - 创建之前
  beforeMount() {

    //
    // setTimeout(() => {
    //   $("#globalSearch").focus()
    // }, 200)

    const user = window.sessionStorage.getItem("user");
    localStorage.setItem("yxyUser", "123")


  }, //生命周期 - 挂载之前
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {

  }, //生命周期 - 更新之后
  beforeDestroy() {
  }, //生命周期 - 销毁之前
  destroyed() {
  }, //生命周期 - 销毁完成
  activated() {
  } //如果页面有keep-alive缓存功能，这个函数会触发


};
</script>

<style scoped>

</style>