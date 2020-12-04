<template>
  <div
    class="contact_us"
    ref="box"
  >
    <div class="contentBox">
      <div class="titleBox">
        <div class="en__title">contact us</div>
        <div class="ch__title">联系我们</div>
      </div>
      <div class="mapBox">
        <div class="map__img">
          <!-- <img class="map" src="../../assets/images/map.png" alt /> -->
          <!-- <img class="icon" src="../../assets/images/map_icon.png" alt=""> -->
          <el-amap
            ref="map"
            :vid="'amapDemo'"
            :center="center"
            :zoom="zoom"
            :plugin="plugin"
            :events="events"
            class="amap-demo"
          >
            <!-- <el-amap-marker v-for="u in markers" :position="u.position"></el-amap-marker> -->
            <el-amap-marker
              :position="[113.54481924479676,23.330704958640002]"
              :icon="icon"
            ></el-amap-marker>
            <el-amap-marker
              :position="[113.33122193254091,23.11606180115134]"
              :icon="icon"
            ></el-amap-marker>
          </el-amap>
        </div>
        <div class="map__name">
          <div class="add">
            <span class="icon">
              <img
                src="../../assets/images/map_icon.png"
                alt
              />
            </span>
            <span class="name">地址：</span>
            <span class="text">广州市黄浦区九龙镇知识城腾飞园B-1019室（总部）</span>
            <span class="text">广州市天河区兴民路222号天盈广场西塔27F（研发中心）</span>
          </div>
          <div class="landline">
            <span class="icon">
              <img
                src="../../assets/images/phone_icon.png"
                alt
              />
            </span>
            <span class="name">座机：</span>
            <span class="text">020 - 89856989</span>
          </div>
          <div class="email">
            <span class="icon">
              <img
                src="../../assets/images/email_icon.png"
                alt
              />
            </span>
            <span class="name">邮箱：</span>
            <span class="text">hjgbuilding@163.com</span>
          </div>
        </div>
      </div>
    </div>
    <div class="messageBox">
      <div class="message">
        <div class="text__l">
          <div class="font--bold">在线留言</div>
          <div class="font--size24">
            <div>快速获取</div>
            <div>解决方案及报价</div>
          </div>
          <div class="font--size16">24小时内回复华建工期待与你合作</div>
        </div>
        <div class="form__r">
          <Form
            :model="formItem"
            :label-width="90"
            ref="formInline"
            :rules="ruleInline"
            inline
          >
            <FormItem
              label="姓名："
              prop="name"
            >
              <div class="dflex">
                <Input
                  style="width: 225px"
                  v-model="formItem.name"
                  placeholder="请输入您的姓名"
                />
                <div class="rules--icon">*</div>
              </div>
            </FormItem>
            <FormItem
              label="电话："
              prop="phone"
            >
              <div class="dflex">
                <Input
                  style="width: 225px"
                  v-model="formItem.phone"
                  placeholder="请输入您的联系电话"
                />
                <div class="rules--icon">*</div>
              </div>
            </FormItem>
            <FormItem
              label="公司名称："
              prop="company"
              style="width: 654px"
            >
              <Input
                v-model="formItem.company"
                placeholder="请输入贵单位名称"
              />
            </FormItem>
            <FormItem
              label="合作意向："
              prop="message"
              style="width: 654px"
            >
              <Input
                v-model="formItem.message"
                type="textarea"
                :autosize="{minRows: 3,maxRows: 5}"
                placeholder="请输入您想要合作的大致内容"
              />
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                @click="handleSubmit('formInline')"
              >提 交</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMessage } from '../../api/index'
