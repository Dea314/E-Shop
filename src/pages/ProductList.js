import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import SortOptions from "../components/SortOptions";
import PriceFilter from "../components/filterQueryResultOptions/PriceFilter";
import RatingFilter from "../components/RatingFilter";
import CategoryFilter from "../components/filterQueryResultOptions/CategoryFilter";
import AttributesFilter from "../components/filterQueryResultOptions/AttributesFilter";
import ProductForList from "../components/ProductForList";
import Pagins from "../components/Pagins";

const ProductList = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptions />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilter />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>{" "}
              <Button variant="danger">Reset filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductForList
              key={index}
              images={[
                "books",
                "cams",
                "electronix",
                "ebooks",
                "games",
                "toys",
              ]}
              index={index}
            />
          ))}
          <Pagins />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
