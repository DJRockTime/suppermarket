<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:46:43
 * @LastEditTime: 2019-10-16 10:49:34
 * @LastEditors: Please set LastEditors
 -->
# suppermarket-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 登录拦截整个流程
- 1 在登录成功以后，将 token 存储到 localStorage 中
- 2 在导航首位 中首先判断当前访问的叶脉你是不是登录页面
- 3 如果是登录页面，直接放行 next()
- 4 如果不是登录页面，就从localStorage 中 获取 token ，判断有没有登录
- 5 如果登录就放行 next()
- 6 如果没有登录， 就跳转到登录页面让用户登录 next('/login')


## token机制的说明

- 在项目中，如果登录成功了，那么，服务器会给我们返回一个 token
- 这个token 就是登录成功的标示
- 这个token 就相当于cookie + session 机制中的 sessionId

