import React from "react";
import ListEntry from "./ListEntry.react.js";

class IncidentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapped_incident_data: props.mapped_incident_data};
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("--- list change");
    this.setState({ mapped_incident_data: nextProps.mapped_incident_data });
  }

  render() {
    return (
          <ul>
            <li><h2>Current Incidents:</h2></li>
              {this.state.mapped_incident_data.map(function(incident) {
                return (
                  <ListEntry title={incident.title} type={incident.alert_type} key={incident.id} />
                );
              })}
          </ul>
    );
  };
};

export default IncidentList;
