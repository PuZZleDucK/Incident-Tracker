import React from "react";
const {
  InfoWindow,
} = require("react-google-maps");

class InfoPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { marker: props.marker };
  }

  render() {
    // const {displayed} = this.state
    const {onClick} = this.state;
    // if(displayed) {
      return (
        <InfoWindow
          onCloseClick={onClick}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              <h5>{this.state.marker.alert_type}</h5>
              <p>{this.state.marker.title}</p>
              <p>{this.state.marker.description}</p>
            </div>
          </div>
        </InfoWindow>
      );
    // } else {
    //   return (<div></div>);
    // }
  };
};

export default InfoPopup;
