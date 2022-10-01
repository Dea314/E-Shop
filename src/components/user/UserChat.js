import React from "react";
import chats from "../../chats.css";

const UserChat = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-quote comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Chat Online</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 15 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Hi there! This is a greeting message.
                </p>
                <p className="bg-msg p-3 ms-4 text-light rounded">
                  <b>Admin wrote:</b> Hi! How can I help you?
                </p>
              </div>
            ))}
          </div>
          <textarea
            className="form-control"
            id="clientChatMsg"
            placeholder="Your Message"
          ></textarea>
          <button className="send">Send</button>
        </div>
      </div>
    </>
  );
};

export default UserChat;
