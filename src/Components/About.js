import React from "react";
import "./About.css";
import profile from "../Images/profile.JPG";
import image from '../Images/image.png';
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="main">
      <Row xs={2} md={2} className="g-4">
        <Col>
          <img className="image" src={profile} alt="profile" />
        </Col>
        <Col>
          <div className="about">
            <p className="greeting">Hi..I'm</p>
            <h3>Nandini Sunalghar</h3>
            <p>I'm a Front-end web-developer with a 2+ years of work experience </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
