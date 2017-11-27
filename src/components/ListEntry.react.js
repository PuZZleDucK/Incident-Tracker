import React from "react";

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title, type: props.type};
  }

  render() {
    return (
      <li className="incident">
        <h5>{this.state.type}</h5>
        <p>{this.state.title}</p>
      </li>
    );
  };
};

export default ListEntry;
