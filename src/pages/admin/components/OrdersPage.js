import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinks from "../../../components/admin/AdminLinks";
import { useState, useEffect } from "react";

const OrdersPage = ({ getOrders }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch((er) =>
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, [getOrders]);

  return (
    <Container>
      <Row className="mt-5 ">
        <Col md={2}>
          <AdminLinks />
        </Col>
        <Col md={10}>
          <h1>Order List</h1>
          <Table striped bordered hover responsive>
            <thead style={{ border: "1px lightgray" }}>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Payment method</th>
                <th>Order details</th>
              </tr>
            </thead>
            <tbody style={{ border: "1px lightgray" }}>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>
                    {order.user !== null ? <> {order.user.name}</> : null}
                  </td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.orderTotal.cartSubtotal}</td>
                  <td>
                    {order.isDelivered ? (
                      <i className="bi bi-check-lg text-success"></i>
                    ) : (
                      <i className="bi bi-x-lg text-danger"></i>
                    )}
                  </td>
                  <td>{order.paymentMethod}</td>
                  <td>
                    <Link to={`/admin/order-details/${order._id}`}>
                      Go to order
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersPage;
