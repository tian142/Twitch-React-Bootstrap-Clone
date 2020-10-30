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
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {
  return (
    <Navbar
      // bg="light"
      variant="light"
      style={{
        padding: '10px 30px',
        background: 'white',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
        zIndex: 2000,
        position: 'fixed',
        width: '100%',
      }}
    >
      <Container fluid>
        <Row>
          <Nav style={{ fontWeight: 600 }}>
            <Media>
              <img
                width={24}
                height={24}
                src="https://image.flaticon.com/icons/png/512/733/733577.png"
                style={{ marginTop: 7, marginLeft: 5 }}
                alt="Twitch Icon"
              />
            </Media>
            <Navbar.Brand href="#Following" style={{ padding: '3px 15px' }}>
              Following
            </Navbar.Brand>
            <Nav.Link href="#home" style={{ padding: '7px 15px' }}>
              Browse
            </Nav.Link>
            <Nav.Link
              href="#Esports"
              style={{ borderLeft: '1px solid #c9c9c9', padding: '7px 15px' }}
            >
              Esports
            </Nav.Link>
            <Nav.Link href="#Music" style={{ padding: '7px 15px' }}>
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
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">New Prime Loot!</Tooltip>}
              placement="bottom"
            >
              <Media>
                <img
                  width={24}
                  height={24}
                  src="https://image.flaticon.com/icons/png/512/51/51338.png"
                  style={{ margin: '7px 10px' }}
                  alt="Prime Loot"
                />
              </Media>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Notifications</Tooltip>}
              placement="bottom"
            >
              <Media>
                <img
                  width={24}
                  height={24}
                  src="https://icons-for-free.com/iconfiles/png/512/inbox+letter+mail+message+text+icon-1320086048829188486.png"
                  style={{ margin: '7px 10px' }}
                  alt="Notifications"
                />
              </Media>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Whispers</Tooltip>}
              placement="bottom"
            >
              <Media>
                <img
                  width={24}
                  height={24}
                  src="https://www.iconpacks.net/icons/2/free-love-message-icon-2946-thumb.png"
                  style={{ margin: '7px 10px' }}
                  alt="Messages"
                />
              </Media>
            </OverlayTrigger>

            <Button variant="secondary" style={{ margin: '0px 15px' }}>
              Get Bits
            </Button>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">User</Tooltip>}
              placement="bottom"
            >
              <Media>
                <img
                  width={30}
                  height={30}
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                  style={{ margin: '3px 10px' }}
                  alt="User Icon"
                />
              </Media>
            </OverlayTrigger>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};

export default TopNav;
