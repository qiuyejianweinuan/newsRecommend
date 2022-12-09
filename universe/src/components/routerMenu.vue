<template>
  <div class="bg-white col-lg-2 mt-3 rounded-3 load ">
    <div class="position-sticky ">
      <ul class="list-unstyled ps-0 ">
        <li class="mb-0">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#home-collapse" aria-expanded="false">
            日常分享
          </button>
          <div class="collapse " id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">数据结构</a></li>
              <li><a href="#" class="link-dark rounded">docker</a></li>
              <li><a href="#" class="link-dark rounded">中间件</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-0">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#dashboard-collapse" aria-expanded="false">
            错误日志
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">Java</a></li>
              <li><a href="#" class="link-dark rounded">Html</a></li>
              <li><a href="#" class="link-dark rounded">Vue</a></li>
              <li><a href="#" class="link-dark rounded">Spring</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-0">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
          </button>
          <div class="collapse" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New</a></li>
              <li><a href="#" class="link-dark rounded">Processed</a></li>
              <li><a href="#" class="link-dark rounded">Shipped</a></li>
              <li><a href="#" class="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-0">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#orders-collapse1" aria-expanded="false">
            新的博客
          </button>
          <div class="collapse" id="orders-collapse1">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New</a></li>
              <li><a href="#" class="link-dark rounded">Processed</a></li>
              <li><a href="#" class="link-dark rounded">Shipped</a></li>
              <li><a href="#" class="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-0">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#orders-collapse2" aria-expanded="false">
            全站热门
          </button>
          <div class="collapse" id="orders-collapse2">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New</a></li>
              <li><a href="#" class="link-dark rounded">Processed</a></li>
              <li><a href="#" class="link-dark rounded">Shipped</a></li>
              <li><a href="#" class="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
        <li class="mb-0">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                  data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div class="collapse" id="account-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New...</a></li>
              <li><a href="#" class="link-dark rounded">Profile</a></li>
              <li><a href="#" class="link-dark rounded">Settings</a></li>
              <li><a href="#" class="link-dark rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>


    </div>
  </div>
</template>

<script>
export default {
  name: "routerMenu"
}
</script>

<style scoped>

</style>