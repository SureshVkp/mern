import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";



export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [register, setRegister] = useState("");
	
	const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:4000/register",
      data: {
        email,
        password,
      },
    };
	
	// make the API call
    axios(configuration)
    .then((result) => {
		if(result) setRegister(true);
	})
    .catch((error) => {
		if(error) setRegister(false);
	})
    
  }
  
    return (
	  <>
      <h2>Register</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>
      </Form>
		
        {register === "" ? "" : (register ? 
          <p className="text-success">You Are Register Successfully</p>
         : 
          <p className="text-danger">You Are Not Register</p>)
        }
	  
	  </>
    )
}