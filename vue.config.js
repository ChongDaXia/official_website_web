const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  devServer: {
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /^.*/, to: '' }
    //   ]
    // }
  },
  chainWebpack: config => {
    // config.entry('main').add('babel-polyfill') // main是入口js文件
    // 常用目录别名
    config.resolve.alias
      .set('@', resolve('src')) // 主目录
      .set('views', resolve('src/views')) // 页面
      .set('components', resolve('src/components')) // 组件
      .set('api', resolve('src/api')) // 接口
      .set('common', resolve('src/common')) // 通用工具
      .set('assets', resolve('src/assets')) // 静态资源
    // svg loader
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 修改images loader，添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/assets/icons'))
    imagesRule.test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  // 压缩
  configureWebpack: config => {
    if (isProd) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          threshold: 4096 // 超过4kb压缩
        })
      )
    }
  }
}
