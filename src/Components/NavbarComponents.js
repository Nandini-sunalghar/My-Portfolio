import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './Navbar.css';

function NavbarComponents() {
  return (
    <div className="container nav__container">
        <Navbar variant="dark" className="navbar" fixed="top">
        <Container>
          <Nav className='m-auto nav__menu'>
        <Nav.Item>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="qualification">experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="certifications">Certifications</Nav.Link>
        </Nav.Item>
      </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponents;