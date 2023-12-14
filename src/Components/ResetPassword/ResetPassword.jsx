import React from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { entryPage } from "../../../src/page/Entry/Entry";

function ResetPassword({handleOnchange,email,password,setLoadForm,loadForm}) {

  function handleSubmit(e){
    e.preventDefault()
    if (!email || !password || email.trim() === '' || password.trim() === '') {
      alert('Please enter your email and password');
      return;
    }
    //API CODES GOES HERE
    console.log('btn clicked');


  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Container fluid className="text-light  text-center">
              <h1>Reset Password</h1>
            </Container>

            <hr />
            <Form onSubmit={handleSubmit}> 
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="Email"
                  name="email"
                  value={email}
                  placeholder="enter your email "
                  onChange={handleOnchange}
                />
              </Form.Group>
              {/* <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="Email"
                  name="password"
                  value={password}
                  placeholder="enter your Password "
                  onChange={handleOnchange}
                />
              </Form.Group> */}
              {/* <hr></hr> */}

              <Button style={{ margin: "10px 0px" }} type="submit">
                Login
              </Button>
            </Form>
            <hr></hr>
          </Col>
        </Row>

        <Col>
          {/* <a href="#" onClick={()=>setLoadForm(false)}>Forgot Password</a> */}
          {/* <a href="#" onClick={() => setLoadForm(false)}>Forgot Password</a>
           */}
           <a  href="#" onClick={() => setLoadForm(!loadForm)}>Login Now </a>


        </Col>
      </Container>
    </div>
  );
}

export default ResetPassword;
