import React from "react";
// import MessageHistory from '../../Components/MessageHistory'
import { Row, Col, Button, Container } from "react-bootstrap";
import "./MessageHistory.style.css";

function MessageHistory({ message, sender }) {
  return (
    <>
      {message &&
        message.map((msg, i) => {
          return (
            <div>
              
                <div className="send font-weight-bold text-secondary">
                <div key={i} className="message-history">
                  <div className="sender">{msg.sender}</div>
                  <div className="message">{msg.message}</div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default MessageHistory;
