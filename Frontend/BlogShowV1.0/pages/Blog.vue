<template>
  <div>
    <div id="wrap" class="class-range">
      文章
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      class_key: '',
    }
  },
  mounted () {
    document.querySelector("#navbar").className = 'navbar-scroll'
    document.querySelector("#wrap").addEventListener('scroll', this.handleScroll)
    this.class_key = this.$store.state.class_key
  },
  computed: {
    listData () {
      return this.$store.state.class_key;
    }
  },
  watch: {
    listData (val) {
      this.class_key = this.$store.state.class_key
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = document.querySelector("#wrap").scrollTop;

      if (scrollTop > 0) {
        if (document.querySelector("#navbar").className != 'navbar-scroll') {
          document.querySelector("#navbar").className = 'navbar-scroll'
        }
      }
      else {
        if (document.querySelector("#navbar").className != 'navbar') {
          document.querySelector("#navbar").className = 'navbar'
        }
      }
    },
  },
}
</script>

<style>
.class-range {
  width: 100%;
  height: 100vh;

  overflow-y: scroll;
}

.class-pageimage-range {
  position: relative;
  height: 300px;
}

.class-pageimage {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.class-pageimage-overlay {
  width: 100%;
  height: 300px;

  position: absolute;
  z-index: 12;

  background: rgba(0, 0, 0, 0.3);
}

.class-pageimage-text {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-top: 60px;
}
</style>
