import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id:1, text:'hello world', done:true},
      {id:2, text:'game over', done:false}
    ],
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo=> todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    add(state,n) {
      state.count += n
    },
    plus(state, payload) {
      state.count += payload.amount
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync ({commit}) {
      setTimeout(() => {
        commit('plus',{amount:10})
      }, 1000)
    },
    // checkout ({ commit, state }, products) {
    // 	const saveCarItems = [...state.car.added]
    // 	commit(types.CHECKOUT_REQUEST)
    // 	shop.buyProducts(
    // 		products,
    // 		() => commit(types.CHECKOUT_SUCCESS),
    // 		() => commit(types.CHECKOUT_FAILURL, saveCarItems)
    // 	)
    // }
  }
})
