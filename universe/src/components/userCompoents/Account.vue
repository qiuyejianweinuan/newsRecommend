<template>
<!--  头菜单用户信息,用户未登录时显示登录按钮,用户已登录显示用户头像-->
  <div class="nav  align-items-center ms-sm-0" v-show="userInfo==null">
    <!-- Notification dropdown END -->

    <!--                <div id="hea1">-->
    <li class="nav-item" v-show="userInfo==null">
      <button class="btn btn-outline-dark" data-bs-toggle="modal"
              data-bs-target="#ModalSignIn" @click="userLogin">登录
      </button>
    </li>
    <!--          登录成功后显示的用户头像-->
    <li class="nav-item dropdown ms-2" v-show="userInfo==null">
      <a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button"
         data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown"
         aria-expanded="false">
        <img class=" avatar-img rounded-2 " src="../../assets/photo/faker.jpg">
        <!--                        <img class="tou1 avatar-img rounded-2" src=""  v-else>-->
      </a>
      <ul class="dropdown-menu dropdown-animation dropdown-menu-start pt-3 small me-md-n3"
          aria-labelledby="profileDropdown" v-show="userInfo==null">
        <!-- Profile info -->
        <li class="px-3">
          <div class="d-flex align-items-center position-relative">
            <!-- Avatar -->
            <div class="avatar me-3">
              <img class="tou1 avatar-img rounded-circle" src="../../assets/photo/faker.jpg"
                   alt="avatar">
            </div>
            <div>
              <a class="h6 stretched-link text-dark" href="#" v-text="'faker'"
                 v-if="userInfo==null"></a>
              <a class="h6 stretched-link" href="#" v-else>还未登录</a>
              <p class="small m-0" v-text="'This is Faker Account'" v-if="userInfo==null"></p>
            </div>
          </div>
          <a class="dropdown-item  bg-primary text-white btn-sm my-2 text-center"
             href="https://www.baidu.com" v-if="userInfo==null">个人主页</a>
        </li>
        <!-- Links -->
        <li><a class="dropdown-item" href="/static/user/userSetting.html"><i
            class="bi bi-gear fa-fw me-2"></i>设置</a></li>
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
    <!-- Profile START -->
    <!--                </div>-->

  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min'
export default {
  name: "Account",
  data(){
    return {
      userInfo:null,
    }
  },
  methods:{
    userLogin() {
      setTimeout(() => {
        $("#floatingInput").focus()
      }, 500)

    },
  }
}
</script>

<style scoped>

</style>