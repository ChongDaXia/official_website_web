<template>
  <div class="product_center">
    <div class="top">
      <div class="top__img">
        <img :src="require('../../assets/images/helmetIcon.png')" width="100%" height="100%" />
      </div>
      <div class="top__large">智慧工地劳务实名制管理云平台</div>
      <div class="top__small">智能易用的工人实名制管理平台</div>
    </div>
    <div class="content">
      <div class="title">背景描述</div>
      <div class="two-cols">
        <div class="left">
          <img src="https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/productDes1.png" width="100%" height="100%" />
        </div>
        <div class="right">
          <p>行业痛点：我国建筑行业长期以来存在用工秩序不尽规范、工人水平参差不齐，流动性高，监管也不够有力等诸多工人劳务问题，为此也引发不少工人劳资纠纷。</p>
          <p>政策驱动：为规范建筑行业工地工人管理，加强安全生产管理和监管，维护工人群体权益，促进建筑行业长期发展，住建部与人力资源社会保障部于2019年联合下发《建筑工人实名制管理办法(试行)的通知》，并于同年3月1日正式实施。2019年12月国家正式公布《保障农民工工资支付条例》，并于2020年5月1日正式实施。国家要求建立全国建筑工人管理服务信息平台，到2020年实现全国建筑工人实名制全覆盖。</p>
        </div>
      </div>
      <div class="title">产品概述</div>
      <div class="two-cols">
        <div class="left">
          <img :src="require('../../assets/images/productDes2.png')" width="100%" height="100%" />
        </div>
        <div class="right">
          BIMPOP-WIMS,是由华建工开发的工地人员实名制管理产品，拥有“WEB+移动端+智能硬件”三位一体操作平台，从企业管理端、管工端和工人端对工地劳务人员进行有效协同管理。WIMS从目前业内工人流动大、管控难、流程多等痛点出发，采用互联网思维+双端结合模式，依托大数据、云计算、物联网等新兴科技手段，从任务派发、人员实名制管理、考勤管理、薪酬体系、通知反馈、权限设置、劳动合同、安全培训等等模块对工人进行全过程管控，建立起从企业到工人、从管工到工人，从面到点和点到点的高效互通连接，切实解决业内建筑工人劳务管理问题。特别针对目前业内工人流动大的痛点，WIMS能够通过电子名片、台账管理（包括任务台账、考勤台账、薪酬台账等）、合同管理等方式，有效规避用工风险减少劳动纠纷，是应对建筑行业工人流动性的有效举措。
        </div>
      </div>
      <div class="title">产品亮点</div>
      <div class="tab">智慧物联精准考核</div>
      <div class="describe">
        WIMS利用物联网技术直接精确关联施工现场各种智能终端硬件设备，如关联可自动记录考勤和轨迹的智能工卡、人脸识别设备等，采集劳务人员出工记录，数据实时上传至WIMS后台，准确的考勤记录能有效避免劳资纠纷。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes3.png')" width="100%" height="100%" />
      </div>
      <div class="tab">移动办公连接高效</div>
      <div class="describe">
        WIMS通过一体化的信息手段将工人的管理培训，任务派发，通知上传下达，薪酬发放，意见反馈等模块统筹起来，一键触达到基层工人，避免层层传达的消耗，改善劳务用工乱象，提高工作效率。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes4.png')" width="100%" height="100%" />
      </div>
      <div class="tab">台账管理智能准确</div>
      <div class="describe">
        WIMS革新了工地工人传统的记账式管理模式，帮助企业建立起统一的建筑工人实名制用工台账管理制度，实现了工人无纸化办公，支持自动生成出工率、工资表等表单信息。台账也能快速配合企业劳资专管员的工作，信息化台账管理避免人为计算纰漏，保证数据准确的同时核算也更方便快捷，规避用工风险避免劳务纠纷。
      </div>
      <div class="image">
        <img :src="require('../../assets/images/productDes5.png')" width="100%" height="100%" />
      </div>
      <div class="title">产品功能</div>
      <div class="two-items">
        <div class="items">
          <div class="items__img">
            <img :src="require('../../assets/images/productLogo1.png')" width="100%" height="100%" />
          </div>
          <div class="items__name">人员管理</div>
          <div class="items__describe">
            WIMS支持工人在工人端APP上输入个人身份信息（包括姓名、专业、身份证号码、紧急联络人、籍贯等等），由系统自动进行人脸识别企业管理人员在WEB端进行工人身份的审核管理。
          </div>
        </div>
        <div class="items">
          <div class="items__img">
            <img :src="require('../../assets/images/productLogo2.png')" width="100%" height="100%" />
          </div>
          <div class="items__name">劳动合同</div>
          <div class="items__describe">
            WIMS支持建筑企业与农民工依法签订劳动合同且办理劳动用工备案。工人劳动合同应按规定明确用工时间及工资发放形式，包括采用银行代发或采用移动支付等便捷方式支付工资等形式。
          </div>
        </div>
      </div>
      <div class="title">操作界面</div>
      <div class="action">
        <div class="action__img">
          <img :src="require('../../assets/images/productDes6.png')" width="100%" height="100%" />
        </div>
        <div class="action__img">
          <img :src="require('../../assets/images/productDes7.png')" width="100%" height="100%" />
        </div>
        <div class="action__img">
          <img :src="require('../../assets/images/productDes8.png')" width="100%" height="100%" />
        </div>
        <div class="action__img">
          <img :src="require('../../assets/images/productDes9.png')" width="100%" height="100%" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product_center'
}
</script>
<style lang="less" scoped>
.product_center {
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
    padding-bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin: 48px 0 32px;
      position: relative;
      font-size: 24px;
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
    .two-cols {
      width: 1022px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 400px;
        height: 240px;
      }
      .right {
        width: 600px;
        font-size: 16px;
        line-height: 1.5em;
        color: #000;
      }
    }
    .tab {
      padding: 8px 16px;
      background-color: #1677FF;
      border-radius: 32px;
      font-size: 16px;
      line-height: 1.5em;
      color: #fff;
    }
    .describe {
      margin: 16px 0 24px;
      width: 1022px;
      font-size: 16px;
      line-height: 1.5em;
      color: #000;
    }
    .image {
      margin-bottom: 32px;
      width: 1022px;
      height: 416px;
    }
    .two-items {
      width: 1022px;
      display: flex;
      justify-content: space-around;
      .items {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__img {
          width: 78px;
          height: 95px;
        }
        &__name {
          margin: 8px 0 16px;
          font-size: 16px;
          line-height: 1.5em;
          font-weight: bold;
          color: #000;
        }
        &__describe {
          width: 304px;
          font-size: 14px;
          line-height: 1.5em;
          color: #000;
        }
      }
    }
    .action {
      width: 100%;
      display: flex;
      justify-content: space-around;
      &__img {
        width: 400px;
        height: 250px;
      }
    }
  }
}
</style>
