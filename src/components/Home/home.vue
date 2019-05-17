<template>
  <div id="home">
    <div class="left">
      <navbar/>
    </div>
    <div class="right">
      <div id="topbar">
        <el-button type="primary" icon="el-icon-plus" circle></el-button>
        <el-button
          type="danger"
          icon="el-icon-switch-button"
          circle
          @click="loginOut"
          class="danger"
        ></el-button>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar";
export default {
  components: { navbar },
  methods: {
    loginOut() {
      var action = () => {
        this.$router.push({ name: "login" });
        localStorage.clear();
      };
      this.operateConfirm('退出',action) 
    }
  },
  created(){
    this.$store.dispatch('loadacategory')
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  width: 100%;
  display: flex;
  .left {
    width: 15%;
    height: 100%;
    min-width: 200px;
    background-color: rgb(56, 55, 55);
  }
  .right {
    width: 85%;
    height: 100%;
  }
}
#topbar {
  position: relative;
  height: 60px;
  line-height: 60px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .danger {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>