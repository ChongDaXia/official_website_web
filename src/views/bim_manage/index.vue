<template>
  <div class="bim_manage">
    <div class="top">
      <div class="top__img">
        <img :src="require('../../assets/images/bimIcon.png')" width="100%" height="100%" />
      </div>
      <div class="top__large">BIMPOP一体化协同管理</div>
      <div class="top__small">一体化智能工程进度管理平台</div>
    </div>
    <div class="content">
      <div class="title">背景描述</div>
      <div class="image">
        <img :src="require('../../assets/images/productDes1-1.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品概述</div>
      <Button type="primary" shape="circle" class="btn">建筑工程项目全生命周期管理平台</Button>
      <div class="describe">
        BIMPOP进度管理平台是基于BIM技术，贯穿建筑工程项目全生命周期管理的可视化协同平台，旨在为工程项目管理提供智能、安全、易用的科学管理工具与服务，切实提升工程项目管理水平和工作效率。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes1-2.png')" width="100%" height="100%" />
      </div>
      <Button type="primary" shape="circle">三位一体  多端协同的交互平台</Button>
      <div class="describe">
        三位一体，多端协同交互。针对不同用户群体使用特征，开发相对应的不同端口，优化了相应功能和设计，使不同工程进度链条上的不同角色能更高效协同。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes1-3.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品亮点</div>
      <Button type="primary" shape="circle" class="btn">三端交互 三大角色 协同管控</Button>
      <div class="describe">
        三位一体，上下联动，纵横协管，每个端口对应工程管理链上不同的角色，高效连接工程部、施工部、监理方、管理者四方协同。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes1-4.png')" width="100%" height="100%" />
      <div class="image1">
        <img :src="require('../../assets/images/productDes1-5.png')" width="100%" height="100%" />
      </div>
      </div>
      <div class="title">产品功能</div>
      <Button type="primary" shape="circle" class="btn">工人进度管理线条</Button>
      <div class="describe">
        以工程项目为核心，多维度多功能模块协同管理。
      </div>
      <div class="image1">
        <img :src="require('../../assets/images/productDes1-6.png')" width="100%" height="100%" />
      </div>
      <div class="title">操作界面</div>
    </div>
    <div class="imageList">
      <img :src="require('../../assets/images/productDes1-7.png')" />
      <img :src="require('../../assets/images/productDes1-8.png')" />
      <img :src="require('../../assets/images/productDes1-9.png')" />
      <img :src="require('../../assets/images/productDes1-10.png')" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'bim_manage',
  mounted () {
    document.body.scrollIntoView()
  }
}
</script>
<style lang="less" scoped>
.bim_manage {
  .top {
    width: 100%;
    height: 280px;
    background: url('https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/bimManageImg.png') center center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    &__img {
      width: 67px;
      height: 68px;
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
      margin: 32px 0;
      width: 1022px;
    }
    .image1 {
      margin: 0;
      width: 1022px;
    }
    .btn {
      margin-top: 32px;
    }
  }
  .imageList {
    margin-bottom: 64px;
    display: flex;
    justify-content: space-around;
  }
  .imageList img {
    max-width: 579px;
    height: 287px;
  }
}
</style>
