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
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDHhU5BkPy67hFMYf_7M7to7jcgG-xaEjI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    th: this,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}
      this.setState({
        bounds: null,
        center: { lat: -37.643, lng: 144.928 },
        markers_on_screen: [],
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.markers_on_screen = [];
          const min_long = refs.map.getBounds()['b']['b'];
          const min_lat = refs.map.getBounds()['f']['b'];
          const max_long = refs.map.getBounds()['b']['f'];
          const max_lat = refs.map.getBounds()['f']['f'];
          for (var i=0; i<this.props.incident_data.length; i++){
            if( this.props.incident_data[i].lat > min_lat &&
                this.props.incident_data[i].lat < max_lat &&
                this.props.incident_data[i].long > min_long &&
                this.props.incident_data[i].long < max_long ) {
                  this.markers_on_screen.push(this.props.incident_data[i])
            }
          }
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
            markers_on_screen: this.markers_on_screen,
          })
          this.props.updateDisplayedList(this.markers_on_screen, this.props.th);
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={12}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    updateDisplayedList={props.updateDisplayedList}
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
    this.state = {incident_data: props.incident_data, updateDisplayedList: props.updateDisplayedList, markers_on_screen: []};
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ incident_data: nextProps.incident_data });
    this.setState({ markers_on_screen: nextProps.markers_on_screen });
  }

  render() {
    return(
      <MapWithCluster incident_data={this.state.incident_data} updateDisplayedList={this.props.updateDisplayedList} />
    );
  };
};

export default ClusterMap;
