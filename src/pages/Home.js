import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import CategoryCard from "../components/CategoryCard";
import { Row, Container } from "react-bootstrap";

const Home = () => {
  const categories = [
    "Books",
    "Cameras ",
    "Electronics",
    "E-books",
    "Games",
    "Toys",
  ];

  return (
    <>
      <ProductCarousel />
      <Container>
        <Row xs={1} md={2} className="cards g-4 mt-5">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
