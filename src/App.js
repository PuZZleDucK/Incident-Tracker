
import React, { Component } from 'react';
import * as ol from 'openlayers';
import { Flex, Box } from 'reflexbox';
import { layer, Map, Layers } from "react-openlayers";

import logo from './logo.svg';
import './App.css';

function showPopup(evt) {
  this.overlayComp.overlay.setPosition(evt.coordinate);
  var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

  this.popupComp.setContents(
    `<p>You clicked here:</p><code> ${lonlat[0]}, ${lonlat[1]}</code>`
  );
  this.popupComp.show();
}

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
    // const middle_of_map = [144.928, -37.643];
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
            <Map className='MapView' view={{center: [144.928, -37.643], zoom: 4}} onClick={showPopup}>
              <Layers>
                <layer.Tile />
              </Layers>
            </Map>
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
              <Map className='MapView' view={{center: [144.928, -37.643], zoom: 4}} onClick={showPopup}>
                <Layers>
                  <layer.Tile />
                </Layers>
              </Map>
            </Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
