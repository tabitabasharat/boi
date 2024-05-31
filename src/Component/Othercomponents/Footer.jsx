import React from "react";
import { Row, Col } from "react-bootstrap";
import logofoot from "../../assets/Logo (1).png";

const Footer = () => {
  return (
    <div className="footer-paddin align-items-start">
      <Row className="d-flex flex-row text align-items-start">
        <Col lg={4}>
          <img src={logofoot} />
          <p className="mb-0 mt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo{" "}
          </p>
        </Col>
        <Col className="d-flex flex-column  align-items-start">
          <ul></ul>
          <li className="text-dark hed">Information</li>
          <li>Industry analytics</li>
          <li>News and release</li>
          <li>Events</li>
          <li>About us</li>
        </Col>
        <Col className="d-flex flex-column align-items-start">
          <ul></ul>
          <li className="hed text-dark">Useful Links</li>
          <li>Services</li>
          <li>Our Solution</li>
          <li>Innovation</li>
          <li>Support</li>
        </Col>
        <Col className="d-flex flex-column align-items-start">
          <ul></ul>
          <li className="hed text-dark">Contact</li>
          <li>Headquarters</li>
          <li>Manager</li>
          <li>Sales</li>
          <li>Why Us</li>
        </Col>
      </Row>
      <hr />
      <Row className="text fuu">
        <Col>
          <p> Copyright ©2024. All Rights Reserved.</p>
        </Col>
        <Col>
          <div>
            <ul className="d-flex gap-3 text justify-content-end">
            {/* <Col> */}
              <li>Term</li>
            {/* </Col> */}
            <li>Privacy</li>
            {/* <Col> */}
              <li>Policy and Cookie Policy</li>
            {/* </Col> */}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
