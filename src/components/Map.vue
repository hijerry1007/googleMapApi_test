<template>
  <GmapLoader :mapConfig="mapConfig" :apiKey="apiKey">
    <template slot-scope="{google, map}">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
  </GmapLoader>
</template>


<script>
import GmapLoader from "./GmapLoader";
import { mapSettings } from "../../constants/mapSettings";
import GoogleMapMarker from "./GoogleMapMarker";

export default {
  name: "Map",
  components: {
    GmapLoader,
    GoogleMapMarker,
  },
  data() {
    return {
      apiKey: "AIzaSyBw9XXv9GWmY4wA7ItCKR74EfQJeHHdMOk",
      // google: null,
      // map: null,
      infoWindow: null,
      // defaultCenter: {
      //   lat: 25.03746,
      //   lng: 121.564558,
      // },
    };
  },
  methods: {
    // initialMap(data) {
    //   this.map = data.map;
    //   this.google = data.google;
    // },
    getMapCenter(mapCenter) {
      this.markers = [];
      this.$store.state.mapCenter = mapCenter;
    },
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.$store.state.mapCenter,
      };
    },
    markers() {
      let markers = this.$store.state.restaurants.map((rest) => ({
        id: rest.place_id,
        ...rest,
      }));

      return markers;
    },
  },
};
</script>