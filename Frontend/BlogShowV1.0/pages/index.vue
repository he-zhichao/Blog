<template>
  <div id="screentop" class="home-front">
    <div class="home-front-show">
      <div class="home-front-image"></div>
      <div class="home-front-overlay">
        <div>
          <h1 class="glitch margin-bottom">
            Hi, JingWenxing
          </h1>

          <div class="flex justify-center">
            <div class="subtitle">
              生命太短暂，不要去做一些根本没有人想要的东西
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 200px;">
      123
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // document.querySelector("#id-navbar-front").className = 'navbar-front-base'
    document.querySelector("#screentop").addEventListener('scroll', this.handleScroll)
  },
  methods: {
    PageChange (path) {
      this.$router.push(path)
    },
    handleScroll () {
      let scrollTop = document.querySelector("#screentop").scrollTop;

      if (scrollTop > 0) {
        this.$store.commit('ChangeClassFalse')
      }
      else {
        this.$store.commit('ChangeClassTrue')

      }
    },
  },
}
</script>

<style>
.home-front {
  overflow-y: scroll;
}

.home-front,
.home-front-show,
.home-front-image,
.home-front-overlay {
  width: 100%;
  height: 100vh;
}

.home-front-show {
  position: relative;
}

.home-front-image {
  position: absolute;
  background: url(https://pic.gksec.com/2021/03/21/01ae6a91650a7/bgss.jpg)
    no-repeat center;

  background-size: cover;
}

.home-front-overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);
}
</style>