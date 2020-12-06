import React from 'react';
import './Electry.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SportsHats extends React.Component {
  goAbout = () => {
    this.props.history.push("/about");
  }
  goHome = () => {
    this.props.history.push("/");
  }
  gitClick() {
    window.open("https://github.com/yeonjunie/sportshatsandcaps");
  }
  websiteClick() {
    window.open("https://frozen-island-01680.herokuapp.com");
  }
  render() {
    return (
      <div class="electry">
        <Header goToHome={this.goHome} goToAbout={this.goAbout} page={""}/>
        <div class="electry-banner">
          <img class="electry-img" src="https://i.ibb.co/LRtMHr0/Screen-Shot-2020-12-04-at-21-01-58.png"/>
        </div>
        <section className="electry-section1">
          <div className="electry-title">Online Sports Hats and Caps Shop</div>
          <div className="electry-title-description">Sports Hats and Caps is an <mark>ecommerce website</mark> that sells merchanise <mark>hats from major sports leagues</mark> in the US, notably NBA and MLB. 
          The web interface is designed and implemented with <mark>React</mark>. Some of the main functions include <mark>filtering and sorting items</mark> based on preferences, and <mark>adding and removing items</mark> to the shopping cart.
          </div>
          <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={4} md={4}>
            <div className="type-section">
              <div><b>Type 👇🏻</b></div>
              <p>CS1300 UIUX project</p>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className="date-section">
              <div><b>Date 📅</b></div>
              <p>November 2020</p>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
            <div className="tools-section">
              <div><b>Tools ⚒</b></div>
              <p>React</p>
              </div>
            </Col>
          </Row>
        </Container> 
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
              <div className="left-side"> 
              <div className="small-title-side">APPLYING CONCEPTS</div>
              <h3>Usability Principles</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
            <ol>
              <li>
                <b>Material UI Grid: </b> <mark>grid layout</mark> of products to ensure <mark>consistency</mark> and improve <mark>organization</mark>
              </li>
              <li>
                <b>Material UI Card: </b> card component represents each item; <mark>typographic hierarchy</mark> used to put emphasis on price, and emojis are used to better indicate sports leagues
              </li>
              <li>
                <b>React Bootstrap Table:</b>  table used to <mark>list items</mark> in the cart, showing items added <mark>in order</mark> and easing the process of adding/removing items from the cart
              </li>
              <li>
                <b>React Bootstrap Dropdown Buttons: </b> Dropdown buttons effectively <mark>show different options</mark> for filtering; selected options are <mark>highlighted for better indication</mark>
              </li>
            </ol>
            </Col>
          </Row>
        </Container> 
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
            <div className="left-side"> 
              <div className="small-title-side">IMPLEMENTATION</div>
              <h3>Web Interface</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
            <p>Online Sports Hats and Caps Store built with ReactJS</p>
            <div>
            <img src="https://i.ibb.co/vkmQMGT/website.png" />
            <img src="https://i.ibb.co/3s3P4ps/cart.png" />
            </div>
            <br></br>
            <div className="button-group">
            <Button className="github-button" variant="dark" onClick={this.gitClick}>github repo</Button>
            <Button variant="dark" onClick={this.websiteClick}>visit website</Button>
            </div>
            </Col>
          </Row>
        </Container>
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
              <div className="left-side"> 
              <h3>Takeaways</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
            <p>Overall, I learned a lot about React from this project. More specifically, I was able to get <mark>familiar with components</mark>, how <mark>data</mark> is passed down through components and how various user interactions can <mark>trigger state changes</mark> in components. 
               <br></br>Structuring the <mark>architecture</mark> of the website also helped me understand how components interact with each other to create a <mark>responsive interface</mark>. 
             </p>
            </Col>
          </Row>
        </Container> 
        </section>
        <div className = "footercenter">
          <Footer />
        </div>
      </div>
    );
  }
}

export default SportsHats;