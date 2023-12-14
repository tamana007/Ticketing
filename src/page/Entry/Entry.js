import React, { useState } from "react";
import "./entryPage.css";
// import {Jumbotron} from 'react-bootstrap'
// import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Login from "../../Components/Login/Login";
import ResetPassword from '../../Components/ResetPassword/ResetPassword'
// import {entryPage} from './'

function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [loadForm,setLoadForm]=useState(true)

  const handleOnchange=(e)=>{
    console.log('e',e);
const {name,value}=e.target;

switch (name) {
  case 'email':
    setEmail(value)
    
    break;
    
      case 'password':
        setPassword(value)
       
  default:
    break;
   
  


  }
  console.log(name,value);
}

 

  return (
    <div>
      <div className="entry-page bg-info">
        <Container
          fluid
          className=" text-light p-5"
          style={{
            maxWidth: "600px",
            border: "2px solid white",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          {loadForm? <Login handleOnchange={handleOnchange} email={email}  password={password} setLoadForm={setLoadForm} loadForm={loadForm}/>
          :
          <ResetPassword setLoadForm={setLoadForm} loadForm={loadForm} email={email}/>
        }
        
          
        </Container>
       
      </div>
    </div>
  );
}

export default Entry;
