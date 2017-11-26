
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import logo from './logo.svg';
import './App.css';
import MenuButton from './components/Button.react.js';
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { compose, withProps, withHandlers, withStateHandlers } = require("recompose");

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyChLjO94fJ0jizj33jXsoyOU2cyV4j3FWY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
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
    defaultZoom={7}
    defaultCenter={{ lat: -37.643, lng: 144.928 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={30}
    >
      {props.incident_data.map(marker => (
        <Marker
          key={marker.description}
          position={{ lat: parseFloat(marker.lat, 10), lng: parseFloat(marker.long, 10) }}
          onClick={props.onToggleOpen}
        >

        {props.isOpen && <InfoWindow
          onCloseClick={props.onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              <h5>{marker.alert_type}</h5>
              <p>{marker.title}</p>
              <p>{marker.description}</p>
            </div>
          </div>
        </InfoWindow>}

        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
);


class App extends Component {
  constructor() {
    super();
    this.state = { displayWidth: window.innerWidth, incident_data: [], display_list: false };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    console.log("--- will mount");
    const th = this;
    const request = new XMLHttpRequest();
    request.responseType = "text/plain"
    request.open('GET', "https://crossorigin.me/https://victraffic-api.wd.com.au/api/v3/incidents", true);
    request.onload = function() {
     var responseText = request.responseText;
     console.log("--- response");
           th.setState({
             incident_data: JSON.parse(responseText).incidents
           });
    };

    request.onerror = function() {
      console.log("--- error");
      console.log('There was an error!');
    };
    request.send();

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ displayWidth: window.innerWidth });
  };



  render() {
    const { displayWidth } = this.state;
    const { incident_data } = this.state;
    const { display_list } = this.state;
    const mobile = (displayWidth <= 500);

    if(mobile && !display_list) {
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
                <MapWithAMarkerClusterer incident_data={incident_data} />
            <MenuButton />
            </Box>
          </Flex>
        </div>
      );
    } else if(mobile && display_list) {
        return (
          <div className="App">
          <header className="App-header">
            <Flex p={2} align='center'>
              <Box px={2} w={1/8}><img src={logo} className="App-logo" alt="logo" /></Box>
              <Box px={2} w={7/8} align='left'><h1 align='left' className="App-title">Incident Tracker</h1></Box>
            </Flex>
          </header>
            <Flex className='Mobile' p={2}>
            <Box className='List' px={2} w={1/3}>
                <ul>
                  <li><h2>Current Incidents:</h2></li>
                    {this.state.incident_data.map(function(incident) {
                      return (
                        <li key={incident.title} className="incident">
                            <h3>{incident.alert_type} - {incident.title}</h3>
                        </li>
                      );
                    })}
                </ul>
                <MenuButton />
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
                <li><h2>Current Incidents:</h2></li>
                  {this.state.incident_data.map(function(incident) {
                    return (
                      <li key={incident.title} className="incident">
                          <h3>{incident.alert_type} - {incident.title}</h3>
                      </li>
                    );
                  })}
              </ul>
            </Box>
            <Box className='Map' px={2} w={2/3}>
                <MapWithAMarkerClusterer incident_data={incident_data} />
            </Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
