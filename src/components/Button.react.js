var React = require('react');
const FaMenu = require("react-icons/lib/fa/bars");

class MenuButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {display_list: false}
  }

  ListButtonClicked(event){
    this.setState(state => ({display_list: !this.state.display_list}));
  }


  render() {
    return (
      <button className='ListButton' onClick={this.ListButtonClicked} ><FaMenu size={50} /></button>
    );
  }
}

module.exports = MenuButton;
