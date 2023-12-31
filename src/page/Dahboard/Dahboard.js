import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import TicketTable from "../../Components/TicketTable/TicketTable";
import dummyTickets from "../../Assets/data/dummyTickets.json";
import BreadCrupm from "../../Components/BreadCrumb/BreadCrupm";
import AddTicket from "../newTicket/AddTicket";
// import { LinkContainer } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Dahboard() {
  // const[addNewTicket,setAddNewTicket]=useState(true);

  // function handleAddNewTicket(){
  //   setAddNewTicket(!addNewTicket);
  // }
  return (
    <Container>
      <Col>
        {" "}
        <BreadCrupm page={Dahboard} />
      </Col>
      <Row>
        <Col className="text-center mt-5 mb-2">
         {/* {<Link to={'tickets'}> */}
         <LinkContainer to="../add-ticket">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Add new Ticket
          </Button>
          </LinkContainer>
          {/* </Link>} */}

        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 30</div>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col className="mt-2">
          <div>Recently Added Tickets:</div>
        </Col>
        <Col>
          <input />
        </Col>
      </Row>
      <hr />
      <Row>
        {/* Table components renders here */}
        {<TicketTable dummy={dummyTickets} />}
       
        {/* <AddTicket/> */}
      </Row>
    </Container>
  );
}

export default Dahboard;
