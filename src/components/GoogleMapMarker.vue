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

    new Marker({
      position: this.marker.position,
      marker: this.marker,
      map: this.map,
      icon: POINT_MARKER_ICON_CONFIG,
    });
  },
  render() {
    return this.marker;
  },
};
</script>