import React from 'react';
import './Electry.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Electry extends React.Component {
  goAbout = () => {
    this.props.history.push("/about");
  }
  goHome = () => {
    this.props.history.push("/");
  }
  websiteClick() {
    window.open("https://www.figma.com/proto/9zWE6x0mnCTVEiDNhrxkcu/Electry-Mockup?node-id=269%3A74&scaling=scale-down");
  }
  render() {
    return (
      <div class="electry">
        <Header goToHome={this.goHome} goToAbout={this.goAbout} page={""}/>
        <div class="electry-banner">
          <img class="electry-img" src="https://i.ibb.co/vcgb7Td/electry.png" />
        </div>
        <section className="electry-section1">
          <div className="electry-title">Iterative Design of Electry (a YC '20 startup)</div>
          <div className="electry-title-description">Electry is pitched as “LinkedIn for skilled blue-collar workers.” We <b>iteratively designed Electry's web interface</b>, beginning with low-fi designs and culminating in user testing. We chose Electry, because we liked the idea of exploring a familiar problem — finding employment — in a different industry — blue-collar work.</div>
          <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={4} md={4}>
            <div className="type-section">
              <div><b>Type 👇🏻</b></div>
              <p>CS1300 UIUX group project</p>
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
              <p>Figma, HTML/CSS</p>
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
              <div className="small-title-side">STEP ONE</div>
              <h3>LowFi Mockups</h3>
              </div>
              
            </Col>
            <Col xs={12} sm={12} md={9}>
              <div>Essentially, <b>Electry is a job board to connect blue-collar workers with companies looking to hire them.</b> Companies publish job openings on the platform, workers to find opportunities that match their qualifications and preferences, then the companies can follow-up with applicants off-platform.</div>
                <h4>Sketches</h4>
                <Container fluid={true}>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://www.linkpicture.com/q/sketch1-3.jpg"/>
                      <div className="image-description">Design 1: User Profile</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://www.linkpicture.com/q/sketch2-3.jpg"/>
                    <div className="image-description">Design 2: Registration</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://www.linkpicture.com/q/sketch3-2.jpg"/>
                      <div className="image-description">Design 3: Sign Up</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://www.linkpicture.com/q/sketch4-3.jpg"/>
                    <div className="image-description">Design 4: Search Results</div>
                    </Col>
                  </Row>
                </Container> 
                <div>
                  <h4>Diversity across sketches:</h4>
                  <ul>
                    <li><b>Design 1:</b> heavily inspired by <mark>LinkedIn</mark>, includes social aspect and detailed profiles</li>
                    <li><b>Design 2:</b> not-signed-in Home page, <mark>step-by-step Sign Up</mark></li>
                    <li><b>Design 3:</b> different user types Home page, <mark >web-diagram Sign Up</mark></li>
                    <li><b>Design 4:</b> from a <mark>company's point of view</mark></li>
                  </ul>
                </div>
                <h4>Wireframes</h4>
                <Container fluid={true}>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/k3zbgQ2/wireframe1.png" alt="wireframe1"/>
                      <div className="image-description">Home</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/Zcvx9S1/wireframe2.png"/>
                    <div className="image-description">Login</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/NN1j2sy/wireframe3.png"/>
                      <div className="image-description">Employee Registration</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/W5NPxS1/wireframe4.png"/>
                    <div className="image-description">Employee Search Results</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/c3xjxFj/wireframe6.png" />
                      <div className="image-description">Employer Registration</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/DMBxg1b/wireframe7.png"/>
                    <div className="image-description">Employer Search Results</div>
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
              <h3>HiFi Mockups</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
              <p>Based on the wireframes from STEP 1, we created hi-fi prototypes via Figma.</p>
              <h4>Notable Design Choices:</h4>
              <ul>
                <li><mark>Streamlines the job search process</mark> for both job seekers and recruiters</li>
                <li>Emphasizes essential information about each job through a <mark>succint profile building process</mark></li>
                <li>Provides <mark>personalized experience</mark> through onboarding, exploring job openings, and expressing interest</li>
              </ul>
              <h4>Initial Mockup</h4>
              <Container fluid={true}>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/SJ5kQtD/pre-home1.jpg"/>
                      <div className="image-description">Home</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/W2rXKv4/pre-login.jpg"/>
                    <div className="image-description">Login</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/WvR9qv3/pre-onboarding-employee.jpg"/>
                      <div className="image-description">Employee Registration</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/PMWyRrc/pre-onboarding-employer.jpg"/>
                    <div className="image-description">Employer Registration</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/4mMtkTP/pre-search-employee.jpg" />
                      <div className="image-description">Employee Search Results</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/dj3kp5S/pre-search-employer.jpg"/>
                    <div className="image-description">Employer Search Results</div>
                    </Col>
                  </Row>
                </Container> 
                
              <h4>Critique Feedback</h4>
              
                <ol>
                  <li>
                    Onboarding can be done <mark>sequentially and gamified;</mark> emphasizing progress through flow makes it more engaging and less overwhelming
                    <ul>
                      <li>
                        <b>Solution:</b> show progress bar at top, making questions simple as possible
                      </li>
                    </ul>
                  </li>
                  <li>
                    Onboarding modals feel <mark>disconnected</mark> from the main onboarding page
                    <ul>
                      <li>
                        <b>Solution:</b> manipulate opacity to show the initial screen as the background
                      </li>
                    </ul>
                  </li>
                  <li>
                    <mark>Unintuitive</mark> that clicking a job posting opens the Company Profile
                    <ul>
                      <li>
                        <b>Solution:</b> clicking on the job title takes user to a modal with job posting details
                      </li>
                    </ul>
                  </li>
                  <li>
                    <mark>Unclear flow</mark> after user expresses interest in a job
                    <ul>
                      <li>
                        <b>Solution:</b> Save feature that populates jobs that the user has shared profiles to
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Overall:</b><mark>not enough pages to communicate both types</mark> of user experiences clearly
                    <ul>
                      <li>
                        <b>Solution:</b> focus on the experience of job-seekers only
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  Based on the feedback, we chose to <b>focus on employees and improve their job seeking experience.</b>
                </p>
                <h4>Final Mockup</h4>
                <Container fluid={true}>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/5MMYQNs/post-home.jpg"/>
                      <div className="image-description">Home</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/W3Bby52/post-login.jpg"/>
                    <div className="image-description">Login</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/9Vxvw5X/post-onboarding1.jpg"/>
                      <div className="image-description">Profile Registration</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/xLgKxLG/post-onboarding2.jpg"/>
                    <div className="image-description">End of Flow</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/Rg0WMxk/post-search-none.jpg" />
                      <div className="image-description">Recommended Jobs</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/wWTcHb5/post-search-full.jpg"/>
                    <div className="image-description">Share Profile</div>
                    </Col>
                  </Row>
                  <Row noGutters={true}>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                      <img className="project-style-image" src="https://i.ibb.co/cNFGXch/post-modal.jpg" />
                      <div className="image-description">Job Modal</div>
                    </Col>
                    <Col className ="col-details" xs={12} sm={6} md={6}>
                    <img className="project-style-image" src="https://i.ibb.co/PrgdBYt/post-myjobs.jpg"/>
                    <div className="image-description">My Jobs</div>
                    </Col>
                  </Row>
                </Container> 
            </Col>
          </Row>
        </Container>
        <div className="button-group chong-button">
          <Button variant="dark" onClick={this.websiteClick}>visit interactive prototype </Button>
        </div>
        </section>
        <section> 
        <Container fluid={true}>
          <Row noGutters={true}>
            <Col xs={12} sm={12} md={3}>
            <div className="left-side"> 
              <div className="small-title-side">STEP THREE</div>
              <h3>User Testing</h3>
              </div>
            </Col>
            <Col xs={12} sm={12} md={9}>
            <h4>Task</h4>
              <p>We asked users to complete the onboarding process and <mark>share their profile</mark> with an employer that matched their preferences. Specifically, our instructions were:</p>
              <p><b>Scenario:</b> You are a trained blue-collar worker looking for a job.</p>
              <ul>
                <li><b>Subtask 1:</b> Sign up by <mark>completing the onboarding process.</mark> Be sure to answer every question in the survey.</li>
                <li><b>Subtask 2:</b> Now that you have gotten a list of employers that match your preferences, <mark>explore your recommended jobs</mark> and <mark>share your profile with one employer</mark></li>
              </ul>

              <h4>Post-Test Questions</h4>
              <ol>
                <li>Were you <b>successful</b> at completing the task? How difficult was it?</li>
                <li>What <b>frustrated</b> you most about this site?</li>
                <li>If you had a <b>magic wand</b>, how would you improve this site?</li>
                <li>What did you <b>like about the site</b>?</li>
              </ol>
              <h4>Analysis of Results</h4>
                <p> Based on the Tasks + Subtasks, the UserTesting results show that users were <mark>generally able to complete the tasks without any issues.</mark>  The results reveal that users <mark>enjoyed how the interface was simple to use</mark>, concise and effectively indicated progress with visual cues. </p>
                <h4>Expectations </h4>
                <ul>
                  <li><b>Completing Profile + Sharing Profile Task:</b> Since this was an assigned task, we expected that the users would be able to complete their profile successfully, which all the users did. </li>
                  <li><b>Navigated to My Jobs Page: </b>This was not in the assigned task, however we expected that users would navigate to the My Jobs page, at least to confirm that their job application went through. All the users checked the “My Jobs” page once they completed the tasks. </li>
                  <li><b>Editing Profile:</b> We expected that users would attempt to edit their profile. However, only User 3 went back to edit their profile. </li>
                </ul>
              <p>Overall, user behaviour was <mark>mostly in line with expectation.</mark> Users completed tasks successfully and navigated to the “My Jobs” page.  However, <mark>not all users went back to edit their profile</mark> as we expected them to. </p>

              <h4>Errors</h4>
              <p>Users <mark>couldn’t always figure out how to navigate away from the “My Jobs” page</mark>. User 3 was particularly confused by the ambiguity of which page clicking on the logo would take them to. </p>

              <h4>Future changes based on results</h4>
              <ul>
                <li>On the “My Jobs” page, <mark>add a go back button</mark> to navigate back to recommended jobs (As user 3 suggested)</li>
                <li>When editing profiling, allow users to <mark>click between profile sections</mark> (As user 3 suggested)</li>
              </ul>
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
              <p>Overall, we learned a lot from this project. Being able to get feedback from a formal critique and from user testing
              was extremely important and helped us create a mockup that we are proud of. </p>
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

export default Electry;