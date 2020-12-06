import React from 'react';
import './About.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends React.Component {
  goAbout = () => {
    this.props.history.push("/about");
  }
  goHome = () => {
    this.props.history.push("/");
  }
  render() {
    return (
      <div class="about">
        <Header goToHome={this.goHome} goToAbout={this.goAbout} page={"about"}/>
        <div class="aboutintro">
        <div class="abouttext">
          <div class="nicetomeet">Nice to meet you!</div>
            <div>Hello! I'm Name (she/her), a senior at Brown University studying Computer Science and Economics. I immersed myself in tech after I came to college and took my very first programming course out of pure curiosity. Coding allowed me to exercise my problem solving skills, think critically, and work with highly driven peers. Since then, I've worked on various meaningful projects both in and out of the classroom.</div>
          </div>
        </div>
        <br></br>
        <div className="experiencesection">
        <Container fluid={true}>
            <Row noGutters={true}>
              <Col xs={0} sm={0} md={5} lg={5}>
                <div className="imageplacement">
                  <img className ="actimage" src="https://i.ibb.co/SQHzcdP/Screen-Shot-2020-12-06-at-12-29-16.png"/>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7}>
              <div className="experiencetitle summertime">What I'm up to after school </div>
                <div className="section-experience summertime">
                  <p className="section-title summertime">Co-director @ Hack@Brown</p>
                  <p>📚 Organizing the largest and oldest hackathon on campus </p>
                </div>
                <div className="section-experience summertime">
                  <p className="section-title summertime">Teaching Assistant @ CS Department</p>
                  <p>📚 Leading weekly sections and TA hours for CS0150 and CS0020</p>
                </div>
              </Col>
            </Row>
          </Container> 
        
            <Container fluid={true}>
            <Row noGutters={true}>
              <Col xs={0} sm={0} md={5} lg={5}>
                <div className="imageplacement">
                  <img src="https://i.ibb.co/WcBt705/Continuous-one-line-drawing-of.jpg"/>
                </div>
              </Col>
              <Col xs={12} sm={12} md={7} lg={7}>
              <div className="experiencetitle summertime">Summertime experiences </div>
            <div className="section-experience summertime">
              <p className="section-title summertime">Software Engineer Intern @ Facebook</p>
              <p>🌞 Worked on projects that help make Facebook Communities a safer space</p>
            </div>
            <div className="section-experience summertime">
              <p className="section-title summertime">Security Intern @ Deloitte</p>
              <p>🌞 Implemented features to create internal tools for vulnerability management </p>
            </div>
              </Col>
            </Row>
          </Container> 
          
        </div>
        <div className = "footercenter">
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;