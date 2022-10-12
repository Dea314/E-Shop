import React, { useState } from "react";
import { Col, Container, Row, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminEditUser = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/users" className="btn btn-secondary my-3">
            Go back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit user</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue="Jane"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastnName"
                required
                type="text"
                defaultValue="Doe"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                defaultValue="jane@email.com"
              />
            </Form.Group>
            <FormGroup className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="isAdmin" type="checkbox" label="Is Admin" />
            </FormGroup>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUser;
