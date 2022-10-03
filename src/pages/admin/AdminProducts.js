import React from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../components/admin/AdminLinks";

const AdminProducts = () => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) alert("Product deleted!");
    // Delete products
  };
  return (
    <Container>
      <Row className="mt-5 ">
        <Col md={2}>
          <AdminLinks />
        </Col>
        <Col md={10}>
          <h1>
            Product List{" "}
            <LinkContainer to="/admin/create-new-product">
              <Button variant="outline-primary">Create new product</Button>
            </LinkContainer>
          </h1>
          <Table striped bordered hover responsive>
            <thead style={{ border: "1px lightgray" }}>
              <tr>
                <th>#</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody style={{ border: "1px lightgray" }}>
              {[
                {
                  name: "Harry Potter and the Goblet of Fire",
                  price: "36 €",
                  category: "Books",
                },
                {
                  name: "Mario Kart 8 Deluxe",
                  price: "67 €",
                  category: "Games",
                },
                { name: "Canon EOS", price: "184 €", category: "Cameras" },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>

                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <LinkContainer to={`/admin/edit-product/`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button
                      className="btn-sm"
                      variant="danger"
                      onClick={deleteHandler}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
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

export default AdminProducts;
