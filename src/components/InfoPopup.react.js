import React from "react";
const {
  InfoWindow,
} = require("react-google-maps");

class InfoPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { marker: props.marker, click_event: props.click_event };
  }

  render() {
    const {click_event} = this.state;
      return (
        <InfoWindow
          onCloseClick={click_event}
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
  };
};

export default InfoPopup;
