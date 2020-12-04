<template>
  <div class="sign">
    <div class="top">
      <div class="imte__bag">Account center</div>
      <div class="imte__min">账户中心</div>
    </div>
    <div class="content">
      <div class="content__title">
        <span
          :class="selectedNav === 'signIn' ? 'selected' : ''"
          @click="handleChangeNav('signIn')"
        >登录账户</span>
        <span
          :class="selectedNav === 'signUp' ? 'selected' : ''"
          @click="handleChangeNav('signUp')"
        >注册账户</span>
      </div>
      <div
        v-if="selectedNav === 'signIn'"
        class="sign-in"
      >
        <Form
          ref="signInForm"
          :model="signInData"
          :rules="signInRules"
        >
          <FormItem prop="inUser">
            <i-input
              type="text"
              v-model="signInData.inUser"
              placeholder="请输入您的手机号"
              clearable
              prefix="ios-person-outline"
            />
          </FormItem>
          <FormItem prop="inPassword">
            <i-input
              type="password"
              password
              v-model="signInData.inPassword"
              placeholder="请输入您的密码"
              clearable
              prefix="ios-lock-outline"
            />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              long
              @click="handleSignInSubmit('signInForm')"
            >登录</Button>
          </FormItem>
          <FormItem>
            <div @click="forgetPassword">忘记密码?</div>
          </FormItem>
        </Form>
      </div>
      <div
        v-if="selectedNav === 'signUp'"
        class="sign-up"
      >
        <Form
          ref="signUpForm"
          :model="signUpData"
          :rules="signUpRules"
        >
          <FormItem prop="user">
            <i-input
              type="text"
              v-model="signUpData.user"
              placeholder="请输入您的手机号"
              clearable
              prefix="ios-person-outline"
            />
          </FormItem>
          <FormItem prop="verCode">
            <div class="code-box">
              <i-input
                type="text"
                v-model="signUpData.verCode"
                placeholder="验证码"
                clearable
                style="width: 200px"
              />
              <Button
                :type="loading ? 'default': 'primary'"
                @click="handleSendTo"
              >
                {{ loading ? `${count}s后再次获取` : '获取验证码' }}
              </Button>
            </div>
          </FormItem>
          <FormItem prop="password">
            <i-input
              type="password"
              password
              v-model="signUpData.password"
              placeholder="请输入您的密码"
              clearable
              prefix="ios-lock-outline"
            />
          </FormItem>
          <FormItem>
            <Checkbox v-model="signUpData.isRead">
              我已阅读并同意
            </Checkbox>
            <span
              class="blue-font"
              @click="handleLinkTo"
            >《华建工用户协议及隐私政策》</span>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              long
              @click="handleSignUpSubmit('signUpForm')"
            >注册</Button>
          </FormItem>
        </Form>
      </div>
    </div>
    <Modal
      v-model="isReadModal"
      ok-text="同意"
      @on-ok="handleChangeRead"
      class="modal"
    >
      <p
        slot="header"
        style="color:#1677FF;text-align:center"
      >
        <Icon type="ios-information-circle"></Icon>
        <span>注册提示</span>
      </p>
      <p>如果您拒绝接受<span
          class="blue-font"
          @click="handleLinkTo"
        >《华建工用户协议及隐私政策》</span>，将无法继续注册。</p>
      <p>是否同意<span
          class="blue-font"
          @click="handleLinkTo"
        >《华建工用户协议及隐私政策》</span>？</p>
    </Modal>
  </div>
