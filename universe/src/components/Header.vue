<template>
  <Transition name="slide-fade" v-if="true">
    <div class="navbar navbar-expand navbar-light bg-white fixed-top mb-4 shadow "
         aria-label="Eighth navbar example"
         id="hea">
      <div class="progress-bar progress-bar-striped bg-danger fixed-top loadStatus"
           role="progressbar"
           id="loadStatus" style=";height: 2px" aria-valuenow="0" aria-valuemin="0"
           aria-valuemax="100"></div>
      <div class="container">
        <!-- Logo START -->
        <RouterLink class="navbar-brand" to="/" title="网站首页">
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
          <div class="navbar align-items-center h-45px mb-1">
            <div class="nav-item col">
              <input class="form-control " type="search" placeholder="在此搜索" aria-label="Search"
                     data-bs-toggle="dropdown"
                     aria-expanded="false" id="globalSearch">
              <ul class="dropdown-menu " aria-labelledby="globalSearch">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">查看更多结果</a></li>
              </ul>
            </div>
          </div>

          <!-- Nav Search END -->

          <ul class="navbar-nav navbar-nav-scroll  ms-auto ">
            <!-- Nav item 1 Demos -->
            <li class="nav-item dropdown ">
              <a class="nav-link fw-bold" href="#" id="homeMenu"
                 data-bs-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">动态社区
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path
                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>

              </a>
              <ul class="dropdown-menu bg-white" aria-labelledby="homeMenu">
                <li v-show="userInfo=null"><a class="dropdown-item " data-bs-toggle="modal"
                                              data-bs-target="#feedActionPhoto"
                                              v-show="userInfo=null">发布动态</a>
                </li>

                <li>
                  <a class="dropdown-item" href="/static/user/indexSharing.html">
                    动态主页
                  </a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="/static/index.html"
                     target="_blank">
                    网站门户
                  </a>
                </li>
              </ul>
            </li>
            <!-- Nav item 2 Pages -->
            <li class="nav-item dropdown">
              <a class="nav-link " href="#" id="pagesMenu" data-bs-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">博客社区
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path
                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>

              </a>
              <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                <li>
                  <RouterLink class="dropdown-item" to="/MarkDownInfo">MarkDown主页</RouterLink>
                </li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/static/user/indexSharing.html">社区主页</a></li>
                <li><a class="dropdown-item"
                       :href="'/static/MdBlog/userRepository.html?userId='+userInfo.userId"
                       v-if="userInfo!=null">MarkDown仓库</a></li>
                <li class="dropdown-divider" v-show="userInfo=null"></li>
                <li><a class="dropdown-item" href="/static/MdBlog/sendMD.html"
                       v-show="userInfo=null">发布MarkDown博客</a>
                </li>

              </ul>
            </li>

            <!-- Nav item 3 Post -->
            <li class="nav-item dropdown" v-show="userInfo==null">
              <a class="nav-link " href="#" id="postMenu" data-bs-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">账户
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path
                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </a>
              <ul class="dropdown-menu" aria-labelledby="postMenu">
                <!--                            <li><a class="dropdown-item" href="create-page.html">发布动态</a></li>-->
                <li><a class="dropdown-item" href="userSetting.html">编辑资料</a></li>

                <!--                            <li><a class="dropdown-item" href="notifications.html">Notifications</a></li>-->
                <li><a class="dropdown-item" href="./register.html">注册</a></li>
                <!--                            <li><a class="dropdown-item" href="help-details.html">Help details</a></li>-->
                <!-- dropdown submenu open left -->

                <li class="dropdown-divider"></li>
                <!--                            <li><a class="dropdown-item" href="error-404.html">Error 404</a></li>-->
                <!--                            <li><a class="dropdown-item" href="offline.html">Offline</a></li>-->
                <li><a class="dropdown-item" href="privacy-and-terms.html">Privacy &amp; terms</a></li>
              </ul>
            </li>

            <!-- Nav item 4 Mega menu -->
