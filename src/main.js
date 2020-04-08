import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

//全局自定义指令
/*Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#" + Math.random().toString(16).slice(2,8);
  }
})*/

Vue.directive('theme',{
  bind(el,binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1260px";
    }else if(binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }

    if(binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})
/*全局自定义过滤器*/
/*Vue.filter("to-uppercase",function (value) {
    return value.toUpperCase();
})*/
Vue.filter("sinppet",function (value) {
    return value.slice(0,100)+"...";
})



/*创建路由*/
const  router = new VueRouter({
    routes:Routes,
    mode:"history"
})


new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
