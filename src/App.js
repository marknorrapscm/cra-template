import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
	return (
		<Container className="app">
			<Row>
				<Col>
					<Alert variant="danger">Hello, world!</Alert>
					<Alert variant="warning">Hello, world!</Alert>
					<Alert variant="success">Hello, world!</Alert>
					<Alert variant="info">Hello, world!</Alert>
				</Col>
			</Row>

			<Row>
				<Col>
					<Button variant="success">Hello, world!</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
