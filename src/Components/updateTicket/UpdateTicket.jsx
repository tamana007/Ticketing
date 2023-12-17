import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function UpdateTicket() {
  const [reply,setReply]=useState([])

  const handleReply=(e)=>{
    const{name,value}=e.target;
    setReply(value)
    console.log('handleReply worked or nt',reply);
  }

  function handleSubmit(){
    console.log('replied');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="mb-3">Reply:</Form.Label>
        <div className="mb-2"><Form.Text>Please Write your Comment  here:</Form.Text></div>
        
        <Form.Control
        onChange={handleReply}
        value={reply}
        name="reply"
          type="text"
          placeholder="Employee Message"
          as="textarea"
          rows="5"
        ></Form.Control>
      </Form.Group>
      <div className=" mt-3 mb-3 text-right">
      <Button variant="info" type="submit" >Reply</Button>
      </div>
    </Form>
  );
}

export default UpdateTicket;
