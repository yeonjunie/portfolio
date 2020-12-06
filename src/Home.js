import React from 'react';
import './Home.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project.js';

class Home extends React.Component {
  goAbout = () => {
    this.props.history.push("/about");
  }
  goHome = () => {
    this.props.history.push("/");
  }
  goElectry = () => {
    this.props.history.push("/electry");
  }
  goSportsHats = () => {
    this.props.history.push("/sports-hats");
  }
  goChongQingHouse = () => {
    this.props.history.push("/chongqing-house");
  }
  goGooey = () => {
    this.props.history.push("/gooey");
  }
  render() {
    return (
      <div class="home">
        <Header goToHome={this.goHome} goToAbout={this.goAbout} page={"home"}/>
        <div class="intro">
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={6}>
              <div>
                <img src="https://i.ibb.co/BNXhKdX/Continuous-one-line-drawing-of-abstract-girl-face-Beauty-women-sketch-hand-drawn-vector-illustration.jpg"/>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div class="hello">
                <div class="name">Hello! I'm Name.</div>
                <div>I'm an aspiring software engineer passionate about the intersection of business and technology.</div>
                <br></br>
                <div>   ✨ Graduating Brown University with a degree in Computer Science and Economics.</div>
              </div>
            </Col>
          </Row>
        </Container>        
        </div>
        <Project smallTitle={"ITERATIVE DESIGN"} title={"Electry: Linkedin for Blue Collar Workers"} image={"https://i.ibb.co/vcgb7Td/electry.png"} click={this.goElectry}/>
        <Project smallTitle={"RESPONSIVE DESIGN"} title={"ChongQing House: Authentic Chinese Restaurant"} image={"https://i.ibb.co/ygfQJ0C/Screen-Shot-2020-12-04-at-20-53-42.png"} click={this.goChongQingHouse}/>
        <Project smallTitle={"REACT DEVELOPMENT"} title={"Sports Hats & Caps: online sports shop"} image={"https://i.ibb.co/LRtMHr0/Screen-Shot-2020-12-04-at-21-01-58.png"} click={this.goSportsHats}/>
        <Project smallTitle={"DESIGN APPLICATION"} title={"Gooey: Streamlining the Prototyping Process"} image ={"https://i.ibb.co/5GLYfqw/Screen-Shot-2020-12-06-at-17-40-34.png"} click={this.goGooey}/>
        <div className = "footercenter">
        <Footer />
        </div>
      </div>
    );
  }
}

export default Home;