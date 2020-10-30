import React from 'react';
import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import faker from 'faker';

const renderCards = (numOFCards) => {
  let container = [];
  for (let i = 0; i < numOFCards; i++) {
    container.push(
      <Col key={faker.random.word()}>
        <Card>
          <Card.Img
            variant="top"
            src={faker.image.image()}
            // style={{ width: 100 }}
          />
          <Card.Body>
            <Card.Title>
              <Image
                src={faker.image.avatar()}
                roundedCircle
                style={{ width: 35, marginRight: 10 }}
              />
              {faker.internet.userName()}
            </Card.Title>
            <Card.Text>{faker.random.words()}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return container;
};

const Streams = () => {
  return (
    <Container fluid>
      <Row>{renderCards(4)}</Row>
      <Row>{renderCards(4)}</Row>
      <Row>{renderCards(4)}</Row>
      <Row>{renderCards(4)}</Row>
    </Container>
  );
};

export default Streams;
