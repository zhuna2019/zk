<template>
  <div class="login_container">
    <div class="login_box">
      <!-- logo区 -->
      <div class="avatar_box">
        <img src="../../assets/logo_zk2.png" alt />
      </div>
      <!-- 登录表单区 -->
      <el-form
        :rules="loginFormRules"
        ref="loginFormRef"
        :model="Form"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username" class="login_item">
          <el-input v-model="Form.username" prefix-icon="el-icon-s-custom
" placeholder="用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="Form.password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <el-button type="primary" class="login_btn" @click="toLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/admin_nav.js'
export default {
  data() {
    return {
      checked: false,
      Form: {
        username: 'super',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toLogin() {
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return
        login(this.Form)
          .then(res => {
            if (res.status !== 200) return this.$message.error('登录失败')
            if (this.checked) {
              window.localStorage.setItem('token', res.data.message)
            } else {
              window.sessionStorage.setItem('token', res.data.message)
            }
            // 跳转后台主页
            this.$router.push('/main')
          })
          // catch 这个是浏览器发送失败的报警
          .catch(err => {})
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100% !important;
    padding: 0 20px;
    box-sizing: border-box;
    .el-input {
      width: 100%;
    }
    .btns {
      display: flex;
      .login_btn {
        width: 200px;
        margin-left: 70px;
      }
    }
  }
}
</style>
