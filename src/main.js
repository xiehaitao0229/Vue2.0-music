import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' //  解决移动端点击三秒延迟
import VueLazyLoad from 'vue-lazyload'
fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png') //  还没有加载出来显示的图片
});
Vue.config.productionTip = false
import 'common/stylus/index.styl'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
