import React from "react";
import ClusterGroup from "./ClusterGroup.react.js";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");


class ClusterMap extends React.PureComponent {
  state = {
    incident_data: [],
  }

  componentDidMount() {
   // this.delayedShowMarker()
  }

  boundsChanged = () => {
    console.log("--- BOUNDS CHANGED");
    // for (var i=0; i<this.incident_data.length; i++){
        // if( this.myMap.contains({lat: props.incident_data[i].lat, lng: props.incident_data[i].long} )) {
        //   console.log("--- IN bounds")
        // }
    // }
  }

  constructor(props) {
    super(props);
    this.state = {incident_data: props.incident_data};
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("--- map props change");
    this.setState({ incident_data: nextProps.incident_data });
  }

  render() {
    console.log("--- MAP RENDER");
    const MapWithAMarkerClusterer = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        onBoundsChanged={ () => {
          this.boundsChanged();
        }}
        defaultZoom={7}
        defaultCenter={{ lat: -37.643, lng: 144.928 }}
      >
        <ClusterGroup incident_data={this.state.incident_data} />
      </GoogleMap>
    ));

    return(
      <MapWithAMarkerClusterer
        incident_data={this.incident_data}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChLjO94fJ0jizj33jXsoyOU2cyV4j3FWY&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}





export default ClusterMap;
