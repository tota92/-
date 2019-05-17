<template>
  <div id="login">
    <div id="denglu">
      <p style="font-size:30px;margin-top:30px">账号登录</p>
      <el-form label-width="80px" :model="userInfo" :rules="rules" ref="userInfo">
        <el-form-item label="账号" prop="username" label-position="right">
          <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" label-position="right">
          <el-input type="password" v-model="userInfo.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login" style="width:100px">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs["userInfo"].validate(vali => {
        if (vali) {
          this.$http
            .post(this.$apis.signin, this.userInfo)
            .then(resp => {
              var token = resp.data.token;
              var success = resp.data.success;
              if (success) {
                var query = this.$route.query;
                localStorage.setItem("token", token);
                if (query.redirect) {
                  this.$router.push({ path: query.redirect });
                } else {
                  this.$router.push({ name: "home" });
                }
              }else{
                this.$message.error('用户名或密码错误');
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("不通过");
        }
      });
    }
  }
};
</script>
<style lang="scss" scope>
#login {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url("./img/timg.jpg") no-repeat top left;
  background-size: 100% 100%;
  text-align: center;
}
#denglu {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  height: 300px;
  width: 400px;
  background: white;
  border-radius: 5%;
  box-shadow: 0 0 5px 5px #888;
  padding: 0 20px;
}
.el-form {
  margin-top: 20px;
}
</style>