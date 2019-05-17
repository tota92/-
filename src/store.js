import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/utils/mtaxios'
import apis from '@/apis'
Vue.use(Vuex)
const loadAction = (commit,payload,mutationName)=>{
 
  axios.get(payload.apis,{pageNo:payload.pageNo,pageSize:payload.pageSize})
  .then((resp)=>{
    var resp =resp.data.data
    commit(mutationName,resp)
  })
     
}

export default new Vuex.Store({
  state: {
      categoryData:[]
  },
  getters:{
    categoryData(state){
      return state.categoryData
    }
  },
  mutations: {
    LOADACATEGORY(state,payload){
      state.categoryData = payload
    }
  },
  actions: {
     loadacategory({commit},payload={}){
       payload.apis = apis.findCategory  
      loadAction(commit,payload,'LOADACATEGORY')
     },
     detelCategory({commit},payload){
      payload.apis = apis.deleteCategory 
           console.log(payload)
     }
  }
})
