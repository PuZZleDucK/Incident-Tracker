import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title, type: props.type, key: props.key}
  }

  render() {
    return (
      <li key={this.state.key} className="incident">
        <h5>Type: {this.state.type}</h5>
        <h6>Title: {this.state.title}</h6>
      </li>
    );
  }
}

export default ListEntry;
