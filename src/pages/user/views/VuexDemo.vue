<template>
  <div class="vuex-demo">
    <h2>测试Vuex</h2>
    <div>
      <p>用户名：{{ userName }}</p>
      <p>电话：{{ userPhone }}</p>
    </div>
    <div>
      <button @click="setUserInfo">设置用户信息</button>
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
.vuex-demo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
