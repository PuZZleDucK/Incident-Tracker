import React from "react";
import logo from "./../logo.svg";
import { Flex, Box } from "reflexbox";

class PageHeader extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Flex p={2} align="center">
          <Box px={2} w={1/8}><img src={logo} className="App-logo" alt="logo" /></Box>
          <Box px={2} w={7/8} align="left"><h1 align="left" className="App-title">Incident Tracker</h1></Box>
        </Flex>
      </header>
    );
  };
};

export default PageHeader;
