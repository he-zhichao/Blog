<template>
  <div>
    <div id="wrap" class="content-range">
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
      <div class="content-home">
        <div class="resive-sm bg-fff padding-lr">
          <div class="blog-single" v-for="item in blog_lists" :key="item.id">
            <div class="blog-title">{{item.title}}</div>
            <div class="blog-attribute">
              <span class="icon iconfont icon-time"></span>
              发表于 {{item.time | formatDate}}
              <span class="icon iconfont icon-browse"></span>
              阅读：{{item.read}}
              <span class="icon iconfont icon-comment"></span>
              评论：{{item.comment}}
            </div>
            <div class="blog-text">
              {{item.text}}
            </div>
            <vs-button class="blog-button" color="dark" type="line" size="large" @click="PageChange('/TimeAxis')">阅读全文
              >>
            </vs-button>
          </div>
        </div>
      </div>
    </div>
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
    document.querySelector("#navbar").className = 'navbar'
    document.querySelector("#wrap").addEventListener('scroll', this.handleScroll)
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
    PageChange () {

    }
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

.content-home {
  width: 100%;
  height: 1000px;
  background: #f7f7f7;

  display: flex;
  justify-content: center;
}

.glitch {
  position: relative;
  color: #fff;
  font-family: Ubuntu, sans-serif;
  font-size: 80px;
  text-transform: uppercase;
}

.subtitle {
  width: 500px;
  padding: 15px;
  border-radius: 10px;

  color: #eaeadf;
  font-size: 16px;
  font-weight: bold;

  line-height: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
}

.blog-single {
  margin: 35px 0;
  padding-bottom: 35px;
  border-bottom: #e9e9e9 1px solid;
}

.blog-title {
  color: #4a4a4a;
  font-family: "Open Sans", "Microsoft Jhenghei", "Microsoft Yahei", sans-serif;
  font-size: 32px;
  font-weight: bold;
}

.blog-attribute {
  padding: 10px 0;
  display: flex;
  align-items: center;

  font-size: 14px;
  color: #888;
}

.blog-attribute .icon {
  padding: 0 5px;
}

.blog-text {
  color: #4a4a4a;
  margin: 0;
  text-align: justify;
  font-size: 17px;
  font-weight: bold;

  word-wrap: break-word;
  word-break: break-all;
  line-height: 1.5;
}

.blog-button {
  padding: 15px 0 !important;
  color: #4a4a4a !important;
  font-weight: bold;
}
</style>
