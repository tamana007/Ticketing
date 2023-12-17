import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import BreadCrupm from "../../Components/BreadCrumb/BreadCrupm";
import DummyTickets from "../../Assets/data/dummyTickets.json";
import MessageHistory from "../../Components/MessageHistory/MessageHistory";
import UpdateTicket from "../../Components/updateTicket/UpdateTicket";

function Ticket() {
  // const[dumm,setDu]
  console.log("dum", DummyTickets);
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrupm page="Ticket"></BreadCrupm>
        </Col>
      </Row>
      <Row>
        <Col className="tex-weight text-secondary">
          <div>Subject: {DummyTickets[0].subject}</div>
          <div>Date:{DummyTickets[0].addedAt}</div>
          <div>Status:Date:{DummyTickets[0].status}</div>
        </Col>
        <Col className="text-right">
          <Button type="btn" variant="outline-info">
            Close Ticket
          </Button>
        </Col>
      </Row>
       <Row className="mt-4">
        <Col> <MessageHistory
          message={DummyTickets[0].History}
          sender={DummyTickets[0].sender}
        ></MessageHistory></Col>
       
      </Row>
<Row>
  <Col>
  <UpdateTicket/>
  </Col>
</Row>
     
    </Container>
  );
}

export default Ticket;
