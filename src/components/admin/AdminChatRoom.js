import React, { Fragment, useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";

const AdminChatRoom = () => {
  const [toast1, setToast1] = useState(true);
  const close1 = () => setToast1(false);
  const [toast2, setToast2] = useState(true);
  const close2 = () => setToast2(false);

  return (
    <>
      <Toast show={toast1} onClose={close1} className="ms-4">
        <Toast.Header>
          <strong className="me-auto">Chat with Valteri Botas</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ height: "400px", overflowY: "scroll" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Fragment key={index}>
                <p className=" user-chat p-3 ms-4 me-2">
                  <b>User wrote:</b> Hey, do you have F1 game?
                </p>
                <p>
                  <b>Admin wrote:</b> Hello, yup, we have it.
                </p>
              </Fragment>
            ))}
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              style={{ backgroundColor: "rgb(96, 170, 240)", color: "black" }}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
      <Toast show={toast2} onClose={close2} className="ms-4">
        <Toast.Header>
          <strong className="me-auto">Chat with Max Verstapen</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ height: "400px", overflowY: "scroll" }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <Fragment key={index}>
                <p className=" user-chat p-3 ms-4 me-2">
                  <b>User wrote:</b> Hello, I have a question about my order.
                </p>
                <p>
                  <b>Admin wrote:</b> Hi there, what is your order number?
                </p>
              </Fragment>
            ))}
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              style={{ backgroundColor: "rgb(96, 170, 240)", color: "black" }}
              type="submit"
            >
              Send
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoom;
