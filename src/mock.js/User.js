/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:48:08
 * @LastEditTime: 2019-10-16 10:00:41
 * @LastEditors: Please set LastEditors
 */
import Mock from 'mockjs'

// const data = Mock.mock('/getUser', 'post',{
//     data: {
//       'Users|5': [{
//         id: '@increment(0)',
//         name: 'rock',
//         password: 123,
//         rid: '@increment(0)',
//         mobile: '@integer(10)'
//       }]
//     },
//     status: 200,
//     statusText: 'OK',
//     returnCode: 'SUCCESS',
//     success: true
//   })
const data = Mock.mock('/getUser', 'post', function (options) {
  console.log(options)
  return Mock.mock({
    data: {
      'data': {
        id: '@increment(0)',
        name: 'rock',
        password: 123,
        rid: '@increment(0)',
        mobile: '@integer(10)',
        token: 'acd'
      },
      meta: {
        msg1: '登录成功',
        msg2: '登录失败,请重新登录',
        status: 200,
      }
    },
    status: 200,
    statusText: 'OK',
    returnCode: 'SUCCESS',
    success: true
  })
  // if(username === 'rock' && password === '123') {
  //   return {
  //     data: {
  //       'data': {
  //         id: '@increment(0)',
  //         name: 'rock',
  //         password: 123,
  //         rid: '@increment(0)',
  //         mobile: '@integer(10)'
  //       },
  //       meta: {
  //         msg: '登录成功',
  //         status: 200,
  //       }
  //     },
  //     status: 200,
  //     statusText: 'OK',
  //     returnCode: 'SUCCESS',
  //     success: true
  //   }
  // } else {
  //   return {
  //     data: {
  //       meta: {
  //         msg: '登录失败,请重新输入用户名和密码',
  //         status: 500,
  //       }
  //     }
  //   }
  // }
})

// Mock.mock('http://test/mock.com', 'post', function (options) {
//   console.log(options);
//   return {
//     "mocktest|4-6": [{
//       'name': '@cname', // 中文名称
//       'id|+1': 88, // 属性值自动加 1，初始值为88
//       'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
//       'birthday': '@date("yyyy-MM-dd")', // 日期
//       'city': '@city(true)', // 中国城市
//       'color': '@color', // 16进制颜色
//       'isMale|1': true, // 布尔值
//       'isFat|1-2': true, // true的概率是1/3
//       'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
//       'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
//       'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
//     }]
//   }
// })

// Mock.mock('http://test/getmock.com', 'get', function (options) {
//   console.log(options);
//   return {
//     "mocktest|4-6": [{
//       'name': '@cname', // 中文名称
//       'id|+1': 88, // 属性值自动加 1，初始值为88
//       'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
//       'birthday': '@date("yyyy-MM-dd")', // 日期
//       'city': '@city(true)', // 中国城市
//       'color': '@color', // 16进制颜色
//       'isMale|1': true, // 布尔值
//       'isFat|1-2': true, // true的概率是1/3
//       'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
//       'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
//       'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
//     }]
//   }
// })

// module.exports = Mock

export default data
