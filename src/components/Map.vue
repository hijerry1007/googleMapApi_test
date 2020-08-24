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
import { mapGetters } from "vuex";

export default {
  name: "Map",
  components: {
    GmapLoader,
    GoogleMapMarker,
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_apiKey,
      infoWindow: null,
      markers: [],
    };
  },
  methods: {
    getMarkers(restaurants) {
      this.markers = [];

      restaurants.forEach((r) => {
        r = { ...r, id: r.place_id };
        this.markers.push(r);
      });
    },
  },
  computed: {
    ...mapGetters({
      nameFromStore: "restaurantList",
    }),
    restaurantList: {
      get() {
        return this.$store.state.restaurants;
      },
      set(newVal) {
        return newVal;
      },
    },
  },
  watch: {
    restaurantList(newVal) {
      if (newVal[0] === undefined) {
        return;
      } else {
        this.getMarkers(newVal);
      }
    },
  },
};
</script>