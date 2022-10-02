import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForList = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}>
      <Row>
        <Col lg={7} className="m-auto">
          <Card.Img
            className="d-block mx-auto img-fluid "
            style={{ maxWidth: "500px", height: "auto", paddingLeft: ".5rem" }}
            variant="top"
            src={"/img/" + images[idx] + ".png"}
          />
        </Col>
        <Col lg={5}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              PRODUCT DESC Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} /> (3)
            </Card.Text>
            <Card.Text>
              <b style={{ paddingRight: ".7rem" }}>Price: 300 €</b>

              <LinkContainer to="/product-details">
                <Button variant="primary">Details</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForList;
