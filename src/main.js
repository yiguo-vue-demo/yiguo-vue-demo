//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//设置控制提示信息
Vue.config.productionTip = false
//引入Header
new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>'
})
