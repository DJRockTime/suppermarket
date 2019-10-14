/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 10:49:43
 * @LastEditTime: 2019-10-02 10:53:28
 * @LastEditors: Please set LastEditors
 */

import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })


  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}


