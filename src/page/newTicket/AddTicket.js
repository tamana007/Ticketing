import React, { useEffect, useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import BreadCrupm from '../../Components/BreadCrumb/BreadCrupm'
import AddTicketForm from '../../Components/AddTicketForm'
import dummyTicket from '../../Assets/data/dummyTickets.json'
import { shortTex } from '../../utils/validation'

function AddTicket() {
 
  // const[subject,setSubject]=useState([]);
  // const [date,setDate]=useState([]);
  // const[create,setCreate]=useState([]);
  // const [obj,setObj]=useState([{Subject:'',date:'',Create:''}])
  const[data,setData]=useState([{subject:'',date:'',Create:''}]);
  const[error,setError]=useState([{subject:'false',date:'false',Create:'false'}])
  
  useEffect(()=>{
  //  handleOnchange()
  },[data])

  function handleOnchange(e){
    // console.log('hi');
    const {name,value}=e.target;
    setData((prev)=>({...prev,[name]:value}))
    console.log('data',data);
    

  
//:::::::::::::::::::::::::switch:::::::::::::::
  //   switch(name) {
  //     case "date":
  //       setDate(value)
  //       // code block
  //       break;
  //     case "subject":
  //       setSubject(value)
  //       // code block
  //       break;
  //       case "create":
  //         setCreate(value)
  //         // code block
  //         break;
  //     default:
  //       // code block
  //   } 
  //   // console.log('here it is data',data);


  }
  //::::::::::::::::::::::END switch:::::::::::::::::::
  

  const  handleOnsubmit=async(e)=>{
    e.preventDefault();
    const isValaid=await shortTex(data.subject);
    !isValaid && setError((err)=>({...err,subject:isValaid}))

    // console.log('isValaid from func',isValaid);
   
    // isValaid ? dummyTicket.push(data) &&
    // console.log('data pushed',dummyTicket):
    // setError((err)=>({...err,subject:isValaid})
    // console.log('recevied'):
    // console.log('worng');
    // console.log('clicked value',date);
    // setObj((prev)=>({...obj},{Subject:data,date:date,Create:create}})


  }
  return (
    <Container>
    <Row>
      {/* <BreadCrupm/> */}
    </Row>
    <Row>
      {/* form goes here */}
      <AddTicketForm 
      handleOnChange={handleOnchange}
      handleOnsubmit={handleOnsubmit}   data={data} error={error}/>
    </Row>
    </Container>
  )
}

export default AddTicket