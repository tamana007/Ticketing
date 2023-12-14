import React from "react";
import { Navbar, Nav, NavbarCollapse } from "react-bootstrap";
// import {LOGO} from '../../Assets/Images'
import LOGO from "../../Assets/Images/LOGO.png";

function HeaderComp() {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md" >
      <Navbar.Brand>
        <img src={LOGO} alt="logo" style={{ width: "50px" }}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="aria-controls"> */}
      <NavbarCollapse >
        <Nav className="ms-auto" >
        {/* <Nav.Link> */}
        <Nav.Link href="/dashboad">Dashboard</Nav.Link>
        <Nav.Link href="/dashboad">Tickets</Nav.Link>
        <Nav.Link href="/dashboad">Logout</Nav.Link>
      </Nav></NavbarCollapse>
        
        
      
    </Navbar>
  );
}

export default HeaderComp;
