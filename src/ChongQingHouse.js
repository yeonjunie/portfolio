import React from 'react';
import './Electry.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ChongQingHouse extends React.Component {
  goAbout = () => {
    this.props.history.push("/about");
  }
  goHome = () => {
    this.props.history.push("/");
  }
  chongQingHouseClick() {
    window.open("https://github.com/yeonjunie/sportshatsandcaps");
  }
  websiteClick() {
    window.open("https://arcane-bastion-59858.herokuapp.com/redesign.html");
  }
  render() {
    return (
      <div class="electry">
        <Header goToHome={this.goHome} goToAbout={this.goAbout} page={""}/>
        <div class="electry-banner">
          <img class="electry-img" src="https://i.ibb.co/ygfQJ0C/Screen-Shot-2020-12-04-at-20-53-42.png"/>
        </div>
        <section className="electry-section1">
          <div className="electry-title">Redesigning ChongQing House Website</div>
          <div className="electry-title-description">One of my favorite places to eat around Brown's campus is <b>Chong Qing House</b>. I've used their website amid the Covid outbreak and thought it would be meaningful to <b>evaluate and redesign their website</b> as their old customer.</div>
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
              <p>Balsamiq, Figma, HTML/CSS</p>
              </div>
            </Col>
          </Row>
        </Container> 
        <div className="button-group chong-button">
            <Button variant="dark" onClick={this.ChongQingHouse}>visit the original website</Button>
            </div>
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
              <div className="left-side"> 
              <div className="small-title-side">INDENTIFICATION</div>
              <h3>Usability Problems</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
            <p>Upon revisiting their website, I was able to pinpoint some usability issues that I've learned from class.</p>
            <div><img className="single-style-image" src="https://i.ibb.co/dQWcWrw/website.png"/></div>
              <ol>
                <li>Header of website is too <b>lengthy</b></li>
                <li>The Categories tab is <b>repetitive</b>, “Menu” tab exists</li>
                <li>Having today’s date doesn’t seem necessary</li>
                <li>Restaurant description is <b>misleading</b> and is not up to date</li>
                <li>Search menu can be in the <b>navigation bar</b></li>
                <li><b>Order</b> of the tabs on the navigation bar isn’t coherent</li>
                <li><b>Duplicate</b> navigation bar in the footer</li>
                <li>Could mention these are notices regarding Covid response</li>
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
              <div className="small-title-side">EVALUATION</div>
              <h3>Accessibility Analysis</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
              <div><img className="single-style-image" src="https://i.ibb.co/6DXTBy1/accessibility.png"/></div>
            
            <p>As shown in the <b>WebAIM WAVE analysis</b>, the website <mark>accounts for most accessibility issues</mark> and uses <mark>proper navigation and 
              elements to structure the page</mark>. This allows the screen reader to read the contents 
              of the webpage from top to bottom in coherent order. There are a 
              couple of alerts as shown in the evaluation tool such as redundant links, 
              redundant title texts, and small text sizes.
            </p>
            </Col>
          </Row>
        </Container>
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
            <div className="left-side"> 
              <div className="small-title-side">STEP ONE</div>
              <h3>Low Fidelity Wireframe</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
            <p>
              Combining all the problems I've identified above, I put together a <b>low-fidelity wireframe</b> of its main home page in three different layouts using <b>Balsamiq</b>.
              </p>
              <Container fluid={true}>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={4} md={4}>
                      <img className="project-style-image" src="https://i.ibb.co/Bq5h1V0/low1.png"/>
                      <div className="image-description">Mobile Version</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={4} md={4}>
                    <img className="project-style-image" src="https://i.ibb.co/swxtRvN/low2.png"/>
                    <div className="image-description">Tablet Version</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={4} md={4}>
                    <img className="project-style-image" src="https://i.ibb.co/3N3zRtX/low3.png"/>
                    <div className="image-description">Desktop Version</div>
                    </Col>
                  </Row>
                </Container> 
            </Col>
          </Row>
        </Container>
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
            <div className="left-side"> 
              <div className="small-title-side">STEP TWO</div>
              <h3>High Fidelity Prototype</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
              <p>
              Afterwards, utilizing the wireframes as a guide, I put together a <b>high-fidelity prototype via Figma</b>.
            </p>
            <Container fluid={true}>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={4} md={4}>
                      <img className="project-style-image" src="https://i.ibb.co/PQWyV3S/phone.png"/>
                      <div className="image-description">Mobile Version</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={4} md={4}>
                    <img className="project-style-image" src="https://i.ibb.co/zGTdbxL/ipad.png"/>
                    <div className="image-description">Tablet Version</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={4} md={4}>
                    <img className="project-style-image" src="https://i.ibb.co/0trkdKF/Screen-Shot-2020-12-06-at-15-58-58.png"/>
                    <div className="image-description">Desktop Version</div>
                    </Col>
                  </Row>
                </Container> 
            </Col>
          </Row>
        </Container>
        </section>

         <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
            <div className="left-side"> 
              <div className="small-title-side">STYLESHEET</div>
              <h3>Visual Design Style Guide</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
              <p>
                Here's a <b>visual representation</b> of all the <b>interactive components</b> in the website:
              </p>
              <div><img className="visual-style-image" src="https://i.ibb.co/y6wC9xR/visual.png"/></div>
            </Col>
          </Row>
        </Container>
        </section>

        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
            <div className="left-side"> 
              <div className="small-title-side">IMPROVEMENTS</div>
              <h3>Responsive Redesign Highlights</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
            <ol>
              <li><mark>Screen is responsive</mark> with the size of browser</li>
              <li><mark>Text changes</mark> between "open" and "close" based on business hours in real time</li>
              <li>Navigation bar shrinks when the window is minimized, <mark>replaces with hamburger menu</mark></li>
              <li><mark>Dropdown menu</mark> when user toggles the hamburger icon</li>
              <li><mark>Hovering</mark> over clickable text, icons, and buttons change color</li>
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
              <h3>Takeaways</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
            <p>
              After testing the website on various accessibility and responsive tools, I learned that it is important to 
              be careful and deliberate with html tags and their labels. Nowadays, people access websites using various devices,
              thus it was very meaningful to experiment different sizes and layout to ensure that the website is accessibly across all dimensions.
            </p>
            <div className="button-group chong-button">
            <Button variant="dark" onClick={this.websiteClick}>visit the redesigned website</Button>
            </div>
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

export default ChongQingHouse;