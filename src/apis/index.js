import Vue from 'vue'
const apis ={
    signin: '/signin', //登录
    register:'/register',//注册
    updateUser:'/updateUser',
    //文章管理接口
    addNewArticle: '/addNewArticle', //新增文章
    deleteArticle: '/deleteArticle', //删除文章
    updateArticle: '/updateArticle', //更新文章
    findArticle: '/findArticle',//查找所有文章
       // 分类
       findCategory:'/findCategory',
       deleteCategory:'/deleteCategory',//删除分类
       addNewCategory:'/addNewCategory',//新增分类
}
Vue.prototype.$apis=apis
export default apis