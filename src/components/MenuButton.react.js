import IncidentList from "./IncidentList.react.js";
const React = require("react");
const FaMenu = require("react-icons/lib/fa/bars");
const FaClose = require("react-icons/lib/fa/close");

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display_mobile_list: false, mapped_incident_data: [] };
    this.ListButtonClicked = this.ListButtonClicked.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ mapped_incident_data: nextProps.mapped_incident_data });
  }

  ListButtonClicked(event){
    this.setState(state => ({display_mobile_list: !this.state.display_mobile_list}));
  }

  render() {
    if(this.state.display_mobile_list) {
      return (
        <div className="FloatingList">
          <IncidentList mapped_incident_data={this.state.mapped_incident_data} />
          <button className="ListButtonClose" onClick={this.ListButtonClicked} ><FaClose size={30} /></button>
        </div>
      );
    } else {
      return (
        <div className="FloatingButton">
          <button className="ListButton" onClick={this.ListButtonClicked} ><FaMenu size={30} /></button>
          <button className="ListCounter" onClick={this.ListButtonClicked} >{this.state.mapped_incident_data.length}</button>
        </div>
      );
    }
  };
};

export default MenuButton;
