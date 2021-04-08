<template>
  <div class="navbar-front">
    <div id="id-navbar-front" :class="getClass()?'navbar-front-base':'navbar-front-scroll'">
      <div class="resive height-50px flex justify-between align-center">
        <!-- Logo 内容 -->
        <div class="height-50px">
          <img class="height-50px" src="https://pic.gksec.com/2021/03/22/fa6a4f74ef9b1/logo.png" alt="">
        </div>
        <!-- 导航栏 -->
        <div>
          <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/')">
            首页
          </vs-button>
          <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/')">
            分类
          </vs-button>
          <vs-button class="navbar-menu" color="dark" type="line" size="large" @click="PageChange('/TimeAxis')">
            时光轴
          </vs-button>
        </div>
        <!-- 操作栏 -->
        <div class="flex align-center">
          <vs-button class="navbar-button" color="dark" type="line" size="large" @click="SearchShowOpen()">
            <span class="icon iconfont icon-search navbar-icon"></span>
          </vs-button>

          <el-popover placement="bottom" width="240" trigger="click" v-model="login_show">
            <div class="login-range">
              <h1 class="margin-lr-xs">登录</h1>
              <div class="width-100" style="padding: 0 5px;">
                <el-input class="margin-bottom-xs" v-model="login_account" placeholder="账户" clearable>
                </el-input>
                <el-input class="margin-bottom-xs" v-model="login_passwords" placeholder="密码" clearable show-password>
                </el-input>
                <vs-button class="width-100" size="large" color="dark" type="filled" @click="AdminOpen()">进入后台
                </vs-button>
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
      navbar_class: 'navbar-front-base',
      value: '',
      search_show: false,
      search_message: '',
      login_show: false,
      login_account: '',
      login_passwords: '',
      classification_show: false,
      classification_data: [
        {
          text: 'Vue.JS',
          classification: 'vue',
          icon: 'vuejs-line',
        },
        {
          text: '其他',
          classification: 'other',
          icon: 'modular',
        }
      ],
    }
  },
  mounted () {
    console.log(this.$store.state.navbar_istop)
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
    PageChangeClass (path, value) {
      this.$router.push(path)
      this.$store.commit('ChangeClassKey', value)
    },
    PageChange (path) {
      this.$router.push(path)
    },
    AdminOpen () {
      this.$router.push('/Admin')
      this.login_show = false
    },
    getClass () {
      return this.$store.state.navbar_istop;
    }
  }
}
</script>

<style>
.navbar-front {
  width: 100%;
  display: inline-block;
  position: fixed;
  z-index: 999;
}

.navbar-none {
  display: none;
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

.navbar-front-base {
  width: 100%;
  height: 75px;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s linear;
}

.navbar-front-base .navbar-menu,
.navbar-front-base .navbar-button {
  color: #fff;
  font-size: 17.5px;
  border-color: transparent;
}

.navbar-front-base:hover {
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.1s linear;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
}

.navbar-front-base:hover .navbar-menu,
.navbar-front-base:hover .navbar-button {
  color: #000;
  border-color: transparent;
}

.navbar-front-scroll {
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

.navbar-front-scroll .navbar-menu,
.navbar-front-scroll .navbar-button {
  font-size: 17.5px;
  border-color: transparent;
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

.login-range {
  margin-top: 5px;
  margin-bottom: 10px;
}

.login-range h1 {
  color: #000;
  font-size: 20px;
  margin-bottom: 10px;
}

/* .class-menu {
  width: 80px;
  font-weight: bold;
  font-size: 16px !important;
  font-weight: bold !important;
  border-color: transparent !important;
} */

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