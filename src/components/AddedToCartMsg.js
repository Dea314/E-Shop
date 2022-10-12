import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddedToCartMsg = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>The product is in your cart!</Alert.Heading>
      <p>
        <Button variant="outline-primary"> Go back </Button>{" "}
        <Link to="/cart">
          <Button variant="outline-success"> To cart </Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMsg;
