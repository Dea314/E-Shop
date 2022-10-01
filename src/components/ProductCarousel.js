import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarousel = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/img/carousel/1.jpg"
          alt="1 slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="car-1">
              Dive into the world of the bestseller books
            </h3>
          </LinkContainer>
          <p className="car-1">Fantasy or recipes, you can find in our store</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/img/carousel/2.jpg"
          alt="2 slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="car-2">Wake up the child in you and play 😊 </h3>
          </LinkContainer>
          <p className="car-21">
            PC games, Nintendo or Playstation? No problem, we have them all
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/img/carousel/3.jpg"
          alt="3 slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="car-3">For business and pleasure</h3>
          </LinkContainer>
          <p className="car-3">Electronic devices for every customer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/img/carousel/4.jpg"
          alt="4 slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="car-4">Take the whole library with you</h3>
          </LinkContainer>
          <p className="car-4">E-books, practical and eternal</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/img/carousel/5.jpg"
          alt="5 slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="car-5">Find something for the youngest</h3>
          </LinkContainer>
          <p className="car-5">The world of toys for every child</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
          src="/img/carousel/6.jpg"
          alt="6 slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="car-6">Record all wonderful moments</h3>
          </LinkContainer>
          <p className="car-6">Your memories for eternity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
