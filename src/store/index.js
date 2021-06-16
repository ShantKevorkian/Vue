import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: []
  },
  getters: {
    cardProducts(state) {
      return state.product
    }
  },
  mutations: {
    addProduct(state, product) {
      state.product.push(product)
    },
    removeProduct(state) {
      state.product.pop()
    }
  },
  actions: {
  },
  modules: {
  }
})
