<script>
import { POINT_MARKER_ICON_CONFIG } from "../../constants/mapSettings";

export default {
  name: "GoogleMapMarker",
  props: {
    google: {
      type: Object,
      require: true,
    },
    map: {
      type: Object,
      require: true,
    },
    marker: {
      type: Object,
      require: true,
    },
  },
  mounted() {
    const { Marker } = this.google.maps;
    const newMarker = new Marker({
      position: this.marker.geometry.location,
      marker: this.marker,
      map: this.map,
      icon: POINT_MARKER_ICON_CONFIG,
    });
    this.$emit("addMarkers", newMarker);
  },
  render() {
    return this.marker;
  },
};
</script>