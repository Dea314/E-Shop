import React from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../components/admin/AdminLinks";

const deleteHandler = () => {
  if (window.confirm("Are you sure?")) {
    alert("User deleted!");
  }
};

const AdminUsers = () => {
  return (
    <Container>
      <Row className="mt-5 ">
        <Col md={2}>
          <AdminLinks />
        </Col>
        <Col md={10}>
          <h1>User List</h1>
          <Table striped bordered hover responsive>
            <thead style={{ border: "1px lightgray" }}>
              <tr>
                <th>#</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Is Admin</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody style={{ border: "1px lightgray" }}>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (icon, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>

                    <td>Steve </td>
                    <td>Jobs</td>
                    <td>steve@example.com</td>
                    <td>
                      <i className={icon}></i>
                    </td>

                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={deleteHandler}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
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

export default AdminUsers;
