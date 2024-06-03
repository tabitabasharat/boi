import React from 'react'
import solutionimg from '../../assets/solution.svg'
import { Container } from "react-bootstrap";
import greenarrow from "../../assets/Ic_Arrow2.png";



const oursolution = () => {
  return (
    <Container fluid>
    <div className="co2 d-flex flex-column justify-content-center">
      {/* <Col className="co2" lg={5}> */}
      <h4 className="boutlink">our solution</h4>
      <h5 className="title">A Suite of Integrated Solutions</h5>
            <p className=" d-flex align-items-center gap-3">
              Learn More <img src={greenarrow} />
            </p>
      <img src={solutionimg} alt='img'/>   
     
      {/* </Col> */}
    </div>
  </Container>
  )
}

export default oursolution
