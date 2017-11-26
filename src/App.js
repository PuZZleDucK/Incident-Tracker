
import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import './App.css';
import MenuButton from './components/Button.react.js';
import ClusterMap from './components/ClusterMap.js';
import PageHeader from './components/PageHeader.react.js';
import IncidentList from './components/IncidentList.react.js';


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
          <PageHeader />
          <Flex className='Mobile' p={2}>
            <Box className='Map' vertical-align='center' px={2} w={3/3}>
                <ClusterMap incident_data={incident_data} />
            <MenuButton />
            </Box>
          </Flex>
        </div>
      );
    } else if(mobile && display_list) {
        return (
          <div className="App">
          <header className="App-header">
          <PageHeader />
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
        <PageHeader />
          <Flex className='Desktop' p={2}>
            <IncidentList incident_data={incident_data} />
            <Box className='Map' px={2} w={2/3}>
                <ClusterMap incident_data={incident_data} />
            </Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
