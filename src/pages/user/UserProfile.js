import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const UserProfile = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=passwordConfirm]");
    if (password.value === confirm.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Passwords do not match");
    }
  };

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
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>User profile</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validateCustomer01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Jane Doe"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control disabled value="jane@example.com email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street address and number"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code and city"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Your Password"
                name="password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your password!
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password must be at least 6 characters long.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
              <Form.Label>Password confirm</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Passwords should match!
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="info" type="submit">
              Update
            </Button>
            <Alert show={true} variant="danger">
              User already exist!
            </Alert>
            <Alert show={true} variant="info">
              User updated!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
