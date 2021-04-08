<template>
  <div>
    <div v-if="navbar=='front'">
      <NavbarFront />
    </div>
    <div v-if="navbar=='admin'">
      <NavbarAdmin />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navbar: '',
    }
  },
  mounted () {
    // console.log(this.$route.path)
    if (this.$route.path.indexOf('Admin') == 1) {
      this.navbar = 'admin'
      // console.log(this.navbar)
    }
    else {
      this.navbar = 'front'
      // console.log(this.navbar)
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      console.log(newVal + "---" + oldVal)
      if (this.$route.path.indexOf('Admin') == 1) {
        this.navbar = 'admin'
        console.log(this.navbar)
      }
      else {
        this.navbar = 'front'
        console.log(this.navbar)
      }
    }
  },
}
</script>

<style>
</style>