<!--            <li class="nav-item mousePoint" v-show="userInfo==null">-->
<!--              <a class="nav-link  text-light" id="userInfoA" v-if="userInfo==null">个人主页</a>-->
<!--            </li>-->
            <!--                    <li class="nav-item" v-show="userInfo==null">-->
            <!--                        <button type="button" class="btn btn-outline-light ms-2 float-start " data-bs-toggle="modal"-->
            <!--                                data-bs-target="#ModalSignin">Sign in-->
            <!--                        </button>-->
            <!--                    </li>-->
            <li class="nav-item" v-show="userInfo==null">
              <a class="nav-link " data-bs-toggle="modal"
                 data-bs-target="#ModalSignIn" href="#" title="用户登录">用户登录</a>
            </li>

          </ul>
        </div>
        <!-- Main navbar END -->

        <!--             Nav right START 设置以及发布快捷图标-->
        <ul class="nav  align-items-center ms-sm-0" v-show="userInfo==null">
          <li class="nav-item ms-2 my-auto">
            <a class="nav-link p-0 mousePoint" title="账户设置" @click="getTest">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                   class="bi bi-gear-fill text-black" viewBox="0 0 16 16">
                <path
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
            </a>
            <!--                    <a class="nav-link" href="#">设置</a>-->
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link mousePoint  p-0" data-bs-toggle="modal"
               data-bs-target="#feedActionPhoto" id="postBlog" @click="postBlog" title="动态发布">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                   class="bi bi-pencil-square text-black" viewBox="0 0 16 16">
                <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </a>
          </li>

          <!--                下面是用户消息，暂未开发-->
          <li class="nav-item dropdown ms-2" v-show="userInfo==null">
            <a class="nav-link mousePoint p-0" href="#" id="notifyDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
              <span class="badge-notif animation-blink"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-bell-fill text-black" viewBox="0 0 16 16">
                <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
            </a>

            <!--                    好友列表-->
            <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
                 aria-labelledby="notifyDropdown">
              <div class="card ">
                <div class="card-header d-flex justify-content-between  align-items-center">
                  <h6 class="m-0">消息 <span
                      class="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                  <a class="small" href="#">清空</a>
                </div>
                <div class="card-body p-0 w-250px ">
                  <!--                                <ul class="list-group list-group-flush list-unstyled p-2">-->
                  <ol class="list-group list-group-numbered  p-0">
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Subheading</div>
                        Content for list item
                      </div>
                      <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Subheading</div>
                        Content for list item
                      </div>
                      <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div class="fw-bold">Subheading</div>
                        Content for list item
                      </div>
                      <span class="badge bg-primary rounded-pill">14</span>
                    </li>
                  </ol>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-sm btn-primary-soft">See all incoming activity</a>
                </div>
              </div>
            </div>
          </li>
          <!-- Notification dropdown END -->

          <!--                <div id="hea1">-->
          <li class="nav-item dropdown ms-2" v-show="userInfo==null">
            <button class="btn btn-outline-dark">登录</button>
          </li>
          <li class="nav-item dropdown ms-2" v-show="userInfo!=null">
            <a class="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button"
               data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown"
               aria-expanded="false">
              <img class="tou1 avatar-img rounded-2 " src="../assets/photo/faker.jpg">
              <!--                        <img class="tou1 avatar-img rounded-2" src=""  v-else>-->
            </a>
            <ul class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3 w-200px"
                aria-labelledby="profileDropdown" v-show="userInfo==null">
              <!-- Profile info -->
              <li class="px-3">
                <div class="d-flex align-items-center position-relative">
                  <!-- Avatar -->
                  <div class="avatar me-3">
                    <img class="tou1 avatar-img rounded-circle" src="../assets/photo/faker.jpg"
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

        </ul>

        <!-- Nav right END -->
      </div>
    </div>

  </Transition>
  <!--  <UserLogin></UserLogin>-->
  <div class="modal fade py-5 " tabindex="-1" role="dialog" id="ModalSignIn">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-5 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h2 class="fw-bold mb-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                 class="bi bi-send" viewBox="0 0 16 16">
              <path
                  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
            </svg>
            用户登录
          </h2>
          <!--                <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">-->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
               class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          <!--                </button>-->
        </div>

        <div class="modal-body p-5 pt-0">
          <form id="loginForm">
            <div class="form-floating mb-3">
              <input type="text" class="form-control rounded-4" id="floatingInput" name="userName"
                     placeholder=" ">
              <label for="floatingInput" class="opacity-50">用户名</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control rounded-4" id="floatingPassword" name="password"
                     placeholder=" ">
              <label for="floatingPassword" class="opacity-50">密码</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control " id="floatingCheck" name="checkCode"
                     placeholder="验证码">
              <!--                        <span class="input-group-text" id="basic-addon2">@example.com</span>-->
              <label for="floatingInput"><span class="opacity-50">验证码</span>
                <img id="checkCode" class="opacity-75" style="width: 110px;height: 26px;"
                     src="/check"></label>
              <a class="bg-gradient d-none " style="height: 20px;" id="gh">看不清？</a>

            </div>
          </form>
          <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" id="loginBt">登录</button>
          <small class="text-muted">没有Universe账户?<a target="_blank"
                                                        href="/static/user/register.html">点此创建！</a></small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">使用第三方账户</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-person-bounding-box" viewBox="0 0 16 16">
              <path
                  d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            </svg>
            Sign up with Other
          </button>


        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal feed header START -->
        <div class="modal-header">
          <h5 class="modal-title" id="feedActionPhotoLabel">动态发布</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- Modal feed header END -->

        <!-- Modal feed body START -->
        <div class="modal-body">
          <!-- Add Feed -->
          <div class="d-flex mb-3">
            <!-- Avatar -->
            <div class="avatar avatar-xs me-2">
              <!--                            tou1 jquery赋值src-->
              <img class="tou1 avatar-img rounded-circle " src="/static/photo/faker.jpg" alt="e">
            </div>
            <!-- Feed box  -->
            <form class="w-100">
                            <textarea class="form-control pe-4 fs-3 lh-1 border-0 active" rows="3"
                                      placeholder="分享此刻的想法" name="bBody" id="withPhBody"></textarea>
            </form>
          </div>

          <div class="dropdown-divider"></div>
          <!-- Dropzone photo START -->
          <div class="position-relative mousePoint ">
            <!--                    <label class="form-label">添加图片</label>-->

            <input type="file" class="opacity-0 float-start position-absolute w-100px" id="blogPhoto"
                   accept=".jpg, .png" multiple>
            <button type="button" class="btn-primary btn  mousePoint w-100px">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-image mousePoint" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path
                    d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
              photo
            </button>
            <label id="photoUp" class="ms-2"></label>
          </div>
          <!-- Dropzone photo END -->

        </div>
        <!-- Modal feed body END -->

        <!-- Modal feed footer -->
        <div class="modal-footer ">
          <!-- Button -->
          <button type="button" class="btn btn-danger me-2 border-3" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary border-3" id="postBlog">发布</button>
        </div>
        <!-- Modal feed footer -->
      </div>
    </div>
  </div>
