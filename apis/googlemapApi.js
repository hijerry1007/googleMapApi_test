import axios from 'axios'


export default {
  getNearbyRestaurant(query) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${query.mapCenter.lat},${query.mapCenter.lng}&type=${query.type}&radius=${query.radius}&key=${query.apiKey}`)
  }
}