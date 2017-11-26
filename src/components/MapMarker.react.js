import React from 'react';
import InfoPopup from './InfoPopup.react.js';
const {
  Marker,
} = require("react-google-maps");

class MapMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display_popup: false, marker_data: props.marker_data}
  }

  onClickMarker = () => {
    this.setState((prevState, props) => ({
      display_popup: (!prevState.display_popup)
    }));
  }

  render() {
    return (
      <Marker
        key={this.state.marker_data.description}
        position={{ lat: parseFloat(this.state.marker_data.lat, 10), lng: parseFloat(this.state.marker_data.long, 10) }}
        onClick={this.onClickMarker}
      >
      <InfoPopup marker={this.state.marker_data} onClick={this.onClickMarker} displayed={this.display_popup} />

      </Marker>
    );
  }
}

export default MapMarker;
