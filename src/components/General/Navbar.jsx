import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MiniButton } from './Button';

function Navi() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFE9E9", position: "sticky", top: 0, zIndex: 100 }} expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home"><img width="100px" src="/image/logo.png" alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} >
            <span style={{ color: 'black' }}>&#9776;</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#explore-arts">Explore Arts</Nav.Link>
              <Nav.Link href="#learn-cultures">Learn Cultures</Nav.Link>
              <Nav.Link href="#information">Information</Nav.Link>
            </Nav>
            {/* Use NavLink to style the 'Login' link */}
            <MiniButton title="Login" to="/login" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
