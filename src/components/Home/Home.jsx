import React from 'react';
import './style.css'; // Import your CSS file here
import { Container, Row, Col, Image } from 'react-bootstrap';
import PricingPage from '../Pricing/PricingPage';

const Home = () => {
  return (
    <div>
      <main>
        <div className="container_YuUh">
          <div className="main_rgTy">
            <div className="mainContent_thTZ">
              <h1 className="mainText_tNfa">Check Your Essay</h1>
              <h2 className="subText_YdZt">Improve your IELTS writing score with AI supporting</h2>
              <div className="buttonContainer_PdLT">
                <a href="/ielts-writing-samples" className="button_x6wU">Essay Sample</a>
                <a href="/check-essay" className="button_x6wU buttonPrimary_yLaJ">Check essay</a>
              </div>
            </div>
            <div className="mainUnderlay_Qdbb"></div>
          </div>
        </div>

        <section className="check-section">
          <div className="check-image">
            <img src="./check-essay.png" alt="Check Essay Image" width="357" height="331" />
          </div>
          <div className="check-content">
            <h2>Check your IELTS essay in seconds</h2>
            <p>
              You can get instant feedback on your IELTS writing tasks with AI-powered suggestions and detailed explanations. Our system checks your grammar, vocabulary, and coherence, giving you a comprehensive analysis of your strengths and weaknesses. With AI, you can quickly identify areas for improvement and get the guidance you need to achieve your target band score.
            </p>
          </div>
        </section>

        <section className="why-section">
          <h2>Why should I use AuIES now?</h2>
          <Container className="reasons-container">
            <Row>
              <Col md={6} className="reasons">
                <Row>
                  <div className="reason">
                    <h3>It is free to reach</h3>
                    <p>You can use it for free, but we recommend using paid plans for the best support</p>
                  </div>
                </Row>
                <Row>
                  <div className="reason">
                    <h3>It has transparent grading</h3>
                    <p>Our system uses new AI technologies to score IELTS in the most transparent and clear way</p>
                  </div>
                </Row>
                <Row>
                  <div className="reason">
                    <h3>It can improve your IELTS writing grammar</h3>
                    <p>
                      You will have many new ideas to make writing easier. Not only that, you can also see your own mistakes to improve yourself with our specialized suggestion system for each user.
                    </p>
                  </div>
                </Row>
              </Col>
              <Col md={6} className="laptop-image">
                <Image src="./laptop.png" alt="Laptop Image" fluid />
              </Col>
            </Row>
          </Container>
        </section>

        <div className="how-to-section">
          <Row>
            <Col>
              <h2>How can I use it?</h2>
            </Col>
          </Row>
          <Row className="steps">
            <Col md={3} className="step">
              <span className="step-number">1</span>
              <p>Type or paste your essay</p>
            </Col>
            <Col md={3} className="step">
              <span className="step-number">2</span>
              <p>Press the Check Essay button</p>
            </Col>
            <Col md={3} className="step">
              <span className="step-number">3</span>
              <p>Get a band score instantly</p>
            </Col>
          </Row>
        </div>
      <PricingPage/>
      </main>
    </div>
  );
};

export default Home;
