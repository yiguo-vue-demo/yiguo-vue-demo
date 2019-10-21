//引入Vue
import Vue from 'vue'
//引入routes.js
import routes from './routes.js'
//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'histroy',
  routes
})