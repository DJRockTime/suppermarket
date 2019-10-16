/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 10:54:58
 * @LastEditTime: 2019-10-15 16:15:29
 * @LastEditors: Please set LastEditors
 */
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/getListData'
  })
}

export function getUserData(loginForm) {
  return request({
      method: 'post',
      url: '/getUser',
      data: {
        username: loginForm.username,
        password: loginForm.password,
      }
  })
}
