import React from 'react';
import { Box } from 'reflexbox';
import ListEntry from './ListEntry.react.js';

class IncidentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {incident_data: props.incident_data}
  }

  render() {
    return (
      <Box className='List' px={2} w={1/3}>
          <ul>
            <li><h2>Current Incidents:</h2></li>
              {this.state.incident_data.map(function(incident) {
                return (
                  <ListEntry title={incident.title} type={incident.alert_type} key={incident.id} />
                );
              })}
          </ul>
        </Box>
    );
  }
}

export default IncidentList;
