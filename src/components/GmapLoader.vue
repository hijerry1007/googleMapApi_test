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
// import axios from "axios";

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
      infoWindow: null,
      query: {
        mapCenter: null,
        radius: 400,
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
        this.$store.commit("getMapCenter", this.mapCenter);
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
    this.getMarker(this.query, this.mapConfig.center);

    this.addChangeBoundsListener();
    // this.openAddRestaurant();
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
      var self = this;
      this.map.addListener("click", function (mapsMouseEvent) {
        let mapCenter = {
          lat: mapsMouseEvent.latLng.lat(),
          lng: mapsMouseEvent.latLng.lng(),
        };
        self.$store.commit("getMapCenter", mapCenter);
        self.map.setCenter(mapsMouseEvent.latLng);
        self.getMarker(self.query, mapCenter);
      });

      this.infoWindow = new this.google.maps.InfoWindow();

      this.$emit("initialMap", {
        google: this.google,
        map: this.map,
      });
    },
    getMarker(request, location) {
      let query = {
        ...request,
        mapCenter: location,
        apiKey: this.apiKey,
      };
      this.$store.dispatch("fetchRestaurant", query);
    },
    addChangeBoundsListener() {
      this.google.maps.event.addListener(
        this.map,
        "bounds_changed",
        (event) => {
          this.$emit("map-bounds-changed", event);
        }
      );
    },
    // openAddRestaurant() {
    //   this.google.maps.event.addListener(this.map, "click", (event) => {
    //     this.$emit("map-clicked", event);
    //   });
    // },
    // getMarkers() {},
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>