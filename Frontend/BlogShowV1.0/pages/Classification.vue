<template>
  <div>
    <div id="wrap" class="class-range">
      <div class="class-pageimage-range">
        <div class="class-pageimage-overlay flex justify-center align-center">
          <div class="class-pageimage-text">
            分类：{{class_key}}
          </div>
        </div>
        <img class="class-pageimage"
          src="https://pic.gksec.com/2021/03/24/07931018161d6/pexels-jaymantri-4827_gaitubao_2200x555.jpg" alt="">
      </div>
      <Bloglist :blog_lists="blog_lists" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      class_key: '',
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
    document.querySelector("#navbar").className = 'navbar'
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
