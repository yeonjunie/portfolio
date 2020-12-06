import React from 'react';
import './Header.css';

class Header extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    let page = this.props.page;
    let goToHome = this.props.goToHome;
    let goToAbout = this.props.goToAbout;
    let isHome = this.props.page === "home";
    let isAbout = this.props.page === "about";
    return (
        <div className="header">
          <div className="header__content">
            <div className="logo" onClick={goToHome}> Name </div>
            <div className="settings">
              <div class="hometab" onClick={goToHome} style={isHome ? {color: "grey"} :{color: "black"}}> home </div>
              <div class="abouttab" onClick={goToAbout} style={isAbout ? {color: "grey"} :{color: "black"}}> about </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;