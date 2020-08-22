import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {
    // addRestaurant: (state, { newRestaurant }) => {
    //   const restToAdd = {
    //     ...newRestaurant
    //   }
    //   state.restaurants.push(restToAdd)
    // }
  },
  actions: {
    // getRestaurant: async function (context, { service, location }) {

    //   const restaurantList = await RestaurantHelper.nearbySearch(service, location);

    //   restaurantList.forEach(rest => { context.commit('addRestaurant', { rest }) })

    // }
  },
  modules: {
  }
})