export default {
  name: 'contact_us',
  data () {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入'))
      } else if (
        !/^1[3456789]\d{9}$/.test(value) &&
        !/^0\d{2,3}-?\d{7,8}$/.test(value)
      ) {
        // eslint-disable-next-line standard/no-callback-literal
        callback('电话格式不正确')
      } else {
        callback()
      }
    }
    return {
      type: '0',
      center: [113.551472, 23.336835],
      zoom: 15,
      position: [113.551472, 23.336835],
      icon: require('../../assets/images/map_icon.png'),
      events: {
        init (o) {
          console.log(o.getCenter())
        },
        zoomchange: (e) => {
          console.log(e)
        },
        zoomend: (e) => {
          // 获取当前缩放zoom值
          // console.log(this.$refs.map.$$getInstance().getZoom());
          // console.log(e);
        },
        click: (e) => {
          // alert('map clicked')
        }
      },
      markers: [
        {
          position: [113.551472, 23.336835]
        },
        {
          position: [113.337036, 23.12165]
        }
      ],
      // 使用其他组件
      plugin: [
        {
          pName: 'Scale',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        }
      ],
      formItem: {
        name: '',
        phone: '',
        company: '',
        message: ''
      },
      ruleInline: {
        name: [{ required: true, message: '请输入', trigger: 'blur' }],
        phone: [
          // { required: true, message: '请输入', trigger: 'blur' },
          // { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur' },
          // { pattern: /^0\d{2,3}-?\d{7,8}$/, message: '手机号码格式不正确', trigger: 'blur' }
          { required: true, validator: validatePhone, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // map.disableDragging();     //禁止拖拽
  },
  mounted () {
    this.type = this.$route.query.type ? this.$route.query.type : '0'
    this.init()
  },
  watch: {
    $route () {
      this.type = this.$route.query.type
    },
    type () {
      this.init()
    }
  },
  methods: {
    init () {
      if (this.type === '0') {
        this.$nextTick(() => {
          window.scrollTo(0, 0)
        })
      }
    },
    // infoWindowClose () {
    //   this.infoWindow.show = false
    // },
    // 点击标注
    infoWindowOpen (data, type) {
      this.infoWindow.info = data
      this.infoWindow.name = '广州华建工智慧科技有限公司'
      this.infoWindow.title = type
      this.infoWindow.show = true
      // 为弹窗口标题添加title
      // this.$nextTick(() => {
      //   var win = document.querySelector('.BMap_bubble_title')
      //   win.title = '12'
      // })
    },
    // 留言
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formItem)
          getMessage(this.formItem).then((res) => {
            if (res.flag) {
              this.$refs[name].resetFields()
              this.$Message.success('已提交!')
            }
          })
          // this.$refs[name].resetFields()
          // this.$Message.success('已提交!')
        } else {
          this.$Message.error('请输入!')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.contact_us {
  margin-top: 40px;
  .contentBox {
    width: 1022px;
    margin: 0 auto;
    .titleBox {
      width: 100%;
      text-align: center;
      font-weight: bold;
      .en__title {
        color: #bfbfbf;
        font-size: 40px;
      }
      .ch__title {
        font-size: 24px;
        color: #000;
      }
    }
    .mapBox {
      width: 100%;
      margin-top: 24px;
      margin-bottom: 56px;
      .map__img {
        .amap-demo {
          width: 100%;
          height: 500px;
        }
        .map {
          width: 100%;
        }
      }
      .map__name {
        font-size: 14px;
        color: #333;
        margin-top: 24px;
        .icon {
          padding-right: 8px;
          img {
            width: 16px;
            vertical-align: middle;
            // height: 16px;
          }
        }
        .name {
          font-weight: bold;
          line-height: 32px;
        }
        .text {
          padding-right: 48px;
        }
      }
    }
  }
  .messageBox {
    width: 100%;
    height: 384px;
    background-image: url("https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/message_bg.png");
    background-size: 100% 100%;
    .message {
      width: 1022px;
      margin: 0 auto;
      padding-top: 54px;
      display: flex;
      .text__l {
        color: #fff;
        flex: 1;
        .font--bold {
          font-size: 36px;
          height: 80px;
          font-weight: bold;
        }
        .font--size24 {
          font-size: 24px;
          line-height: 40px;
        }
        .font--size16 {
          font-size: 16px;
          padding-top: 48px;
        }
      }
      .form__r {
        flex: 2;
        /deep/ .ivu-form .ivu-form-item-label {
          color: #fff;
        }
        /deep/ .ivu-form-item {
          margin-bottom: 16px;
        }
        /deep/ .ivu-btn {
          padding: 0 64px;
        }
        /deep/ .ivu-form-item-required .ivu-form-item-label:before {
          content: "";
        }
        /deep/ .ivu-form-item-error-tip {
          padding-top: 0;
        }
        .dflex {
          display: flex;
          .rules--icon {
            color: #f64343;
            padding-left: 8px;
            padding-top: 5px;
          }
        }
      }
    }
  }
}
</style>
