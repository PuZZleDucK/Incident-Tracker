const React = require("react");
const FaMenu = require("react-icons/lib/fa/bars");
const FaAnchor = require("react-icons/lib/fa/anchor");

class MenuButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { display_mobile_list: false };
    this.ListButtonClicked = this.ListButtonClicked.bind(this);
  }

  ListButtonClicked(event){
    this.setState(state => ({display_mobile_list: !this.state.display_mobile_list}));
  }

  render() {
    const { display_mobile_list } = this.state;
    if(display_mobile_list) {
      return (
        <button className="ListButton" onClick={this.ListButtonClicked} ><FaAnchor size={30} /></button>
      );
    } else {
      return (
        <button className="ListButton" onClick={this.ListButtonClicked} ><FaMenu size={30} /></button>
      );
    }
  };
};

module.exports = MenuButton;
