<template>
    <div id='addaritice'>
        <!-- 富文本编辑器 -->
      <mt-editor v-model="userInfo.content" width='99%' height:='100%' :config='config'></mt-editor>
      <div id='artBottom'>
        <el-button type='primary' size='mini' @click="dialogVisible = true">确定</el-button>
        <el-button type='danger' size='mini' @click="closedMT">取消</el-button>
      </div>

          <!-- 提交弹框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="35%"
            :before-close="handleClose">
            <el-form :model='userInfo'  label-width='80px' :rules='rules' ref='userInfo'>
                
                <el-form-item label="文章标题" prop='title'>
                    <el-input v-model="userInfo.title"></el-input>
                </el-form-item> 

                <el-form-item label="短标题" prop='shortTitle'>
                    <el-input v-model="userInfo.shortTitle"></el-input>
                </el-form-item> 

                <el-form-item label="发布时间" prop='PubDate'>
                    <el-date-picker
                        v-model="userInfo.pubDate"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item> 

                <el-form-item label="作者" prop='authore'>
                    <el-input v-model="userInfo.authore"></el-input>
                </el-form-item> 

                <el-form-item label="分类" >
                    <el-select v-model="userInfo.category" placeholder="请选择">
                        <el-option
                        v-for="(item,index) in categorys"
                        :key="index"
                        :label="item.name"
                        :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item> 

                <el-form-item label="是否发布">
                     <el-select v-model="userInfo.isPublished">
                          <el-option  label='是' value='true'></el-option>
                          <el-option  label='否' value='false'></el-option>
                     </el-select>
                </el-form-item> 

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size='mini'>取 消</el-button>
                <el-button type="primary" @click="addAtri" size='mini'>{{isTure?'新 增':'更 新'}}</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
         data(){
             return{
                dialogVisible:false,
                isTure:false,
                message:'',
                userInfo:{
                   title:'',
                   shortTitle:"",
                   pubDate:new Date(),
                   content:'',
                   authore:'tt',
                   category:'',
                   isPublished:'',
                },
                categorys:[
                    {name:'javascript'},
                    {name:'vue'},
                    {name:'微信开发'},
                    {name:'rect'},
                ],

                 rules:{
                    title:[
                        {required:true,message:'标题不能为空',trigger:'blur'}
                        ],
                    shortTitle:[
                        {required:true,message:'标题不能为空',trigger:'blur'},
                        {max:10,message:'字数不能超过10个',trigger:"blur"}
                        ],
                    pubDate:[
                        {required:true,message:'时间不能为空',trigger:'blur'},
                        ],
                    authore:[
                        {required:true,message:'作者不能为空',trigger:'blur'}
                        ],
                 },
                config:
                [
                    {"command":"image","title":'图片'},
                    {"command":"table","title":'表格'},
                    {"command":"link","title":'链接'},
                    {"command":"bold","title":"加粗"},
                    {"command":"italic","title":"斜体"},
                    {"command":"underline","title":"下划线"},
                    {"command":"strikethrough","title":"删除线"},
                    {"command":"justifyLeft","title":"居左"},
                    {"command":"justifyCenter","title":"居中"},
                    {"command":"justifyRight","title":"居右"},
                    {"command":"justifyFull","title":"两侧"},
                    {"command":"InsertUnorderedList","title":"无序列表"},
                    {"command":"insertOrderedList","title":"有序列表"},
                    {"command":"superscript","title":"上标"},
                    {"command":"subscript","title":"下标"},
                    {"command":"code","title":"代码"},
                    {"command":"removeFormat","title":"擦除"},
                    {"command":"undo","title":"撤销"},
                    {"command":"redo","title":"重做"},
                ]
             }
         },
        methods:{
            closedMT(){
                 var action =()=>{
                     this.$router.go(-1)
                 }
                 this. operateConfirm('退出编辑',action)
             },
            handleClose() {
                  this.dialogVisible = false
                  this.$router.go(-1);
            },
            addAtri(){
               this.$refs['userInfo'].validate((valid)=>{
                   if(valid){
                        var url = "";
                        if(this.isTure){
                           url = this.$apis.updateArticle
                        }else{
                           url = this.$apis.addNewArticle
                        } 

                        this.post(url,this.userInfo)
                       .then(()=>{
                           this.userInfo={}
                           this.handleClose()
                       })
                   }else{
                       return false
                   }
               })
            }
        },
        created() {
            if(this.$route.params.userInfo){
               this.isTure = true  
               this.userInfo = this.$route.params.userInfo 
               this.userInfo.isPublished = this.userInfo.isPublished + ""
            }else{
                this.isTure = false
            }
        },
    }
</script>

<style lang="scss" scoped>
  #addaritice{
      position:absolute;
      top:0;
      bottom: 0;
      right: 0;
      left: 0;
      background:white;
  }
  #artBottom{
      width: 99%;
      height:50px;
      line-height: 50px;
      text-align: right;
  }
</style>