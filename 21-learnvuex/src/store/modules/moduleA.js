export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  getters: {
    getFullName(state) {
      return state.name + '111';
    },
    getFullName2(state, getters) {
      return getters.getFullName + '222';
    },
    getFullName3(state, getters, rootState) {
      return getters.getFullName2 + rootState.counter;
    }
  },
  actions: {
    aUpdateAction(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
        console.log(context);
      }, 1000);
    }
  },
}
