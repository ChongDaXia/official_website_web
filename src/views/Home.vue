<template>
  <div class="home">
    <!-- 首页导航 -->
    <header
      v-if="isHome"
      class="home-top"
    >
      <!-- 轮播图 -->
      <Carousel
        autoplay
        :autoplay-speed=5000
        loop
        class="carousel"
      >
        <CarouselItem>
          <div class="item1">
            <div class="item1__title">BIMPOP</div>
            <div class="item1__sub">立足于工程建筑行业的全方位一体化智能管理平台</div>
            <div class="item1__des">BIMPOP系列产品是由广州华建工智慧科技有限公司研发的，集PC网页端、PC桌面端、移动端、工地智能硬件四位一体的智能化管理平台，旨在运用云计算、AI人脸识别、大数据管理等新技术，实现对工程项目的进度管理、三维模型浏览查看、工人管理、工作量与产值管理等全方位管理，响应国家“新基建”政策，推动建筑行业大数据积累，助力建筑领域的信息化数字化进程。</div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="item2">
            <div class="item2__title">Using Intelligent Project Management</div>
            <div class="item2__title">To Make Builders More Efficient</div>
            <div class="item2__des">用<span>智慧工程</span>管理让建筑人<span>更高效</span></div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="item3">
            <div class="item3__title">用智慧工程管理让建筑人更高效</div>
            <div class="item3__des">Using Intelligent Project Management</div>
            <div class="item3__des">To Make Builders More Efficient</div>
          </div>
        </CarouselItem>
      </Carousel>
      <div class="header header--home">
        <div class="header__logo">
          <img
            :src="require('../assets/images/hjgtextlogo.png')"
            width="100%"
            height="100%"
          />
        </div>
        <div class="header__nav">
          <div
            v-for="item in navList"
            :key="item.key"
            :class="selectedNav === item.key ? 'items selected' : 'items'"
          >
            <Dropdown
              v-if="item.title === '产品中心'"
              @on-click="handleSelectedProduce">
              <a href="javascript:void(0)" style="color: inherit">
                {{ item.title }}
              </a>
              <DropdownMenu slot="list">
                <DropdownItem name="bimManage">BIMPOP一体化协同管理</DropdownItem>
                <DropdownItem name="smartSite">智慧工地解决方案</DropdownItem>
                <DropdownItem name="cloudLibrary">云族库</DropdownItem>
                <DropdownItem name="workerManage">工人实名制管理</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <span v-else @click="handleLinkTo(item.key)">
              {{ item.title }}
            </span>
          </div>
          <Dropdown
            v-if="isLogin"
            @on-click="handleSelected"
          >
            <a href="javascript:void(0)">
              <Icon
                v-if="!headImg"
                :class="selectedNav === 'sign' ? 'items selected' : 'items'"
                type="md-contact"
              />
              <img
                v-if="headImg"
                class="headImg"
                :src="headImg"
                alt=""
              >
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="userInfo">用户信息</DropdownItem>
              <DropdownItem name="changePwd">修改密码</DropdownItem>
              <DropdownItem name="logOut">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
    <!-- 其他页面导航 -->
    <header
      v-else
      class="header header--other"
    >
      <div class="header__logo">
        <img
          :src="require('../assets/images/hjgtextlogo.png')"
          width="100%"
          height="100%"
        />
      </div>
      <div class="header__nav">
        <div
          v-for="item in navList"
          :key="item.key"
          :class="selectedNav === item.key ? 'items selected' : 'items'"
        >
          <Dropdown
            v-if="item.title === '产品中心'"
            @on-click="handleSelectedProduce">
            <a href="javascript:void(0)" style="color: inherit">
              {{ item.title }}
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="bimManage">BIMPOP一体化协同管理</DropdownItem>
              <DropdownItem name="smartSite">智慧工地解决方案</DropdownItem>
              <DropdownItem name="cloudLibrary">云族库</DropdownItem>
              <DropdownItem name="workerManage">工人实名制管理</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <span v-else @click="handleLinkTo(item.key)">
            {{ item.title }}
          </span>
        </div>
        <Dropdown
          v-if="isLogin"
          @on-click="handleSelected"
        >
          <a href="javascript:void(0)">
            <Icon
              v-if="!headImg"
              :class="selectedNav === 'sign' ? 'items selected' : 'items'"
              type="md-contact"
            />
            <img
              v-if="headImg"
              class="headImg"
              :src="headImg"
              alt=""
            >
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="userInfo">用户信息</DropdownItem>
            <DropdownItem name="changePwd">修改密码</DropdownItem>
            <DropdownItem name="logOut">退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
    <Modal
      v-model="signOutModal"
      ok-text="退出"
      @on-ok="handleSignOut"
      width="360"
    >
      <p
        slot="header"
        style="color:#1677FF;text-align:center"
      >
        <Icon type="ios-information-circle"></Icon>
        <span>登出提示</span>
      </p>
      <p>是否确认退出当前用户？</p>
    </Modal>
    <router-view
      class="content"
      @changeLogin="hangdleChangeLogin"
      @getHeadImg="getHeadImg"
      @changeProduce="handleLinkTo"
    />
    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer__nav">
        <div>
          <div class="title">产品中心</div>
          <div class="items" @click="handleSelectedProduce('bimManage')">BIMPOP一体化协同管理</div>
          <div class="items" @click="handleSelectedProduce('smartSite')">智慧工地解决方案</div>
          <div class="items" @click="handleSelectedProduce('cloudLibrary')">云族库</div>
          <div class="items" @click="handleSelectedProduce('workerManage')">工人实名制管理</div>
        </div>
        <div>
          <div class="title">新闻资讯</div>
          <div
            class="items"
            @click="footLinkTo('news_information', '0')"
          >公司动态</div>
          <div
            class="items"
            @click="footLinkTo('news_information', '1')"
          >行业资讯</div>
        </div>
        <div>
          <div class="title">关于我们</div>
          <div class="items" @click="handleLinkTo('about_us', 'introduce')">公司简介</div>
          <div class="items" @click="handleLinkTo('about_us', 'mission')">我们的使命</div>
          <div class="items" @click="handleLinkTo('about_us', 'productView')">我们的产品观</div>
          <div class="items" @click="handleLinkTo('about_us', 'valueView')">我们的价值观</div>
        </div>
        <div class="image-box">
          <div class="image">
            <img
              :src="require('../assets/images/qrcode.png')"
              width="100%"
              height="100%"
            />
          </div>
          <div class="title">关注华建工微信公众号了解更多</div>
        </div>
        <div>
          <div class="title">加入我们</div>
          <div
            class="items"
            @click="footLinkTo('join_us', '0')"
          >社会招聘</div>
          <div
            class="items"
            @click="footLinkTo('join_us', '1')"
          >校园招聘</div>
          <div
            class="items"
            @click="footLinkTo('join_us', '2')"
          >实习招聘</div>
        </div>
        <div>
          <div class="title">友情链接</div>
          <div
            class="items"
            @click="openUrl('https://www.ssijri.com/')"
          >中新国际联合研究院</div>
          <div
            class="items"
            @click="openUrl('http://www.rockone.com.cn/')"
          >澳门建信集团</div>
        </div>
        <div>
          <div class="title">联系我们</div>
          <div
            class="items"
            @click="footLinkTo('contact_us', '0')"
          >联系方式</div>
          <div
            class="items"
            @click="footLinkTo('contact_us', '1')"
          >在线留言</div>
        </div>
      </div>
      <div class="footer__des">
        <pre>公司总部：广州市黄埔区九龙镇知识城腾飞园B-1019室  研发中心：广州市天河区兴民路222号天盈广场西塔27F  联系电话：020 - 89856989</pre>
        <pre>© 2018-2020 广州华建工智慧科技有限公司  粤ICP备19012908号</pre>
      </div>
    </footer>
  </div>
