<template>
  <div class="apptop">
    <div id="navbar" :class="navbar_class">
      <div class="resive height-50px flex justify-between align-center">
        <div class="logo">
          <img class="logo" src="https://pic.gksec.com/2021/03/22/fa6a4f74ef9b1/logo.png" alt="">
        </div>
        <div>
          <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/')">首页
          </vs-button>
          <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/Classification')">分类
          </vs-button>
          <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/TimeAxis')">时光轴
          </vs-button>
        </div>

        <div class="flex align-center">
          <vs-button class="navbar-button" color="dark" type="line" size="large" @click="SearchShowOpen()">
            <span class="icon iconfont icon-search navbar-icon"></span>
          </vs-button>

          <el-popover placement="bottom" width="240" trigger="click">
            <div class="login-range">
              <h1 class="margin-lr-xs">登录</h1>
              <div class="width-100 flex justify-center">
                <div>
                  <vs-input class="margin-bottom-xs" size="large" color="dark" placeholder="账户"
                    v-model="login_account" />
                  <vs-input class="margin-bottom-xs" size="large" color="dark" placeholder="密码"
                    v-model="login_passwords" />
                  <vs-button class="width-100" size="large" color="dark" type="filled">进入后台</vs-button>
                </div>
              </div>
            </div>
            <vs-button slot="reference" class="navbar-button" color="dark" type="line" size="large">
              <span class="icon iconfont icon-user navbar-icon"></span>
            </vs-button>
          </el-popover>
        </div>
      </div>
    </div>

    <transition name="co-fade-in-linear">
      <div class="search" v-show="search_show">
        <div class="flex justify-between padding-top padding-lr">
          <div></div>
          <div>
            <vs-button class="text-bold" color="dark" type="flat" size="large" @click="SearchShowClose()">
              <span class="icon iconfont icon-close-bold navbar-icon"></span>
            </vs-button>
          </div>
        </div>
        <div class="search-range">
          <div class="search-border">
            <div></div>
            <input class="search-input" type="text" placeholder="搜索的内容" v-model="search_message"
              @keyup.enter="Search()">
            <div class="icon iconfont icon-error text-bold" style="font-size: 15px;"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      search_show: false,
      search_message: '',
      navbar_class: 'navbar',
      login_account: '',
      login_passwords: ''
    }
  },
  methods: {
    SearchShowOpen () {
      this.search_show = true
    },
    SearchShowClose () {
      this.search_show = false
    },
    Search () {
      console.log(this.search_message)
    },
    PageChange (path) {
      this.$router.push(path)
    },
  }
}
</script>

<style>
.apptop {
  width: 100%;
  display: inline-block;
  position: fixed;
  z-index: 999;
}

.logo {
  height: 50px;
}

.navbar {
  width: 100%;
  height: 75px;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s linear;
}

.navbar .navbar-menu,
.navbar .navbar-button {
  color: #fff;
  font-size: 17.5px;
  border-color: transparent;
}

.navbar:hover {
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.1s linear;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
}

.navbar:hover .navbar-menu,
.navbar:hover .navbar-button {
  color: #000;
  border-color: transparent;
}

.navbar-scroll {
  width: 100%;
  height: 75px;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.9);
  transition: all 0.2s linear;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
}

.navbar-scroll .navbar-menu,
.navbar-scroll .navbar-button {
  font-size: 17.5px;
  border-color: transparent;
}

.navbar-menu {
  height: 75px;
  margin: 0 15px;
  font-weight: bold;
}

.navbar-button {
  height: 75px;
  margin: 0 5px;
  font-weight: bold;
}

.navbar-icon {
  font-size: 22.5px;
}

.search {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #fff;
}

.search-range {
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.search-border {
  width: 600px;
  height: 50px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 30px;
}

.search-input {
  margin: 0 15px;
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
}

.login-range h1 {
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
}

input::-webkit-input-placeholder {
  color: #a0a0a0;
}

input:-ms-input-placeholder {
  color: #a0a0a0;
}

input:-moz-placeholder {
  color: #a0a0a0;
}

input::-moz-placeholder {
  color: #a0a0a0;
}
</style>
