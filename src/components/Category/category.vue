<template>
  <div id="category">
    <my-template width="50%">
      <div slot="my-content">
        <table>
          <thead>
            <tr>
              <th>全选</th>
              <th>类型</th>
              <th>图标</th>
              <th>操作</th>
            </tr>
          </thead>
          <draggable v-model="categoryData" class="drag" element="tbody">
              <tr v-for="(item,index) in categoryData" :key="index">
                <td>
                  <input type="checkbox">
                </td>
                <td>{{item.name}}</td>
                <td style="width:40px">
                  <img :src="item.imgAddr" style="width:100%;">
                </td>
                <td>
                  <el-button type="danger" size="mini" @click="detelCategory(item._id)">删除</el-button>
                </td>
              </tr>
          </draggable>
        </table>
      </div>
    </my-template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["categoryData"])
  },
  methods: {
    detelCategory(id) {
      var action = () => {
        this.post(this.$apis.deleteCategory, { _id: id });
      };
      this.operateConfirm("删除分类", action).then(() => {
        this.$store.dispatch("loadacategory");
      });
    }
  }
};
</script>
<style lang="scss">
#category {
  width: 100%;
}
tr {
  text-align: center;
}
</style>