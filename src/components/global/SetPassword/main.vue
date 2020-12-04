<template>
  <div class="SetPassword">
    <div class="stepsBox">
      <!-- 步骤名 -->
      <div class="steps__name">
        <div
          class="name"
          :class="stepsType==='1'? 'color--000':''"
        >{{type === '1'? '验证密码':'获取验证码'}}</div>
        <div
          class="name"
          :class="stepsType==='2'? 'color--000':''"
        >重置密码</div>
        <div
          class="name"
          :class="stepsType==='3'? 'color--000':''"
        >完成</div>
      </div>
      <!-- 步骤条 -->
      <div class="steps__strip">
        <div class="stripBox">
          <div
            class="strip mr-1"
            :class="stepsType==='1'? 'bg--7FF':''"
          ></div>
          <div
            class="num"
            :class="stepsType==='1'? 'bg--7FF':''"
          >1</div>
          <div
            class="strip ml-1"
            :class="stepsType==='1'? 'bg--7FF':''"
          ></div>
        </div>
        <div class="stripBox">
          <div
            class="strip mr-1"
            :class="stepsType==='2'? 'bg--7FF':''"
          ></div>
          <div
            class="num"
            :class="stepsType==='2'? 'bg--7FF':''"
          >2</div>
          <div
            class="strip ml-1"
            :class="stepsType==='2'? 'bg--7FF':''"
          ></div>
        </div>
        <div class="stripBox">
          <div
            class="strip mr-1"
            :class="stepsType==='3'? 'bg--7FF':''"
          ></div>
          <div
            class="num"
            :class="stepsType==='3'? 'bg--7FF':''"
          >3</div>
          <div
            class="strip ml-1"
            :class="stepsType==='3'? 'bg--7FF':''"
          ></div>
        </div>
      </div>
    </div>
    <!-- 相应的 步骤对应的表单 -->
    <div class="formBox">
      <div
        class="text"
        v-if="stepsType!=='3' && type === '1'"
      >
        <span class="color--000">您正在重置密码账户为：</span>
        <span class="color--020">{{ phone }}</span>
      </div>
      <div
        class="text"
        v-if="stepsType==='3'"
      >
        <span class="color--020">密码重置成功，请牢记和妥善保管您的新密码</span>
      </div>
      <!-- 第一步 -->
      <div
        class="one form"
        v-if="stepsType==='1'"
      >
        <div class="input">
          <Input
            class="mb110"
            v-if="type==='1'"
            type="password"
            v-model="oneData.password"
            clearable
            prefix="ios-unlock-outline"
            placeholder="请输入您的原始密码"
            style="width: 347px"
          />
          <div
            class="mb20"
            v-if="type==='0'"
          >
            <Input
              type="text"
              v-model="oneData.phone"
              clearable
              placeholder="请输入手机号"
              style="width: 347px"
            />
          </div>
          <div>
            <Input
              class="mb45"
              v-if="type==='0'"
              type="text"
              v-model="oneData.code"
              clearable
              placeholder="验证码"
              style="width: 207px"
            />
            <Button
              v-if="type==='0'"
              class="btn96 mb45"
              :type="isCode? 'primary':'default'"
              @click="getCaptcha"
            >{{ isCode? '获取验证码' : sum + '后再次获取'}}</Button>
          </div>
        </div>
        <Button
          class="btn347"
          type="primary"
          @click="nextStep('2')"
        >下一步</Button>
      </div>
      <!-- 第二步 -->
      <div
        class="tow form"
        v-if="stepsType==='2'"
      >
        <div class="input mb20">
          <div class="passwordName">设置密码：</div>
          <Input
            type="password"
            clearable
            v-model="towData.password"
            placeholder="请输入6～12位数字或字母"
            style="width: 280px"
          />
        </div>
        <div class="input mb45">
          <div class="passwordName">确认密码：</div>
          <Input
            type="password"
            clearable
            v-model="towData.confirmPassword"
            placeholder="请再次输入您的密码"
            style="width: 280px"
          />
        </div>
        <Button
          class="btn347"
          type="primary"
          @click="nextStep('3')"
        >确认修改</Button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  VerifyPassword, ModifyPassword, VerificationCode, VerifySms, ForgetPassword
} from '../../../api/index'
import { AESEncrypt } from '../../../common/tool'
import { getUserInfo } from '../../../common/user'
export default {
  name: 'SetPassword',
  props: ['type'],
  computed: {},
  data () {
    return {
      stepsType: '1',
      code: '',
      isCode: true,
      sum: 60,
      phone: '',
      oneData: {
        password: '',
        phone: '',
        code: ''
      },
      towData: {
        password: '',
        confirmPassword: ''
      }
    }
  },
  created () {
    if (getUserInfo()) {
      this.phone = getUserInfo().userInfo.phone
    } else {
      this.phone = ''
    }
  },
  methods: {
    // 获取验证码
    getCaptcha () {
      if (!this.oneData.phone) return
      VerificationCode(this.oneData.phone).then((res) => {
        if (res.flag) {
          this.isCode = false
          // this.code = res.data
          this.sum = 60
          this.$Message.success(res.message)
          this.timer = setInterval(() => {
            this.sum--
            if (this.sum <= 0) {
              this.isCode = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      })
    },
    // 步骤验证
    nextStep (index) {
      if (this.type === '1') { // 修改密码
        if (this.stepsType === '1') {
          if (this.oneData.password === '') {
            this.$Message.error('请输入原始密码！')
            return
          }
          var data = {
            password: AESEncrypt(this.oneData.password)
          }
          VerifyPassword(data).then((res) => {
            if (res.flag) {
              console.log(res)
              this.code = res.data
              this.stepsType = index
              this.$Message.success(res.message)
            } else {
              this.code = ''
            }
          })
        }
      } else if (this.type === '0') { // 忘记密码
        if (this.stepsType === '1') {
          if (!this.oneData.phone) {
            this.$Message.error('请输入手机号！')
            return
          } else if (!this.oneData.code) {
            this.$Message.error('请输入手机号！')
            return
          }
          // 校验短信验证码
          VerifySms(this.oneData.phone, this.oneData.code).then((res) => {
            if (res.flag) {
              this.stepsType = index
              this.code = res.data
              this.$Message.success(res.message)
            } else {
              this.code = ''
            }
          })
        }
      }
      if (this.stepsType === '2') {
        if (!this.code) {
          this.stepsType = '1'
          return
        }
        if (!this.towData.password) {
          this.$Message.error('请输入新的密码！')
          return
        } else if (!this.towData.confirmPassword) {
          this.$Message.error('请再次输入密码！')
          return
        } else if (this.towData.password !== this.towData.confirmPassword) {
          this.$Message.error('两次密码不同，请重新输入！')
          return
        }
        var data2 = {
          password: AESEncrypt(this.towData.password)
        }
        if (this.type === '1') {
          ModifyPassword(data2, this.code).then((res) => {
            if (res.flag) {
              this.stepsType = index
              this.$Message.success(res.message)
            }
          })
        } else if (this.type === '0') {
          data2.phone = this.oneData.phone
          ForgetPassword(data2, this.code).then((res) => {
            if (res.flag) {
              this.stepsType = index
              this.$Message.success(res.message)
            }
          })
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.SetPassword {
  width: 822px;
  text-align: center;
  margin: 0 auto;
  .stepsBox {
    font-size: 16px;
    margin-top: 16px;
    .steps__name {
      display: flex;
      .name {
        width: 274px;
        font-weight: bold;
        height: 24px;
        line-height: 24px;
        color: #d8d8d8;
      }
      .color--000 {
        color: #000;
      }
    }
    .steps__strip {
      display: flex;
      .stripBox {
        display: flex;
        .strip {
          height: 14px;
          width: 120px;
          background: #d8d8d8;
          margin-top: 12px;
        }
        .ml-1 {
          margin-left: -2px;
        }
        .mr-1 {
          margin-right: -2px;
        }
        .num {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          text-align: center;
          line-height: 38px;
          color: #fff;
          background: #d8d8d8;
        }
        .bg--7FF {
          background: #1677ff;
        }
      }
    }
  }
  .formBox {
    margin-top: 56px;
    margin-bottom: 260px;
    .text {
      font-size: 18px;
      font-weight: 500;
      .color--000 {
        color: #000;
      }
      .color--020 {
        color: #e02020;
      }
    }
    .one {
      .input {
        // margin-bottom: 110px;
      }
      .mb110 {
        margin-bottom: 110px;
      }
      .mb20 {
        margin-bottom: 20px;
      }
      .mb45 {
        margin-bottom: 45px;
      }
    }
    .tow {
      .mb20 {
        margin-bottom: 20px;
      }
      .mb45 {
        margin-bottom: 45px;
      }
    }
    .form {
      margin-top: 40px;
      .input {
        .passwordName {
          // background: #f5f5f5;
          font-size: 14px;
          color: #000;
          height: 45px;
          width: 70px;
          display: inline-block;
          line-height: 45px;
          text-align: right;
        }
        // /deep/ .ivu-input {
        //   height: 45px;
        //   line-height: 45px;
        //   background: #f5f5f5;
        //   color: #000;
        //   border: none;
        //   border-radius: 2px;
        // }
        // /deep/ .ivu-input:focus {
        //   border-color: none;
        //   outline: 0;
        //   box-shadow: none;
        // }
        // /deep/ .ivu-input-prefix,
        // .ivu-input-suffix {
        //   top: 6px;
        // }
      }
      .btn96 {
        width: 106px;
        margin-left: 30px;
      }
      .btn347 {
        width: 347px;
        // height: 45px;
      }
    }
  }
}
</style>
