<template>
  <section class="py-5 text-center w-100 shadow">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">新闻推荐系统</h1>
        <p class="lead text-muted">SpringBoot开发的新闻推荐系统,看您想看</p>
        <div class="input-group">
          <!--            <a href="#" class="btn btn-primary my-2">Main call to action</a>-->
          <!--            <a href="#" class="btn btn-secondary my-2">Secondary action</a>-->
          <input class="form-control h-50px rounded" list="datalistOptions" id="exampleDataList"
                 placeholder="在此搜索...">
          <button class="btn w-80px btn-outline-dark rounded " type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search "
                 viewBox="0 0 16 16">
              <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "indexIntroduce"
}
</script>

<style scoped>

</style>