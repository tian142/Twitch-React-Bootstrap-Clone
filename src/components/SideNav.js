import React from 'react';
import { Nav } from 'react-bootstrap';

const SideNav = () => {
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column"
      style={{ marginTop: '80px' }}
    >
      <Nav.Link href="/home">Followed Channels</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
};

export default SideNav;
