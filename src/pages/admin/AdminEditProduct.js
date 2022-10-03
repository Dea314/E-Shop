import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Table,
  CloseButton,
  Alert,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const onHover = {
  cursor: "pointer",
  position: "absolute",
  left: "5px",
  top: "-10px",
  transform: "scale(2.5)",
  color: "red",
};

const AdminEditProduct = () => {
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
          <Link to="/admin/products" className="btn btn-secondary my-3">
            Go back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue="Canon"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.Control.Textarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
                defaultValue="Product description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control
                name="count"
                required
                type="number"
                defaultValue="2"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                required
                type="text"
                defaultValue="152 €"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                required
                aria-label="Default select example"
              >
                <option value="">Choose category</option>
                <option value="1">Books</option>
                <option value="2">Cameras</option>
                <option value="3">Ebooks</option>
                <option value="4">Electronics</option>
                <option value="5">Games</option>
                <option value="6">Toys</option>
              </Form.Select>
            </Form.Group>

            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name="attribute"
                    aria-label="Default select example"
                  >
                    <option>Choose attribute</option>
                    <option value="red">Color</option>
                    <option value="XL">Size</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAttributeValue"
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Select
                    name="attributeValue"
                    aria-label="Default select example"
                  >
                    <option>Choose value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Size</td>
                    <td>XL</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr> */}
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Create new attribute</Form.Label>
                  <Form.Control
                    type="text"
                    name="newAttributeValue"
                    placeholder="First choose or create category"
                    disabled={false}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicNewAttributeValue"
                >
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder="First choose or create category"
                    required
                    name="newAttributeValue"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Alert variant="primary">
              After typing attribute and value press enter on one of the inputs
            </Alert>

            <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/img/books.png" alt="book" fluid />
                  <i style={onHover} className="bi bi-x "></i>
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/img/toys.png" alt="toys" fluid />
                  <i style={onHover} className="bi bi-x "></i>
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/img/games.png" alt="games" fluid />
                  <i style={onHover} className="bi bi-x "></i>
                </Col>
              </Row>
              <Form.Control required type="file" multiple />
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProduct;
