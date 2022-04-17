import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import PropTypes from "prop-types";

Header.propTypes = {

}

function Header() {
return(
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Prgic Tor - und Türtechnik</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="gallery">Gallery</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}
