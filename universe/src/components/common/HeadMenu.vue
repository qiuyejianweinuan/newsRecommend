<template>
  <ul class="navbar-nav navbar-nav-scroll  ms-auto ">
    <!-- Nav item 1 Demos -->
    <!--          <li class="nav-item ">-->
    <!--            <RouterLink class="nav-link" to="/MarkDownInfo">新闻详情</RouterLink>-->
    <!--          </li>-->
    <!--          &lt;!&ndash; Nav item 2 Pages &ndash;&gt;-->
    <!--          <li class="nav-item">-->
    <!--            <RouterLink class="nav-link" to="/CKEditor">博客社区</RouterLink>-->
    <!--          </li>-->
    <li class="nav-item ">
      <a class="nav-link" title="账户设置" href="#" style="vertical-align: top">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
             class="bi bi-gear-fill text-black svg-icon" viewBox="0 0 16 16">
          <path
              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
        </svg>
        设置
      </a>
      <!--                    <a class="nav-link" href="#">设置</a>-->
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link mousePoint " to="/CKEditor" title="动态发布">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
             class="bi bi-plus-circle svg-icon" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        发布作品
      </RouterLink>
    </li>

    <!--                下面是用户消息，暂未开发-->
    <li class="nav-item">
      <div class="dropdown">
        <a class="nav-link mousePoint " href="#" id="notifyDropdown" role="button"
           data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
               class="bi bi-bell-fill text-black svg-icon " viewBox="0 0 16 16">
            <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
          </svg>
          消息
        </a>
        <!--                    好友列表-->
        <div class="dropdown-menu dropdown-menu-size-md p-0 shadow-lg border-0"
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
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HeadMenu"
}
</script>

<style scoped>

</style>