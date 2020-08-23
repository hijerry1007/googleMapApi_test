import Vue from 'vue'
import Vuex from 'vuex'
import restaurantHelper from '../../apis/googlemapApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: null,
    mapCenter: { lat: 25.03746, lng: 121.564558 },
  },
  mutations: {
    getMapCenter(state, location) {
      state.mapCenter = {
        ...state.mapCenter,
        ...location
      }
      console.log("state.mapCenter", state.mapCenter)
    },
    addRestaurant(state, restaurantList) {
      state.restaurants = null;
      state.restaurants = restaurantList;
    },
  },
  actions: {
    async fetchRestaurant({ commit }, query) {

      const { data } = await restaurantHelper.getNearbyRestaurant(query);
      let restaurantList = data.results
      commit('addRestaurant', restaurantList)

    },
  },
  modules: {
  }
})
