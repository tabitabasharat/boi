import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Logo.png'
import arrow from '../../assets/Icon.png'

const Header = () => {
  return (
    // <div>
         <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto nav-font text-white">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#solutions" className='text-white'>Solutions</Nav.Link>
            <Nav.Link href="#innoation" className='text-white'>Innovation</Nav.Link>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
          </Nav>
          <Nav className='nav-font'>
            <Nav.Link href="#Contactus" className='text-white d-flex align-items-end gap-3'>
            Contact Us<img src={arrow}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>   
  )
}

export default Header
