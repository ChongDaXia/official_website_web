<template>
  <div class="user_information">
    <div class="breadImg">
      <div class="imte__bag">Account center</div>
      <div class="imte__min">账户中心</div>
    </div>
    <div class="contentBox">
      <div class="title__box">
        <h2>用户信息</h2>
      </div>
      <div class="lis__box">
        <div class="userForm">
          <Form
            class="formInline"
            ref="formInline"
            :model="formInline"
            label-position="right"
            :label-width="100"
          >
            <FormItem
              prop="petName"
              label="昵称:"
            >
              <Input
                clearable
                class="inputStyle"
                type="text"
                v-model="formInline.petName"
              />
            </FormItem>
            <FormItem
              prop="realName"
              label="姓名:"
            >
              <Input
                clearable
                class="inputStyle"
                type="text"
                v-model="formInline.realName"
              />
            </FormItem>
            <FormItem
              prop="phone"
              label="手机号:"
            >
              <Input
                clearable
                class="inputStyle"
                type="text"
                disabled
                v-model="formInline.phone"
              />
            </FormItem>
            <FormItem
              prop="sex"
              label="性别:"
            >
              <Select
                clearable
                v-model="formInline.sex"
              >
                <Option value="beijing">男</Option>
                <Option value="shanghai">女</Option>
              </Select>
            </FormItem>
            <FormItem
              prop="company"
              label="公司名称:"
            >
              <Input
                clearable
                class="inputStyle"
                type="text"
                v-model="formInline.company"
              />
            </FormItem>
            <FormItem
              prop="position"
              label="职位:"
            >
              <Input
                clearable
                class="inputStyle"
                type="text"
                v-model="formInline.position"
              />
            </FormItem>
            <FormItem
              prop="province"
              label="省份:"
            >
              <Select
                clearable
                placeholder="请选择省份"
                v-model="formInline.province"
                @on-change="getcityData"
              >
                <Option
                  v-for="item in provinceData"
                  :value="item.text"
                  :key="item.text"
                >{{ item.text }}</Option>
              </Select>
            </FormItem>
            <FormItem
              prop="region"
              label="地区:"
            >
              <Select
                clearable
                placeholder="请选择市区"
                v-model="formInline.region"
              >
                <Option
                  v-for="item in cityData"
                  :value="item.text"
                  :key="item.text"
                >{{ item.text }}</Option>
              </Select>
            </FormItem>
            <FormItem
              prop="mail"
              label="邮箱:"
            >
              <Input
                clearable
                class="inputStyle"
                type="text"
                v-model="formInline.mail"
              />
              <div class="registrationTime">
                <div class="name">注册时间:</div>
                <div>{{formInline.registerTime}}</div>
              </div>
              <div class="loginTime">
                <div class="name">上次登录时间:</div>
                <div>{{formInline.loginTime}}</div>
              </div>
            </FormItem>
            <FormItem label="用户头像:">
              <div class="headPortrait">
                <img
                  class="nullPortrait"
                  :src="!formInline.pic?  require('../../assets/images/null_head_portrait.png') : formInline.pic"
                  alt=""
                >
              </div>
              <!-- <Upload
                ref="upload"
                :show-upload-list="false"
                :before-upload="beforeUpload"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                multiple
                :action="api.HeadPortrait"
                accept="image/*"
                :headers="myHeaders"
                :data="uploadData"
                style="display: inline-block;"
              >
                <Button
                  class="btn143"
                  type="primary"
                >上传</Button>
              </Upload> -->
              <Button
                class="btn143"
                type="primary"
                @click="modal=true"
              >上传</Button>
            </FormItem>
            <FormItem>
              <Button
                class="btn174 mr--40px"
                @click="handleCancel"
              >取消</Button>
              <Button
                class="btn174"
                type="primary"
                @click="handleSubmit"
              >提交</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <UploadPic
      @getPic='getPic'
      @closeModal='closeModal'
      :modal='modal'
    ></UploadPic>
  </div>
</template>

