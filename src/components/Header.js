import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">THE BEST E-SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <InputGroup>
              <DropdownButton
                id="dropdown-basic-button"
                bg="link"
                variant="outline-dark"
                title="ALL"
              >
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Cameras</Dropdown.Item>
                <Dropdown.Item>E-Books</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Games</Dropdown.Item>
                <Dropdown.Item>Toys</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                className="find-place"
                type="text"
                placeholder="Find in the shop..."
              />
              <Button variant="info">
                <i className="bi bi-search" text="dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <NavDropdown title="Jo Doe" id="collasible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/orders"
                as={Link}
                to="/user/orders"
              >
                My Orders
              </NavDropdown.Item>

              <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge bg="info">2</Badge>
                <span className="ms-1">
                  <i className="bi bi-cart"></i>
                </span>
                <span className="ms-1"> Cart</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
