import axios from 'axios';
import Vue from 'vue';
axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
axios.interceptors.request.use(function (config) {
    var token = localStorage.getItem('token')
    config.headers.common['Authorization'] = "Bearer "+token
    return  config
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
const mtaxios = {
    get: function (url, params) {
      return axios.get(url,{params})
    },
    post: function (url, params) {
        return axios.post(url,params)
    }
}
Vue.prototype.$http = mtaxios;
export default mtaxios;