</template>

<script>
import { removeToken, removeUserInfo, getUserInfo } from 'common/user'
export default {
  name: 'Home',
  data () {
    return {
      headImg: '',
      isHome: false,
      selectedNav: '',
      navList: [
        { key: 'main_home', title: '首页' },
        { key: 'product_center', title: '产品中心' },
        { key: 'news_information', title: '新闻资讯' },
        { key: 'about_us', title: '关于我们' },
        { key: 'join_us', title: '加入我们' }
      ],
      isLogin: false,
      signOutModal: false,
      produceList: ['bim_manage', 'smart_site', 'cloud_library', 'worker_manage']
    }
  },
  created () {
    // var user = JSON.parse(getUserInfo())
    if (getUserInfo()) {
      this.headImg = getUserInfo().userInfo.pic
    } else {
      this.headImg = ''
    }
    if (this.$route.name === 'Home' || this.$route.name === 'main_home') {
      this.handleLinkTo('main_home')
    }
    const temp = window.localStorage.getItem('isLogin')
    if (temp === 'true') {
      this.isLogin = true
    }
    if (temp === 'false' || temp === null) {
      this.isLogin = false
      const item = { key: 'sign', title: '登录|注册' }
      this.navList.push(item)
    }
  },
  methods: {
    // 切换菜单
    handleLinkTo (name, tab) {
      this.isHome = name === 'main_home'
      if (parseInt(this.produceList.indexOf(name)) === -1) {
        this.selectedNav = name
      } else {
        this.selectedNav = 'product_center'
      }
      if (tab) {
        this.$router.push({
          name: `${name}`,
          params: {
            scroll: tab
          }
        })
      } else {
        this.$router.push({
          name: `${name}`
        })
      }
    },
    // 底部跳转
    footLinkTo (name, type) {
      this.isHome = name === 'main_home'
      this.selectedNav = name
      if (type) {
        this.$router.push({
          name: `${name}`,
          query: {
            type: type
          }
        })
      } else {
        this.$router.push({
          name: `${name}`
        })
      }
    },
    // 外部链接
    openUrl (url) {
      window.open(url, '_blank')
    },
    handleSelected (name) {
      switch (name) {
        case 'userInfo':
          this.handleLinkTo('user_information')
          break
        case 'changePwd':
          this.handleLinkTo('modify_password')
          break
        case 'logOut':
          this.signOutModal = true
          break
      }
    },
    // 产品中心
    handleSelectedProduce (name) {
      switch (name) {
        case 'bimManage':
          this.handleLinkTo('bim_manage')
          break
        case 'smartSite':
          this.handleLinkTo('smart_site')
          break
        case 'cloudLibrary':
          this.handleLinkTo('cloud_library')
          break
        case 'workerManage':
          this.handleLinkTo('worker_manage')
          break
      }
    },
    handleSignOut () {
      removeToken()
      removeUserInfo()
      window.localStorage.setItem('isLogin', false)
      this.isLogin = false
      const item = { key: 'sign', title: '登录|注册' }
      this.navList.push(item)
      this.handleLinkTo('main_home')
      this.headImg = ''
    },
    hangdleChangeLogin (val) {
      switch (val) {
        case 'login': // 登录
          this.isLogin = true
          this.navList.pop()
          this.handleLinkTo('main_home')
          break
        case 'register': // 注册
          this.isLogin = true
          this.navList.pop()
          this.handleLinkTo('user_information')
          break
        case 'updateUser': // 完善用户信息
          this.isLogin = true
          this.navList.pop()
          break
      }
    },
    getHeadImg (img) {
      this.headImg = ''
      setTimeout(() => {
        this.headImg = img
      }, 100)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  min-height: 100%;
  // display: flex;
  // flex-direction: column;
  .home-top {
    .carousel {
      .item1 {
        width: 100%;
        height: 1080px;
        background: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/carousel1.png") center center
          no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 160px;
        color: #fff;
        &__title {
          position: relative;
          font-size: 36px;
          line-height: 1.5em;
          font-weight: 400;
        }
        &__title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 80px;
          height: 8px;
          background-color: #FAAD14;
        }
        &__sub {
          margin: 32px 0;
          font-size: 24px;
          line-height: 1.5em;
        }
        &__des {
          width: 670px;
          font-size: 14px;
          line-height: 2em;
        }
      }
      .item2 {
        width: 100%;
        height: 1080px;
        background: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/carousel2.png") center center
          no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        &__title {
          font-size: 30px;
          line-height: 1.5em;
          font-weight: 400;
          font-family: SourceHanSansCN-Bold, SourceHanSansCN;
          letter-spacing: 3px;
        }
        &__des {
          font-size: 24px;
          line-height: 1.5em;
        }
        &__des span {
          color: #FAAD14;
        }
      }
      .item3 {
        width: 100%;
        height: 1080px;
        background: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/carousel3.png") center center
          no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        &__title {
          font-size: 48px;
          line-height: 1.5em;
          font-weight: 400;
          margin-bottom: 48px;
        }
        &__des {
          font-size: 16px;
          line-height: 1.5em;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          letter-spacing: 3px;
        }
      }
    }
    .header--home {
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .header {
    width: 100%;
    min-width: 1300px;
    height: 128px;
    color: #fff;
    padding: 0 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      width: 400px;
      // height: 56px;
    }
    &__nav {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      line-height: 1.5em;
      font-weight: 400;
      color: #818181;
      // text-shadow: 5px 5px 5px #212124;
      .items {
        cursor: pointer;
        padding: 0 16px;
      }
      /deep/.ivu-icon {
        font-size: 28px;
        line-height: 1em;
        // vertical-align: -1em;
      }
      .selected {
        color: #fff;
      }
      a {
        color: #818181;
      }
      .headImg {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-left: 8px;
      }
    }
  }
  .header--other {
    background-color: #212124;
  }
  .content {
    flex: 1;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    background-color: #2e2e30;
    &__nav {
      width: 70%;
      padding: 48px;
      display: flex;
      justify-content: space-between;
      .title {
        margin-bottom: 16px;
        font-size: 16px;
        line-height: 1.5em;
        font-weight: bold;
      }
      .items {
        font-size: 12px;
        line-height: 2.5em;
        cursor: pointer;
      }
      .image-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        .image {
          width: 144px;
          height: 144px;
          padding: 10px;
          background-color: #fff;
          border-radius: 32px;
          margin-bottom: 16px;
        }
      }
    }
    &__des {
      width: 100%;
      height: 88px;
      background-color: #212124;
      padding-top: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      line-height: 1.5em;
      pre {
        margin: 0;
      }
    }
  }
}
</style>
