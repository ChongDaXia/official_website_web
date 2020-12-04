<template>
  <div class="main_home">
    <div class="describe">
      <div class="describe__left">
        <div class="title">公司简介</div>
        <div class="content">是由华南理工大学BIM实验室核心成员于2017年9月创建 ， 由中新国际联合研究院孵化， 是一家集软件开发、 技术咨询及技术转让为一体的综合性互联网公司。公司主要面向建筑企业提供定制化的信息化解决方案， 依托中新国际联合研究院和澳门建信集团的支持， 掌握了一系列核心技术及对于建筑行业业务流程的深刻理解。目前，公司形成了 “软件+咨询” 的双增值模式， 拥有多款建筑信息化产品。</div>
        <Button type="primary" shape="circle" class="btn" @click="linkToNewNav('about_us')">
          MORE
          <Icon type="md-arrow-forward" />
        </Button>
      </div>
      <div class="describe__right">
        <img src="https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/homeDes.png" />
      </div>
    </div>
    <div class="product">
      <div class="product__title">产品中心</div>
      <div class="product__describe">
        华建工智主要面向建筑企业从岗位应用、使用场景、项目类型与规模等多维度提供多种行业解决方案如：项目工程管理、智慧工地、工程仓储信息化、地产项目数字孪生、工程安全预警、工地物联网覆盖等相关解决方案定制与研发。
      </div>
      <div class="product__img">
        <div
          v-for="item in producetList"
          :key="item.key"
          class="items"
          @click="linkToNewNav(item.key)">
          <img class="imgs" :src="item.bgImg" />
          <div class="text">
            <img :src="item.img" />
            <div>{{ item.des }}</div>
            <Button shape="circle" class="btn">
              MORE
              <Icon type="md-arrow-forward" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="news__title">新闻资讯</div>
      <div class="news__tab">公司动态</div>
      <div class="news__content">
        <div v-for="item in articleList" :key="item.id" class="items">
          <div class="img">
            <img :src=item.picture width="100%" height="100%" />
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="des">
            {{ item.introduction }}
          </div>
          <Button shape="circle" class="btn" @click="handleOpenPages(item.url)">
            查看详情
            <Icon type="md-arrow-forward" />
          </Button>
        </div>
      </div>
    </div>
    <div class="partner">
      <div class="partner__title">战略伙伴</div>
      <div class="partner__content">
        <div class="items">
          <img :src="require('../../assets/images/homePartner1.png')" width="100%" />
        </div>
        <div class="items">
          <img :src="require('../../assets/images/homePartner2.png')" width="100%" height="100%" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticle } from 'api/index.js'
export default {
  name: 'main_home',
  data () {
    return {
      articleList: [],
      producetList: [
        {
          key: 'bim_manage',
          bgImg: 'https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/homeProduct1.png',
          img: require('../../assets/images/bimIcon.png'),
          des: 'BIMPOP一体化协同管理'
        }, {
          key: 'smart_site',
          bgImg: 'https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/homeProduct2.png',
          img: require('../../assets/images/diggerIcon.png'),
          des: '智慧工地解决方案'
        }, {
          key: 'cloud_library',
          bgImg: 'https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/homeProduct3.png',
          img: require('../../assets/images/cloudIcon.png'),
          des: '云族库协同服务'
        }, {
          key: 'worker_manage',
          bgImg: 'https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/homeProduct4.png',
          img: require('../../assets/images/helmetIcon.png'),
          des: '工人实名制管理'
        }
      ]
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    getArticleList () {
      getArticle(1, 10, '0').then(res => {
        if (res.code === 200) {
          this.articleList = res.data.rows.slice(0, 4)
        }
      })
    },
    handleOpenPages (val) {
      window.open(val)
    },
    // 跳转产品中心子菜单
    linkToNewNav (val) {
      this.$emit('changeProduce', val)
    }
  }
}
</script>
<style lang="less" scoped>
.main_home {
  .describe {
    display: flex;
    width: 100%;
    height: 1080px;
    &__left {
      width: 50%;
      height: 100%;
      padding: 0 100px;
      background-color: #2E2E30;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      .title {
        position: relative;
        font-size: 36px;
        line-height: 1.5em;
        font-weight: bold;
      }
      .title::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 80px;
        height: 8px;
        background-color: #1677FF;
      }
      .content {
        margin: 64px 0px 56px;
        font-size: 14px;
        line-height: 2em;
        color: #D3D3D3;
      }
      .btn {
        width: 168px;
        transition: all 0.3s;
      }
    }
    &__right {
      width: 50%;
      height: 100%;
    }
    &__right img {
      width: 100%;
      height: 100%;
    }
  }
  .product {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    &__title {
      margin: 176px 0 32px;
      position: relative;
      font-size: 36px;
      line-height: 1.5em;
      font-weight: bold;
    }
    &__title::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 8px;
      background-color: #1677FF;
    }
    &__describe {
      margin-bottom: 40px;
      width: 744px;
      font-size: 14px;
      line-height: 2em;
      text-align: center;
    }
    &__img {
      width: 100%;
      display: flex;
      justify-content: center;
      .items {
        width: 25%;
        height: 480px;
        position: relative;
        cursor: pointer;
        transition: all 0.4s ease-out;
        color: #fff;
        background-color: #000;
        .imgs {
          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 0.68;
        }
        .text {
          width: 100%;
          height: 100%;
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .btn {
            margin-top: 32px;
            color: #2d8cf0;
          }
        }
        .text img {
          width: 64px;
        }
        .text div {
          margin-top: 16px;
          font-size: 24px;
          line-height: 1.5em;
          font-weight: bold;
        }
      }
    }
    .items:hover {
      background-color: #044AAD;
      opacity: 0.79;
    }
  }
  .news {
    width: 100%;
    height: 800px;
    margin: 176px 0 0;
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/homeNewBg.png') center center no-repeat;
    background-size: 100% 100%;
    &__title {
      margin: 0 0 32px;
      position: relative;
      font-size: 36px;
      line-height: 1.5em;
      font-weight: bold;
      color: #fff;
    }
    &__title::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 8px;
      background-color: #1677FF;
    }
    &__tab {
      margin-bottom: 32px;
      padding: 8px 16px;
      background-color: #1677FF;
      border-radius: 32px;
      font-size: 16px;
      line-height: 1.5em;
      color: #fff;
    }
    &__content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .items {
        width: 23%;
        height: 480px;
        padding: 16px;
        background-color: #fff;
        border-radius: 6px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s;
        .img {
          width: 100%;
          height: 240px;
        }
        .title {
          margin: 16px 0;
          font-size: 16px;
          line-height: 1.5em;
          color: #000;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .des {
          font-size: 12px;
          line-height: 1.5em;
          color: #000;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .btn {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: none;
        }
      }
      .items:hover .btn {
        display: block;
      }
      .items:hover {
        transform: scale(1.05);
      }
    }
  }
  .partner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
      margin: 176px 0 32px;
      position: relative;
      font-size: 36px;
      line-height: 1.5em;
      font-weight: bold;
      color: #000;
    }
    &__title::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 8px;
      background-color: #1677FF;
    }
    &__content {
      width: 100%;
      padding-bottom: 176px;
      display: flex;
      justify-content: center;
      .items {
        width: 16%;
        height: 172px;
        cursor: pointer;
        transition: all 0.3s;
        // opacity: 0.8;
        // background-color: #D3D3D3;
        position: relative;
      }
      .items img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .items:hover {
        opacity: 1;
        // background-color: #fff;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
