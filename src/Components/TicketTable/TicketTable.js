import React, { useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
// import { Link } from "react-router-bootstrap";
import { Link } from 'react-router-dom'

function TicketTable({ dummyTickets ,dummy}) {
  // console.log('dumy',dummyTickets);
 
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>AddedAt</th>
        
        </tr>
      </thead>
      <tbody>
        {dummy.length ? dummy.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            {/* When I click In subject it navigates to to desied path  */}
            <td>
             <Link id={ticket.id} to={`/ticket/${ticket.id}`}>{ticket.subject}</Link>
              </td>
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
