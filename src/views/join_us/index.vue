<template>
  <div class="join_us">
    <div class="breadImg">
      <img
        src="https://hjg-officialwebsite.oss-cn-shenzhen.aliyuncs.com/join_me.png"
        alt
      />
    </div>
    <div class="contentBox">
      <div class="title__box">
        <div class="imte ta--l">
          <div
            @click="onRecruitType('0')"
            class="lis"
            :class="type=='0'? 'bb--D14':''"
          >社会招聘</div>
        </div>
        <div class="imte">
          <div
            @click="onRecruitType('1')"
            class="lis"
            :class="type=='1' ? 'bb--D14':''"
          >校园招聘</div>
        </div>
        <div class="imte">
          <div
            @click="onRecruitType('2')"
            class="lis"
            :class="type=='2'? 'bb--D14':''"
          >实习招聘</div>
        </div>
      </div>
      <div class="table__box">
        <Table
          :columns="columns"
          :data="data"
          stripe
        ></Table>
      </div>
    </div>
  </div>
</template>
<script>
import expandRow from '../../components/global/Expand/index'
import { getRecruit } from '../../api/index'
export default {
  name: 'join_us',
  data () {
    return {
      type: '0',
      columns: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          title: '招聘职位',
          key: 'position'
        },
        {
          title: '职能类型',
          key: 'workType'
        },
        {
          title: '招聘部门',
          key: 'department'
        },
        {
          title: '地点',
          key: 'site'
        }
      ],
      data: []
    }
  },
  created () {},
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
      getRecruit(this.type).then((res) => {
        if (res.flag) {
          this.data = res.data
        }
      })
    },
    onRecruitType (type) {
      this.type = type
      this.init()
    }
  }
}
</script>
<style lang="less" scoped>
.join_us {
  .breadImg {
    width: 100%;
    img {
      width: 100%;
      height: 280px;
    }
  }
  .contentBox {
    width: 1022px;
    margin: 0 auto;
    .title__box {
      display: flex;
      height: 40px;
      margin-top: 32px;
      .imte {
        font-size: 16px;
        color: #000;
        width: 80px;
        height: 16px;
        border-right: 1px solid #979797;
        margin-left: 16px;
        .lis {
          height: 24px;
          width: 64px;
          // margin: 0 16px;
          // margin-left: 16px;
          // margin-right: 16px;
          cursor: pointer;
        }
        .bb--D14 {
          border-bottom: 2px solid #faad14;
        }
      }
      .ta--l {
        margin-left: 0;
      }
      .imte:last-child {
        border-right: none;
      }
    }
    .table__box {
      margin-bottom: 54px;
      /deep/ .ivu-table-expanded-cell {
        background: #fff;
      }
    }
  }
}
</style>
