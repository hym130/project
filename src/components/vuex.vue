<template>
    <div id="solt">
        vuex数量：
        <button @click='jian'>点击--</button>
        <span>{{count}}</span>
        <button @click='add'>点击++</button>
        <h4>{{list}}</h4>
        <button @click="changeList">点击变身</button>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "vuex",
  data() {
    return {
      sun: 1
    };
  },
  computed: {
    ...mapState({
      count: state => {
        return state.count;
        console.log(state, "state");
      },
      list: state => {
        return state.datalist;
        console.log(state, "state");
      }
    })
  },
  methods: {
    add() {
      this.addcount_A();
    },
    jian() {
      this.jiancount_A();
    },
    changeList() {
      this.dataList_A();
    },
    ...mapActions(["addcount_A", "jiancount_A", "dataList_A"])
  }
};
</script>

<style>
</style>
