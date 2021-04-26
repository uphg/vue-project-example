<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'Home' }">个人中心</router-link>
      |
      <router-link :to="{ path: '/about' }">关于</router-link>
      |
      <router-link :to="{ name: 'VuexDemo' }">Vuex 案例</router-link>
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    userName() {
      return this.$store.getters.name // or return this.$store.state.user.name
    },
    userPhone() {
      return this.$store.getters.phone
    }
  },
  methods: {
    setUserInfo() {
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
