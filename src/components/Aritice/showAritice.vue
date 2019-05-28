<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
   <div v-html='content' id='content'></div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      content:'',
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$router.go(-1);
    }
  },
  mounted() {
      this.content = this.$route.params.content
  },
};
</script>

<style lang="scss" scoped>
#content{
    height: 300px;
    width: 820px;
    overflow:scroll;
}
</style>