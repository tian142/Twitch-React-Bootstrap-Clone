import React from 'react';
import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import faker from 'faker';

const Streams = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
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
        <Col>
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
        <Col>
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
      </Row>
      <Row>
        <Col>
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
        <Col>
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
        <Col>
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
      </Row>
      <Row>
        <Col>
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
        <Col>
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
        <Col>
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
      </Row>
      <Row>
        <Col>
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
        <Col>
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
        <Col>
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
      </Row>
    </Container>
  );
};

export default Streams;
