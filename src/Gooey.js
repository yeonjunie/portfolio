import React from 'react';
import './Electry.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gooey extends React.Component {
  goAbout = () => {
    this.props.history.push("/about");
  }
  goHome = () => {
    this.props.history.push("/");
  }
  websiteClick() {
    window.open("https://powerful-forest-21960.herokuapp.com/");
  }
  render() {
    return (
      <div class="electry">
        <Header goToHome={this.goHome} goToAbout={this.goAbout} page={""}/>
        <div class="electry-banner">
          <img class="gooey-img" src="https://i.ibb.co/pymMH7N/Screen-Shot-2020-12-06-at-18-39-42.png"/>
        </div>
        <section className="electry-section1">
          <div className="electry-title">Gooey: Streamlining the Prototyping Process</div>
          <div className="electry-title-description"><b>Gooey</b> is a project that we cooked up in Spring 2020, for CS0320: Software Engineering, a computer science class offered at Brown University. Our inspiration came from the fact that two of our members were <b>heavily interested in graphic design</b>, but had yet to discover an <mark>application that streamlined the process of selecting colors and fonts, while also encouraging exploration</mark>.</div>
          <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={4} md={4}>
            <div className="type-section">
              <div><b>Type 👇🏻</b></div>
              <p>CS0320 final project</p>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <div className="date-section">
              <div><b>Date 📅</b></div>
              <p>April 2020</p>
              </div>
            </Col>
            <Col xs={12} sm={4} md={4}>
            <div className="tools-section">
              <div><b>Tools ⚒</b></div>
              <p>React, Firebase, Flask</p>
              </div>
            </Col>
          </Row>
        </Container> 
        <div className="button-group chong-button">
            <Button variant="dark" onClick={this.websiteClick}>visit website</Button>
            </div>
        </section>
        <section>
          <h3><b>How does Gooey work?</b></h3>
        </section>
        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
              <div className="left-side"> 
              <div className="small-title-side">STEP ONE</div>
              <h3>Sign up and Create a Workspace</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
            <p>You'll need to <b>sign up</b> to use Gooey (don't worry, it's easy)! Once you have an account, you can <b>create a "workspace,"</b> a space that represents a single project you are working on.</p>
            <div><img className="gooey-style-image" src="https://powerful-forest-21960.herokuapp.com/static/media/workspace.a48b5ae9.png"/></div>
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
              <h3>Take the Color Quiz</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
              <p>When you create a workspace, you'll be <b>redirected to a color quiz.</b> You'll want to choose colors that represent the kind of project you want. For example, if you are making a fairy princess poster, you'll want to pick a lot of pastel colors. Choosing colors representative of your project will help the algorithm give you recommendations that will align with what you want.</p>
            <div><img className="gooey-style-image" src="https://powerful-forest-21960.herokuapp.com/static/media/quiz.dd769716.png"/></div>
            </Col>
          </Row>
        </Container> 
        </section>

        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
              <div className="left-side"> 
              <div className="small-title-side">STEP THREE</div>
              <h3>Explore Recommendations</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
              <p>Once you finish the quiz, you'll be <b>redirected to your workspace</b>. Here, you'll find two tabs: <b>Gallery and Stylesheets</b>. The gallery contains immutable cards generated by the algorithm. If you don't like any of them, then you can refresh them infinitely! (Don't worry, this doesnt' get rid of the cards you already liked.) Liking cards will help inform the algorithm of your preferences, so we recommend to like some cards before refreshing!</p>
            <div><img className="gooey-style-image" src="https://powerful-forest-21960.herokuapp.com/static/media/gallery.3015eaf5.png"/></div>
            </Col>
          </Row>
        </Container> 
        </section>

        <section>
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
              <div className="left-side"> 
              <div className="small-title-side">STEP FOUR</div>
              <h3>Make Stylesheets</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
              <p>Finally, in the stylesheet page, you have the ability to <b>play around with stylesheet cards.</b> Our definition of a stylesheet card is a card that defines a palette and typography — it represents a visual language for your project. You can convert a favorited card from the gallery into the stylesheet or you can start from scratch. You'll have the ability to add up to 5 colors in your palette, choose from 60 fonts, and share the card with your friends.</p>
            <div><img className="gooey-style-image" src="https://powerful-forest-21960.herokuapp.com/static/media/stylesheet.f5cb65cc.png"/></div>
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

export default Gooey;