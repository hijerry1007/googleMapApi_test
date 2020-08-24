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
import { mapSettings } from "../../constants/mapSettings";
import { mapGetters } from "vuex";

export default {
  name: "GmapLoader",
  props: {
    apiKey: String,
  },
  data() {
    return {
      google: null,
      map: null,
      infoWindow: null,
      query: {
        mapCenter: null,
        radius: 400,
        type: "restaurant",
      },
      mapConfig: {
        ...mapSettings,
      },
    };
  },
  computed: {
    ...mapGetters({
      nameFromStore: "mapCenter",
    }),
    mapCenter: {
      get() {
        return this.$store.state.mapCenter;
      },
      set(newVal) {
        return newVal;
      },
    },
  },
  watch: {
    mapCenter(newVal) {
      this.mapConfig = {
        ...this.mapConfig,
        center: newVal,
      };
      if (this.map !== null) {
        this.map.panTo(this.mapConfig.center);
        this.getMarker(this.query, this.mapConfig.center);
      }
    },
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let mapCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.$store.commit("getMapCenter", mapCenter);
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
    this.$store.dispatch("handleGoogle", this.google);
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
      this.$store.dispatch("handleMap", this.map);
      var self = this;

      //新增監聽
      this.map.addListener("click", function (mapsMouseEvent) {
        let mapCenter = {
          lat: mapsMouseEvent.latLng.lat(),
          lng: mapsMouseEvent.latLng.lng(),
        };
        self.$store.dispatch("handleMapCenter", mapCenter);
      });

      // this.infoWindow = new this.google.maps.InfoWindow();
    },
    getMarker(request, location) {
      let query = {
        ...request,
        mapCenter: location,
        apiKey: this.apiKey,
      };
      this.$store.dispatch("fetchRestaurant", query);
    },
  },
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>