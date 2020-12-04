<template>
  <div class="cloud_library">
    <div class="top">
      <div class="top__img">
        <img :src="require('../../assets/images/cloudIcon.png')" width="100%" height="100%" />
      </div>
      <div class="top__large">云族库</div>
      <div class="top__small">领先的云族库驱动引擎</div>
    </div>
    <div class="content">
      <div class="title">产品概述</div>
      <div class="describe">
        BIMPOP族库是可供BIM工程师管理、下载和共享Revit族库，同时允许企业根据自身特点自主快速定制极具个性化和极强适用性的族库平台，旨在为建筑企业提供企业级应用产品和大数据云计算服务。
      </div>
      <Button type="primary" shape="circle">BIMPOP 族库是领先的云族库驱动引擎</Button>
      <div class="image">
        <img :src="require('../../assets/images/productDes3-1.png')" width="100%" height="100%" />
      </div>
      <Button type="primary" shape="circle">找构件，上BIMPOP就够了！</Button>
      <div class="image">
        <img :src="require('../../assets/images/productDes3-2.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品亮点</div>
      <div class="light-box">
        <div class="items">
          <img :src="require('../../assets/images/productDes3-3.png')" />
          <div class="items__title">全审核</div>
          <div class="items__des">
            BIMPOP族库全平台的构件模型必须经过平台审核，确保平台展示的构件质量。
          </div>
        </div>
        <div class="items">
          <img :src="require('../../assets/images/productDes3-4.png')" />
          <div class="items__title">全量化</div>
          <div class="items__des">
            BIMPOP族库允许用户对族参数进行规范，助力企业执行行业标准规范。BIMPOP族库改变了以往族库存在的不能量化计算价格等不规范问题，真正方便企业管理项目，方便相关从业人员进行算量。
          </div>
        </div>
        <div class="items">
          <img :src="require('../../assets/images/productDes3-5.png')" />
          <div class="items__title">全解析</div>
          <div class="items__des">
            BIMPOP族库改变了业内族库参数信息不完整或不能自动解析等弊端，BIMPOP族库能自动化解析全部族模型且生成参数列表。
          </div>
        </div>
        <div class="items">
          <img :src="require('../../assets/images/productDes3-6.png')" />
          <div class="items__title">云储存</div>
          <div class="items__des">
            不同于通常族只能储存在个人电脑或者公司数据库中的情况，BIMPOP族库平台数据均储存在云端数据库中，更有利于族数据的共享。
          </div>
        </div>
        <div class="items">
          <img :src="require('../../assets/images/productDes3-7.png')" />
          <div class="items__title">统分类</div>
          <div class="items__des">
            不同于通常族分类不系统造成的族库管理混乱的情况，BIMPOP族库拥有统一的系统化分类，能快速检索所需的族构件。
          </div>
        </div>
        <div class="items">
          <img :src="require('../../assets/images/productDes3-8.png')" />
          <div class="items__title">设权限</div>
          <div class="items__des">
            不同于通常族库只限于个人使用易导致员工离职数据丢失，信息外泄频出，BIMPOP族库给每个企业统发一个帐号，并进行权限设置以及日志监控。保证信息安全，改变了企业族管理混乱的局面，规范企业族数据库。
          </div>
        </div>
        <div class="items"></div>
        <div class="items">
          <img :src="require('../../assets/images/productDes3-9.png')" />
          <div class="items__title">可共享</div>
          <div class="items__des">
            不同于通常族库共享不方便，资产复用率低，跨部门合作不方便的情况，BIMPOP族库能通过权限设置快速共享族库，打破信息壁垒实现数据共享，提高了企业内部的协同能力。
          </div>
        </div>
        <div class="items"></div>
      </div>
      <div class="title">操作界面</div>
    </div>
    <div class="imageList">
      <img :src="require('../../assets/images/productDes3-10.png')" />
      <img :src="require('../../assets/images/productDes3-11.png')" />
      <img :src="require('../../assets/images/productDes3-12.png')" />
      <img :src="require('../../assets/images/productDes3-13.png')" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'cloud_library',
  mounted () {
    document.body.scrollIntoView()
  }
}
</script>
<style lang="less" scoped>
.cloud_library {
  .top {
    width: 100%;
    height: 280px;
    background: url('https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/cloudLibraryImg.png') center center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    &__img {
      width: 87px;
      height: 63px;
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
    .light-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .items {
        margin-top: 64px;
        text-align: center;
        width: 310px;
        &__title {
          margin: 8px 0 16px;
          font-size: 16px;
          line-height: 1.5em;
          font-weight: bold;
        }
        &__des {
          font-size: 14px;
          line-height: 1.5em;
        }
      }
      .items img {
        height: 94px;
      }
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
