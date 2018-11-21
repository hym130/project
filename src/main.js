// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import store from './store/index'
import Vuex from 'vuex'
import echarts from 'echarts'
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel'
import locale from 'element-ui/lib/locale/lang/en'
import i18n from './i18n/i18n'
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI,{ locale });
Vue.use(Vuex);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
