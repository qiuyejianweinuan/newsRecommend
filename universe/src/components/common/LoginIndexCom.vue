<template>
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
</template>

<script>
import $ from 'jquery/dist/jquery.min'
export default {
  name: "LoginIndexCom",
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