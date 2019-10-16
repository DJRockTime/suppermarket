<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 12:09:12
 * @LastEditTime: 2019-10-16 11:06:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login-wrapper">
    <el-row type="flex" class="loginForm" justify="center" align="middle">
      <el-col :xs="12" :sm="10" :md="8" :lg="6" :xl="4" class="login-content">
        <el-form label-position="top" :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import { getHomeMultidata, getUserData } from '@/network/home'
export default {
    data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名为必填项', trigger: 'blur' },
          { min:3, max: 5, message: '长度在3到5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min:3, max: 5, message: '长度在3到5个字符', trigger: 'blur' }
        ]
      }
    }
    },
    methods: {
      login() {
        getUserData(this.loginForm)
        .then(res => {
          console.log(res)
          const { data, meta } = res.data
          console.log(data.name)
          const {username, password} = this.loginForm
          if(meta.status === 200 && username == data.name && password == data.password) {
            localStorage.setItem('token', data.token)
            this.$message({
              type: 'success',
              message: meta.msg1
            })
            this.$router.push('/home')
          } else {
            this.$message({
              type: 'error',
              message: meta.msg2
            })
          }
        })

      },
      submitForm(formName) {
        this.$refs['loginForm'].validate(valid => {
          if(valid) {
            this.login()
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>

<style>
  .login-wrapper,
  .loginForm {
    height: 100%;
  }

  .loginForm {
    background: #2d434c;
  }

  .login-content {
    min-width: 240px;
    background: #fff;
    padding: 20px 40px;
  border-radius: 10px;
  }
</style>
