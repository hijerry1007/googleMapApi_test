<template>
  <GmapLoader :mapConfig="mapConfig" apiKey="AIzaSyBw9XXv9GWmY4wA7ItCKR74EfQJeHHdMOk">
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
      markers: [
        {
          id: "a",
          position: { lat: 3, lng: 101 },
        },
        {
          id: "b",
          position: { lat: 5, lng: 99 },
        },
        {
          id: "c",
          position: { lat: 6, lng: 97 },
        },
      ],
    };
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },
    mapCenter() {
      return this.markers[1].position;
    },
  },
};
</script>