</template>
<script>
import { SignIn, getVerrificationCode, createRegister } from 'api/index'
import { AESEncrypt } from 'common/tool.js'
export default {
  name: 'sign',
  data () {
    return {
      selectedNav: 'signIn',
      // 登录表单
      signInData: {
        inUser: '',
        inPassword: ''
      },
      signInRules: {
        inUser: { required: true, message: '请输入您的手机号', trigger: 'blur' },
        inPassword: { required: true, message: '请输入您的密码', trigger: 'blur' }
      },
      // 注册表单
      signUpData: {
        user: '',
        verCode: '',
        password: '',
        isRead: true
      },
      signUpRules: {
        user: { required: true, message: '请输入您的手机号', trigger: 'blur' },
        verCode: { required: true, message: '请输入验证码', trigger: 'blur' },
        password: { required: true, message: '请输入您的密码', trigger: 'blur' }
      },
      // 获取验证码
      loading: false,
      timer: null,
      count: 0,
      isReadModal: false
    }
  },
  created () {
    if (this.$route.query.type === 'register') {
      this.selectedNav = 'signUp'
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
  methods: {
    handleChangeNav (name) {
      this.selectedNav = name
    },
    // 忘记密码
    forgetPassword () {
      this.$router.push({
        path: '/forget_password'
      })
    },
    // 登录提交
    handleSignInSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          const tempPwd = AESEncrypt(this.signInData.inPassword)
          SignIn(this.signInData.inUser, tempPwd).then(res => {
            if (res.code === 200) {
              this.$Message.success('登录成功!')
              window.localStorage.setItem('isLogin', true)
              this.$emit('changeLogin', 'login')
              this.$emit('getHeadImg', res.data.user.pic)
            }
          })
        } else {
          this.$Message.error('请输入完整信息进行登录。')
        }
      })
    },
    // 注册提交
    handleSignUpSubmit (name) {
      if (!this.signUpData.isRead) {
        this.isReadModal = true
        return
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          const tempPwd = AESEncrypt(this.signUpData.password)
          createRegister(this.signUpData.verCode, this.signUpData.user, tempPwd).then(res => {
            if (res.code === 200) {
              this.$Message.success('注册成功!')
              SignIn(this.signUpData.user, tempPwd).then(res => {
                if (res.code === 200) {
                  window.localStorage.setItem('isLogin', true)
                  this.$emit('changeLogin', 'register')
                  this.$emit('getHeadImg', res.data.user.pic)
                }
              })
            }
          })
        } else {
          this.$Message.error('请输入完整信息进行注册。')
        }
      })
    },
    // 勾选协议
    handleChangeRead () {
      this.signUpData.isRead = true
    },
    // 打开协议
    handleLinkTo () {
      const { href } = this.$router.resolve({
        path: '/agreement'
      })
      window.open(href, '_blank')
    },
    // 发送验证码
    handleSendTo () {
      if (this.loading) {
        return
      }
      const userPhone = this.signUpData.user.trim()
      if (!userPhone) {
        this.$Message.error('请输入注册手机号')
        return
      }
      const reg = /^1[0-9]{10}/
      if (reg.test(userPhone)) {
        getVerrificationCode(userPhone).then(res => {
          if (res.code === 200) {
            this.loading = true
            this.count = 60
            this.timer = setInterval(() => {
              this.count--
              if (this.count <= 0) {
                this.loading = false
                clearInterval(this.timer)
                this.timer = null
              }
            }, 1000)
          }
        })
      } else {
        this.$Message.error('请输入合法的手机号')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.sign {
  .top {
    width: 100%;
    height: 280px;
    background: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/user_bg.png") center center no-repeat;
    background-size: 100% 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    padding-top: 54px;
    padding-left: 240px;
    font-weight: bold;
    color: #fff;
    .imte__bag {
      font-size: 40px;
      margin-bottom: 32px;
    }

    .imte__min {
      font-size: 24px;
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
    width: 344px;
    height: 500px;
    margin: 0 auto;
    &__title {
      width: 260px;
      margin: 0 auto;
      padding: 48px 0 56px;
      font-size: 16px;
      line-height: 1.5em;
      color: #000;
      span {
        cursor: pointer;
        padding: 8px 32px;
      }
      span ~ span {
        border-left: 1px solid #979797;
      }
      .selected {
        position: relative;
      }
      .selected::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 64px;
        height: 2px;
        background-color: #1677ff;
      }
    }
    .sign-in,
    .sign-up {
      transition: all 0.3s ease-out;
      .blue-font {
        cursor: pointer;
        color: #0091ff;
      }
      .code-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
.modal {
  .blue-font {
    cursor: pointer;
    color: #0091ff;
  }
}
</style>
