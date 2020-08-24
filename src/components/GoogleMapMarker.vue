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
  data() {
    return {
      mapMarker: [],
    };
  },
  mounted() {
    const { Marker } = this.google.maps;
    const newMarker = new Marker({
      position: this.marker.geometry.location,
      map: this.map,
      icon: POINT_MARKER_ICON_CONFIG,
    });
    this.mapMarker.push(newMarker);
  },
  beforeDestroy() {
    this.mapMarker[0].setMap(null);
  },
  render() {
    return this.marker;
  },
};
</script>