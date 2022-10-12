import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCard = ({ category, index }) => {
  const images = [
    "/images/books.png",
    "/images/cams.png",
    "/images/electronix.png",
    "/images/ebooks.png",
    "/images/games.png",
    "/images/toys.png",
  ];
  return (
    <Card className="card">
      <Card.Img crossOrigin="anonymous" variant="top" src={images[index]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
