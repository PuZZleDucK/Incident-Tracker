var React = require('react');
const FaMenu = require("react-icons/lib/fa/bars");

class MenuButton extends React.Component {
  ListButtonClicked(event){

  }


  render() {
    return (
      <button className='ListButton' onClick={this.ListButtonClicked} ><FaMenu size={50} /></button>
    );
  }
}

module.exports = MenuButton;
