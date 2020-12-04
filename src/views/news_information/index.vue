<template>
  <div class="news_information">
    <div class="breadImg">
      <div class="imte__bag">NEWS</div>
      <div class="imte__min">新闻资讯</div>
    </div>
    <div class="contentBox">
      <div class="title__box">
        <div class="imte">
          <div
            @click="onJournalismType('0')"
            class="lis ta--l"
            :class="type=='0'? 'bb--D14':''"
          >企业动态</div>
        </div>
        <div class="imte">
          <div
            @click="onJournalismType('1')"
            class="lis"
            :class="type=='1'? 'bb--D14':''"
          >行业资讯</div>
        </div>
      </div>
      <div
        class="lis__box"
        v-for="(imte, index) in data"
        :key="index"
      >
        <div
          class="journalismBox"
          @click="openNewsDetails(imte.url)"
        >
          <div class="journalism__img">
            <img
              :src="imte.picture"
              alt="图片加载失败..."
            >
          </div>
          <div class="journalism__text">
            <div class="title">
              <div
                class="icon"
                v-if="index==0"
              ><img
                  src="../../assets/images/new_icon.png"
                  alt=""
                ></div>
              <div
                class="value"
                :class="index==0? 'pa--left':''"
              >{{imte.title}}</div>
            </div>
            <div class="text">{{imte.introduction}}</div>
            <div class="time">{{imte.editTime}}</div>
          </div>
        </div>
      </div>
      <!-- 点击加载更多资讯 -->
      <div
        class="loadMore"
        v-if="total!=0 && page != all"
      >
        <Button
          @click="nextPage"
          shape="circle"
        >点击加载更多资讯</Button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticle
} from '../../api/index'
export default {
  name: 'news_information',
  data () {
    return {
      type: '0',
      page: 1,
      size: 10,
      total: 0,
      all: 0,
      data: []
    }
  },
  created () {},
  mounted () {
    this.type = this.$route.query.type ? this.$route.query.type : '0'
    this.init()
  },
  watch: {
    $route (val) {
      console.log(val)
      this.type = this.$route.query.type ? this.$route.query.type : '0'
    },
    type (n, o) {
      if (n !== o) {
        this.data = []
      }
      this.init()
    }
  },
  methods: {
    init () {
      getArticle(this.page, this.size, this.type).then((res) => {
        if (res.flag) {
          if (this.data.length !== 0) {
            this.data = this.data.concat(res.data.rows)
          } else {
            this.data = res.data.rows
          }
          this.total = res.data.total
          this.all = Math.ceil(this.total / this.size)
        }
      })
    },
    // 分类
    onJournalismType (type) {
      this.type = type
      this.page = 1
      // this.data = []
      // this.init()
    },
    // 下一页
    nextPage () {
      this.page++
      this.init()
    },
    // 详情
    openNewsDetails (url) {
      // this.$router.push({
      //   name: 'news_information_imte',
      //   query: {
      //     url: url
      //   }
      // })
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.news_information {
  .breadImg {
    width: 100%;
    height: 280px;
    background-image: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/information_bgimg.png");
    background-size: 100% 100%;
    color: #fff;
    font-weight: bold;
    padding-top: 54px;
    padding-left: 240px;

    .imte__bag {
      font-size: 40px;
      margin-bottom: 32px;
    }

    .imte__min {
      font-size: 24px;
    }
  }

  .contentBox {
    width: 1022px;
    margin: 0 auto;
    .title__box {
      display: flex;
      height: 40px;
      margin-top: 32px;
      .imte {
        font-size: 16px;
        color: #000;
        width: 80px;
        height: 16px;
        border-right: 1px solid #979797;

        .lis {
          height: 24px;
          width: 64px;
          // margin: 0 auto;
          margin-left: 16px;
          cursor: pointer;
        }

        .ta--l {
          margin-left: 0;
        }

        .bb--D14 {
          border-bottom: 2px solid #faad14;
        }
      }

      .imte:last-child {
        border-right: none;
      }
    }

    .lis__box {
      margin-bottom: 32px;

      .journalismBox {
        display: flex;

        .journalism__img {
          height: 159px;
          width: 264px;
          overflow: hidden;

          img {
            width: 100%;
          }
        }
      }

      .journalism__text {
        flex: 1;
        padding-left: 32px;

        .title {
          display: flex;
          margin-bottom: 24px;

          .icon {
            width: 50px;
            height: 20px;

            img {
              width: 100%;
            }
          }

          .pa--left {
            padding-left: 10px;
          }

          .value {
            font-size: 16px;
            font-weight: bold;
            color: #000;
          }
        }

        .text {
          color: #333;
          font-size: 14px;
          height: 3.2em;
          position: relative;
          line-height: 1.6em;
          overflow: hidden;
          margin-bottom: 24px;
          // padding-right: 23px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }

        // .text:after {
        //   content: "…";
        //   font-weight: bold;
        //   position: absolute;
        //   bottom: 0;
        //   right: 0;
        //   padding: 0 10px 1px 0px; ///控制后面省略号的位置
        // }

        .time {
          font-size: 14px;
          color: #333;
        }
      }
    }

    .loadMore {
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
</style>
