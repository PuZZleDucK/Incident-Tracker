import React from "react";
import { Box } from "reflexbox";
import ListEntry from "./ListEntry.react.js";

// <IncidentList mapped_incident_data={incident_data} />

class IncidentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapped_incident_data: props.mapped_incident_data};
  }

  render() {
    return (
      <Box className="List" px={2} w={1/3}>
          <ul>
            <li><h2>Current Incidents:</h2></li>
              {this.state.mapped_incident_data.map(function(incident) {
                return (
                  <ListEntry title={incident.title} type={incident.alert_type} key={incident.id} />
                );
              })}
          </ul>
        </Box>
    );
  };
};

export default IncidentList;
