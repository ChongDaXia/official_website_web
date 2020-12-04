<template>
  <div class="Expand">
    <div class="expand__lis">
      <div class="lis pr--20px">
        <div class="key">职位要求：</div>
        <div
          class="value"
          v-for="(imte, index) in row.requirements"
          :key="index"
        >{{ imte }}</div>
        <!-- <div class="value">{{row.requirements}}</div> -->
      </div>
      <div class="lis">
        <div class="key">岗位职责：</div>
        <div
          class="value"
          v-for="(imte, index) in row.responsibilities"
          :key="index"
        >{{ imte }}</div>
        <!-- <div class="value">{{row.responsibilities}}</div> -->
      </div>
    </div>
    <div class="expand__bottom">如您希望应聘本职位，请投递简历到邮箱：hjgbuilding@163.com</div>
  </div>
</template>
<script>
export default {
  name: 'Expand',
  props: {
    row: Object
  },
  computed: {}
}
</script>
<style lang="less" scoped>
/deep/ .ivu-table-expanded-cell {
  background: #fff;
}
.Expand {
  color: #333333;
  .expand__lis {
    display: flex;
    .pr--20px {
      padding-right: 56px;
    }
    .lis {
      flex: 1;
      .key {
        font-size: 14px;
        margin-bottom: 32px;
        font-weight: bold;
      }
      .value {
        font-size: 12px;
        margin-bottom: 8px;
      }
    }
  }
  .expand__bottom {
    font-size: 14px;
    margin-top: 54px;
    font-weight: bold;
  }
}
</style>
