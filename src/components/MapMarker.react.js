import React from "react";
import InfoPopup from "./InfoPopup.react.js";
const {
  Marker,
} = require("react-google-maps");

class MapMarker extends React.Component {
  constructor(props) {
    super(props);
    console.log("--- MARKER init");
    this.state = {display_popup: false, marker_data: props.marker_data};
  }

  onClickMarker = () => {
    this.setState((prevState, props) => ({
      display_popup: (!prevState.display_popup)
    }));
  }

  render() {
    if (this.state.display_popup) {
      return (
        <Marker
          key={this.state.marker_data.description}
          position={{ lat: parseFloat(this.state.marker_data.lat, 10), lng: parseFloat(this.state.marker_data.long, 10) }}
          onClick={this.onClickMarker}
        >
        <InfoPopup marker={this.state.marker_data} click_event={this.onClickMarker} displayed={this.display_popup} />
        </Marker>
      );
    } else {
      return (
        <Marker
          key={this.state.marker_data.description}
          position={{ lat: parseFloat(this.state.marker_data.lat, 10), lng: parseFloat(this.state.marker_data.long, 10) }}
          onClick={this.onClickMarker}
        >
        </Marker>
      );
    }
  };
};



// withStateHandlers(() => ({
//   isOpen: false,
// }), {
//   onToggleOpen: ({ isOpen }) => () => ({
//     isOpen: !isOpen,
//   })
// }),

// <MapMarker
//   key={marker.id}
//   position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.long) }}
//   onClick={props.onToggleOpen}
// >
//
// {props.isOpen && <InfoPopup marker={marker} />}
//
// </Marker>



export default MapMarker;
