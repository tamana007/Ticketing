import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

function TicketTable({ dummyTickets }) {
  // console.log('dumy',dummyTickets);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Subject</th>
          <th>AddedAt</th>
        
        </tr>
      </thead>
      <tbody>
        {dummyTickets.length ? dummyTickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <td>{ticket.subject}</td>
            <td>{ticket.status}</td>
            <td>{ticket.addedAt}</td>
          </tr>
        )):
        <tr>
          <td colSpan={4} className="text-center">No Ticket Exist</td>
        </tr>
        }
      </tbody>

     
    </Table>
  );
}

export default TicketTable;
