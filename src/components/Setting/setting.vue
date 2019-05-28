<template>
    <div id='setting'>
        <my-template title="设置登录密码" width="35%" height='60%'>
            <div slot="my-content">
                <el-form :model='userInfo' rules="rules" label-width='80px' status-icon ref='userInfo'>
                    <el-form-item label="用户名" prop='oldName'>     
                        <el-input type='text' v-model="userInfo.oldName"></el-input>
                    </el-form-item>
                    <el-form-item label='旧密码' prop="oldPassword">
                        <el-input type='password' v-model="userInfo.oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item label='新密码' prop='newPassword'>
                        <el-input type='password' v-model="userInfo.newPassword"></el-input>
                    </el-form-item>
                    <el-form-item label='确认密码' prop='confirmPassword'>
                        <el-input type='password' v-model="userInfo.confirmPassword"></el-input>
                    </el-form-item>
                    <div class="my-foot">
                    <el-button type="danger">重置</el-button>
                    <el-button type="primary">提交</el-button>
                    </div>
                </el-form>
            </div>
        </my-template>
    </div>
</template>
<script>
export default {
       data(){
           return {
               userInfo:{
                 oldName:"",
                 newPassword:"",
                 oldPassword:"",

               },
               rules:{
                   oldName:[
                       {}
                   ]
               }
           }
       }
}
</script>
<style lang="scss" scope>
    #setting{
       width:100%;
       height:90%;  
    }
    #mytemplate {
        // margin:auto;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .my-foot{
        text-align: center;
    }
    .el-form-item{
        margin-bottom: 30px;
    }
     
</style>