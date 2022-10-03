import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinks from "../../components/admin/AdminLinks";

const AdminOrders = () => {
  return (
    <Container>
      <Row className="mt-5 ">
        <Col md={2}>
          <AdminLinks />
        </Col>
        <Col md={10}>
          <h1>Order List</h1>
          <Table striped bordered hover responsive>
            <thead>
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
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (icon, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>Steve Jobs</td>
                    <td>22.10.2022</td>
                    <td>42 €</td>
                    <td>
                      <i className={icon}></i>
                    </td>
                    <td>PayPal</td>
                    <td>
                      <Link to={`/admin/order-details`}>Go to order</Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrders;
