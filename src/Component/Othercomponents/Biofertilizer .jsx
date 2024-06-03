import React from 'react'
import bioferti from "../../assets/bio-ferti.svg"
import greenarrow from "../../assets/Ic_Arrow.png";
import { Container, Row, Col } from "react-bootstrap";


const Biofertilizer  = () => {
  return (
    <Container fluid>
    <Row className="co2">
      <Col>
        <img src={bioferti} />
      </Col>
      <Col className="" lg={5}>
        <h3 className="title">Bio-fertilizer Production</h3>
        <p className=" d-flex boutlink1 align-items-center gap-3">
          Learn More <img src={greenarrow} />
        </p>
        <hr />
        <p className="para">
        Boost soil fertility and crop yields naturally. Our bio-fertilizers are organic alternatives to chemical fertilizers, promoting sustainable agriculture and minimizing environmental impact.
        </p>
      </Col>
    </Row>
  </Container>
  )
}

export default Biofertilizer; 
