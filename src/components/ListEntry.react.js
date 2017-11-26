import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title, type: props.type, key: props.key}
  }

  render() {
    return (
      <li key={this.state.key} className="incident">
        <h1>Type: {this.state.type}</h1>
        <h1>Title: {this.state.title}</h1>
      </li>
    );
  }
}

export default ListEntry;
