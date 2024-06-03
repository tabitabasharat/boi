import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import co2 from "../../assets/Group 1.png";
import greenarrow from "../../assets/Ic_Arrow.png";

const Canned = () => {
  return (
    <>
      <Container fluid>
        <Row className="co2">
          <Col  lg={5}>
            <h3 className="title">Canned CO2</h3>
            <p className="boutlink1 d-flex align-items-center gap-3">
              Learn More <img src={greenarrow} />
            </p>
            <hr />
            <p className="para">
              Capturing and utilizing CO2 for a sustainable future.
              Our canned CO2 provides a sustainable source for
              various industries, supporting the transition to a 
              low-carbon economy.
            </p>
          </Col>
          <Col>
            <img src={co2} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Canned;
