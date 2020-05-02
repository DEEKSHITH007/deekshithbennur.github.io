import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function footer(){

	return (
		<footer className = "mt-5">
			<Container fluid={true}>
				<Row className="border-top justify-content-between p-2">
					<Col>
						Deekshith Bennur
					</Col>
					<Col clasName="ml-6 p-0 justify-content-end d-flex" nd="{3}">
						This site is developed by Deekshith Bennur
					</Col>

				</Row>
			</Container>
		</footer>

	);
}

export default footer;