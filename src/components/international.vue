<template>
  <div class="hello">
    <p>{{label}}</p>
    <button @click="switchLang">切换</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['lang']),
    label () {
      return this.$t('message.hello')
    }
  },
  methods: {
    switchLang () {
      let lang = ''
      if (this.lang === 'en') {
        lang = 'cn'
      } else {
        lang = 'en'
      }
      this.$store.commit('switchLang', lang)
    }
  }
}
</script>
<style scoped>
</style>