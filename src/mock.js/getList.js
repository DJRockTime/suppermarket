/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 09:48:08
 * @LastEditTime: 2019-10-16 00:41:42
 * @LastEditors: Please set LastEditors
 */
import Mock from 'mockjs'

const data = Mock.mock('/getListData', 'get', {
  data: {
    banner: {
      context: '@csentence(10, 20)',
      isEnd: true,
      'list|4': [{
        name: '@cname(2, 3)',
        age: '@integer(12, 30)',
        nextPage: '@increment(1)'
      }]
    },
    dKeyword: {
      context: '@csentence(10, 20)',
      isEnd: true,
      'list|4': [{
        name: '@cname(2, 3)',
        age: '@integer(12, 30)',
        nextPage: '@increment(1)'
      }]
    },
    keywords: {
      context: '@csentence(10, 20)',
      isEnd: true,
      'list|4': [{
        name: '@cname(2, 3)',
        age: '@integer(12, 30)',
        nextPage: '@increment(1)'
      }]
    },
    recommend: {
      context: '@csentence(10, 20)',
      isEnd: true,
      'list|4': [{
        name: '@cname(2, 3)',
        age: '@integer(12, 30)',
        nextPage: '@increment(1)',
      }]
    },
  },
  returnCode: 'SUCCESS',
  success: true
})

export default data
