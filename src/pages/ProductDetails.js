import React from "react";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Form,
  Button,
  Alert,
  FormSelect,
} from "react-bootstrap";
import AddedToCartMsg from "../components/AddedToCartMsg";
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import { useEffect } from "react";

const ProductDetails = () => {
  let options = {
    // zoomWidth: 500,
    // fillContainer: true,
    // zoomPosition: "bottom",
    // width: 400,
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
    new ImageZoom(document.getElementById("fifth"), options);
    new ImageZoom(document.getElementById("sixt"), options);
  });
  return (
    <Container>
      <AddedToCartMsg />
      <Row className="mt-5">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image crossOrigin="anonymous" fluid src="/images/books.png" />
          </div>
          <br />
          <div id="second">
            <Image fluid src="/images/cams.png" />
          </div>
          <br />
          <div id="third">
            <Image fluid src="/images/ebooks.png" />
          </div>
          <br />
          <div id="fourth">
            <Image fluid src="/images/electronix.png" />
          </div>
          <br />
          <div id="fifth">
            <Image fluid src="/images/games.png" />
          </div>
          <br />
          <div id="sixt">
            <Image fluid src="/images/toys.png" />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h1>Product Name</h1>
                </ListGroupItem>

                <ListGroupItem>
                  <Rating readonly size={20} initialValue={5} />
                  (3)
                </ListGroupItem>
                <ListGroupItem>
                  <b>Price: </b>
                  <span className="fw-bold">300 €</span>
                </ListGroupItem>
                <ListGroupItem>
                  Porta ac consectetur ac, depabitur at eros. Cras justo odio,
                  dapibus ac facilisis in, Perfereon eget metus. Maecenas sed
                  diam eget risus varius
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroupItem>Status: in stock</ListGroupItem>
                <ListGroupItem>
                  {" "}
                  Price: {""}
                  <span className="fw-bold">300 €</span>
                </ListGroupItem>
                <ListGroupItem>
                  Quantity:
                  <Form.Select
                    className="mt-1"
                    size="lg"
                    aria-label="Default select example"
                  >
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                  </Form.Select>
                </ListGroupItem>
                <ListGroupItem>
                  <Button variant="danger">Add to cart</Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((item, index) => (
                  <ListGroup.Item key={index}>
                    Jane Doe <br />
                    <Rating readonly size={20} initialValue={4} />
                    <br />
                    20-09-2021 <br />
                    Porta ac consectetur ac Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, illo.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login to write review</Alert>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            ></Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <FormSelect aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (very goog)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </FormSelect>
            <Button className="mb-3 mt-3" variant="primary">
              {" "}
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
