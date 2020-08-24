import axios from 'axios'


export default {
  getNearbyRestaurant(query) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${query.mapCenter.lat},${query.mapCenter.lng}&type=${query.type}&radius=${query.radius}&key=${query.apiKey}`)
  },
  getRestaurantDetail(id) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,formatted_phone_number,reviews,website&key=${process.env.VUE_APP_apiKey}
`)
  }
}