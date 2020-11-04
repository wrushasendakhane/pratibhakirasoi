import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row className="justify-content-center py-2">
        <h4>ABOUT ME</h4>
      </Row>
      <Row className="justify-content-center py-2">
        <Col className="d-flex justify-content-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/brandlogo.jpg"}
            alt="Profile"
          />
        </Col>
      </Row>
      <Row className="justify-content-center py-2">
        <Col className="d-flex justify-content-center">
          Hello Viewers , Welcome to my Indian food cooking channel "Pratibha Ki
          Rasoi" . This will entertain you with simple & easy way of making
          vegetarian & non vegetarian dishes using ingredients which are easily
          available in our home & in stores . \nPlease subscribe my channel &
          share with your friends . Thanks for visiting my channel
        </Col>
      </Row>
    </Container>
  );
};

export default About;
