import { Container, Col, Row } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import "./App.css";

function Account(props) {
  return (
    <Container>
      <Row>
		<Col xs={12} sm={12} md={6} lg={6}>
			<Register />
		</Col>
		<Col xs={12} sm={12} md={6} lg={6}>
			<Login logStatus={props.loginStatus}/>
		</Col>	
			
      </Row>
    </Container>
  );
}

export default Account;