import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Social from "./Social";

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-center py-2">
        <h4>CONTACT ME</h4>
      </Row>
      <hr />
      <Row className="mx-auto py-2">
        <Col className="text-right" xs={2} md={6}>
          <FaIcons.FaHome />
        </Col>
        <Col>
          Pratibha Ki Rasoi,
          <br />
          Govind Bhawan (Manohar House),
          <br />
          Gorepeth, Near Kala Mahilaniketan,
          <br />
          Nagpur - 10
        </Col>
      </Row>
      <Row className="mx-auto py-2">
        <Col className="text-right" xs={2} md={6}>
          <AiIcons.AiOutlineMail />
        </Col>
        <Col>
          <a
            href="mailto:pratibharasoi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            pratibharasoi@gmail.com
          </a>
        </Col>
      </Row>
      <Row className="mx-auto py-2">
        <Col className="text-right" xs={2} md={6}>
          <FaIcons.FaPhoneAlt />
        </Col>
        <Col>+91 123456789</Col>
      </Row>
      <Row className="mx-auto py-5">
        <Col className="d-flex justify-content-center">
          <Social />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
