<template>
  <div class="apptop">
    <div class="navbar">
      <div class="resive height-50px flex justify-between align-center">
        <div>LOGO
        </div>
        <div>
          <vs-button class="navbar-menu" color="dark" type="line" size="large">博客</vs-button>
          <vs-button class="navbar-menu" color="dark" type="line" size="large">项目</vs-button>
          <vs-button class="navbar-menu" color="dark" type="line" size="large">开源</vs-button>
        </div>

        <div class="flex align-center">
          <vs-button class="navbar-button" color="dark" type="line" size="large" @click="SearchShowOpen()">
            <span class="icon iconfont icon-search navbar-icon"></span>
          </vs-button>
          <vs-button class="navbar-button" color="dark" type="line" size="large">
            <span class="icon iconfont icon-user navbar-icon"></span>
          </vs-button>
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
            <div class="icon iconfont icon-search navbar-icon text-bold"></div>
            <input class="search-input" type="text" placeholder="搜索的内容" v-model="search_message" @keyup.enter="Search()">
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
      search_message: ''
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
    }
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

.navbar {
  width: 100%;
  height: 60px;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #eaecef;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.navbar-menu {
  height: 60px;
  margin: 0 25px;
  font-weight: bold;
}

.navbar-button {
  height: 60px;
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
