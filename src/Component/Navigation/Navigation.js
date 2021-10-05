import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
       <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Learn English</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/Services">Services</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/service">All About Our Service</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
 </div>
    );
};

export default Navigation;