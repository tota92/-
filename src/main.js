import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/mtaxios'
import 'reset-css'
import './apis/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import myTemplate from '@/components/Commons/my-template'
import "@/mixins"
import MTEditor from 'mteditor'
Vue.use(MTEditor);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component("my-template",myTemplate)
  
router.beforeEach((to,from,next)=>{
    if(to.path==='/login'){
      next()
    }else{
       var token = localStorage.getItem("token")
       if(token){
         next()
       }else{
          next({path:'/login',query:{redirect:to.path}})
       }
    }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
