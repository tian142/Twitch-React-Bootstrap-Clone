import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import TopNav from './TopNav';
import SideNav from './SideNav';
import GameInfo from './GameInfo';
import Streams from './Streams';

function App() {
  return (
    <>
      <TopNav />
      <Container fluid>
        <Row>
          <Col style={{ height: '100vh', background: '#f7f7f7', margin: 0 }}>
            <SideNav />
          </Col>
          <Col xs={9} style={{ margin: 0 }}>
            <GameInfo />
            <Streams />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
