<template>
  <div id="app">
    <header>
      <router-link to="/">首页</router-link>
      |
      <router-link to="/about">关于</router-link>
      |
      <router-link to="/vuex-demo">Vuex 案例</router-link>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    userName () {
      return this.$store.getters.name // or return this.$store.state.user.name
    },
    userPhone () {
      return this.$store.getters.phone
    }
  },
  methods: {
    setUserInfo () {
      this.$store.commit('user/SET_NAME', '张三')
      this.$store.commit('user/SET_PHONE', '110')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
