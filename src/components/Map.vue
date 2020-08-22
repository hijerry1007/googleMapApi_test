<template>
  <GmapLoader
    :mapConfig="mapConfig"
    :apiKey="apiKey"
    @getMapCenter="getMapCenter"
    @initailMap="initialMap"
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
      google: null,
      map: null,
      markers: null,
      mapMarkers: [],
      mapCenter: null,
      infoWindow: null,
      defaultCenter: {
        lat: 25.03746,
        lng: 121.564558,
      },
    };
  },
  methods: {
    initialMap(data) {
      this.map = data.map;
      this.google = data.google;
    },
    getMapCenter(mapCenter) {
      this.markers = [];
      this.mapCenter = mapCenter;
    },
    handleMarkers(markers) {
      this.markers = markers;
    },
    deleteMarkers(markers) {
      this.markers = markers;
      console.log(this.markers[1]);
    },
    setPlaces(location) {
      const service = new this.google.maps.places.PlacesService(this.map);
      this.$store.dispatch("getRestaurant", {
        service,
        location,
      });
    },
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },
    // markers() {
    //   const markersList = [
    //     ...this.$store.getters.getRestaurantList.map((rest, index) => {
    //       return {
    //         id: index,
    //         position: { lat: rest.lat, lng: rest.lng },
    //       };
    //     }),
    //   ];
    //   return markersList;
    // },
  },
};
</script>