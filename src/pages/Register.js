import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
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
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Your Email"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Your Password"
                name="password"
                minLength={6}
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
              />
              <Form.Control.Feedback type="invalid">
                Passwords should match!
              </Form.Control.Feedback>
            </Form.Group>
            <Row className="pb-2">
              <Col>
                Do you have an account? <Link to={"/login"}>Login</Link>
              </Col>
            </Row>

            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Submit
            </Button>
            <Alert show={true} variant="danger">
              User already exist!
            </Alert>
            <Alert show={true} variant="info">
              User succesfully created!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
