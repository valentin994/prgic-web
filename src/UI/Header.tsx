import React from "react";
import PropTypes from "prop-types";
import {Container, Navbar, NavDropdown, Nav, NavLink} from "react-bootstrap";

const Header = (prop: { listOfItems: string[] }) => {
  const navItems = prop.listOfItems.map(item => {
    return <NavLink key={item}>{item}</NavLink>
  })
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand>Prgic Tor- und Türtechnik </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  listOfItems: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Header;
