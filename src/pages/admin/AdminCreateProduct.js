import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  CloseButton,
  Table,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminCreateProduct = () => {
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
          <h1>Create product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required />
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control name="count" required type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" required type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>
                Category
                <CloseButton />(<small>remove selected </small>)
              </Form.Label>
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
            <Form.Group className="mb-3" controlId="formBasicNewCategory">
              <Form.Label>Create new category</Form.Label>
              <Form.Control type="text" name="newCategory" />
            </Form.Group>

            <Row md={6}>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttributes">
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
              After typing new attribute and value, you need to click on "Create
              new attribute" button to add it to the list.
            </Alert>

            <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
              <Form.Label>Images</Form.Label>
              <Form.Control required type="file" multiple />
            </Form.Group>
            <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateProduct;
