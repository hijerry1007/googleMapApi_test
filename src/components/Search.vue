<template>
  <div class="box">
    <div class="search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Google幫你找" ref="site" v-model="site" />
        <button type="button" class="btn btn-info ml-2" @click.prevent="search">搜尋</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      autocomplete: null,
      site: "",
      place: null,
    };
  },
  computed: {
    ...mapGetters({
      nameFromStore: ["googleApi", "map"],
    }),
    googleApi: {
      get() {
        return this.$store.state.google;
      },
      set(newGoogle) {
        return newGoogle;
      },
    },
    map: {
      get() {
        return this.$store.state.map;
      },
      set(newMap) {
        return newMap;
      },
    },
  },
  watch: {
    googleApi(newVal) {
      this.googleApi = newVal;
      this.autoSite();
    },
    map(newVal) {
      this.map = newVal;
    },
  },
  methods: {
    autoSite() {
      let options = {
        componentRestrictions: { country: "tw" },
      };
      this.autocomplete = new this.googleApi.maps.places.Autocomplete(
        this.$refs.site,
        options
      );
      this.autocomplete.addListener("place_changed", () => {
        this.place = this.autocomplete.getPlace();

        if (this.place.geometry) {
          let mapCenter = {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          };
          this.$store.dispatch("handleMapCenter", mapCenter);
        }
      });
    },
    search() {
      const geocoder = new this.googleApi.maps.Geocoder();
      console.log(this.site);
      geocoder.geocode(
        {
          address: this.site,
          componentRestrictions: { country: "tw" },
        },
        (results, status) => {
          if (status === "OK") {
            let mapCenter = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            };
            this.$store.dispatch("handleMapCenter", mapCenter);
          } else {
            alert("查無地址");
          }
        }
      );
    },
  },
};
</script>
