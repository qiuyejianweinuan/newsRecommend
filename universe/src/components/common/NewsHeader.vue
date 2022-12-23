<template>
  <div class="navbar navbar-expand-lg  navbar-light bg-white shadow-sm  "
       style="transition-duration: 1s">
    <div class="progress-bar progress-bar-striped bg-danger fixed-top loadStatus"
         role="progressbar"
         id="loadStatus" style=";height: 2px" aria-valuenow="0" aria-valuemin="0"
         aria-valuemax="100"></div>
    <div class="header">
      <!-- Logo START -->
      <RouterLink class="navbar-brand text-danger fw-bold" to="/">
        文章发布
      </RouterLink>
      <div class=" navbar-brand ">
        <a class="mousePoint btn w-50px" @click="$router.go(-1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi  bi-arrow-left"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </a>
      </div>
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
      <div class="collapse navbar-collapse me-lg-5" id="navbarCollapse">
        <div class="navbar-nav navbar-nav-scroll ms-auto">

          <!--                下面是用户消息，暂未开发-->
          <li class="nav-item">
            <div class="dropdown">
              <a class="nav-link mousePoint " href="#" id="notifyDropdown1" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                     class="bi bi-bell-fill text-black " viewBox="0 0 16 16">
                  <path
                      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
                消息
              </a>
              <!--                    好友列表-->
                <ul class="dropdown-menu shadow">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
          </li>
          <li class="dropdown ms-lg-2" v-show="userInfo==null">
            <!--   头像设置         -->
            <a class="nav-link btn icon-md p-0" id="profileDropdown" role="button">
              <img class="tou1 avatar-img rounded-2 " src="../../assets/photo/faker.jpg" alt="">
            </a>
            <!--  用户登录头像悬浮下拉框   -->
            <ul class="dropdown-menu me-5"
                aria-labelledby="profileDropdown" v-show="userInfo==null">
              <li class="px-3">
                <div class="d-flex align-items-center position-relative">
                  <!-- Avatar -->
                  <div class="avatar me-3">
                    <img class="tou1 avatar-img rounded-circle" src="../../assets/photo/faker.jpg"
                         alt="avatar">
                  </div>
                  <div>
                    <a class="h6  text-dark" href="#" v-text="'faker'"
                       v-if="userInfo==null"></a>
                    <a class="h6 " href="#" v-else>还未登录</a>
                    <p class="small m-0" v-text="'This is Faker Account'" v-if="userInfo==null"></p>
                  </div>
                </div>
                <a class="dropdown-item  bg-primary text-white btn-sm my-2 text-center"
                   href="https://www.baidu.com" v-if="userInfo==null">个人主页</a>
              </li>
              <!-- Links -->
              <li>
                <a class="dropdown-item" href="/static/user/userSetting.html"><i
                  class="bi bi-gear fa-fw me-2"></i>设置</a>
              </li>
              <li>
                <a class="dropdown-item" href="https://support.webestica.com/" target="_blank">
                  <i class="fa-fw bi bi-life-preserver me-2"></i>支持
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="docs/index.html" target="_blank">
                  <i class="fa-fw bi bi-card-text me-2"></i>消息
                </a>
              </li>
              <li class="dropdown-divider"></li>
              <li><a class="dropdown-item bg-danger-soft-hover mousePoint" data-bs-toggle="modal"
                     data-bs-target="#signOutModal">
                <i class="bi bi-power fa-fw me-2"></i>退出登录</a></li>
              <!-- Dark mode switch END -->
            </ul>
          </li>

        </div>
      </div>
      <!-- Main navbar END -->


      <!-- Nav right END -->
    </div>
  </div>

  <!--  <UserLogin></UserLogin>-->

</template>

<script>
import $ from 'jquery/dist/jquery.min'

export default {
  name: "newsHeader",
  data() {
    return {
      userInfo: null,
    };
  },
  components: {
  },
  methods: {

  },
  mounted() {
    let he = 0;

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

    let loadNow = 0;
    // 设定定时器
    let timer = setInterval(function () {
      // 如果当前的值为100
      if (loadNow === 100) {
        // 清除定时器
        clearInterval(timer);
      } else if (loadNow <= 100) {
        // 将当前状态值累加1
        loadNow += 1;
        // console.log(iNow)
        // setTimeout(function () {
        //     console.log(iNow)
        // }, 2000)
        if (loadNow >= 90 && document.readyState === 'complete') {
          setTimeout(function () {
            $("#loadStatus").addClass("d-none")
          }, 800)
        }
        // 调用执行状态的函数,传入状态值
        $("#loadStatus").attr('style', 'height: 2px;width:' + loadNow + '%');
      }

    }, 5);
  },
  created() {
  },
  beforeCreate() {

  }, //生命周期 - 创建之前
  beforeMount() {
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