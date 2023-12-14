import React from 'react'
import {Container,Button,Row,Col} from 'react-bootstrap'
import TicketTable from '../../Components/TicketTable/TicketTable'
import dummyTickets from '../../Assets/data/dummyTickets.json';

function Dahboard() {
  console.log(dummyTickets,'hi');
  // const result =JSON.parse(JSON.stringify(dummyTickets));
  // console.log(result,'result');

  return (
   <Container>
    <Row>
      <Col className='text-center mt-5 mb-2'>
      <Button variant='info' style={{fontSize:'2rem', padding:'10px 30px' }}>Add new Ticket</Button>
      </Col>
    </Row>
    <Row>
      <Col className='text-center mb-2'>
      <div>Total Tickets: 50</div>
      <div>Pending Tickets: 30</div>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col className='mt-2'>
      <div>Recently Added Tickets:</div>
      </Col>
      <Col>
      <input></input>
      </Col>
    </Row>
    <hr/>
    <Row>
      {/* Table components renders here */}
      <TicketTable dummyTickets={dummyTickets}/>
    </Row>
   </Container>
  )
}

export default Dahboard