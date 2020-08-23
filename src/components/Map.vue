<template>
  <GmapLoader :apiKey="apiKey">
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
      infoWindow: null,
    };
  },
  methods: {
    getMapCenter(mapCenter) {
      this.markers = [];
      this.$store.state.mapCenter = mapCenter;
    },
  },
  computed: {
    markers() {
      if (this.$store.state.restaurants === null) {
        return;
      }
      let markers = this.$store.state.restaurants.map((rest) => ({
        id: rest.place_id,
        ...rest,
      }));
      return markers;
    },
  },
};
</script>