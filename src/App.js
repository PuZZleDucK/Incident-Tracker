
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import logo from './logo.svg';
import './App.css';
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');
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

class App extends Component {
  constructor() {
    super();
    this.state = { displayWidth: window.innerWidth, incident_data: [{"alert_type": "tow_allocation", "title": "Eastlink -, Carrum Downs"}] };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    console.log("--- will mount");
    var th = this;
    // this.serverRequest =
    //   axios.get("https://victraffic-api.wd.com.au/api/v3/incidents")
    //     .then(function(result) {
    //       console.log("--- input");
    //       th.setState({
    //         incident_data: result.data.incidents
    //       });
    //     })
    // jsonp('https://victraffic-api.wd.com.au/api/v3/incidents', null, function (err, data) {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //   }
    // });
    // axios({
    //     url: 'https://victraffic-api.wd.com.au/api/v3/incidents',
    //     adapter: jsonpAdapter
    // }).then((res) => {
    //
    // });

    // axios.get({
    //   url:'victraffic-api.wd.com.au/api/v3/incidents/',
    //   responseType:'text/plain',
    // })
    // .then(function (response) {
    //   console.log("--- response");
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log("--- error");
    //   console.log(error);
    // });
    // function createCORSRequest(method, url) {
    //   var xhr = new XMLHttpRequest();
    //   if ("withCredentials" in xhr) {
    //     xhr.open(method, url, true);
    //   } else if (typeof XDomainRequest != "undefined") {
    //     xhr = new XDomainRequest();
    //     xhr.open(method, url);
    //   } else {
    //     xhr = null;
    //   }
    //   return xhr;
    // }
    //
    // var xhr = createCORSRequest('GET', 'https://victraffic-api.wd.com.au/api/v3/incidents');
    // console.log("--- try CORS");
    // if (!xhr) {
    //   console.log("--- no CORS");
    //   throw new Error('CORS not supported');
    // }
    // xhr.onload = function() {
    //  var responseText = xhr.responseText;
    //  console.log("--- response");
    //  console.log(responseText);
    //  // process the response.
    // };
    //
    // xhr.onerror = function() {
    //   console.log("--- error");
    //   console.log('There was an error!');
    // };
    // xhr.withCredentials = true;
    // xhr.send();
    var request;
    request = new XMLHttpRequest();
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
                  {/* Don't have an ID to use for the key, URL work ok? */}
                  {this.state.incident_data.map(function(incident) {
                    return (
                      <li key={incident.title} className="incident">
                          <h4>{incident.alert_type} - {incident.title}</h4>
                      </li>
                    );
                  })}
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
