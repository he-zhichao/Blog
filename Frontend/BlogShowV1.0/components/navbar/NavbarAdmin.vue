<template>
  <div class="navbar-admin">
    <div class="navbar-admin-logo margin-bottom">
      <div class="flex align-center height-50px">
        <img class="height-50px margin-right-xs" src="https://pic.gksec.com/2021/03/22/fa6a4f74ef9b1/logo.png" alt="">
      </div>
    </div>
    <div class="navbar-admin-list">
      <div class="navbar-admin-single cursor-pointer" :class="options==''?'navbar-admin-single-option':''"
        @click="ChangeOption('')">
        仪表盘
      </div>
      <div class="navbar-admin-single cursor-pointer" :class="options=='Article'?'navbar-admin-single-option':''"
        @click="ChangeOption('Article')">
        文章管理
      </div>
      <div class="navbar-admin-single cursor-pointer" :class="options=='Classification'?'navbar-admin-single-option':''"
        @click="ChangeOption('Classification')">
        分类管理
      </div>
    </div>
    <div class="navbar-admin-bottom">
      <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/')">
        回到首页
      </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ''
    }
  },
  methods: {
    ChangeOption (value) {
      this.options = value
      this.$router.push('/Admin/' + value)
    },
    PageChange (path) {
      this.$router.push(path)
    },
  }
}
</script>

<style>
.navbar-admin {
  height: 100vh;
  width: 250px;
  background: #404040;
}

.navbar-admin-logo {
  padding: 10px 30px;
  height: 75px;
}

.navbar-admin-list {
  width: 100%;
}

.navbar-admin-bottom {
}

.navbar-admin-button {
  display: block;
}

.navbar-admin-single {
  padding: 0 35px;
  height: 60px;
  line-height: 60px;
  border-left: 0px solid transparent;
  font-size: 16px;
  color: #fff;
  background: transparent;
  transition: all 0.1s linear;
}

.navbar-admin-single-option {
  border-left: 5px solid #ec7259;
  background: #666666;
}

.navbar-admin-single:hover {
  border-left: 5px solid #ec7259;
  background: #666666;
}
</style>