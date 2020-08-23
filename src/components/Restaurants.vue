<template>
  <div class="restaurantBox">
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.place_id" :restaurant="restaurant">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md">
              <div class="card-body">
                <h5 class="card-title">{{restaurant.name}}</h5>
                <p class="card-text">
                  <small class="text-muted">地址:{{restaurant.vicinity}}</small>
                </p>
                <button
                  type="button"
                  class="btn btn-info btn-sm mt-2"
                  @click="showDetail(restaurant.place_id)"
                >More</button>
                <div class="details" v-show="isDetailShow">
                  <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">{{details.name}}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">電話: {{details.formatted_phone_number}}</li>
                      <li class="list-group-item">
                        網址:
                        <a :href="details.website" class="card-link">{{details.website}}</a>
                      </li>
                      <li class="list-group-item">評價: {{details.rating}}顆星</li>
                    </ul>
                  </div>
                  <button type="button" class="btn btn-info btn-sm mt-2" @click="isShow()">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Restaurants",
  data() {
    return {
      isDetailShow: false,
    };
  },
  computed: {
    restaurants() {
      if (this.$store.state.restaurants === null) {
        return null;
      }
      let restaurants = this.$store.state.restaurants.map((d) => ({
        ...d,
        name: d.name.substring(0, 15),
      }));

      return restaurants;
    },
    details() {
      if (this.$store.state.details === null) {
        return null;
      }
      return this.$store.state.details;
    },
    comments() {
      return this.details.reviews;
    },
  },
  methods: {
    showDetail(id) {
      this.isShow();
      this.$store.dispatch("getDetail", id);
    },
    isShow() {
      this.isDetailShow = !this.isDetailShow;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>