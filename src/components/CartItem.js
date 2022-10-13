import React from "react";
import {
  Row,
  Col,
  ListGroup,
  FormSelect,
  Button,
  Image,
} from "react-bootstrap";

const CartItem = ({ item, orderCreated = false }) => {
  // item = {
  //   name: "Product name",
  //   image: { path: "/images/books-category.png" },
  //   price: 37,
  //   quantity: 8,
  //   count: 17,
  // };
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src={item.image.path} fluid />
          </Col>
          <Col md={2}>{item.name}</Col>

          <Col md={2}>
            <b> {item.price} €</b>
          </Col>
          <Col md={3}>
            <FormSelect
              onChange={() => {}}
              disabled={orderCreated}
              value={item.quantity}
            >
              {[...Array(item.count).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
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
