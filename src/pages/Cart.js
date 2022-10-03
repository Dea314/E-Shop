import React from "react";
import { Row, Col, Container, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <>
                <CartItem key={idx} />
              </>
            ))}
          </ListGroup>
          <Alert variant="info">Cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">300 €</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cart-details">
                <Button type="button">Proceed to checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
