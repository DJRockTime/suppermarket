<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 16:42:22
 * @LastEditTime: 2019-10-16 17:51:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <el-container class="home-wrapper">
  <el-header>
    <el-row>
      <el-col :span="8" class="logo"><span >Sony</span></el-col>
      <el-col :span="8"><h1 class="title" style="margin: 0px;">DELL SYSTEM</h1></el-col>
      <el-col :span="8">
        <div class="welcome">
        <span>欢迎深圳前端专家常欢星爵会员</span>
        <a href="#" @click.prevent="logout">退出</a>
      </div>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu
      :router="true"
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>

        <!-- 启用路由模式后，index相当于原来router-link 中的to属性， 用来指定导航路径（哈希值） -->
        <el-menu-item index="/home/users">
           <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户列表</span>
          </template>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">用户列表</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>
      <!-- 子路由出口 -->
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      // 弹出确认对话框
      // 用户点击确认
      // 跳回登录页面
      // 清除token
      this.$confirm('您是否确认退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 点击确认按钮
          localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          // 点击取消按钮
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });
        });
    },
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style scoped lang="less">
.home-wrapper {
    height: 100%;
    margin-bottom: 40px;

.el-header, .el-footer {
    background-color: rgb(202, 210, 220);
    color: #333;
    text-align: center;
    line-height: 60px;
    .logo {
      text-align: left;
      font-size: 20px;
      font-style: italic;
      font-weight: bold;
    }
    .title {
      font-size: 25px;
      line-height: 60px;
    }
    .welcome {
      line-height: 60px;
      font-weight: bold;

      a {
        color: #b07a17;
        text-decoration: none;
        padding: 0 10px;
      }
    }
  }

  .el-aside {
    background-color: #474f5a;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;

  }




  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
