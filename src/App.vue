<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h1 class="title">GoogleMapApi:尋找鄰近的餐廳</h1>
      </div>
      <div class="row mt-5">
        <div class="col-4">
          <Search />
          <Restaurants />
        </div>
        <div class="col-8">
          <Map class="map" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Map from "./components/Map";
import Restaurants from "./components/Restaurants";

export default {
  name: "App",
  components: {
    Search,
    Map,
    Restaurants,
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
  height: 600px;
}

.title {
  margin: 0 auto;
}
</style>