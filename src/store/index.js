import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 1,
    datalist: '变身之前',
    lang: localStorage.lang || 'cn'
  },
  actions: {
    addcount_A({
      commit
    }) {
      commit("addcount_M")
    },
    jiancount_A({
      commit
    }) {
      commit("jiancount_M")
    },
    dataList_A({
      commit
    }) {
      commit("dataList_M")
    }
  },
  mutations: {
    addcount_M(state) {
      console.log(state.count, 'state.count');
      if (state.count !== 5) {
        state.count++
      } else {
        state.count = 5;
      }
    },
    jiancount_M(state) {
      if (state.count <=0) {
        state.count = 0
      } else {
        state.count--;
      }
    },
    dataList_M(state) {
      state.datalist = '咸蛋超人！'
    },
    switchLang (state, lang) {
      state.lang = lang
      console.log(window.app.i18n,'pppp');
      //window.app.i18n.locale = lang
      localStorage.setItem('lang', lang)
    }
  },
  getters: {

  }
});
