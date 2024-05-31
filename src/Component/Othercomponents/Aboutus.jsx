import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import co2 from "../../assets/Image (3).png";
import greenarrow from "../../assets/Ic_Arrow2.png";

const Aboutus = () => {
  return (
    <Container fluid>
      <Row className="co2">
        <Col>
          <img src={co2} />
        </Col>
        <Col className="co2" lg={5}>
            <h4 className="boutlink">About</h4>
          <h3 className="title">Our Story</h3>
          <p className=" d-flex align-items-center gap-3">
            Learn More <img src={greenarrow} />
          </p>
          <hr />
          <p className="para">
            BioVerge emerged from the growing need for 
            sustainable energy and agricultural solutions in
             Saudi Arabia and the MENA region. Our
             experienced team combines expertise in 
            renewable energy, agriculture, environmental
             science, and business management to deliver
             innovative and impactful solutions..
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;
