import Vue from 'vue'
import Vuex from 'vuex'
import restaurantHelper from '../../apis/googlemapApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: null,
    mapCenter: { lat: 25.03746, lng: 121.564558 },
    details: null,
  },
  mutations: {
    getMapCenter(state, location) {
      state.mapCenter = {
        ...state.mapCenter,
        ...location
      }
    },
    addRestaurant(state, restaurantList) {
      state.restaurants = null;
      state.restaurants = restaurantList;
    },
    addDetail(state, data) {
      state.details = {
        ...state.details,
        ...data
      }
      console.log(state.details)
    }
  },
  actions: {
    async fetchRestaurant({ commit }, query) {
      const { data } = await restaurantHelper.getNearbyRestaurant(query);
      let restaurantList = []
      for (let i = 0; i < 10; i++) {
        restaurantList.push(data.results[i])
      }
      commit('addRestaurant', restaurantList)
    },
    async getDetail({ commit }, id) {
      const { data } = await restaurantHelper.getRestaurantDetail(id)
      commit('addDetail', data.result)
    }
  },
  modules: {
  }
})
