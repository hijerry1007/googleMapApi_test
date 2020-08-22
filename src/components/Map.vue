<template>
  <GmapLoader
    :mapConfig="mapConfig"
    :apiKey="apiKey"
    @getMapCenter="getMapCenter"
    @handleMarkers="handleMarkers"
  >
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
      markers: [],
      mapCenter: null,
    };
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },
  },
  methods: {
    getMapCenter(mapCenter) {
      this.mapCenter = mapCenter;
    },
    handleMarkers(markers) {
      this.markers = markers;
    },
  },
};
</script>