const state = {
  name: '小红',
  phone: '1561314521',
  token: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_PHONE: (state, phone) => {
    state.phone = phone
  }
}
const actions = {
  login({ commit }, userInfo) {
    const { name, phone } = userInfo
    return new Promise(() => {
      commit('SET_NAME', name)
      commit('SET_PHONE', phone)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
