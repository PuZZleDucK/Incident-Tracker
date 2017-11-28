import React, { Component } from "react";
import { Flex, Box } from "reflexbox";
import "./App.css";
import MenuButton from "./components/MenuButton.react.js";
import ClusterMap from "./components/ClusterMap.js";
import IncidentList from "./components/IncidentList.react.js";
import PageHeader from "./components/PageHeader.react.js";

class App extends Component {
  constructor() {
    super();
    this.state = { displayWidth: window.innerWidth, incident_data: [], display_list: false };
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    const th = this;
    const request = new XMLHttpRequest();
    request.responseType = "text/plain";
    request.open("GET", "https://cors-anywhere.herokuapp.com/https://victraffic-api.wd.com.au/api/v3/incidents", true);
    request.onload = function() {
      const responseText = request.responseText;
      console.log("--- response");
      th.setState({
        incident_data: JSON.parse(responseText).incidents
      });
    };

    request.onerror = function() {
      console.log("--- error");
      console.log("There was an error!");
    };
    request.send();
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  };

  handleWindowSizeChange = () => {
    this.setState({ displayWidth: window.innerWidth });
  };

  ListButtonClicked = () => {
    this.setState((prevState, props) => ({
      display_list: (!prevState.display_list)
    }));
  };

  render() {
    const mobile = (this.state.displayWidth <= 500);

    if(mobile) {
      return (
        <div className="App">
          <PageHeader />
          <Flex className="Mobile" p={2}>
            <Box className="Map" vertical-align="center" px={2} w={3/3}>
              <ClusterMap incident_data={this.state.incident_data} />
              <MenuButton mapped_incident_data={this.state.incident_data} />
            </Box>
          </Flex>
        </div>
      );
    } else {
      return (
        <div className="App">
          <PageHeader />
          <Flex className="Desktop" p={2}>
          <Box className="List" px={2} w={1/3}>
              <IncidentList mapped_incident_data={this.state.incident_data} />
            </Box>
            <Box className="Map" px={2} w={2/3}>
                <ClusterMap incident_data={this.state.incident_data} />
            </Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
