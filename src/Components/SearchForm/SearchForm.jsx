import React from "react";
import { Row, Col, Form } from "react-bootstrap";
// import TicketTable from "../TicketTable/TicketTable";
// import dummyTickets from '../../Assets/data/dummyTickets.json';



function SearchForm({ handleOnchange, str }) {
  
  return (
    <Form>
      {/* <Row> */}
      {/* <Col> */}
      <Form.Group as={Row} >
        <Form.Label coloumn sm="4">
          Search : {}
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="search"
            placeholder="search here..."
            onChange={handleOnchange}
            value={str}
          ></Form.Control>
        </Col>
      </Form.Group>
      <hr></hr>
     
     
    </Form>
  );
}

export default SearchForm;
