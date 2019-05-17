<template>
  <div id="aritice">
    <my-template width="100%" title="文章标题">
      <div slot="my-head">
        <el-button type="primary" size="mini" @click="pushView({name:'addaritice'})">新增</el-button>
      </div>
      <div slot="my-content">
        <table>
          <tr>
            <th>标题</th>
            <th>作者</th>
            <th>日期</th>
            <th>分类</th>
            <th>是否发布</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in list" :key="index+item">
            <td>{{item.shortTitle}}</td>
            <td>{{item.authore}}</td>
            <td>{{item.pubDate | formaData}}</td>
            <td>{{item.category}}</td>
            <td>{{item.isPublished | formaTurn}}</td>
            <td class="operate">
              <span @click="deleteArit(item._id)">删除</span>
              <span @click="pushView({name:'addaritice',params:{userInfo:item}})">编辑</span>
              <span @click="pushView({name:'showAritice',params:{content:item.content}})">预览</span>
            </td>
          </tr>
        </table>
      </div>
      <div slot="my-foot">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="loadMOre"
        ></el-pagination>
      </div>
    </my-template>
    <template>
      <router-view></router-view>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      total: 0
    };
  },
  filters: {
    formaData(value) {
      return value.slice(0, 10);
    },
    formaTurn(val) {
      var a = "否";
      if (val) {
        a = "是";
      }
      return a;
    }
  },
  methods: {
    loadMOre(ev) {
      this.$http
        .get(this.$apis.findArticle, { pageSize: 10, pageNo: ev })
        .then(resp => {
          this.list = resp.data.data;
          this.total = resp.data.total;
        });
    },
    deleteArit(id) {
      var action = () => {
        this.post(this.$apis.deleteArticle, { _id: id }).then(() => {
          this.loadMOre(1);
        });
      };
      this.operateConfirm("删除文章", action);
    }
  },

 beforeRouteUpdate(to,from,next){
        this.loadMOre(1)
        next();
    },


  mounted() {
    this.$http
      .get(this.$apis.findArticle, { pageSize: 10, pageNo: 1 })
      .then(resp => {
        this.list = resp.data.data;
        console.log(this.list)
        this.total = resp.data.total;
      });
  }
};
</script>
<style lang="scss" scope>
#aritice {
  position: relative;
  width: 100%;
  height: 80%;
}
.operate {
  display: flex;
  justify-content: space-around;
  span:nth-child(1) {
    color: rgba(255, 8, 0, 0.979);
  }
  span:nth-child(2) {
    color: rgb(49, 114, 255);
  }
  span:nth-child(3) {
    color: rgb(250, 184, 4);
  }
}
.my-foot {
  text-align: center;
}
</style>