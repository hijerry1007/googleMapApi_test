<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import axios from "axios";

export default {
  name: "GmapLoader",
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
    return {
      google: null,
      map: null,
      mapCenter: null,
      query: {
        radius: 5000,
        type: "restaurant",
      },
    };
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.mapCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.$emit("getMapCenter", this.mapCenter);
        const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.mapCenter.lat},${this.mapCenter.lng}&type=${this.query.type}&radius=${this.query.radius}&key=${this.apiKey}`;

        axios.get(URL).then((response) => {
          this.$emit("handleMarkers", response.data.results);
        });
      },
      (error) => {
        console.log("Error", error);
      }
    );
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
      libraries: ["places"],
      language: "zh-TW",
    });
    this.google = googleMapApi;
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
    getMarkers() {},
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>