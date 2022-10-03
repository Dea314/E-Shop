import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserOrders = () => {
  return (
    <Row className="mt-5 justify-content-md-center">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
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
                  <td>
                    <Link to={`/user/order-details`}>Details</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrders;
