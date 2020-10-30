import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';

const GameInfo = () => {
  return (
    <Jumbotron fluid style={{ background: 'white', marginTop: '50px' }}>
      <Container>
        <Row>
          <Col>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-144x192.jpg" />
          </Col>
          <Col xs={10}>
            <h1>Counter-Strike: Global Offensive</h1>
            <h5>25.9K Viewers • 25.2M Followers</h5>
            <p>
              CS:GO is the fourth iteration of Valve's team-based
              modern-military first-person shooter
            </p>
            <p>
              <Button style={{ background: 'purple', border: 'none' }}>
                Follow
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default GameInfo;
