import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Media,
  Container,
  Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      style={{
        padding: '10px 30px',
      }}
    >
      <Container fluid>
        <Row>
          <Nav style={{ fontWeight: 600 }}>
            <Media>
              <img
                width={24}
                height={24}
                className="mr-3"
                src="https://image.flaticon.com/icons/png/512/733/733577.png"
                alt="Generic placeholder"
                style={{ marginTop: 7, marginLeft: 5 }}
              />
            </Media>
            <Navbar.Brand href="#home" style={{ padding: '3px 15px' }}>
              Following
            </Navbar.Brand>
            <Nav.Link href="#home" style={{ padding: '7px 15px' }}>
              Browse
            </Nav.Link>
            <Nav.Link
              href="#features"
              style={{ borderLeft: '1px solid #c9c9c9', padding: '7px 15px' }}
            >
              Esports
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ padding: '7px 15px' }}>
              Music
            </Nav.Link>
            <Nav.Link href="#..." style={{ padding: '7px 15px' }}>
              •••
            </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Row>
        <Row>
          <Nav>
            <Media>
              <img
                width={24}
                height={24}
                className="mr-3"
                src="https://image.flaticon.com/icons/png/512/733/733577.png"
                alt="Generic placeholder"
              />
            </Media>
            <Navbar.Brand href="#home">Following</Navbar.Brand>
            <Nav.Link href="#home">Browse</Nav.Link>
            <Nav.Link href="#features">Esports</Nav.Link>
            <Button variant="secondary">Get Bits</Button>
            <Nav.Link href="#pricing">Music</Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};

export default TopNav;
