import { Routes, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import HomeComponent from "./HomeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import { useState } from "react";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [isLogin, setLogin] = useState(cookies.get("TOKEN")?true:false);
  console.log("isLogin="+isLogin);
  cookies.addChangeListener = (name, value) => {
	  console.log("Update Cookies...");
  }
  
  
  	
  const handleLogout = (e) => {
	  cookies.remove("TOKEN",{
		path: "/",
	  });
	 // redirect user to the auth page
	window.location.href = "/auth";
	
	setLogin(false);
  }
  
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>
          <section id="navigation">
            <a href="/">Home</a><br/>
            {isLogin ? "" : (<><a href="/account">Login/Register Component</a><br/></>)}
            <a href="/auth">Auth Component</a><br/>
			{!isLogin ? "" : (<><a href="#" onClick={(e)=>{handleLogout(e)}}>Logout</a><br/></>)}
			
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
		<Route exact path="/account" element={<Account loginStatus={isLogin}/>} />
		<Route exact path="/auth" element={<ProtectedRoutes><AuthComponent/></ProtectedRoutes>} />
      </Routes>
    </Container>
  );
}

export default App;