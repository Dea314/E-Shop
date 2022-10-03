import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FormSelect,
  ListGroup,
  Row,
} from "react-bootstrap";
import CartItem from "../../components/CartItem";

const AdminOrderDetails = () => {
  return (
    <Container fluid>
      <Row className="mt-4 justify-content-md-center">
        <h1>Order details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h3>Shipping address</h3>
              <b>Name:</b> Steve Jobs
              <br />
              <b>Address:</b> 1 Infinite Loop, Cupertino, CA 95014, USA
              <br />
              <b>Phone:</b> +1 408-996-1010
            </Col>
            <Col md={6}>
              <h3>Payment method</h3>
              <FormSelect disabled={false}>
                <option>PayPal</option>
                <option>Visa</option>
                <option>MasterCard</option>
              </FormSelect>
            </Col>
            <Row className="mt-4">
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 22.10.2022
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, index) => (
              <CartItem key={index} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item price (after tax): <span className="fw-bold"> 111 €</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold"> included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold"> included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold"> 321 €</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button size="lg" variant="info" type="button">
                Mark as delivered
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetails;
