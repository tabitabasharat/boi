import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import EAT from "../../assets/educationandtraning.svg";
import greenarrow from "../../assets/Ic_Arrow.png";


const Education = () => {
  return (
    <Container fluid>
    <Row className="co2">
      <Col>
        <img src={EAT} />
      </Col>
      <Col lg={5}>
        <h3 className="title">Education & Training</h3>
        <p className="boutlink1 d-flex align-items-center gap-3">
          Learn More <img src={greenarrow} />
        </p>
        <hr />
        <p className="para">
        Empowering communities with knowledge and skills. We offer education and training services to ensure effective implementation and management of our bioenergy solutions.
        </p>
      </Col>
    </Row>
  </Container>
  )
}

export default Education
