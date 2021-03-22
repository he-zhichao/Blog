<template>
  <div>
    <div id="wrap">
      123
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    document.querySelector("#navbar").className = 'navbar-scroll'
    // document.querySelector("#wrap").addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll () {
    //   let scrollTop = document.querySelector("#wrap").scrollTop;

    //   if (scrollTop > 0) {
    //     if (document.querySelector("#navbar").className != 'navbar-scroll') {
    //       document.querySelector("#navbar").className = 'navbar-scroll'
    //     }
    //   }
    //   else {
    //     if (document.querySelector("#navbar").className != 'navbar') {
    //       document.querySelector("#navbar").className = 'navbar'
    //     }
    //   }
    // }
  }
}
</script>

<style>
</style>