import React, { useState } from "react";
import { Navbar, Nav, NavbarCollapse } from "react-bootstrap";
// import {LOGO} from '../../Assets/Images'
import LOGO from "../../Assets/Images/LOGO.png";
import { Navigate, useNavigate} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function HeaderComp() {
  const navigate=useNavigate();

  const[auth,setAuth]=useState(true);

  const logout=()=>{
  navigate('/')
  }

  function setAtuth(){
    setAuth(false)
  }
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={LOGO} alt="logo" style={{ width: "50px" }}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="aria-controls"> */}
      <Navbar.Collapse id="aria-controls">
        <Nav className="ms-auto">
          {/* <Link to="dashboard">Dashboard</Link>
          <Link to="/ticket">Tickets</Link>
          <Link to="/dashboard/logout">Logout</Link>  */}

          <LinkContainer to="dashboard">
            <Nav.Link onClick={setAtuth}>Dashboard</Nav.Link>
          </LinkContainer>
          
          <LinkContainer to="tickets">
           
            <Nav.Link >Tickets</Nav.Link>
          </LinkContainer>

          {/* <LinkContainer to="/"> */}

            <Nav.Link onClick={logout}>Logout</Nav.Link>
          {/* </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderComp;
