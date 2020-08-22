<template>
  <div id="app">
    <h1>紅鬍子技術考題: GoogleMap</h1>
    <Search />
    <Map class="map" />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Map from "./components/Map";

export default {
  name: "App",
  components: {
    Search,
    Map,
  },
};
</script>



<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.map {
  height: 400px;
}
</style>