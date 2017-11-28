import React from "react";
import MapMarker from "./MapMarker.react.js";
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

class ClusterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {incident_data: props.incident_data};
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("--- group props change");
    console.log(nextProps);
    this.setState({ incident_data: nextProps.incident_data });
  }

  onMarkerClustererClick(markerClusterer) {
    // const clickedMarkers = markerClusterer.getMarkers();
  }

  render() {
    console.log("--- GROUP render data");
    console.log(this);
    return (
      <MarkerClusterer
        onClick={this.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={30}
      >
        {this.state.incident_data && this.state.incident_data.map(marker => (
          <MapMarker marker_data={marker} />
        ))}
      </MarkerClusterer>
    );
  };
};

export default ClusterGroup;
