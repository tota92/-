<template>
  <div id="navbar">
    <div id="icon">
      <img src="./img/tx.jpg">
    </div>
    <div id="name">
      <div style='font-size:15px'>admin</div>
      <div class='setBtn' @click="pushView({name:'setting'})">
          <i class="el-icon-setting"></i>
          设置</div>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) in list" :key='index' @click='pushView(item)'>{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "aritice", title: "文章管理" },
        { name: "category", title: "分类管理" },
        { name: "team", title: "分组管理" }
      ]
    }
  },
  methods:{
      pushView(item){
          this.$router.push({name:item.name})
      }
  }
};
</script>

<style lang="scss" scoped>
#navbar {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  & > div {
    margin-top: 10px;
  }
  #icon {
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background: red;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
  li{
      margin-top: 20px;
      height:20px;
      width:100px;
  }
}
.setBtn{
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    height:20px;
    width: 60px;
    background:rgb(125, 125, 255);
}

</style>