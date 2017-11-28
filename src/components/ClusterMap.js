import ClusterGroup from "./ClusterGroup.react.js";
import React from "react";
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

const MapWithCluster = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          console.log("getBounds()");
          console.log(refs.map.getBounds());
          //       for (var i=0; i<this.state.incident_data.length; i++){
          //           // if( contains({lat: this.state.incident_data[i].lat, lng: this.state.incident_data[i].long} )) {
          //           //   console.log("--- IN bounds")
          //           // }
          this.setState({
            bounds: refs.map.getBounds(),
          })
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={9}
    center={{ lat: -37.643, lng: 144.928 }}
    onBoundsChanged={props.onBoundsChanged}
  >
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
    <ClusterGroup incident_data={props.incident_data} />
  </GoogleMap>
);


class ClusterMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {incident_data: props.incident_data};
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ incident_data: nextProps.incident_data });
  }

  render() {
    return(
      <MapWithCluster incident_data={this.state.incident_data} />
    );
  };
};

export default ClusterMap;
