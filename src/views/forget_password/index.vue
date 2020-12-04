<template>
  <div class="forget_password">
    <div class="breadImg">
      <div class="imte__bag">Account center</div>
      <div class="imte__min">账户中心</div>
    </div>
    <div class="contentBox">
      <div class="title__box">
        <h2>修改密码</h2>
      </div>
      <div class="lis__box">
        <div class="password">
          <SetPassword :type='type'></SetPassword>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forget_password',
  data () {
    return {
      type: '0'
    }
  },
  created () {
    // this.init()
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.forget_password {
  .breadImg {
    width: 100%;
    height: 280px;
    background-image: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/user_bg.png");
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
      text-align: center;
      //   display: flex;
      height: 40px;
      margin-top: 32px;
      color: #000;
    }
    .lis__box {
      .password {
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>
