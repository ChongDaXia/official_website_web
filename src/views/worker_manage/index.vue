<template>
  <div class="worker_manage">
    <div class="top">
      <div class="top__img">
        <img :src="require('../../assets/images/helmetIcon.png')" width="100%" height="100%" />
      </div>
      <div class="top__large">工人实名制管理</div>
      <div class="top__small">智慧工地劳务实名制管理云平台</div>
    </div>
    <div class="content">
      <div class="title">产品概述</div>
      <div class="describe">
        BIMPOP-WIMS是华建工基于工人实名制政策大背景应运而生，结合新型科技技术手段快速研发迭代的智能易用的工人实名制管理平台，一站式解决企业工人管理流程杂、流动大、管控难、劳资纠纷多四大痛点。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes4-1.png')" width="100%" height="100%" />
      </div>
      <Button type="primary" shape="circle">三方多端交互协作  提高协同效率</Button>
      <div class="describe">
        打造“WEB+移动端+智能硬件”三位一体的操作平台，连接“企业+管工+工人”三端建立起从企业到工人、从管工到工人，从面到点和点到点的高效互通连接。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes4-2.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品亮点</div>
      <div class="describe"></div>
      <div class="image">
        <img :src="require('../../assets/images/productDes4-3.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品功能</div>
      <div class="describe">
        十大功能模块，迅捷开发，精细化管理。深入一线基层建筑工人，助力建筑行业在数字时代全面实现信息化管理。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes4-4.png')" width="100%" height="100%" />
      </div>
      <div class="title">操作界面</div>
    </div>
    <div class="imageList">
      <img :src="require('../../assets/images/productDes4-5.png')" />
      <img :src="require('../../assets/images/productDes4-6.png')" />
      <img :src="require('../../assets/images/productDes4-7.png')" />
      <img :src="require('../../assets/images/productDes4-8.png')" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'worker_manage',
  mounted () {
    document.body.scrollIntoView()
  }
}
</script>
<style lang="less" scoped>
.worker_manage {
  .top {
    width: 100%;
    height: 280px;
    background: url('https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/productBanner.png') center center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    &__img {
      width: 78px;
      height: 50px;
    }
    &__large {
      margin-top: 16px;
      font-size: 24px;
      line-height: 1.5em;
    }
    &__small {
      font-size: 14px;
      line-height: 1.5em;
    }
  }
  .content {
    width: 1022px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 64px;
    .title {
      margin: 48px 0 0;
      position: relative;
      font-size: 16px;
      line-height: 1.5em;
      font-weight: bold;
      color: #000;
    }
    .title::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 8px;
      background-color: #FAAD14;
    }
    .describe {
      margin: 16px 0 24px;
      width: 1022px;
      font-size: 16px;
      line-height: 1.5em;
      color: #000;
      text-align: center;
    }
    .image {
      margin-bottom: 32px;
      width: 1022px;
    }
  }
  .imageList {
    margin-bottom: 64px;
    display: flex;
    justify-content: space-around;
  }
  .imageList img {
    max-width: 467px;
    height: 287px;
  }
}
</style>
