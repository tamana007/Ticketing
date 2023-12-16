import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { shortTex } from "../utils/validation";
// import {'addTicke'}
import './ticket.css';

function AddTicketForm({handleOnsubmit,handleOnChange,subject,date,create,data,error}) {
  
  return (
    <Container className="add-new-ticket">
      <Row>
        <Col>
          <Container fluid className="text-light  text-center">
            <h1  className="text-info text-center" >Add a New Ticket</h1>
          </Container>

          <hr />

          <Form onSubmit={handleOnsubmit}>
            {/* <Form.Group>
            <Form.Label>id</Form.Label>
            <Form.Control
              type="email"
              name="email"
              // value={email}
              placeholder="enter your email "
              // onChange={handleOnchange}
            />
          </Form.Group> */}
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                subjet
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="subject"
                  value={data.subject}
                  placeholder="enter Ticket id "
                  onChange={handleOnChange}
                  required
                  // maxLength={(name)=>shortTex()}
                
                />
              </Col>
              <Form.Text className="text-danger">{!error.subject && 'subject is required'}</Form.Text>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Issue Found
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  name="date"
                  value={data.date}
                  placeholder="Issue found "
                  onChange={handleOnChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column={3}> Created At</Form.Label>
              <Col sm={9}> <Form.Control
                type="text"
                name="create"
                as="textarea"
                rows="5"
                value={data.create}
                placeholder="enter Created Time "
                onChange={handleOnChange}
              /></Col>
             
            </Form.Group>

            <Button
              style={{ margin: "10px 0px" }}
              type='submit'
              variant="info"
              // block
            >
              Add
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default AddTicketForm;