</template>

<script>
import userLogin from './UserLogin.vue'
import $ from 'jquery/dist/jquery.min'
import {RouterLink} from 'vue-router'

export default {
  name: "header",
  data() {
    return {
      userInfo: {
        // infotou:
      }
    };
  },
  components: {
    userLogin,
  },
  methods: {
    postBlog() {
      // alert("11")
      setTimeout(() => {
        $("#withPhBody").focus()
      }, 500)

    },
  },
  mounted() {
    $(window).scroll(function () {
      if (document.documentElement.scrollTop > 480) {

        //在滚动栏超过560时，使下拉框北京为黑色，下拉框中所有字体颜色为白色以及透明度
        // $(".wrap_head").addClass("bg-dark");
        //在560后，只为下拉菜单的链接添加白色字体，导航栏的选项不添加

        $("#hea").addClass("shadow");
        //为登录链接添加黑体
        // $("#sign").addClass("text-black");
        // $("#userInfo").find("a").addClass("text-black");
        // $(".wrap_head").find(".menu_item").find("ul").find("a").addClass("text-white");


      } else {

        //
        // $(".wrap_head").removeAttr("style");
        //删除下拉框中的黑色背景以及透明度
        // $(".wrap_head").removeClass("bg-dark");
        $("#hea").removeClass("shadow")
      }
    })

    let t = 0;
    $(window).scroll(function () {
      let p = $(this).scrollTop();
      if (t < p) {

        console.log(p)
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

    let iNow = 0;
    // 设定定时器
    let timer = setInterval(function () {
      // 如果当前的值为100
      if (iNow === 100) {
        // 清除定时器
        clearInterval(timer);
      } else if (iNow <= 100) {
        // 将当前状态值累加1
        iNow += 1;
        // console.log(iNow)
        // setTimeout(function () {
        //     console.log(iNow)
        // }, 2000)
        if (iNow >= 90 && document.readyState === 'complete') {
          setTimeout(function () {
            $("#loadStatus").addClass("d-none")
          }, 800)
        }
        // 调用执行状态的函数,传入状态值
        $("#loadStatus").attr('style', 'height: 2px;width:' + iNow + '%');
      }

    }, 5);
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


    setTimeout(() => {
      $("#globalSearch").focus()
    }, 200)

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


// window.onload = function () {
//   // 设定当前起始状态值,
//   // 真实情况中用html5的onprogress和onload来完成
//   // 还可以跟后台配合，通过ajax实时的返回数据
//   let iNow = 0;
//   // 设定定时器
//   let timer = setInterval(function () {
//     // 如果当前的值为100
//     if (iNow === 100) {
//       // 清除定时器
//       clearInterval(timer);
//     } else if (iNow <= 100) {
//       // 将当前状态值累加1
//       iNow += 1;
//       // console.log(iNow)
//       // setTimeout(function () {
//       //     console.log(iNow)
//       // }, 2000)
//       if (iNow >= 90 && document.readyState === 'complete') {
//         setTimeout(function () {
//           $("#loadStatus").addClass("d-none")
//         }, 800)
//       }
//       // 调用执行状态的函数,传入状态值
//       $("#loadStatus").attr('style', 'height: 2px;width:' + iNow + '%');
//     }
//
//   }, 10);


};
</script>

<style scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>