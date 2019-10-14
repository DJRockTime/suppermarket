/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:11
 * @LastEditTime: 2019-10-02 09:02:03
 * @LastEditors: Please set LastEditors
 */

 const path = require('path')
 function resolve(dir) {
   return path.join(__dirname, dir)
 }

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
    }
  }
  // chainWebpack: (config) => {
  //   //修改文件引入自定义路径
  // config.resolve.alias
  //   .set('@', resolve('src'))
  //   .set('assets', resolve('@/assets'))
  //   .set('common', resolve('@/common'))
  //   .set('components', resolve('@/components'))
  //   .set('network', resolve('@/network'))
  //   .set('views', resolve('@/views'))
  // }
}
