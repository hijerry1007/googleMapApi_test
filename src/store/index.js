import Vue from 'vue'
import Vuex from 'vuex'
import restaurantHelper from '../../apis/googlemapApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: null,
    mapCenter: { lat: 25.03746, lng: 121.564558 },
    google: null,
    map: null,
    isLoading: false,
  },
  getters: {
    googleApi: (state) => {
      return state.google
    },
    map: (state) => {
      return state.map
    },
    restaurantList: (state) => {
      return state.restaurants
    },
    mapCenter: (state) => {
      return state.mapCenter
    },
    isLoading: (state) => {
      return state.isLoading
    }
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
    updateGoogle(state, google) {
      state.google = google;
    },
    updateMap(state, map) {
      state.map = map;
    },
    updateIsLoading(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    async fetchRestaurant({ commit }, query) {
      commit('updateIsLoading')
      const { data } = await restaurantHelper.getNearbyRestaurant(query);
      let restaurantList = []
      for (let i = 0; i < 10; i++) {
        restaurantList.push(data.results[i])
      }
      commit('addRestaurant', restaurantList)
      commit('updateIsLoading')
    },
    handleGoogle({ commit }, google) {
      commit('updateGoogle', google)
    },
    handleMap({ commit }, map) {
      commit('updateMap', map)
    },
    handleMapCenter({ commit }, mapCenter) {
      commit('getMapCenter', mapCenter)
    },
  },
  modules: {
  }
})
