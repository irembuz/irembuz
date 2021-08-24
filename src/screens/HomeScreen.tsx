import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" lg="3">
          <Image
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGXSWxw7VfdKQ/profile-displayphoto-shrink_800_800/0/1602660548965?e=1635379200&v=beta&t=fr1T5ijD4PW0sxF-QmQjcayvQD_lkLhHjuwwWQ88cQ8"
            roundedCircle
          />
        </Col>
        <Col xs="12" lg="9">
          <h3>About</h3>
          <p>
            İrem Buz (Frontend Developer) In this page, my Skills and Contact
            Informations are listed. I graduated from Physical Therapy and
            Rehabilitation(as Bachelor's Degree) department of Abant Izzet
            Baysal University. After a while I decided to be a Frontend
            Developer. I make great efforts on projects.
          </p>
        </Col>
      </Row>
      <Row>
        <h3>Skills</h3>
        <p>
          Firstly I made an internship in a startup to learn software concepts.
          After that I started developing a project(amarouter.com) with my
          friend. We are still developing the project and I improve my Frontend
          skills consistently.
        </p>
        <section className="skills-section">
          <h5>Frontend Developer</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Figma</li>
          </ul>
        </section>
      </Row>
      <Row>
        <h3>Contact</h3>
        <ul>
          <li>Email: irembuz7@gmail.com</li>
          <li>Hackerrank: <a href="https://www.hackerrank.com/irembuz7">irembuz7</a></li>
        </ul>
      </Row>
    </Container>
  );
};

export default HomeScreen;
