import React from "react";
import { Form } from "react-bootstrap";

const PriceFilter = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 300 €
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  );
};

export default PriceFilter;
