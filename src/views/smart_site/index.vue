<template>
  <div class="smart_site">
    <div class="top">
      <div class="top__img">
        <img :src="require('../../assets/images/diggerIcon.png')" width="100%" height="100%" />
      </div>
      <div class="top__large">智慧工地解决方案</div>
      <div class="top__small">智慧工地全新概念智能工卡</div>
    </div>
    <div class="content">
      <div class="title">背景描述</div>
      <div class="image">
        <img :src="require('../../assets/images/productDes2-1.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品概述</div>
      <Button type="primary" shape="circle" class="btn">华建工智慧工卡</Button>
      <div class="describe">
        智慧工卡是针对施工现场开发的全新概念的智能工卡，与华建工平台绑定，与BIM软件的通用融合，软硬件结合一站式管控从而支持更多智慧工地的应用，为打造智慧工地持续赋能。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes2-2.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品亮点</div>
      <Button type="primary" shape="circle" class="btn">易部署  低成本  软硬件融合</Button>
      <div class="image">
        <img :src="require('../../assets/images/productDes2-3.png')" width="100%" height="100%" />
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes2-4.png')" width="100%" height="100%" />
      </div>
      <div class="title">工作原理</div>
      <div class="describe">
        智能工卡内置有RFID模块、远传数据模块、锂离子电池等，在定位点固定RFID有源芯片电子标签，当工人携带智能工卡靠近电子标签时，智能工卡自动读取定位点电子标签，并把读取到的电子标签信息和读取设备信息通过远传数据模块传给接收终端。
      </div>
      <div class="image1">
        <img :src="require('../../assets/images/productDes2-5.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品功能</div>
      <div class="image1">
        <img :src="require('../../assets/images/productDes2-6.png')" width="100%" height="100%" />
      </div>
      <div class="title">操作界面</div>
    </div>
    <div class="imageList">
      <img :src="require('../../assets/images/productDes2-7.png')" />
      <img :src="require('../../assets/images/productDes2-8.png')" />
      <img :src="require('../../assets/images/productDes2-9.png')" />
      <img :src="require('../../assets/images/productDes2-10.png')" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'smart_site',
  mounted () {
    document.body.scrollIntoView()
  }
}
</script>
<style lang="less" scoped>
.smart_site {
  .top {
    width: 100%;
    height: 280px;
    background: url('https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/smartSiteImg.png') center center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    &__img {
      width: 71px;
      height: 66px;
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
      margin: 32px 0;
      width: 585px;
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
    max-width: 400px;
    height: 252px;
  }
}
</style>
