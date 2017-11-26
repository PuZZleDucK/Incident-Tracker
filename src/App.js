
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import logo from './logo.svg';
import './App.css';
const { compose, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");


const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -37.643, lng: 144.928 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

// function showPopup(evt) {
//   this.overlayComp.overlay.setPosition(evt.coordinate);
//   var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
//
//   this.popupComp.setContents(
//     `<p>You clicked here:</p><code> ${lonlat[0]}, ${lonlat[1]}</code>`
//   );
//   this.popupComp.show();
// }

// var iconFeature = new ol.Feature(new ol.geom.Point([-37.643, 144.928]));
// var source = new ol.source.Vector({features: [iconFeature]});
// var marker = new custom.style.MarkerStyle(
//   'https://openlayers.org/en/v4.0.1/examples/data/icon.png'
// );

class App extends Component {
  constructor() {
    super();
    this.state = { displayWidth: window.innerWidth };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ displayWidth: window.innerWidth });
  };



  render() {
    const { displayWidth } = this.state;
    const mobile = (displayWidth <= 500);
    if(mobile) {
      return (
        <div className="App">
          <header className="App-header">
            <Flex p={2} align='center'>
              <Box px={2} w={1/8}><img src={logo} className="App-logo" alt="logo" /></Box>
              <Box px={2} w={7/8} align='left'><h1 align='left' className="App-title">Incident Tracker</h1></Box>
            </Flex>
          </header>
          <Flex className='Mobile' p={2}>
            <Box className='Map' vertical-align='center' px={2} w={3/3}>
            <MapWithAMakredInfoWindow
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChLjO94fJ0jizj33jXsoyOU2cyV4j3FWY&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <Box className='ListButton'><h1>Button</h1></Box>
            </Box>
          </Flex>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Flex p={2} align='center'>
              <Box px={2} w={1/8}><img src={logo} className="App-logo" alt="logo" /></Box>
              <Box px={2} w={7/8} align='left'><h1 align='left' className="App-title">Incident Tracker</h1></Box>
            </Flex>
          </header>
          <Flex className='Desktop' p={2}>
            <Box className='List' px={2} w={1/3}>
              <ul>
                <li><h2>Incident 1</h2></li>
                <li><h2>Incident 2</h2></li>
                <li><h2>Incident 3</h2></li>
              </ul>
            </Box>
            <Box className='Map' px={2} w={2/3}>
            <MapWithAMakredInfoWindow
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChLjO94fJ0jizj33jXsoyOU2cyV4j3FWY&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
