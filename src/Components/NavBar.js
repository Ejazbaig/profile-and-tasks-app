import React from "react";
import Nav from "react-bootstrap/Nav";

function MyNavBar(props) {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link>{props.name}</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default MyNavBar;
