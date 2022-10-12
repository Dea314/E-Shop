import React from "react";
import { Form } from "react-bootstrap";

const CategoryFilter = () => {
  return (
    <>
      <span className="fw-bold">Category</span>
      <Form>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <Form.Check type="checkbox" id={`check-api2-${index}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                Category - {index}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilter;
