import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faGooglePlus} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    return (
        <div className="footer">
          <div className="connect">Let's Connect!</div>
          <div className="icons">
            <FontAwesomeIcon icon={faGooglePlus} size={"2x"} />
            <span className="middle-icon">
            <FontAwesomeIcon icon={faLinkedin} size={"2x"}/>
            </span>
            <FontAwesomeIcon icon={faGithub} size={"2x"}/>
          </div>
          <div>
            <div className="footerText">©Name 2020</div>
          </div>
        </div>
    );
  }
}

export default Footer;