import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">İrem Buz</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="https://www.linkedin.com/in/irem-buz/">
                LinkedIn
              </Nav.Link>
              <Nav.Link eventKey={2} href="https://github.com/irembuz">
                GitHub
              </Nav.Link>
              <Nav.Link href="https://twitter.com/irembuz7">Twitter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
