import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="/">Skills React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