<script>
import {
  getUser, ModifyUser
} from '../../api/index'
import addressData from '@/utils/addressData'
import api from '../../api/api'
import { setToken, getToken, setUserInfo, removeToken, removeUserInfo } from '../../common/user'
export default {
  name: 'user_information',
  data () {
    return {
      modal: false,
      url: document.URL,
      // 地区
      provinceData: addressData,
      // 上传头像
      api: api,
      cityData: [],
      // 上传头部
      myHeaders: {
        // token: JSON.parse(getToken()).token
      },
      // 上传参数
      uploadData: {
        img: ''
      },
      stagingData: '', // 备份用户信息
      formInline: {
        petName: '', // 昵称
        realName: '', // 姓名
        phone: '', // 手机号
        sex: '', // 性别
        company: '', // 公司
        position: '', // 职业
        province: '', // 省份
        region: '', // 地区
        mail: '', // 邮箱
        registerTime: '', // 注册时间
        loginTime: '', // 最近登录时间
        pic: '' // 头像
      }
    }
  },
  created () {
    this.getTokenData()
  },
  mounted () {
    this.myHeaders = {
      token: JSON.parse(getToken()).token
    }
  },
  methods: {
    closeModal () {
      this.modal = false
    },
    getPic (data) {
      this.formInline.pic = require('../../assets/images/null_head_portrait.png')
      // setTimeout(() => {
      const getTimestamp = new Date().getTime()
      this.formInline.pic = data + '?timestamp=' + getTimestamp
      this.$emit('getHeadImg', this.formInline.pic)
      // }, 500)
      this.modal = false
      // this.init()
    },
    // 验证url存不存在token
    getTokenData () {
      if (this.url.split('token=').length === 2) {
        removeToken()
        removeUserInfo()
        // 登录
        var url = this.url.split('token=')[1].replace(/%20/g, ' ')
        setToken({ token: url })
        getUser().then((res) => {
          if (res.flag) {
            this.formInline = res.data
            this.stagingData = JSON.stringify(res.data)
            if (this.formInline.province) {
              this.getcityData(this.formInline.province)
            }
            // 更改登录信息
            setUserInfo({ userInfo: res.data })
            window.localStorage.setItem('isLogin', true)
            this.$emit('changeLogin', 'updateUser')
            if (this.formInline.pic) {
              this.$emit('getHeadImg', this.formInline.pic)
            }
          } else {
            this.$router.push({
              name: 'sign'
            })
          }
        })
      } else if (getToken()) {
        getUser().then((res) => {
          if (res.flag) {
            this.formInline = res.data
            this.stagingData = JSON.stringify(res.data)
            if (this.formInline.province) {
              this.getcityData(this.formInline.province)
            }
          }
        })
      } else {
        this.$router.push({
          name: 'sign'
        })
      }
    },
    // 获取用户信息
    // init () {
    //   getUser().then((res) => {
    //     if (res.flag) {
    //       this.formInline = res.data
    //       this.stagingData = JSON.stringify(res.data)
    //       setUserInfo({ userInfo: res.data })
    //       window.localStorage.setItem('isLogin', true)
    //       this.$emit('changeLogin', 'updateUser')
    //       if (this.formInline.province) {
    //         this.getcityData(this.formInline.province)
    //       }
    //       if (this.formInline.pic) {
    //         this.$emit('getHeadImg', this.formInline.pic)
    //       }
    //     } else {
    //       this.$router.push({
    //         name: 'sign'
    //       })
    //     }
    //   })
    // },
    // 地区
    getcityData (val) {
      if (!val) {
        this.cityData = []
        this.formInline.region = null
      } else {
        for (var i = 0; i < this.provinceData.length; i++) {
          if (this.provinceData[i].text === val) {
            this.cityData = this.provinceData[i].children
          }
        }
      }
    },
    // 上传时
    beforeUpload (res) {
      this.uploadData = {
        img: res
      }
      const promise = new Promise((resolve) => {
        this.$nextTick(function () {
          resolve(true)
        })
      })
      return promise // 通过返回一个promis对象解决
    },
    // 上传格式验证失败时
    handleFormatError (file) {
      this.$Message.warning('头像仅支持jpg,jpeg,png格式！')
    },
    // 上传文件超出指定大小限制时
    handleMaxSize (file) {
      this.$Message.warning(file.name + '文件超过2M！')
    },
    // 上传成功时
    handleSuccess (res, file) {
      this.formInline.pic = ''
      setTimeout(() => {
        this.formInline.pic = res.data.pic
      }, 100)
      // this.init()
    },
    // 用户信息取消修改
    handleCancel () {
      this.formInline = JSON.parse(this.stagingData)
    },
    // 用户信息提交
    handleSubmit () {
      ModifyUser(this.formInline).then((res) => {
        if (res.flag) {
          getUser().then((res) => {
            if (res.flag) {
              this.formInline = res.data
              this.stagingData = JSON.stringify(res.data)
              if (this.formInline.province) {
                this.getcityData(this.formInline.province)
              }
            }
          })
          this.$Message.success(res.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
    .userForm {
      margin-top: 8px;
      .formInline {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        color: #000;
        .inputStyle {
          width: 296px;
        }
        /deep/ .ivu-form-item-label {
          color: #000;
        }
        /deep/ .ivu-input {
          color: #000;
        }
        /deep/ .ivu-select {
          width: 296px;
          text-align: left;
        }
        .registrationTime {
          margin-top: 12px;
          display: flex;
          height: 48px;
          line-height: 48px;
          .name {
            text-align: right;
            width: 100px;
            padding-right: 12px;
            margin-left: -100px;
          }
        }
        .loginTime {
          display: flex;
          height: 48px;
          line-height: 48px;
          .name {
            text-align: right;
            width: 100px;
            padding-right: 12px;
            margin-left: -100px;
          }
        }
        .headPortrait {
          display: inline-block;
          width: 134px;
          height: 134px;
          margin-right: 24px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .btn143 {
          width: 143px;
          margin-top: -150px;
        }
        .btn174 {
          width: 174px;
        }
        .mr--40px {
          margin-right: 40px;
        }
      }
    }
    .password {
      text-align: center;
      width: 100%;
    }
  }
}
</style>
