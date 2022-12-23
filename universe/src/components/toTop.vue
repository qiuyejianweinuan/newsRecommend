<template>
  <div class="animate__fadeIn animate__slow animate__animated " id="blogMenu">
    <div class="position-fixed" style="right:0.3rem;bottom:3rem; z-index: 0!important;">
      <a type="button" class="btn small btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
              title="Tooltip on left" @click="toTop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up fw-bold" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                  </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {

  name: "toTop",
  methods:{
    toTop(){
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }
}


</script>

<style scoped>

</style>