<template>
  <div class="about_us">
    <div class="top">
      <div class="top__large">ABOUT</div>
      <div class="top__small">关于我们</div>
    </div>
    <div class="content">
      <div class="title" id="introduce">华建工简介</div>
      <div class="sub-title">Company Profile</div>
      <div class="image">
        <img src="https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/aboutusDes1.png" width="100%" height="100%" />
      </div>
      <div class="describe">
        是由华南理工大学BIM实验室核心成员于2017年9月创建 ， 由中新国际联合研究院孵化， 是一家集软件开发、 技术咨询及技术转让为一体的综合性互联网公司。 公司主要面向建筑企业提供定制化的信息化解决方案， 依托中新国际联合研究院和澳门建信集团的支持， 掌握了一系列核心技术及对于建筑行业业务流程的深刻解。 目前，公司形成了 “软件+咨询” 的双增值模式， 拥有多款建筑信息化产品。
      </div>
      <div class="title" id="mission">我们的使命</div>
      <div class="sub-title">Our Mission</div>
      <div class="describe">
        将BIM与土木工程信息化的应用价值最大化，站在信息科技、土木工程与用户体验设计的交叉点上，为社会提供优异的产品、可靠的质量、优越的终生效能费用比和有效的服务，满足客户日益增长的需要。
      </div>
      <div class="title" id="productView">我们的产品观</div>
      <div class="sub-title">Product idea</div>
      <div class="describe">
        <span>安全稳定</span>
        <span>立足工程</span>
        <span>价值导向</span>
        <span>互联互通</span>
        <span>简洁易用</span>
      </div>
      <div class="title" id="valueView">我们的价值观</div>
      <div class="sub-title">Our values</div>
      <div class="imageList">
        <img :src="require('../../assets/images/aboutusDes2.png')" />
        <img :src="require('../../assets/images/aboutusDes3.png')" />
        <img :src="require('../../assets/images/aboutusDes4.png')" />
        <img :src="require('../../assets/images/aboutusDes5.png')" />
      </div>
      <div class="describeList">
        <div>
          <div>客户至上：</div>
          <div>专注<span>，每一个人做的每一件事都是在服务客户；</span></div>
          <div>专业<span>，深耕建筑行业，挖掘行业需求，提出创新性的解决方案；</span></div>
          <div>用心<span>，关注客户需求点，帮助客户成长，始终为客户创造价值；</span></div>
          <div>极致<span>，想方设法满足客户需求，为此可以调度公司一切资源；</span></div>
          <div>服务<span>，Always smile, always polite, always online</span></div>
          <div><span>0/100/120原则；</span></div>
        </div>
        <div>
          <div>精诚合作：</div>
          <div>积极<span>，决策前积极发表个人意见，充分参与团队讨论；</span></div>
          <div>服从<span>，决策后，无论个人是否有异议，必须从行动上完全予以支持 ；</span></div>
          <div>协作<span>，对于公司领导、同事，以及客户提出的合理诉求，即被要求人及其所在部门工作职责范围内相关的合理诉求，若没有事实或数据能够证明他人诉求是不合理的，不得拒绝且必须协同执行。</span></div>
          <div>听取<span>，对于涉及两个“凡是”的要求，应认真对待，不允许随意说No。即“凡是涉及客户体验改进的要求，凡是涉及公司未来业务发展的要求”。</span></div>
        </div>
        <div>
          <div>敬业乐业：</div>
          <div>负责<span>，始终保持认真负责的工作态度，对客户负责，对产品负责；</span></div>
          <div>学习<span>，保持学习；</span></div>
          <div>成就<span>，在自己的专业有所建树；</span></div>
          <div>严谨<span>，严谨地对待工作，没有因工作失职而造成的重复错误 ；</span></div>
        </div>
        <div>
          <div>坦诚相待：</div>
          <div>分享<span>，乐于分享自己的看法；</span></div>
          <div>反思<span>，客观地看待自己的工作并加以改进；</span></div>
          <div>批评<span>，对于工作，敢于批评与自我批评</span></div>
          <div>诚信<span>，诚信正直；</span></div>
          <div>承诺<span>，说到做到；</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about_us',
  mounted () {
    if (this.$route.params.scroll) {
      const value = this.$route.params.scroll
      const srcollTab = document.getElementById(value)
      if (srcollTab) {
        srcollTab.scrollIntoView()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.about_us {
  .top {
    width: 100%;
    height: 280px;
    background: url('https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/aboutus.png') center center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: bold;
    color: #fff;
    padding-left: 210px;
    &__large {
      font-size: 40px;
      line-height: 1.5em;
    }
    &__small {
      font-size: 24px;
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
    .sub-title {
      margin: 10px 0 32px;
      font-size: 12px;
      line-height: 1.5em;
      color: #6D7278;
    }
    .image {
      margin-bottom: 32px;
      width: 1022px;
      height: 360px;
    }
    .imageList {
      display: flex;
      justify-content: space-between;
    }
    .imageList img {
      width: 240px;
      height: 300px;
    }
    .describe {
      margin: 16px 0 24px;
      width: 1022px;
      font-size: 16px;
      line-height: 1.5em;
      color: #000;
      text-align: center;
    }
    .describe span {
      margin: 0 16px;
    }
    .describeList {
      margin-top: 48px;
      padding-left: 40px;
      width: 480px;
      height: 680px;
      border-left: 8px solid #144086;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 14px;
      line-height: 1.5em;
      color: #333;
      font-weight: bold;
    }
    .describeList span{
      font-weight: normal;
    }
  }
}
</style>
