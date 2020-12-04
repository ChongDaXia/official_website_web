<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  min-width: 1300px;
  // min-height: 2312px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #657180;
  font-size: 12px;
  line-height: 1.5em;
}
</style>
