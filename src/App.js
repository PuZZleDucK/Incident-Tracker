
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, FusionTablesLayer } from "react-google-maps"

import logo from './logo.svg';
import './App.css';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: -37.643, lng: 144.928 }}
  >
  <FusionTablesLayer
    url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
    options={{
      query: {
        select: `Geocodable address`,
        from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
      }
    }}
  />
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    {props.isMarkerShown && <Marker position={{ lat: -37.643, lng: 144.928 }} />}
  </GoogleMap>
))

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
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
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
