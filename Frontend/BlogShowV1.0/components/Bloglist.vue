<template>
  <div class="content-home">
    <div class="resive-sm bg-fff padding-lr">
      <div class="blog-single" v-for="item in blog_lists" :key="item.id">
        <div class="blog-title">{{item.title}}</div>
        <div class="blog-attribute">
          <span class="icon iconfont icon-time"></span>
          <span class="margin-right-xs">发表于 {{item.time | formatDate}}</span>
          <span class="icon iconfont icon-browse"></span>
          <span class="margin-right-xs">阅读：{{item.read}}</span>
          <span class="icon iconfont icon-comment"></span>
          <span>评论：{{item.comment}}</span>
        </div>
        <div class="blog-text">
          {{item.text}}
        </div>
        <vs-button class="blog-button" color="dark" type="line" size="large" @click="PageChange('/Blog')">阅读全文
          >>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog_lists: {
      type: Array,
    }
  },
  mounted () {
    console.log(this.blog_lists)
  },
  methods: {
    PageChange (path) {
      this.$router.push(path)
    },
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1);
      return Y + M + D;
    }
  },
}
</script>

<style>
</style>