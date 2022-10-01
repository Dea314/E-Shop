import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForList = () => {
  return (
    <Card style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}>
      <Row>
        <Col md={5}>
          <Card.Img variant="top" src="img/toys.png" />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>
              PRODUCT DESCRIPTION Some quick example text to build on the card
              title and make up the bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (3)
            </Card.Text>
            <Card.Text>
              <b>Price: 300 €</b>
            </Card.Text>
            <LinkContainer to="/product-details">
              <Button variant="primary">Product details</Button>
            </LinkContainer>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForList;
