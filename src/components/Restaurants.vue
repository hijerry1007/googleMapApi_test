<template>
  <div class="restaurantBox">
    <Spinner v-show="isLoading" />
    <div v-show="!isLoading">
      <div v-show="!isRestaurantIn">附近沒有餐廳</div>
      <ul v-show="isRestaurantIn">
        <li v-for="(restaurant, index) in restaurants" :key="index" :restaurant="restaurant">
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
                    @click="getDetails(restaurant.place_id)"
                  >More</button>
                  <div v-show="isDetailShow && isShowRestaurantId === restaurant.place_id">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">電話: {{details.formatted_phone_number}}</li>
                      <li class="list-group-item">
                        網址:
                        <a :href="details.website" class="card-link">{{details.website}}</a>
                      </li>
                      <li class="list-group-item">評價: {{details.rating}}顆星</li>
                    </ul>
                    <button type="button" class="btn btn-info btn-sm mt-2" @click="isShow()">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import restaurantHelper from "../../apis/googlemapApi";
import { mapGetters } from "vuex";
import Spinner from "../components/Spinner";

export default {
  name: "Restaurants",
  components: {
    Spinner,
  },
  data() {
    return {
      isDetailShow: false,
      isShowRestaurantId: null,
      isRestaurantIn: false,
      details: {
        name: "",
        formatted_phone_number: "",
        website: "",
        rating: "",
      },
      restaurants: {},
    };
  },
  computed: {
    ...mapGetters({
      nameFromStore: ["restaurantList", "isLoading"],
    }),
    restaurantList: {
      get() {
        return this.$store.state.restaurants;
      },
      set(newVal) {
        let restaurantList = newVal.map((d) => ({
          ...d,
          name: d.name.substring(0, 15),
        }));

        return restaurantList;
      },
    },
    isLoading: {
      get() {
        return this.$store.state.isLoading;
      },
      set(newVal) {
        return newVal;
      },
    },
  },
  watch: {
    restaurantList(newValue) {
      if (newValue !== null) {
        this.isRestaurantIn = true;
      }

      if (newValue[0] === undefined) {
        this.isRestaurantIn = false;
      }

      if (newValue === null) {
        this.isRestaurantIn = false;
      }
      this.restaurants = { ...this.restaurants, ...newValue };
    },
  },
  methods: {
    isShow(id) {
      this.isShowRestaurantId = id;
      this.isDetailShow = !this.isDetailShow;
    },
    async getDetails(id) {
      const { data } = await restaurantHelper.getRestaurantDetail(id);
      this.details = {
        ...this.details,
        ...data.result,
      };
      this.isShow(id);
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