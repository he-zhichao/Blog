<template>
  <div>
    前台123
    <!-- <div id="wrap" class="content-range">
      <div class="content-image">
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
      <Bloglist :blog_lists="blog_lists" />
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog_lists: [
        {
          id: '1000001',
          title: '测试随笔',
          classification: '技术',
          time: '1616398493',
          read: '11',
          comment: '1',
          text: '摘要：这个作业属于哪个课程 班级连接 这个作业要求在哪里 作业要求 这个作业的目标 通过阅读《构建之法》对软件工程概念初步了解 学号 20188387 读后疑问 1、为什么需要源代码的管理？[第11章 软件设计与实现P242] 软件的质量=程序的质量+软件工程的质量。软件的源代码管理工具加上构建系统，能保',
        },
      ]
    }
  },
  mounted () {
    // document.querySelector("#navbar").className = 'navbar'
    // document.querySelector("#wrap").addEventListener('scroll', this.handleScroll)
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
.content-range {
  /* padding-top: 60px; */
  width: 100%;
  height: 100vh;

  background: url(https://pic.gksec.com/2021/03/21/01ae6a91650a7/bgss.jpg)
    no-repeat center;

  background-size: cover;

  overflow-y: scroll;
}

.content-image {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.3);
}
</style>
