import React from "react";
import {
  Row,
  Col,
  ListGroup,
  FormSelect,
  Button,
  Image,
} from "react-bootstrap";

const CartItem = () => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src="/img/books.png" fluid />
          </Col>
          <Col md={2}>
            Fantasy books <br />
            Harry Potter
          </Col>
          <Col md={2}>
            <b> 37 €</b>
          </Col>
          <Col md={3}>
            <FormSelect>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </FormSelect>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
};

export default CartItem;
