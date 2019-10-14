/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 10:54:58
 * @LastEditTime: 2019-10-02 11:16:51
 * @LastEditors: Please set LastEditors
 */
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/getListData'
  })
}
