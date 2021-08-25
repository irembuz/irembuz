import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">İrem Buz</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              href="https://www.linkedin.com/in/irem-buz/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://github.com/irembuz"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/irembuz7"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </Nav.Link>
            <Nav.Link>
              <Link to="projects">Projects</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
