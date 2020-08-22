const mapSettings = {
  clickableIcons: false,
  streetViewControl: false,
  panControlOptions: false,
  gestureHandling: "cooperative",
  mapTypeControl: false,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 5,
  minZoom: 2,
  maxZoom: 8,
  mapTypeId: "terrain",
}

const POINT_MARKER_ICON_CONFIG = {
  path: "M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",
  strokeOpacity: 0.7,
  strokeWeight: 4,
  strokeColor: "rgb(0, 184, 83)",
  fillColor: "rgb(255, 255, 255)",
  fillOpacity: 0.7,
  scale: 1
};

export { mapSettings, POINT_MARKER_ICON_CONFIG } 
