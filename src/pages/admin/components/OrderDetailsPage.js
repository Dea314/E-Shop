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
import CartItem from "../../../components/CartItem";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderDetailsPage = ({ getOrder, markAsDelivered }) => {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] = useState(
    "Mark as delivered"
  );
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setUserInfo(order.user);
        setPaymentMethod(order.paymentMethod);
        order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
        order.isDelivered
          ? setIsDelivered(order.deliveredAt)
          : setIsDelivered(false);
        setCartSubtotal(order.orderTotal.cartSubtotal);
        if (order.isDelivered) {
          setOrderButtonMessage("Order is delivered");
          setButtonDisabled(true);
        }
        setCartItems(order.cartItems);
      })
      .catch((er) => {
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        );
      });
  }, [id, isDelivered, getOrder]);

  return (
    <Container fluid>
      <Row className="mt-4 justify-content-md-center">
        <h1>Order details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h3>Shipping address</h3>
              <b>Name:</b> {userInfo.name}
              <br />
              <b>Address:</b> {userInfo.address} {userInfo.postalCode}{" "}
              {userInfo.city}
              {userInfo.country}
              <br />
              <b>Phone:</b> {userInfo.phoneNumber}
            </Col>
            <Col md={6}>
              <h3>Payment method</h3>
              <FormSelect value={paymentMethod} disabled={true}>
                <option>PayPal</option>
                <option>Visa</option>
                <option>MasterCard</option>
              </FormSelect>
            </Col>
            <Row className="mt-4">
              <Col>
                <Alert
                  className="mt-3"
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? (
                    <>Delivered at {isDelivered}</>
                  ) : (
                    <>Not delivered</>
                  )}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? <>Paid on {isPaid}</> : <>Not paid</>}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item price (after tax):{" "}
              <span className="fw-bold"> {cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold"> included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold"> included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total price: <span className="fw-bold"> {cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                size="lg"
                onClick={() =>
                  markAsDelivered(id)
                    .then((res) => {
                      if (res) {
                        setIsDelivered(true);
                      }
                    })
                    .catch((er) => {
                      console.log(
                        er.response.data.message
                          ? er.response.data.message
                          : er.response.data
                      );
                    })
                }
                disabled={buttonDisabled}
                variant="info"
                type="button"
              >
                {orderButtonMessage}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPage;
