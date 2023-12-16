import React, { useEffect, useState } from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import BreadCrupm from '../../Components/BreadCrumb/BreadCrupm'
import SearchForm from '../../Components/SearchForm/SearchForm'
// import AddTicket from '../newTicket/AddTicket';
import dummyTickets from '../../Assets/data/dummyTickets.json';
import TicketTable from '../../Components/TicketTable/TicketTable'




function TicketListing() {
  const [dummy,stDummy]=useState(dummyTickets)
  const [str,setStr]=useState([]);
  // const[arrData,setArrData]=useState(dummyTickets)

 
  useEffect((
    
  )=>{},[str,dummy])
  
  function handleOnchange(e){
    const {name,value}=e.target;
    setStr(value);
    
  // const filterResult=dummy.map((ticket)=>{ticket.id});
  const s=dummy.filter((t)=>{
    return t.subject.includes(str)
    
  })
  // console.log('ali',s);
  stDummy(s);
    
    


  }
  return (
    <Container>
<Row>
  <Col>
  <BreadCrupm/>
  </Col>
</Row>
<Row>
  <Col>
  <Button variant='info' className='mt-4'>Add New Ticket</Button>
  </Col>
  <Col className='text-right'>  
    <SearchForm str={str}handleOnchange={handleOnchange}/>
    </Col>
</Row>
<Row>
        <Col>
        <TicketTable  dummyTickets={dummyTickets} dummy={dummy}></TicketTable>
        </Col>
      </Row>
    </Container>
  )
}

export default TicketListing