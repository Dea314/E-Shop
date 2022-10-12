import React from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinks from "../../../components/admin/AdminLinks";
import { useState, useEffect } from "react";

const ProductsPage = ({ fetchProducts, deleteProduct }) => {
  const [products, setProducts] = useState([]);
  const [productDeleted, setProductDeleted] = useState(false);

  const deleteHandler = async (productId) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteProduct(productId);
      if (data.message === "Product removed") {
        setProductDeleted(!productDeleted);
      }
    }
  };

  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl)
      .then((res) => setProducts(res))
      .catch((er) =>
        console.log(
          "Error in fetching products in ProductsPage.js: " + er.message
        )
      );

    return () => abctrl.abort();
  }, [fetchProducts, productDeleted]);

  // useEffect(() => {
  //   const abctrl = new AbortController();
  //   fetchProducts(abctrl)
  //     .then((res) => setProducts(res))
  //     .catch((er) =>
  //       setProducts([
  //         {
  //           name: er.response.data.message
  //             ? er.response.data.message
  //             : er.response.data,
  //         },
  //       ])
  //     );
  //   return () => abctrl.abort();
  // }, [productDeleted]);

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
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <LinkContainer to={`/admin/edit-product/${item._id}`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button
                      className="btn-sm"
                      variant="danger"
                      onClick={() => deleteHandler(item._id)}
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

export default ProductsPage;
