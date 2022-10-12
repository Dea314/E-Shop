import React from "react";
import { Form } from "react-bootstrap";

const AttributesFilter = () => {
  return (
    <>
      {[
        { color: ["red", "blue", "green"] },
        { size: ["XS", "S", "M", "L"] },
      ].map((item, index) => (
        <div key={index} className="mb-3">
          <Form.Label>
            <b>{Object.keys(item)}</b>
          </Form.Label>
          {item[Object.keys(item)].map((i, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              id="default-checkbox"
              label={i}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default AttributesFilter;
