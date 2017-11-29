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
    this.state = { displayWidth: window.innerWidth, incident_data: [], displayed_incident_data: [], display_list: false };
    this.updateDisplayedList = this.updateDisplayedList.bind(this);
  };

  updateDisplayedList(data, th) {
    this.setState({
      displayed_incident_data: data
    });
  }

  tick() {
    console.log("tick");
    // this.setState({
    //   date: new Date()
    // });
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    const th = this;
    const request = new XMLHttpRequest();
    request.responseType = "text/plain";
    request.open("GET", "https://cors-anywhere.herokuapp.com/https://victraffic-api.wd.com.au/api/v3/incidents", true);
    request.onload = function() {
      const responseText = request.responseText;
      th.setState({
        incident_data: JSON.parse(responseText).incidents
      });
    };

    request.onerror = function() {
      console.log(" --- There was an error fetching data! ---");
    };
    request.send();
  };

  componentDidMount() {
    this.updateTimer = setInterval(
      () => this.tick(),
      10000
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    clearInterval(this.updateTimer);
  };

  handleWindowSizeChange = () => {
    this.setState({ displayWidth: window.innerWidth });
  };

  render() {
    const mobile = (this.state.displayWidth < 600);

    if(mobile) {
      return (
        <div className="App">
          <PageHeader />
          <Flex className="Mobile" p={2}>
            <Box className="Map" vertical-align="center" px={2} w={3/3}>
              <ClusterMap incident_data={this.state.incident_data} updateDisplayedList={this.updateDisplayedList} />
              <MenuButton mapped_incident_data={this.state.displayed_incident_data} />
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
              <IncidentList mapped_incident_data={this.state.displayed_incident_data} />
            </Box>
            <Box className="Map" px={2} w={2/3}>
                <ClusterMap incident_data={this.state.incident_data} updateDisplayedList={this.updateDisplayedList} />
            </Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
