import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import co2 from "../../assets/Image (3).png";
import greenarrow from "../../assets/Ic_Arrow.png";
import revo from '../../assets/revolution.svg'

const Revolutionizing = () => {
  return (
    <Container fluid>
    <Row className="co2">
      <Col>
        <img src={revo} />
      </Col>
      <Col lg={5}>
        <h3 className="title">Revolutionizing Energy and Agriculture</h3>
        <p className=" d-flex boutlink1 align-items-center gap-3">
          Learn More <img src={greenarrow} />
        </p>
        <hr />
        <p className="para">
        BioVerge is a pioneering startup providing integrated bioenergy solutions to address the challenges of renewable energy, agriculture, and environmental sustainability. 
     </p>
     <p className="para">We leverage locally available organic waste and innovative technologies to empower communities with sustainable and cost-effective solutions.   </p>
      </Col>
    </Row>
  </Container>
  )
}

export default Revolutionizing
