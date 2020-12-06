import React from 'react';
import './Project.css';

class Project extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    return (
      <div className="project">
        <p className="smallTitle">{this.props.smallTitle}</p>
        <p className="title" onClick={this.props.click}>{this.props.title}</p>
        <div> <img onClick={this.props.click} className="image-project" src={this.props.image}/></div>
      </div>
    );
  }
}

export default Project;