import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Cookies from "universal-cookie";

export default function Login(props) {
	const cookies = new Cookies();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState("");
	
	const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:4000/login",
      data: {
        email,
        password,
      },
    };
	
	// make the API call
    axios(configuration)
    .then((result) => {
		if(result){
			setLogin(true);
			// set the cookie
			cookies.set("TOKEN", result.data.token, {
			  path: "/",
			});
			
			 // redirect user to the auth page
			window.location.href = "/auth";


		}
			
		
	})
    .catch((error) => {setLogin(false);})
    
  }
  
    return (
	  <>
      <h2>Login</h2>
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
          Login
        </Button>
      </Form>
	   {/* display success message */}
        {login === "" ? "" : (login ? 
          <p className="text-success">You Are Logged in Successfully</p>
         : 
          <p className="text-danger">You Are Not Logged in</p>
        )}
	  </>
    )
}