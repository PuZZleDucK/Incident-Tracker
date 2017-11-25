import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';
import logo from './logo.svg';
import './App.css';

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
    const mobile = (displayWidth <= 500)
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
              <h1>Map</h1>
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
            <Box className='List' px={2} w={1/3}><h1>Incident List</h1></Box>
            <Box className='Map' vertical-align='center' px={2} w={2/3}><h1>Map</h1></Box>
          </Flex>
        </div>
      );
    }
  }
}

export default App;
